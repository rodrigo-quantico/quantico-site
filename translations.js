// translations.js
const LANG_STORAGE_KEY = "quantico-lang";

const translations = {
  en: {
    // Header
    "header.lang.en": "EN",
    "header.lang.es": "ES",

    // Hero
    "hero.title": "Solutions through data",
    "hero.subtitle":
      "We transform complex data into clear, actionable insights that drive growth and innovation for your business.",
    "hero.ctaPrimary": "Get in touch",
    "hero.ctaSecondary": "View our work",

    // Portfolio
    "portfolio.title": "Our Portfolio",
    "portfolio.subtitle":
      "A glimpse into the innovative solutions we've delivered.",

    // Tech stack
    "tech.title": "Our Technology Stack",
    "tech.subtitle":
      "We leverage a modern, robust, and scalable technology stack to build high-performance applications that deliver tangible results.",

    "tech.cloud.title": "Cloud & DevOps",
    "tech.cloud.body":
      "Scalable infrastructure on AWS, Azure, and Google Cloud, with automated CI/CD pipelines for rapid and reliable deployments.",

    "tech.data.title": "Data & Analytics",
    "tech.data.body":
      "Harnessing the power of Python, R, and SQL with big data technologies like Spark and Hadoop for deep, actionable insights.",

    "tech.backend.title": "Backend Development",
    "tech.backend.body":
      "Building robust server-side applications with Node.js, Django, and Go, ensuring performance and security at scale.",

    "tech.frontend.title": "Frontend Frameworks",
    "tech.frontend.body":
      "Crafting intuitive and responsive user interfaces with modern frameworks like React, Vue.js, and Svelte.",

    "tech.mobile.title": "Mobile Development",
    "tech.mobile.body":
      "Developing cross-platform mobile experiences with React Native and Flutter for iOS and Android devices.",

    // Why Quantico
    "why.title": "Why Quantico?",
    "why.story1":
      "Pablo and Rodrigo met in 2012 working for a BPO in Guatemala City that provided external services for CitiBank U.S.A. Pablo was Rodrigo’s first boss. The work relationship grew into a great friendship, and that friendship evolved into a business partnership.",
    "why.story2":
      "We believe data is the best compass for an organization. We provide world-class solutions with state-of-the-art technology at a fair rate, using data as the main pillar of our decision-making.",

    "why.col1.title": "Built on trust",
    "why.col1.body":
      "Over a decade of working together means we bring shared context, trust, and a proven way of collaborating to every project.",

    "why.col2.title": "Data as compass",
    "why.col2.body":
      "We treat data as the core decision-making tool, combining analytics with thoughtful UX to guide products in the right direction.",

    "why.col3.title": "Fair partnership",
    "why.col3.body":
      "We aim for long-term partnerships, offering transparent collaboration, realistic timelines, and fair pricing for the value we create.",

    // Contact
    "contact.title": "Let's build something together",
    "contact.subtitle":
      "Have a project in mind? Fill out the form below and we'll get back to you.",
    "contact.fullNameLabel": "Full Name",
    "contact.emailLabel": "Email Address",
    "contact.messageLabel": "Message",
    "contact.submit": "Send Message",

    // Footer
    "footer.copyright": "© 2020 Quantico: Solutions through data",
    "footer.made": "Made in LATAM with ❤️",

    // Project page (generic UI)
    "project.backToPortfolio": "Back to portfolio",
    "project.overview.title": "Project Overview",
    "project.overview.subtitle":
      "A detailed look into the challenge, our solution, and the results.",
    "project.sidebar.type": "Type",
    "project.sidebar.year": "Year",
    "project.sidebar.category": "Category",
    "project.sidebar.services": "Services Provided",
    "project.sidebar.typeValue": "Data Platform",
    "project.sidebar.categoryValue": "Analytics & Automation",
    "project.sidebar.servicesValue": "Data Architecture, Backend, UI/UX",

    "project.challenge.title": "Challenge",
    "project.solution.title": "Solution",

    "project.stack.title": "Technology Stack",
    "project.stack.subtitle":
      "The tools and technologies that powered this solution.",

    "project.nav.prevPrefix": "Previous:",
    "project.nav.nextPrefix": "Next:",
    "project.nav.backToPortfolioCenter": "Back to portfolio",

    // Project hero CTA
    "project.hero.cta": "Start a similar project",

    // === Per-project copy (EN) ===

    // GFlow Loans
    "project.gflow-loans.title": "GFlow",
    "project.gflow-loans.subtitle": "Loan Management Software",
    "project.gflow-loans.description":
      "GFlow is a loan management platform designed to help financial institutions track loans, payments, and performance in a simple, modern interface.",
    "project.gflow-loans.challenge":
      "Fragmented loan data spread across spreadsheets and legacy tools.",
    "project.gflow-loans.solution":
      "We centralized loan information into a single platform with clear KPIs and workflows.",

    // Akisi Wallet
    "project.akisi-wallet.title": "Akisi",
    "project.akisi-wallet.subtitle": "Digital Wallet",
    "project.akisi-wallet.description":
      "Akisi is a digital wallet that lets users send, receive, and manage money securely from their mobile devices.",
    "project.akisi-wallet.challenge":
      "Give users a simple way to handle daily payments and transfers.",
    "project.akisi-wallet.solution":
      "We designed a clean experience focused on clarity, trust, and speed.",

    // YoTaxi SF
    "project.yotaxi-sf.title": "YoTaxi",
    "project.yotaxi-sf.subtitle": "Taxi App in San Francisco",
    "project.yotaxi-sf.description":
      "YoTaxi is a ride-hailing app connecting passengers with licensed taxis across San Francisco, with real-time tracking and streamlined bookings.",
    "project.yotaxi-sf.challenge":
      "Modernize the taxi experience while keeping regulations and operations in mind.",
    "project.yotaxi-sf.solution":
      "We built a rider-first experience with clear flows, tracking, and reliable dispatch.",

    // Adoptio
    "project.adoptio-app.title": "Adoptio",
    "project.adoptio-app.subtitle": "Pet Adopting App Concept",
    "project.adoptio-app.description":
      "Adoptio is a product concept that helps people discover pets ready for adoption, with guided flows and rich storytelling for each animal.",
    "project.adoptio-app.challenge":
      "Make the adoption journey feel simple, guided, and emotionally engaging.",
    "project.adoptio-app.solution":
      "We designed a mobile-first experience with clear filters, profiles, and onboarding.",

    // GFlow Origination
    "project.gflow-origination.title": "GFlow Origination",
    "project.gflow-origination.subtitle": "Loan Origination Software",
    "project.gflow-origination.description":
      "GFlow Origination streamlines the entire loan origination process, from application to approval, with configurable workflows.",
    "project.gflow-origination.challenge":
      "Reduce manual steps and errors across the origination pipeline.",
    "project.gflow-origination.solution":
      "We created configurable stages, automated checks, and clear dashboards."
  },

  es: {
    // Header
    "header.lang.en": "EN",
    "header.lang.es": "ES",

    // Hero
    "hero.title": "Soluciones a través de los datos",
    "hero.subtitle":
      "Transformamos datos complejos en ideas claras y accionables que impulsan el crecimiento y la innovación de tu negocio.",
    "hero.ctaPrimary": "Contáctanos",
    "hero.ctaSecondary": "Ver nuestro trabajo",

    // Portfolio
    "portfolio.title": "Nuestro portafolio",
    "portfolio.subtitle":
      "Una muestra de las soluciones innovadoras que hemos entregado.",

    // Tech stack
    "tech.title": "Nuestra pila tecnológica",
    "tech.subtitle":
      "Usamos una pila tecnológica moderna, robusta y escalable para construir aplicaciones de alto rendimiento que generan resultados tangibles.",

    "tech.cloud.title": "Cloud y DevOps",
    "tech.cloud.body":
      "Infraestructura escalable en AWS, Azure y Google Cloud, con pipelines de CI/CD automatizados para implementaciones rápidas y confiables.",

    "tech.data.title": "Datos y analítica",
    "tech.data.body":
      "Aprovechamos Python, R y SQL junto con tecnologías de big data como Spark y Hadoop para obtener insights profundos y accionables.",

    "tech.backend.title": "Desarrollo backend",
    "tech.backend.body":
      "Construimos aplicaciones robustas del lado del servidor con Node.js, Django y Go, garantizando rendimiento y seguridad a escala.",

    "tech.frontend.title": "Frameworks frontend",
    "tech.frontend.body":
      "Diseñamos interfaces intuitivas y responsivas con frameworks modernos como React, Vue.js y Svelte.",

    "tech.mobile.title": "Desarrollo móvil",
    "tech.mobile.body":
      "Creamos experiencias móviles multiplataforma con React Native y Flutter para dispositivos iOS y Android.",

    // Why Quantico
    "why.title": "¿Por qué Quantico?",
    "why.story1":
      "Pablo y Rodrigo se conocieron en 2012 trabajando en un BPO en la Ciudad de Guatemala que brindaba servicios externos para CitiBank U.S.A. Pablo fue el primer jefe de Rodrigo. La relación laboral se convirtió en una gran amistad, y esa amistad evolucionó en una sociedad de negocios.",
    "why.story2":
      "Creemos que los datos son la mejor brújula para una organización. Ofrecemos soluciones de clase mundial con tecnología de punta a una tarifa justa, usando los datos como pilar principal en nuestra toma de decisiones.",

    "why.col1.title": "Construido sobre confianza",
    "why.col1.body":
      "Más de una década trabajando juntos nos permite aportar contexto compartido, confianza y una forma probada de colaborar a cada proyecto.",

    "why.col2.title": "Datos como brújula",
    "why.col2.body":
      "Tratamos los datos como la herramienta central de decisión, combinando analítica con UX cuidadoso para guiar los productos en la dirección correcta.",

    "why.col3.title": "Alianza justa",
    "why.col3.body":
      "Buscamos relaciones de largo plazo, ofreciendo colaboración transparente, tiempos realistas y precios justos por el valor que creamos.",

    // Contact
    "contact.title": "Construyamos algo juntos",
    "contact.subtitle":
      "¿Tienes un proyecto en mente? Completa el formulario y nos pondremos en contacto contigo.",
    "contact.fullNameLabel": "Nombre completo",
    "contact.emailLabel": "Correo electrónico",
    "contact.messageLabel": "Mensaje",
    "contact.submit": "Enviar mensaje",

    // Footer
    "footer.copyright": "© 2020 Quantico: Soluciones a través de los datos",
    "footer.made": "Hecho en LATAM con ❤️",

    // Project page (generic UI)
    "project.backToPortfolio": "Volver al portafolio",
    "project.overview.title": "Resumen del proyecto",
    "project.overview.subtitle":
      "Una mirada detallada al reto, nuestra solución y los resultados.",
    "project.sidebar.type": "Tipo",
    "project.sidebar.year": "Año",
    "project.sidebar.category": "Categoría",
    "project.sidebar.services": "Servicios brindados",
    "project.sidebar.typeValue": "Plataforma de datos",
    "project.sidebar.categoryValue": "Analítica y automatización",
    "project.sidebar.servicesValue": "Arquitectura de datos, Backend, UI/UX",

    "project.challenge.title": "Reto",
    "project.solution.title": "Solución",

    "project.stack.title": "Pila tecnológica",
    "project.stack.subtitle":
      "Las herramientas y tecnologías que hicieron posible esta solución.",

    "project.nav.prevPrefix": "Anterior:",
    "project.nav.nextPrefix": "Siguiente:",
    "project.nav.backToPortfolioCenter": "Volver al portafolio",

    // Project hero CTA
    "project.hero.cta": "Iniciar un proyecto similar",

    // === Per-project copy (ES) ===

    // GFlow Loans
    "project.gflow-loans.title": "GFlow",
    "project.gflow-loans.subtitle": "Software de gestión de créditos",
    "project.gflow-loans.description":
      "GFlow es una plataforma de gestión de créditos que ayuda a las instituciones financieras a dar seguimiento a préstamos, pagos y desempeño en una interfaz moderna y sencilla.",
    "project.gflow-loans.challenge":
      "La información de los créditos estaba fragmentada en hojas de cálculo y sistemas heredados.",
    "project.gflow-loans.solution":
      "Centralizamos la información de los créditos en una sola plataforma con KPIs y flujos claros.",

    // Akisi Wallet
    "project.akisi-wallet.title": "Akisi",
    "project.akisi-wallet.subtitle": "Billetera digital",
    "project.akisi-wallet.description":
      "Akisi es una billetera digital que permite enviar, recibir y administrar dinero de forma segura desde el celular.",
    "project.akisi-wallet.challenge":
      "Dar a las personas una forma sencilla de manejar pagos y transferencias del día a día.",
    "project.akisi-wallet.solution":
      "Diseñamos una experiencia limpia enfocada en claridad, confianza y velocidad.",

    // YoTaxi SF
    "project.yotaxi-sf.title": "YoTaxi",
    "project.yotaxi-sf.subtitle": "App de taxis en San Francisco",
    "project.yotaxi-sf.description":
      "YoTaxi es una app de transporte que conecta a pasajeros con taxis autorizados en San Francisco, con seguimiento en tiempo real y reservas simples.",
    "project.yotaxi-sf.challenge":
      "Modernizar la experiencia del taxi respetando la regulación y la operación existente.",
    "project.yotaxi-sf.solution":
      "Creamos una experiencia centrada en el pasajero con flujos claros, tracking y despacho confiable.",

    // Adoptio
    "project.adoptio-app.title": "Adoptio",
    "project.adoptio-app.subtitle":
      "Concepto de app para adopción de mascotas",
    "project.adoptio-app.description":
      "Adoptio es un concepto de producto que ayuda a las personas a descubrir mascotas listas para adopción, con flujos guiados y storytelling para cada animal.",
    "project.adoptio-app.challenge":
      "Hacer que el camino hacia la adopción se sienta simple, guiado y emocionalmente cercano.",
    "project.adoptio-app.solution":
      "Diseñamos una experiencia mobile-first con filtros claros, perfiles completos y un onboarding amigable.",

    // GFlow Origination
    "project.gflow-origination.title": "GFlow Originación",
    "project.gflow-origination.subtitle":
      "Software de originación de créditos",
    "project.gflow-origination.description":
      "GFlow Originación agiliza todo el proceso de originación de un crédito, desde la solicitud hasta la aprobación, con flujos configurables.",
    "project.gflow-origination.challenge":
      "Reducir pasos manuales y errores a lo largo del pipeline de originación.",
    "project.gflow-origination.solution":
      "Creamos etapas configurables, validaciones automáticas y tableros claros para el equipo."
  }
};

