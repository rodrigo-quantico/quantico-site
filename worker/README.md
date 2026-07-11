# Booking calendar worker — deploy guide

This Cloudflare Worker powers the custom booking calendar on `scheduling.html`.
It reads real availability from your Google Calendar and creates events with
a Google Meet link when someone books. It authenticates as `rodrigo@quantico.gt`
directly via a standard OAuth refresh token — no service account, no key
file, nothing blocked by an `iam.disableServiceAccountKeyCreation` org policy.

Because the OAuth consent screen is set to **Internal** (available since this
is a Google Workspace org), the refresh token isn't subject to Google's
7-day "unverified app in testing" expiry — it stays valid indefinitely as
long as it's used regularly, which this worker does on every request.

## 1. Google Cloud: OAuth consent screen + client

1. Go to [console.cloud.google.com](https://console.cloud.google.com), pick
   or create a project.
2. **APIs & Services → Library** → enable **Google Calendar API**.
3. **APIs & Services → OAuth consent screen**:
   - User type: **Internal**.
   - App name: anything, e.g. "Quantico Booking".
   - Scopes: add
     `https://www.googleapis.com/auth/calendar.events` and
     `https://www.googleapis.com/auth/calendar.freebusy`.
   - Save. Internal apps need no publishing/verification step.
4. **APIs & Services → Credentials → Create Credentials → OAuth client ID**:
   - Application type: **Web application**.
   - Name: anything.
   - Authorized redirect URIs: add
     `https://developers.google.com/oauthplayground`
   - Create. Copy the **Client ID** and **Client secret** shown — you'll need
     both next.

## 2. Get a refresh token (one-time, via OAuth Playground)

1. Go to [OAuth 2.0 Playground](https://developers.google.com/oauthplayground).
2. Click the gear icon (top right) → check **"Use your own OAuth credentials"**
   → paste the Client ID and Client secret from step 1.4.
3. In the left panel, under "Input your own scopes", paste:
   ```
   https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.freebusy
   ```
   → **Authorize APIs**.
4. Log in as **rodrigo@quantico.gt** and accept the consent screen.
5. Back in the Playground, click **"Exchange authorization code for tokens"**.
6. Copy the **refresh_token** value (starts with `1//`). This is the
   long-lived credential the worker will use.

## 3. Cloudflare: deploy the worker

From this `worker/` directory:

```bash
npm install -g wrangler   # if not already installed
wrangler login
wrangler deploy
```

Then set the secrets (you'll be prompted to paste each value — do this in
your own terminal, not somewhere the values could be logged):

```bash
wrangler secret put GOOGLE_OAUTH_CLIENT_SECRET   # from step 1.4
wrangler secret put GOOGLE_OAUTH_REFRESH_TOKEN   # from step 2.6
wrangler secret put TURNSTILE_SECRET_KEY         # your Cloudflare Turnstile secret key
```

Edit `wrangler.toml` and fill in:
- `GOOGLE_OAUTH_CLIENT_ID` — the Client ID from step 1.4 (not sensitive, fine
  as a plain var).
- `CALENDAR_ID` — defaults to `"primary"`, i.e. rodrigo@quantico.gt's main
  calendar. Change it if you want a dedicated calendar instead.
- `ALLOWED_ORIGIN` — the site origin(s) allowed to call this worker.

Redeploy after editing (`wrangler deploy`) so the vars take effect.

## 4. Point the site at the deployed worker

After deploying, `wrangler deploy` prints a URL like
`https://quantico-booking-worker.<your-subdomain>.workers.dev`. Paste it into
the `BOOKING_WORKER_URL` constant near the bottom of `scheduling.html`.

## 5. Test

```bash
curl "https://quantico-booking-worker.<subdomain>.workers.dev/availability?start=2026-07-13&end=2026-07-17"
```

Should return `{"ok":true,"availability":{"2026-07-13":[],"2026-07-14":["09:00","09:30",...],...}}`
(weekends empty, weekdays showing 30-minute slots). Create a test event on
the real calendar during one of those slots and confirm it disappears from
the response.

Booking (`POST /book`) requires a valid Turnstile token, so it's easiest to
test end-to-end from `scheduling.html` itself rather than via curl.
