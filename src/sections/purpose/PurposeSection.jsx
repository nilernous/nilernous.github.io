import { useRef } from "react";
import { Target, CheckCircle2, Compass } from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading";
import useInViewAnimation from "../../hooks/useInViewAnimation";
import { revealItems } from "../../lib/animations";
import { PROFILE } from "../../data/profile";
import { GOALS, PURPOSE_MISSION } from "../../data/purpose";

export default function PurposeSection() {
  const gridRef = useRef(null);
  useInViewAnimation(gridRef, revealItems);

  return (
    <section id="purpose" className="py-24 relative overflow-hidden bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          icon={Compass}
          eyebrow="Goals"
          eyebrowClass="bg-purple-50 border-purple-200 text-purple-700"
          title="Where I'm"
          highlight="heading"
          highlightClass="from-indigo-400 via-blue-400 to-sky-500"
          description="What I'm working toward over the next few years."
        />

        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Main Mission Card */}
          <div className="reveal-item lg:col-span-5 glass-panel rounded-3xl p-8 sm:p-10 border border-slate-200/90 bg-gradient-to-br from-white via-slate-50 to-indigo-50/40 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Personal Mission
              </h3>
              <blockquote className="text-slate-700 italic text-base sm:text-lg leading-relaxed border-l-4 border-indigo-500 pl-4 py-1">
                "{PROFILE.mission}"
              </blockquote>
              <p className="text-slate-600 text-sm leading-relaxed">
                {PURPOSE_MISSION.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>{PURPOSE_MISSION.horizon}</span>
              <span className="text-indigo-600">{PURPOSE_MISSION.focus}</span>
            </div>
          </div>

          {/* Goals Roadmap Grid */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            {GOALS.map(({ title, desc, status, icon: Icon, iconClass }) => (
              <div
                key={title}
                className="reveal-item glass-panel rounded-2xl p-6 border border-slate-200/90 bg-white/90 flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 shrink-0">
                  <Icon className={`w-5 h-5 ${iconClass}`} />
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-slate-900">{title}</h4>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" />
                      {status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
