import { useRef, useState } from "react";
import { User, CheckCircle2, Rocket } from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading";
import Timeline from "../../components/ui/Timeline";
import useInViewAnimation from "../../hooks/useInViewAnimation";
import { revealItems, revealSelf } from "../../lib/animations";
import { PROFILE } from "../../data/profile";
import {
  ABOUT_HIGHLIGHTS,
  ABOUT_MILESTONES,
  ABOUT_OVERVIEW,
  ABOUT_PILLARS,
  ABOUT_TABS,
} from "../../data/about";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("overview");
  const highlightsRef = useRef(null);
  const tabsRef = useRef(null);
  useInViewAnimation(highlightsRef, revealItems);
  useInViewAnimation(tabsRef, revealSelf);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          icon={User}
          eyebrow="About me"
          eyebrowClass="bg-sky-50 border-sky-200 text-sky-700"
          title="A bit"
          highlight="about me"
          highlightClass="from-sky-500 to-indigo-400"
          description="Where I started, how I like to work, and where I want to go next."
        />

        {/* Highlight Stats Grid */}
        <div ref={highlightsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {ABOUT_HIGHLIGHTS.map(({ icon: Icon, iconClass, title, value }) => (
            // Wrapper carries the entrance animation; the card keeps its own CSS hover transition.
            <div key={title} className="reveal-item">
              <div className="h-full glass-panel p-5 rounded-2xl border border-slate-200/80 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-3">
                  <Icon className={`w-5 h-5 ${iconClass}`} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{title}</p>
                  <p className="text-base font-bold text-slate-900 mt-0.5">{value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabbed Detail Content Box */}
        <div ref={tabsRef} className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200/90 bg-white/80">

          {/* Tabs header */}
          <div className="flex flex-wrap gap-2 pb-6 mb-8 border-b border-slate-200/80">
            {ABOUT_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-sky-500 to-indigo-400 text-white"
                    : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  {ABOUT_OVERVIEW.title}
                </h3>
                {ABOUT_OVERVIEW.paragraphs.map((text) => (
                  <p key={text} className="text-slate-600 leading-relaxed text-base">
                    {text}
                  </p>
                ))}
                <div className="pt-3 flex flex-wrap gap-3">
                  {ABOUT_OVERVIEW.strengths.map((strength) => (
                    <div key={strength} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {strength}
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4 flex justify-center">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 border border-slate-200/90 text-center space-y-3 w-full">
                  <Rocket className="w-10 h-10 text-sky-600 mx-auto" />
                  <h4 className="font-extrabold text-slate-900 text-lg">Long-Term Goal</h4>
                  <p className="text-xs text-slate-600 italic">
                    "{PROFILE.mission}"
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: How I work */}
          {activeTab === "philosophy" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Three things I care about
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ABOUT_PILLARS.map((pillar) => (
                  <div key={pillar.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <div className={`${pillar.titleClass} font-extrabold text-lg`}>{pillar.title}</div>
                    <p className="text-sm text-slate-600">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Journey */}
          {activeTab === "journey" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">How I got here</h3>
              <Timeline items={ABOUT_MILESTONES} />
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
