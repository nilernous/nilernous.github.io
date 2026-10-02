import { Code, Layers } from "lucide-react";

export const HERO_TECH_PILLS = [
  { name: "ReactJS", color: "from-cyan-500/10 to-sky-500/10 text-sky-700 border-sky-200" },
  { name: "Next.js", color: "from-slate-900/5 to-slate-800/10 text-slate-800 border-slate-300" },
  { name: "TypeScript", color: "from-blue-500/10 to-indigo-500/10 text-blue-700 border-blue-200" },
  { name: "ExpressJS", color: "from-emerald-500/10 to-green-500/10 text-emerald-700 border-emerald-200" },
  { name: "NestJS", color: "from-rose-500/10 to-pink-500/10 text-rose-700 border-rose-200" },
  { name: "ASP.NET", color: "from-purple-500/10 to-indigo-500/10 text-purple-700 border-purple-200" },
  { name: "Node.js", color: "from-teal-500/10 to-emerald-500/10 text-teal-700 border-teal-200" },
  { name: "Three.js", color: "from-amber-500/10 to-orange-500/10 text-amber-700 border-amber-200" },
];

export const HERO_STATS = [
  { value: "2022", label: "Started coding", valueClass: "text-slate-900" },
  { value: "React", label: "Plus Node.js, daily", valueClass: "text-sky-600" },
  { value: "Tech Lead", label: "Long-term goal", valueClass: "text-indigo-500" },
];

export const HERO_CARD_TRAITS = [
  { icon: Code, iconClass: "text-sky-500", label: "Enjoys", value: "Readable code" },
  { icon: Layers, iconClass: "text-indigo-500", label: "Focus", value: "Fullstack web apps" },
];
