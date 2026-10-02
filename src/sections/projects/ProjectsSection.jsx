import { useRef, useState } from "react";
import { FolderGit2 } from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import useInViewAnimation from "../../hooks/useInViewAnimation";
import { revealItems } from "../../lib/animations";
import { PROJECT_CATEGORIES, PROJECTS } from "../../data/projects";

const categoryLabel = (id) => PROJECT_CATEGORIES.find((c) => c.id === id)?.label;

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const gridRef = useRef(null);
  useInViewAnimation(gridRef, revealItems, { key: activeCategory });

  const filteredProjects = activeCategory === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          icon={FolderGit2}
          eyebrow="Projects"
          eyebrowClass="bg-sky-50 border-sky-200 text-sky-700"
          title="Things I've"
          highlight="built"
          highlightClass="from-sky-500 via-blue-400 to-indigo-400"
          description="A few projects I've worked on. Click one for the details, or jump straight to the code."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-sky-500 to-indigo-400 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            // Wrapper carries the entrance animation; the card keeps its own CSS hover transition.
            <div key={project.id} className="reveal-item">
              <ProjectCard
                project={project}
                categoryLabel={categoryLabel(project.category)}
                onViewDetails={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>

      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
