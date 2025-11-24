// projects.js
const projects = [
  {
    id: "insight-dashboard",
    title: "Insight Dashboard",
    subtitle: "Business Analytics Platform",
    image: "https://picsum.photos/600/900?random=1",
    description: `
      Insight Dashboard is a modern analytics platform providing
      real-time KPI tracking and intuitive data visualization tools.
    `,
    details: {
      challenge: "Collect and unify metrics from multiple data silos.",
      solution: "Built a scalable pipeline and interactive dashboard suite.",
      stack: ["Python", "BigQuery", "Tableau", "dbt"]
    }
  },
  {
    id: "dataflow-engine",
    title: "DataFlow Engine",
    subtitle: "High-Throughput Stream Processor",
    image: "https://picsum.photos/600/900?random=2",
    description: `
      A distributed system capable of handling millions of events 
      per minute with automatic scaling.
    `,
    details: {
      challenge: "Massive event ingestion with latency < 200ms.",
      solution: "Implementing a multi-node streaming pipeline.",
      stack: ["Go", "Kafka", "Redis", "Docker"]
    }
  },
  {
    id: "neurovision-ai",
    title: "NeuroVision AI",
    subtitle: "Computer Vision Recognition Tool",
    image: "https://picsum.photos/600/900?random=3",
    description: `
      A deep-learning computer vision application trained to detect
      objects in dense and cluttered environments.
    `,
    details: {
      challenge: "High accuracy required with limited training images.",
      solution: "Used transfer learning + synthetic data augmentation.",
      stack: ["Python", "PyTorch", "OpenCV"]
    }
  },
  {
    id: "atlas-maps",
    title: "Atlas Maps",
    subtitle: "Interactive Geospatial Platform",
    image: "https://picsum.photos/600/900?random=4",
    description: `
      A web-based geospatial tool offering real-time map analysis
      and smooth rendering of massive datasets.
    `,
    details: {
      challenge: "Rendering millions of points on web maps.",
      solution: "WebGL acceleration with spatial indexing.",
      stack: ["Mapbox", "WebGL", "JavaScript"]
    }
  },
  {
    id: "omni-commerce",
    title: "OmniCommerce",
    subtitle: "Unified Commerce Integration",
    image: "https://picsum.photos/600/900?random=5",
    description: `
      Sync listings, inventory, and orders across e-commerce marketplaces.
    `,
    details: {
      challenge: "Different syncing rules across platforms.",
      solution: "Unified middleware layer with conflict resolution.",
      stack: ["Node.js", "PostgreSQL", "Shopify API"]
    }
  }
];
