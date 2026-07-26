import { ArrowRight, Terminal, Sparkles, Layers, Cpu, Code } from "lucide-react";

export default function HeroSection() {
  const techPills = [
    { name: "ReactJS", color: "from-cyan-500/10 to-sky-500/10 text-sky-700 border-sky-200" },
    { name: "Next.js", color: "from-slate-900/5 to-slate-800/10 text-slate-800 border-slate-300" },
    { name: "TypeScript", color: "from-blue-500/10 to-indigo-500/10 text-blue-700 border-blue-200" },
    { name: "ExpressJS", color: "from-emerald-500/10 to-green-500/10 text-emerald-700 border-emerald-200" },
    { name: "NestJS", color: "from-rose-500/10 to-pink-500/10 text-rose-700 border-rose-200" },
    { name: "ASP.NET", color: "from-purple-500/10 to-indigo-500/10 text-purple-700 border-purple-200" },
    { name: "Node.js", color: "from-teal-500/10 to-emerald-500/10 text-teal-700 border-teal-200" },
    { name: "Three.js", color: "from-amber-500/10 to-orange-500/10 text-amber-700 border-amber-200" },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background glowing accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-300/30 via-indigo-300/20 to-purple-300/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-200/40 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Info */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tech Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 shadow-sm text-slate-700 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-sky-500 animate-pulse" />
              <span>Modern UI • Cutting-Edge Tech • High Performance</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Crafting Exceptional{" "}
                <span className="bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Tech & Web Solutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                Hi, I'm <span className="font-semibold text-slate-900">Nilernous</span> — a Fullstack Developer passionate about transforming complex ideas into modern, elegant, and performance-optimized digital experiences.
              </p>
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              {techPills.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r ${tech.color} border shadow-xs transition-transform hover:scale-105 cursor-default`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 bg-white/90 border border-slate-200/90 shadow-md hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Terminal className="w-5 h-5 text-indigo-600" />
                <span>About Nilernous</span>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/70 max-w-lg mx-auto lg:mx-0">
              <div className="space-y-0.5 text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">2022+</p>
                <p className="text-xs text-slate-500 font-medium">Started Coding</p>
              </div>
              <div className="space-y-0.5 text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-sky-600">100%</p>
                <p className="text-xs text-slate-500 font-medium">Commitment & Passion</p>
              </div>
              <div className="space-y-0.5 text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-indigo-600">Fullstack</p>
                <p className="text-xs text-slate-500 font-medium">Tech Versatility</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Glass Graphic Display */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">

              {/* Floating tech background elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-400/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl animate-pulse" />

              {/* Main Futuristic Card */}
              <div className="relative glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/80">
                
                {/* Header terminal bar inside card */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-semibold">sys_status: ONLINE</span>
                </div>

                {/* Profile graphic avatar & name */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100 flex items-center justify-center">
                      <img
                        src="/assets/profile.jpg"
                        alt="Nilernous"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback icon if profile image is missing
                          e.target.style.display = 'none';
                        }}
                      />
                      <Cpu className="w-12 h-12 text-indigo-600" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">Nilernous</h3>
                    <p className="text-sm font-semibold text-sky-600">Fullstack Software Developer</p>
                  </div>

                  {/* Quote badge */}
                  <div className="px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 italic leading-relaxed">
                    "Code is my art, and the web is my canvas."
                  </div>

                  {/* Tech stack highlights inside card */}
                  <div className="w-full grid grid-cols-2 gap-2 pt-2 text-left">
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2.5">
                      <Code className="w-4 h-4 text-sky-500" />
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Vibe</p>
                        <p className="text-xs font-semibold text-slate-800">Clean Tech</p>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-indigo-500" />
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Focus</p>
                        <p className="text-xs font-semibold text-slate-800">Fullstack Web Apps</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
