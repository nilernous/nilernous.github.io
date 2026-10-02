import { ExternalLink, Github, Sparkles, Eye } from "lucide-react";

export default function ProjectCard({ project, categoryLabel, onViewDetails }) {
  return (
    <div className="h-full glass-panel rounded-3xl overflow-hidden border border-slate-200/90 hover:-translate-y-1.5 transition-all duration-300 bg-white flex flex-col group">
      {/* Graphic Banner */}
      <div className={`h-44 sm:h-52 bg-gradient-to-tr ${project.gradient} p-6 relative flex flex-col justify-between overflow-hidden`}>
        {/* Tech background pattern */}
        <div className="absolute inset-0 opacity-10 tech-grid-bg" />

        <div className="flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold">
            {categoryLabel}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-bold">
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
            onClick={onViewDetails}
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
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                <span>Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
