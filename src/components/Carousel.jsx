import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

// Profile Card
function ProfileCard({ isActive, onHover }) {
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
                  src="/src/assets/profile.jpg"
                  alt="Profile"
                  className="rounded-full object-cover"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#00d9ff]">
                Nilernous
              </h2>
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

// Skills Card
function SkillsCard({ isActive, onHover }) {
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
        className="relative w-64 h-80 md:w-100 md:h-120 duration-500 perspective-1000 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`relative w-full h-full transition-all duration-700 ease-out transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl border border-[#ff6b6b]/30 p-6 backface-hidden">
            <h3 className="text-xl md:text-2xl font-bold text-[#ff6b6b] text-center mb-4">
              HARD SKILLS
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-[#00d9ff] text-lg font-semibold">Frontend</p>
                <p className="text-white/70 text-sm mt-1">
                  ReactJS • Next.js • TypeScript
                </p>
              </div>
              <div>
                <p className="text-[#00d9ff] text-lg font-semibold">Backend</p>
                <p className="text-white/70 text-sm mt-1">
                  Node.js • Python • Java • Golang • SQL
                </p>
              </div>
              <div>
                <p className="text-[#00d9ff] text-lg font-semibold">
                  Application
                </p>
                <p className="text-white/70 text-sm mt-1">Java • Kivy</p>
              </div>
            </div>
            <div className="mt-auto">
              <p className="text-[#ff6b6b] text-sm text-center"></p>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#2d1b4e] rounded-2xl border border-[#4ecdc4]/30 p-6 backface-hidden rotate-y-180">
            <h3 className="text-xl md:text-2xl font-bold text-[#4ecdc4] text-center mb-4">
              SOFT SKILLS
            </h3>
            <div className="space-y-2">
              {[
                "Problem Solving",
                "Collaboration",
                "Communication",
                "Adaptability",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ecdc4]"></span>
                  <span className="text-white/80 text-md">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Purpose Card
function PurposeCard({ isActive, onHover }) {
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

// Experience Card
function ExperienceCard({ isActive, onHover }) {
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

// Contact Card
function ContactCard({ isActive, onHover }) {
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
        className="relative w-64 h-80 md:w-100 md:h-120 duration-100 perspective-1000 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`relative w-full h-full transition-all duration-700 ease-out transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl border border-[#ff6b6b]/30 p-6 backface-hidden">
            <h3 className="text-xl md:text-2xl font-bold text-[#ff6b6b] text-center mb-4">
              CONNECT
            </h3>
            <div className="space-y-3">
              {[
                {
                  logo: <Mail width={24} height={24} className="text-white" />,
                  href: "",
                  label: "Email",
                  value: "phuctdm.dev@gmail.com",
                },
                {
                  logo: (
                    <Linkedin width={24} height={24} className="text-white" />
                  ),
                  href: "https://www.linkedin.com/in/nilernous",
                  label: "LinkedIn",
                  value: "/in/nilernous",
                },
                {
                  logo: (
                    <Github width={24} height={24} className="text-white" />
                  ),
                  href: "https://github.com/nilernous",
                  label: "GitHub",
                  value: "@nilernous",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <span className="text-xl">{item.logo}</span>
                  </a>

                  <div>
                    <p className="text-white/50 text-sm">{item.label}</p>
                    <p className="text-white/80 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <p className="text-[#ff6b6b] text-xs text-center"></p>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#2d1b4e] rounded-2xl border border-[#4ecdc4]/30 p-6 backface-hidden rotate-y-180">
            <h3 className="text-xl md:text-2xl font-bold text-[#4ecdc4] text-center mb-4">
              LET'S WORK
            </h3>
            <div className="text-center">
              <p className="text-white/80 text-md mb-4">
                Open to new opportunities and collaborations.
              </p>
              <button className="bg-gradient-to-r from-[#00d9ff] to-[#4ecdc4] text-[#0f0f23] font-bold py-2 px-4 rounded-full text-sm hover:opacity-90 transition-opacity">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Circular Carousel with hover pause and swipe support
export default function Carousel() {
  const cards = [
    ProfileCard,
    SkillsCard,
    PurposeCard,
    ExperienceCard,
    ContactCard,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const touchStartRef = useRef(null);
  const containerRef = useRef(null);

  // Auto rotation - pauses on hover
  useEffect(() => {
    if (!isAutoRotating || isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoRotating, isHovering, cards.length]);

  // Swipe handlers
  const handleTouchStart = useCallback((e) => {
    touchStartRef.current = e.touches[0].clientX;
    setIsAutoRotating(false);
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (touchStartRef.current === null) return;

      const touchEnd = e.touches[0].clientX;
      const diff = touchStartRef.current - touchEnd;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          setCurrentIndex((prev) => (prev + 1) % cards.length);
        } else {
          setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
        }
        touchStartRef.current = touchEnd;
      }
    },
    [cards.length],
  );

  const handleTouchEnd = useCallback(() => {
    touchStartRef.current = null;
    setTimeout(() => setIsAutoRotating(true), 5000);
  }, []);

  // Mouse drag handlers
  const handleMouseDown = useCallback((e) => {
    touchStartRef.current = e.clientX;
    setIsAutoRotating(false);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (touchStartRef.current === null) return;

      const diff = touchStartRef.current - e.clientX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          setCurrentIndex((prev) => (prev + 1) % cards.length);
        } else {
          setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
        }
        touchStartRef.current = e.clientX;
      }
    },
    [cards.length],
  );

  const handleMouseUp = useCallback(() => {
    touchStartRef.current = null;
    setTimeout(() => setIsAutoRotating(true), 3000);
  }, []);

  // Container hover handlers
  const handleContainerMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleContainerMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full mx-auto px-4 flex items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleContainerMouseLeave}
    >
      {/* Circular card container */}
      <div className="relative w-full flex items-center justify-center h-96">
        {cards.map((Card, index) => {
          const offset = (index - currentIndex + cards.length) % cards.length;

          // Calculate position in circle
          const angle = (offset / cards.length) * 2 * Math.PI;
          const radius = 120; // pixels
          const x = Math.sin(angle) * radius;
          const y = -Math.cos(angle) * radius * 0.3;
          const scale = offset === 0 ? 1 : 0.85;
          const opacity = offset === 0 ? 1 : 0.5;
          const zIndex = offset === 0 ? 10 : 0;
          const rotation = offset * 15;

          return (
            <div
              key={index}
              className="absolute transition-all duration-500 ease-out"
              style={{
                transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotation}deg)`,
                opacity: opacity,
                zIndex: zIndex,
              }}
            >
              <Card
                isActive={offset === 0}
                onHover={(hovering) => {
                  setIsHovering(hovering);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { ProfileCard, SkillsCard, PurposeCard, ExperienceCard, ContactCard };
