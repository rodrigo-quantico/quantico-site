// Quantico booking calendar — Cloudflare Worker
//
// Routes:
//   GET  /availability?start=YYYY-MM-DD&end=YYYY-MM-DD
//   POST /book   { date, time, name, email, notes, turnstileToken, honey }
//
// Auth to Google Calendar is via a plain OAuth refresh token issued to
// rodrigo@quantico.gt (an "Internal" Workspace OAuth client, so the token
// never expires from Google's testing-mode 7-day limit). See README.md for
// the one-time setup via Google Cloud Console + OAuth Playground.

const WORK_START_MIN = 9 * 60; // 9:00am
const WORK_END_MIN = 17 * 60; // 5:00pm
const SLOT_MIN = 30;
const TIMEZONE = "America/Guatemala";
const UTC_OFFSET = "-06:00"; // Guatemala does not observe DST

let cachedToken = null;
let cachedTokenExpiry = 0;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors });
    }

    try {
      if (url.pathname === "/availability" && request.method === "GET") {
        return await handleAvailability(url, env, cors);
      }
      if (url.pathname === "/book" && request.method === "POST") {
        return await handleBook(request, env, cors);
      }
      return json({ ok: false, error: "not_found" }, 404, cors);
    } catch (err) {
      return json({ ok: false, error: "server_error", detail: String(err) }, 500, cors);
    }
  },
};

// ---- Routes ----

async function handleAvailability(url, env, cors) {
  const start = url.searchParams.get("start");
  const end = url.searchParams.get("end");

  if (!isValidDate(start) || !isValidDate(end) || end < start) {
    return json({ ok: false, error: "invalid_range" }, 400, cors);
  }
  if (daysBetween(start, end) > 62) {
    return json({ ok: false, error: "range_too_large" }, 400, cors);
  }

  const accessToken = await getAccessToken(env);
  const busy = await fetchBusyIntervals(accessToken, env.CALENDAR_ID || "primary", start, end);

  const availability = {};
  for (const dateStr of dateRange(start, end)) {
    availability[dateStr] = computeSlots(dateStr, busy);
  }

  return json({ ok: true, availability }, 200, cors);
}

