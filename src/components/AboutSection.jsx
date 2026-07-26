import { useState } from "react";
import { User, Calendar, MapPin, Briefcase, Award, CheckCircle2, Rocket } from "lucide-react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const highlights = [
    {
      icon: <Briefcase className="w-5 h-5 text-sky-500" />,
      title: "Position",
      value: "Fullstack Software Engineer",
    },
    {
      icon: <Calendar className="w-5 h-5 text-indigo-500" />,
      title: "Experience",
      value: "2022 - Present",
    },
    {
      icon: <MapPin className="w-5 h-5 text-purple-500" />,
      title: "Location",
      value: "Vietnam",
    },
    {
      icon: <Award className="w-5 h-5 text-emerald-500" />,
      title: "Focus",
      value: "Fullstack & Performance",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Profile Detail</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About — <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">Nilernous</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Discover my software engineering journey, design philosophy, and career objectives.
          </p>
        </div>

        {/* Highlight Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glass-panel p-5 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{item.title}</p>
                <p className="text-base font-bold text-slate-900 mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabbed Detail Content Box */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl bg-white/80">
          
          {/* Tabs header */}
          <div className="flex flex-wrap gap-2 pb-6 mb-8 border-b border-slate-200/80">
            {[
              { id: "overview", label: "Overview & Bio" },
              { id: "philosophy", label: "Development Philosophy" },
              { id: "journey", label: "Developer Journey" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-indigo-500/20"
                    : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="md:col-span-8 space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  Passionate Software Engineer & Fullstack Creator
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  I am a Fullstack Developer dedicated to exploring and implementing modern web technologies. I specialize in building responsive, high-performance web applications with seamless user interfaces, robust backends, and optimal SEO.
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  Across the stack, I leverage modern tools including React, Next.js, ExpressJS, NestJS, ASP.NET, TypeScript, Node.js, Python, and SQL databases to architect end-to-end, scalable web solutions.
                </p>
                <div className="pt-3 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    UI/UX & Responsive Optimization
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Clean Architecture & Maintainability
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Continuous Learning & Tech Adoption
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex justify-center">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50 border border-slate-200/90 text-center space-y-3 w-full">
                  <Rocket className="w-10 h-10 text-sky-600 mx-auto" />
                  <h4 className="font-extrabold text-slate-900 text-lg">Long-Term Goal</h4>
                  <p className="text-xs text-slate-600 italic">
                    "To be a full-stack performance-driven developer who continuously learns and contributes to the tech community."
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Philosophy */}
          {activeTab === "philosophy" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-2xl font-bold text-slate-900">
                3 Core Engineering Pillars
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="text-sky-600 font-extrabold text-lg">01. User Experience</div>
                  <p className="text-sm text-slate-600">
                    Interfaces must be intuitive, highly responsive, smooth, and seamlessly adaptable across all devices.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="text-indigo-600 font-extrabold text-lg">02. Speed & Performance</div>
                  <p className="text-sm text-slate-600">
                    Optimizing load times, bundle sizes, API responses, and delivering smooth 60FPS rendering.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="text-purple-600 font-extrabold text-lg">03. Scalability</div>
                  <p className="text-sm text-slate-600">
                    Clean code and modular architecture to ensure effortless maintenance, scalability, and teamwork.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Journey */}
          {activeTab === "journey" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-2xl font-bold text-slate-900">Growth Milestones</h3>
              <div className="space-y-4 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-200 pl-8">
                <div className="relative">
                  <span className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-sky-500 ring-4 ring-sky-100" />
                  <h4 className="font-bold text-slate-900 text-base">2024 - Present</h4>
                  <p className="text-sm text-slate-600">Architecting complex Fullstack Web Apps using Next.js, ExpressJS, NestJS, ASP.NET, TypeScript, and interactive 3D elements.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-100" />
                  <h4 className="font-bold text-slate-900 text-base">2022 - 2023</h4>
                  <p className="text-sm text-slate-600">Built a solid software engineering foundation with ReactJS, TailwindCSS, REST APIs, and fullstack applications.</p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
