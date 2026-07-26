import { useState } from "react";
import { FolderGit2, ExternalLink, Github, Sparkles, Eye } from "lucide-react";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "event_and_media", label: "Event & Media" },
    { id: "ecommerce", label: "E-Commerce" },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Omni E-Commerce Platform",
      category: "ecommerce",
      description: "OmniCommerce is a modern cloud-native enterprise e-commerce platform designed to support multiple client applications through a unified backend ecosystem.",
      tags: ["ReactJS", "NestJS", "Next.js", "TypeScript", "Microfrontend", "Microservice", "Flutter"],
      featured: true,
      github: "https://github.com/nilernous/omni-ecommerce-platform",
      demo: "#",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      highlights: [
        "Ultra-fast product search and filtering with debounce",
        "Online payment & smart order management",
        "Modern user interface optimized for customer conversion",
      ]
    },
    {
      id: 2,
      title: "Event Management System",
      category: "event_and_media",
      description: "Real-time interactive data analytics dashboard for enterprise performance metrics and visualization.",
      tags: ["ReactJS", "NestJS", "TypeScript", "Recharts"],
      featured: false,
      github: "https://github.com/nilernous",
      demo: "https://framesx.id.vn",
      gradient: "from-cyan-500 via-blue-600 to-indigo-600",
      highlights: [
        "Vibrant realtime analytics charts",
        "User role permission management and event tracking",
        "Flexible VI / EN languagues with I18N",
      ]
    }
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured <span className="bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Products & Projects</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Projects crafted with high standards in interface design, clean codebase, and exceptional user experience.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-indigo-500/25"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 bg-white flex flex-col group"
            >
              {/* Graphic Banner */}
              <div className={`h-44 sm:h-52 bg-gradient-to-tr ${project.gradient} p-6 relative flex flex-col justify-between overflow-hidden`}>
                {/* Tech background pattern */}
                <div className="absolute inset-0 opacity-10 tech-grid-bg" />
                
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-sm">
                    {categories.find((c) => c.id === project.category)?.label}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-bold shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                      Featured
                    </span>
                  )}
                </div>

                <div className="z-10">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-slate-600 font-extrabold text-lg px-2"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Technical Highlights</h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="text-sky-500 font-bold">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                Close
              </button>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
