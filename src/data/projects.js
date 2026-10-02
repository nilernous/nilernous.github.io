export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "event_and_media", label: "Event & Media" },
  { id: "ecommerce", label: "E-Commerce" },
];

// `demo: null` hides the Demo button.
export const PROJECTS = [
  {
    id: 1,
    title: "OmniCommerce",
    category: "ecommerce",
    description: "An e-commerce platform where several client apps, including a web storefront and a Flutter mobile app, share one backend.",
    tags: ["ReactJS", "NestJS", "Next.js", "TypeScript", "Microfrontend", "Microservice", "Flutter"],
    featured: true,
    github: "https://github.com/nilernous/omni-ecommerce-platform",
    demo: null,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    highlights: [
      "Product search and filters with debounced input, so typing stays smooth",
      "Online payment and order management",
      "A simple storefront that keeps checkout short",
    ],
  },
  {
    id: 2,
    title: "Event Management System",
    category: "event_and_media",
    description: "A system for running events, with a live dashboard to follow what is happening.",
    tags: ["ReactJS", "NestJS", "TypeScript", "Recharts"],
    featured: false,
    github: "https://github.com/nilernous",
    demo: "https://framesx.id.vn",
    gradient: "from-cyan-500 via-blue-600 to-indigo-600",
    highlights: [
      "Real-time charts on the dashboard",
      "Role-based permissions and event tracking",
      "Switch between Vietnamese and English (i18n)",
    ],
  },
];