function detectInitialLanguage() {
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored === "en" || stored === "es") return stored;

  const navLang = navigator.language || navigator.userLanguage || "en";
  if (navLang.toLowerCase().startsWith("es")) return "es";
  return "en";
}

function t(key, langOverride) {
  const lang = langOverride || window.currentLanguage || detectInitialLanguage();
  const dict = translations[lang] || translations.en;
  return dict[key] || translations.en[key] || "";
}

function applyLanguage(lang) {
  window.currentLanguage = lang;
  const dict = translations[lang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const text = dict[key] || translations.en[key];
    if (!text) return;

    const target = el.getAttribute("data-i18n-target");

    if (
      target === "placeholder" &&
      (el.tagName === "INPUT" || el.tagName === "TEXTAREA")
    ) {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });

  // Update header current language label
  const currentLangSpan = document.getElementById("current-lang");
  if (currentLangSpan) {
    currentLangSpan.textContent = lang.toUpperCase();
  }

  localStorage.setItem(LANG_STORAGE_KEY, lang);
}

function setupLanguageDropdown() {
  const langToggle = document.getElementById("lang-toggle");
  const langMenu = document.getElementById("lang-menu");
  if (!langToggle || !langMenu) return;

  langToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", () => {
    langMenu.classList.add("hidden");
  });

  const options = langMenu.querySelectorAll("[data-lang]");
  options.forEach((opt) => {
    opt.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const lang = opt.getAttribute("data-lang") === "es" ? "es" : "en";
      applyLanguage(lang);
      langMenu.classList.add("hidden");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const initial = detectInitialLanguage();
  applyLanguage(initial);
  setupLanguageDropdown();
});
