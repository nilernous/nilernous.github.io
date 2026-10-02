import { BookOpen, Flame, ShieldCheck, Users } from "lucide-react";

export const PURPOSE_MISSION = {
  description:
    "Getting there takes more than writing good code. I want to understand how whole systems fit together, explain my ideas clearly, and help the people around me improve too.",
  horizon: "Goal Horizon: 2025 - 2026",
  focus: "Target: Tech Lead",
};

export const GOALS = [
  {
    title: "Learn web security properly",
    desc: "Working through the OWASP Top 10 and applying what I learn to my own projects.",
    status: "In Progress",
    icon: ShieldCheck,
    iconClass: "text-emerald-500",
  },
  {
    title: "Share what I learn",
    desc: "Writing short guides and helping people who are just getting started with web development.",
    status: "Active",
    icon: BookOpen,
    iconClass: "text-sky-500",
  },
  {
    title: "Build bigger systems",
    desc: "Get hands-on with larger backends in NestJS, ExpressJS, ASP.NET and Go, and keep the frontend fast as things grow.",
    status: "Planned",
    icon: Flame,
    iconClass: "text-amber-500",
  },
  {
    title: "Lead a small team",
    desc: "Own a feature from start to finish, review teammates' code, and help plan the work. The first real steps toward Tech Lead.",
    status: "Planned",
    icon: Users,
    iconClass: "text-indigo-500",
  },
];
