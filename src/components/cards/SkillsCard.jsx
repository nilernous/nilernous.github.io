export default function SkillsCard({ isActive, onHover }) {
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
