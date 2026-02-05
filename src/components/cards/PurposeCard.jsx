import { useState } from "react";

export default function PurposeCard({ isActive, onHover }) {
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
        className="relative w-64 h-80 md:w-100 md:h-120 duration-300 perspective-1000 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`relative w-full h-full transition-all duration-700 ease-out transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl border border-[#4ecdc4]/30 p-6 backface-hidden">
            <h3 className="text-xl md:text-2xl font-bold text-[#4ecdc4] text-center mb-4">
              MY PURPOSE
            </h3>
            <div className="flex flex-col items-center justify-center h-40">
              <p className="text-white text-center text-sm italic">
                "To be a full-stack performance-driven developer who
                continuously learns and contributes to the tech community."
              </p>
            </div>
            <div className="mt-auto">
              <p className="text-[#4ecdc4] text-xs text-center"></p>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d1b4e] to-[#1a1a2e] rounded-2xl border border-[#ffe66d]/30 p-6 backface-hidden rotate-y-180">
            <h3 className="text-xl md:text-2xl font-bold text-[#ffe66d] text-center mb-4">
              GOALS 2025
            </h3>
            <div className="space-y-2">
              {["✓ Learning security", "✓ Mentorship"].map((goal) => (
                <div key={goal} className="flex items-center gap-2">
                  <span className="text-[#4ecdc4] text-md">
                    {goal.split(" ")[0]}
                  </span>
                  <span className="text-white/80 text-md">
                    {goal.substring(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
