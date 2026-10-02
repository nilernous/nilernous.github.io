import { Code, Server, Smartphone, Users } from "lucide-react";

export const SKILL_CATEGORIES = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend", icon: Code },
  { id: "backend", label: "Backend", icon: Server },
  { id: "app", label: "Application", icon: Smartphone },
  { id: "soft", label: "Soft Skills", icon: Users },
];

export const SKILLS = [
  // Frontend
  { name: "ReactJS", category: "frontend", level: "Junior", desc: "Functional components, hooks, props & state, basic state management", percent: 65 },
  { name: "Next.js", category: "frontend", level: "Junior", desc: "App Router basics, routing, SSR / SSG fundamentals", percent: 55 },
  { name: "TypeScript", category: "frontend", level: "Junior", desc: "Typing props and APIs, interfaces, basic generics", percent: 55 },
  { name: "TailwindCSS & CSS3", category: "frontend", level: "Junior", desc: "Responsive layouts, Flexbox / Grid, simple animations", percent: 65 },
  { name: "Three.js / React Three Fiber", category: "frontend", level: "Beginner", desc: "Basic 3D scenes, meshes, lights and simple animations", percent: 35 },

  // Backend
  { name: "ExpressJS & Node.js", category: "backend", level: "Junior", desc: "REST APIs, routing, middleware, MVC structure", percent: 60 },
  { name: "NestJS", category: "backend", level: "Junior", desc: "Modules, controllers, services, dependency injection basics", percent: 50 },
  { name: "ASP.NET Core", category: "backend", level: "Beginner", desc: "C# Web API basics, Entity Framework Core CRUD", percent: 40 },
  { name: "Python", category: "backend", level: "Junior", desc: "Scripting, automation, simple data processing", percent: 55 },
  { name: "Golang", category: "backend", level: "Beginner", desc: "Syntax fundamentals, simple HTTP services, goroutines basics", percent: 30 },
  { name: "SQL & Databases", category: "backend", level: "Junior", desc: "CRUD queries, joins, basic schema design with PostgreSQL / SQL Server", percent: 55 },

  // Application
  { name: "Java", category: "app", level: "Junior", desc: "Object-oriented programming, core algorithms, data structures", percent: 50 },
  { name: "Kivy (Python GUI)", category: "app", level: "Beginner", desc: "Simple cross-platform desktop & mobile interfaces", percent: 35 },

  // Soft Skills
  { name: "Problem Solving", category: "soft", level: "Developing", desc: "Breaking problems down, debugging, researching solutions", percent: 65 },
  { name: "Collaboration", category: "soft", level: "Developing", desc: "Teamwork, Git workflow, giving and receiving code reviews", percent: 65 },
  { name: "Communication", category: "soft", level: "Developing", desc: "Asking clear questions, writing documentation, sharing progress", percent: 60 },
  { name: "Adaptability", category: "soft", level: "Strength", desc: "Eager to learn new technologies quickly", percent: 75 },
];
