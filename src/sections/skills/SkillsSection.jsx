import { useState } from "react";
import { Cpu } from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading";
import SkillCard from "./SkillCard";
import { SKILL_CATEGORIES, SKILLS } from "../../data/skills";

export default function SkillsSection() {
  const [filter, setFilter] = useState("all");

  const filteredSkills = filter === "all"
    ? SKILLS
    : SKILLS.filter((s) => s.category === filter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/60">

      {/* Background ambient glowing shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-200/30 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          icon={Cpu}
          eyebrow="Skills"
          eyebrowClass="bg-indigo-50 border-indigo-200 text-indigo-700"
          title="What I"
          highlight="work with"
          highlightClass="from-sky-500 via-blue-400 to-indigo-400"
          description="An honest look at the tools I use and how comfortable I am with each one."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {SKILL_CATEGORIES.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                filter === id
                  ? "bg-slate-900 text-white scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {Icon && <Icon className="w-4 h-4" />}
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} revealDelay={(index % 3) * 100} />
          ))}
        </div>

      </div>
    </section>
  );
}
