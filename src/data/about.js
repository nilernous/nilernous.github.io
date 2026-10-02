import { Award, Briefcase, Calendar, MapPin } from "lucide-react";

export const ABOUT_HIGHLIGHTS = [
  { icon: Briefcase, iconClass: "text-sky-500", title: "Role", value: "Fullstack Developer" },
  { icon: Calendar, iconClass: "text-indigo-500", title: "Coding since", value: "2022" },
  { icon: MapPin, iconClass: "text-purple-500", title: "Based in", value: "Vietnam" },
  { icon: Award, iconClass: "text-emerald-500", title: "Aiming for", value: "Tech Lead" },
];

export const ABOUT_TABS = [
  { id: "overview", label: "Overview" },
  { id: "philosophy", label: "How I work" },
  { id: "journey", label: "Developer Journey" },
];

export const ABOUT_OVERVIEW = {
  title: "Hi, I'm a fullstack developer from Vietnam",
  paragraphs: [
    "I started coding in 2022 and have been building web apps ever since. Most of my time goes into React on the frontend and Node.js on the backend, and I like being able to work on both sides of a project.",
    "Along the way I've picked up Next.js, NestJS, TypeScript, SQL databases, and a bit of ASP.NET and Python. There's still a lot I don't know, and honestly that's the part I enjoy most.",
  ],
  strengths: [
    "Responsive, easy-to-use UI",
    "Code that's easy to read and change",
    "Learning something new every week",
  ],
};

export const ABOUT_PILLARS = [
  {
    title: "01. User experience",
    titleClass: "text-sky-600",
    desc: "If something is confusing or feels slow, it isn't finished yet. I check every screen on a phone as well as on desktop.",
  },
  {
    title: "02. Performance",
    titleClass: "text-blue-500",
    desc: "Fast pages matter. I keep an eye on bundle size, load time and how quickly the API responds.",
  },
  {
    title: "03. Maintainable code",
    titleClass: "text-indigo-500",
    desc: "I try to write code that my teammates (and future me) can read and change without being scared of it.",
  },
];

// Rendered by components/ui/Timeline: `dotClass` fills the marker, `markerClass` colors its border.
export const ABOUT_MILESTONES = [
  {
    period: "2024 - Present",
    dotClass: "bg-sky-500",
    markerClass: "border-sky-200",
    desc: "Building fullstack web apps with Next.js, NestJS, ExpressJS and TypeScript, and playing around with 3D on the web.",
  },
  {
    period: "2022 - 2023",
    dotClass: "bg-indigo-400",
    markerClass: "border-indigo-200",
    desc: "Learned the basics: ReactJS, TailwindCSS, REST APIs, and my first small fullstack projects.",
  },
];
