import { useRef } from "react";
import { ArrowRight, Terminal, Sparkles, Cpu } from "lucide-react";
import FloatingCard from "./FloatingCard";
import useInViewAnimation from "../../hooks/useInViewAnimation";
import { revealItems, revealSelf } from "../../lib/animations";
import { PROFILE } from "../../data/profile";
import { HERO_CARD_TRAITS, HERO_STATS, HERO_TECH_PILLS } from "../../data/hero";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const cardRef = useRef(null);
  useInViewAnimation(introRef, revealItems);
  useInViewAnimation(cardRef, revealSelf);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background glowing accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-300/30 via-blue-200/20 to-indigo-200/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-200/40 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Headline & Info */}
          <div ref={introRef} className="lg:col-span-7 space-y-8 text-center lg:text-left">

            {/* Tagline Pill */}
            <div className="reveal-item inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-sky-500 animate-pulse" />
              <span>Fullstack developer · Vietnam</span>
            </div>

            {/* Main Headline */}
            <div className="reveal-item space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Building reliable{" "}
                <span className="bg-gradient-to-r from-sky-500 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  web applications
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                Hi, I'm <span className="font-semibold text-slate-900">{PROFILE.name}</span>. I've been coding since 2022, mostly with React and Node.js, and I enjoy taking an idea all the way from a rough sketch to something people can actually use.
              </p>
            </div>

            {/* Tech stack pills */}
            <div className="reveal-item flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              {HERO_TECH_PILLS.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r ${tech.color} border transition-transform hover:scale-105 cursor-default`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="reveal-item flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-400 to-indigo-400 hover:from-sky-600 hover:to-indigo-500 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>See my projects</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 bg-white/90 border border-slate-200/90 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Terminal className="w-5 h-5 text-indigo-600" />
                <span>More about me</span>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="reveal-item grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/70 max-w-lg mx-auto lg:mx-0">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="space-y-0.5 text-center lg:text-left">
                  <p className={`text-2xl sm:text-3xl font-extrabold ${stat.valueClass}`}>{stat.value}</p>
                  <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Profile Card (floats; on desktop it can be grabbed and thrown) */}
          <div className="lg:col-span-5 flex justify-center">
            <div ref={cardRef} data-reveal-delay={250} className="w-full max-w-md">
              <FloatingCard containerRef={sectionRef}>

                {/* Floating background elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-400/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl animate-pulse" />

                <div className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-white/80">

                  {/* Window bar */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/80">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-semibold">~/nilernous</span>
                  </div>

                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Profile graphic avatar & name */}
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-blue-400 to-indigo-400 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
                      <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white bg-slate-100 flex items-center justify-center">
                        <img
                          src={PROFILE.avatar}
                          alt={PROFILE.name}
                          draggable={false}
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
                      <h3 className="text-2xl font-extrabold text-slate-900">{PROFILE.name}</h3>
                      <p className="text-sm font-semibold text-sky-600">{PROFILE.role}</p>
                    </div>

                    {/* Quote badge */}
                    <div className="px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 italic leading-relaxed">
                      "{PROFILE.quote}"
                    </div>

                    {/* Traits */}
                    <div className="w-full grid grid-cols-2 gap-2 pt-2 text-left">
                      {HERO_CARD_TRAITS.map(({ icon: Icon, iconClass, label, value }) => (
                        <div key={label} className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2.5">
                          <Icon className={`w-4 h-4 ${iconClass}`} />
                          <div>
                            <p className="text-[10px] text-slate-400 uppercase font-bold">{label}</p>
                            <p className="text-xs font-semibold text-slate-800">{value}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="hidden lg:block text-[11px] text-slate-400">psst, you can grab this card and throw it</p>
                  </div>

                </div>

              </FloatingCard>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
