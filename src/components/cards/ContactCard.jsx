import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactCard({ isActive, onHover }) {
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