async function handleBook(request, env, cors) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return json({ ok: false, error: "invalid_body" }, 400, cors);
  }

  // Honeypot: bots fill hidden fields. Report fake success so bots move on.
  if (body.honey) {
    return json({ ok: true, meetLink: null, eventId: null }, 200, cors);
  }

  const date = body.date;
  const time = body.time;
  const name = (body.name || "").trim().slice(0, 200);
  const email = (body.email || "").trim().slice(0, 200);
  const notes = (body.notes || "").trim().slice(0, 2000);

  if (!isValidDate(date) || !/^\d{2}:\d{2}$/.test(time || "") || !name || !isValidEmail(email)) {
    return json({ ok: false, error: "invalid_input" }, 400, cors);
  }

  const captchaOk = await verifyTurnstile(body.turnstileToken, env.TURNSTILE_SECRET_KEY, request);
  if (!captchaOk) {
    return json({ ok: false, error: "captcha_failed" }, 400, cors);
  }

  const accessToken = await getAccessToken(env);
  const calendarId = env.CALENDAR_ID || "primary";

  // Re-check the slot is still free right before booking (race-condition guard).
  const busy = await fetchBusyIntervals(accessToken, calendarId, date, date);
  const freeSlots = computeSlots(date, busy);
  if (!freeSlots.includes(time)) {
    return json({ ok: false, error: "slot_taken" }, 409, cors);
  }

  const startIso = toISO(date, time);
  const endIso = new Date(new Date(startIso).getTime() + SLOT_MIN * 60000).toISOString();

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?conferenceDataVersion=1&sendUpdates=all`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        summary: `Quantico intro call — ${name}`,
        description: notes || undefined,
        start: { dateTime: startIso, timeZone: TIMEZONE },
        end: { dateTime: endIso, timeZone: TIMEZONE },
        attendees: [{ email }],
        conferenceData: {
          createRequest: {
            requestId: crypto.randomUUID(),
            conferenceSolutionKey: { type: "hangoutsMeet" },
          },
        },
      }),
    }
  );

  const event = await res.json();
  if (!res.ok) {
    return json({ ok: false, error: "calendar_error", detail: event }, 502, cors);
  }

  const meetEntry = (event.conferenceData?.entryPoints || []).find(
    (ep) => ep.entryPointType === "video"
  );

  return json({ ok: true, meetLink: meetEntry ? meetEntry.uri : null, eventId: event.id }, 200, cors);
}

// ---- Google Calendar helpers ----

async function fetchBusyIntervals(accessToken, calendarId, start, end) {
  const timeMin = toISO(start, "00:00");
  const timeMax = toISO(end, "23:59");

  const res = await fetch("https://www.googleapis.com/calendar/v3/freeBusy", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ timeMin, timeMax, items: [{ id: calendarId }] }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error("freebusy failed: " + JSON.stringify(data));
  }

  const busy = (data.calendars && data.calendars[calendarId] && data.calendars[calendarId].busy) || [];
  return busy.map((b) => [new Date(b.start), new Date(b.end)]);
}

function computeSlots(dateStr, busy) {
  const weekday = new Date(`${dateStr}T12:00:00${UTC_OFFSET}`).getUTCDay(); // 0=Sun..6=Sat
  if (weekday === 0 || weekday === 6) return [];

  const now = new Date();
  const slots = [];

  for (let m = WORK_START_MIN; m + SLOT_MIN <= WORK_END_MIN; m += SLOT_MIN) {
    const timeStr = minutesToTimeStr(m);
    const slotStart = new Date(toISO(dateStr, timeStr));
    const slotEnd = new Date(slotStart.getTime() + SLOT_MIN * 60000);

    if (slotStart < now) continue;

    const overlaps = busy.some(([busyStart, busyEnd]) => slotStart < busyEnd && slotEnd > busyStart);
    if (!overlaps) slots.push(timeStr);
  }

  return slots;
}

// ---- OAuth refresh-token auth ----

async function getAccessToken(env) {
  const now = Math.floor(Date.now() / 1000);
  if (cachedToken && cachedTokenExpiry - 60 > now) {
    return cachedToken;
  }

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: env.GOOGLE_OAUTH_CLIENT_ID,
      client_secret: env.GOOGLE_OAUTH_CLIENT_SECRET,
      refresh_token: env.GOOGLE_OAUTH_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error("token refresh failed: " + JSON.stringify(data));
  }

  cachedToken = data.access_token;
  cachedTokenExpiry = now + (data.expires_in || 3600);
  return cachedToken;
}

// ---- Turnstile ----

async function verifyTurnstile(token, secret, request) {
  if (!token || !secret) return false;
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret,
      response: token,
      remoteip: request.headers.get("CF-Connecting-IP") || "",
    }),
  });
  const data = await res.json().catch(() => ({ success: false }));
  return !!data.success;
}

// ---- Small utilities ----

function corsHeaders(origin, env) {
  const allowed = (env.ALLOWED_ORIGIN || "").split(",").map((o) => o.trim());
  const matched = allowed.includes(origin) ? origin : allowed[0] || "";
  return {
    "Access-Control-Allow-Origin": matched,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...cors },
  });
}

function toISO(dateStr, timeStr) {
  return `${dateStr}T${timeStr}:00${UTC_OFFSET}`;
}

function minutesToTimeStr(totalMinutes) {
  const hh = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
  const mm = String(totalMinutes % 60).padStart(2, "0");
  return `${hh}:${mm}`;
}

function isValidDate(str) {
  return typeof str === "string" && /^\d{4}-\d{2}-\d{2}$/.test(str) && !Number.isNaN(new Date(str).getTime());
}

function isValidEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

function daysBetween(start, end) {
  return Math.round((new Date(end) - new Date(start)) / 86400000);
}

function dateRange(start, end) {
  const dates = [];
  let cur = new Date(`${start}T00:00:00${UTC_OFFSET}`);
  const last = new Date(`${end}T00:00:00${UTC_OFFSET}`);
  while (cur <= last) {
    dates.push(cur.toISOString().slice(0, 10));
    cur = new Date(cur.getTime() + 86400000);
  }
  return dates;
}
