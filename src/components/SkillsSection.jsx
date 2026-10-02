import { useState } from "react";
import { Cpu, Code, Server, Smartphone, Users, CheckCircle } from "lucide-react";

export default function SkillsSection() {
  const [filter, setFilter] = useState("all");

  const skillCategories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend", icon: <Code className="w-4 h-4" /> },
    { id: "backend", label: "Backend", icon: <Server className="w-4 h-4" /> },
    { id: "app", label: "Application", icon: <Smartphone className="w-4 h-4" /> },
    { id: "soft", label: "Soft Skills", icon: <Users className="w-4 h-4" /> },
  ];

  const skillsData = [
    // Frontend
    { name: "ReactJS", category: "frontend", level: "Senior / High", desc: "Modern component architecture, state management, custom hooks", color: "sky", percent: 85 },
    { name: "Next.js", category: "frontend", level: "Advanced", desc: "App Router, SSR, SSG, SEO & performance optimization", color: "indigo", percent: 80 },
    { name: "TypeScript", category: "frontend", level: "Advanced", desc: "Strict type safety, generic interfaces, clean architecture", color: "blue", percent: 85 },
    { name: "TailwindCSS & CSS3", category: "frontend", level: "Expert", desc: "Glassmorphic design, micro-animations, responsive layouts", color: "cyan", percent: 90 },
    { name: "Three.js / React Three Fiber", category: "frontend", level: "Intermediate", desc: "3D Canvas, particle systems, shader basics, interactive scenes", color: "purple", percent: 70 },

    // Backend
    { name: "ExpressJS & Node.js", category: "backend", level: "Advanced", desc: "RESTful APIs, MVC pattern, middleware pipelines, event-driven architecture", color: "emerald", percent: 85 },
    { name: "NestJS", category: "backend", level: "Advanced", desc: "TypeScript-first backend, Dependency Injection, Modular architecture, Microservices", color: "rose", percent: 80 },
    { name: "ASP.NET Core", category: "backend", level: "Advanced", desc: "C#, Enterprise Web APIs, Entity Framework Core, High-performance services", color: "purple", percent: 70 },
    { name: "Python", category: "backend", level: "Advanced", desc: "Data processing, scripting, automation, backend services", color: "amber", percent: 85 },
    { name: "Golang", category: "backend", level: "Intermediate", desc: "Concurrency, high-throughput microservices, clean syntax", color: "sky", percent: 60 },
    { name: "SQL & Databases", category: "backend", level: "Advanced", desc: "Relational queries, schema design, index optimization, PostgreSQL / SQL Server", color: "blue", percent: 80 },

    // Application
    { name: "Java", category: "app", level: "Intermediate", desc: "Object-oriented design, core algorithms, data structures", color: "rose", percent: 75 },
    { name: "Kivy (Python GUI)", category: "app", level: "Intermediate", desc: "Cross-platform desktop & mobile graphical user interfaces", color: "emerald", percent: 70 },

    // Soft Skills
    { name: "Problem Solving", category: "soft", level: "Core Ability", desc: "Root cause analysis, engineering problem solving, optimal technical solutions", color: "indigo", percent: 90 },
    { name: "Collaboration", category: "soft", level: "Core Ability", desc: "Agile teamwork, Git workflow, code reviews, pair programming", color: "sky", percent: 90 },
    { name: "Communication", category: "soft", level: "Core Ability", desc: "Clear technical communication, documentation, transparent idea sharing", color: "emerald", percent: 85 },
    { name: "Adaptability", category: "soft", level: "Core Ability", desc: "Rapid self-learning of emerging technologies and agile adaptability", color: "purple", percent: 95 },
  ];

  const filteredSkills = filter === "all" 
    ? skillsData 
    : skillsData.filter((s) => s.category === filter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/60">
      
      {/* Background ambient glowing shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-200/30 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical <span className="bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Skill Matrix</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Comprehensive proficiency spanning Fullstack development, modern backend frameworks, and core engineering skills.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                filter === cat.id
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white/90 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {skill.desc}
                </p>
              </div>

              {/* Skill meter bar */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <div className="flex justify-between items-center text-xs text-slate-500 font-semibold">
                  <span>Proficiency</span>
                  <span className="text-sky-600">{skill.percent}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
