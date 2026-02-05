import { useState } from "react";
import { ShimmerTitle } from "../Carousel";

export default function ProfileCard({ isActive, onHover }) {
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
        className="relative w-64 h-80 md:w-100 md:h-120 duration-700 perspective-1000 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`relative w-full h-full transition-all duration-700 ease-out transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl border border-[#00d9ff]/30 p-6 backface-hidden">
            <div className="flex flex-col items-center h-full">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00d9ff] to-[#0099cc] flex items-center justify-center mb-4 border-2 border-[#00d9ff]">
                <img
                  src="/assets/profile.jpg"
                  alt="Profile"
                  className="rounded-full object-cover"
                />
              </div>
              <ShimmerTitle
                className="text-xl md:text-2xl font-bold text-center"
                color="#00d9ff"
              >
                Nilernous
              </ShimmerTitle>
              <p className="text-white/80 text-sm md:text-md text-center">
                Frontend Developer
              </p>
              <p className="text-white/80 text-xs md:text-sm text-center mt-4 italic">
                Code is my art, and the web is my canvas.
              </p>
              <div className="mt-auto">
                <p className="text-[#ff6b6b] text-sm text-center">Vibe Coder</p>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d1b4e] to-[#1a1a2e] rounded-2xl border border-[#4ecdc4]/30 p-6 backface-hidden rotate-y-180">
            <div className="flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-bold text-[#4ecdc4] text-center mb-4">
                ABOUT ME
              </h3>
              <p className="text-white/80 text-sm text-center">
                A developer passionate about coding with modern technologies.
              </p>
              <div className="mt-auto text-center">
                <p className="text-[#ff6b6b] text-sm">Frontend Developer</p>
                <p className="text-white/50 text-xs mt-1">2022 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
