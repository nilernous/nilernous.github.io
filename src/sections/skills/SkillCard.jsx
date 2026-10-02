import { useRef } from "react";
import { animate, utils } from "animejs";
import useInViewAnimation from "../../hooks/useInViewAnimation";
import { revealSelf } from "../../lib/animations";

// Card slides in, then the proficiency bar fills from left to right.
const skillCardAnimation = {
  prepare: (scope) => {
    revealSelf.prepare(scope);
    utils.set(".skill-bar-fill", { scaleX: 0 });
  },
  play: (scope) => {
    revealSelf.play(scope);
    animate(".skill-bar-fill", {
      scaleX: 1,
      duration: 1100,
      delay: Number(scope.root.dataset.revealDelay || 0) + 350,
      ease: "outCubic",
    });
  },
};

// `revealDelay` staggers cards that enter the viewport together (same row).
export default function SkillCard({ skill, revealDelay = 0 }) {
  const root = useRef(null);
  useInViewAnimation(root, skillCardAnimation);

  // Wrapper carries the entrance animation; the card keeps its own CSS hover transition.
  return (
    <div ref={root} data-reveal-delay={revealDelay}>
      <div className="h-full glass-panel rounded-2xl p-6 border border-slate-200/90 hover:-translate-y-1 transition-all duration-300 bg-white/90 flex flex-col justify-between group">
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
              className="skill-bar-fill h-full rounded-full origin-left bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400"
              style={{ width: `${skill.percent}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
