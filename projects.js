// projects.js
const projects = [
  {
    id: "gflow-loans",
    title: "GFlow",
    subtitle: "Loan Management Software",
    image: "src/assets/project-cover-gflow.png",
    video: "src/assets/video-glflow-lms.mp4",
    description: `
      GFlow is a loan management platform designed to help financial institutions
      track loans, payments, and performance in a simple, modern interface.
    `,
    details: {
      challenge: "Fragmented loan data spread across spreadsheets and legacy tools.",
      solution: "We centralized loan information into a single platform with clear KPIs and workflows.",
      stack: ["React", "Node.js", "PostgreSQL", "AWS"]
    }
  },
  {
    id: "akisi-wallet",
    title: "Akisi",
    subtitle: "Digital Wallet",
    image: "src/assets/project-cover-akisi.png",
    description: `
      Akisi is a digital wallet that lets users send, receive, and manage money
      securely from their mobile devices.
    `,
    details: {
      challenge: "Give users a simple way to handle daily payments and transfers.",
      solution: "We designed a clean experience focused on clarity, trust, and speed.",
      stack: ["React Native", "Express.js", "MongoDB"]
    }
  },
  {
    id: "yotaxi-sf",
    title: "YoTaxi",
    subtitle: "Taxi App in San Francisco",
    image: "src/assets/project-cover-yotaxi.png",
    description: `
      YoTaxi is a ride-hailing app connecting passengers with licensed taxis
      across San Francisco, with real-time tracking and streamlined bookings.
    `,
    details: {
      challenge: "Modernize the taxi experience while keeping regulations and operations in mind.",
      solution: "We built a rider-first experience with clear flows, tracking, and reliable dispatch.",
      stack: ["React Native", "Node.js", "PostgreSQL", "Maps APIs"]
    }
  },
  {
    id: "adoptio-app",
    title: "Adoptio",
    subtitle: "Pet Adopting App Concept",
    image: "src/assets/project-cover-adoptio.png",
    description: `
      Adoptio is a product concept that helps people discover pets ready for adoption,
      with guided flows and rich storytelling for each animal.
    `,
    details: {
      challenge: "Make the adoption journey feel simple, guided, and emotionally engaging.",
      solution: "We designed a mobile-first experience with clear filters, profiles, and onboarding.",
      stack: ["Figma", "Design System", "Prototype"]
    }
  },
  {
    id: "gflow-origination",
    title: "GFlow Origination",
    subtitle: "Loan Origination Software",
    image: "src/assets/project-cover-gflow-prom.png",
    description: `
      GFlow Origination streamlines the entire loan origination process,
      from application to approval, with configurable workflows.
    `,
    details: {
      challenge: "Reduce manual steps and errors across the origination pipeline.",
      solution: "We created configurable stages, automated checks, and clear dashboards.",
      stack: ["React", "Node.js", "Workflow Engine", "REST APIs"]
    }
  }
];
