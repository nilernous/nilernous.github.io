import { useState } from "react";

export default function ExperienceCard({ isActive, onHover }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isActive ? "opacity-100 scale-100 z-10" : "opacity-40 scale-75"
      }`}
      onMouseEnter={onHover}
      onMouseLeave={() => onHover(false)}
    >
      <div
        className="relative w-64 h-80 md:w-100 md:h-120 duration-200 perspective-1000 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`relative w-full h-full transition-all duration-700 ease-out transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl border border-[#a855f7]/30 p-6 backface-hidden">
            <h3 className="text-xl md:text-2xl font-bold text-[#a855f7] text-center mb-4">
              EXPERIENCE
            </h3>
            <div className="text-center mb-3">
              <p className="text-white font-semibold text-md">
                Frontend Developer
              </p>
              <p className="text-[#00d9ff] text-sm">2022 - Present</p>
            </div>
            <div className="space-y-1">
              <p className="text-white/70 text-xs">• Web Applications</p>
              <p className="text-white/70 text-xs">• E-commerce</p>
              <p className="text-white/70 text-xs">• 3D Experiences</p>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d1b4e] to-[#1a1a2e] rounded-2xl border border-[#a855f7]/30 p-6 backface-hidden rotate-y-180">
            <h3 className="text-xl md:text-2xl font-bold text-[#a855f7] text-center mb-4">
              PROJECTS
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {["Portfolio", "E-commerce", "Dashboard", "Web Application"].map(
                (project) => (
                  <div
                    key={project}
                    className="bg-[#1a1a2e] flex justify-center items-center rounded-lg p-2 text-center border hover:border-[#4ecdc4] duration-300"
                  >
                    <span className="text-white/80 text-sm">{project}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
