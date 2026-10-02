import { Code2, ArrowUp } from "lucide-react";
import useClock from "../../hooks/useClock";
import { NAV_ITEMS } from "../../data/navigation";
import { PROFILE } from "../../data/profile";
import { SOCIALS } from "../../data/socials";

const FOOTER_SOCIAL_ORDER = ["github", "linkedin", "email"];
const footerSocials = FOOTER_SOCIAL_ORDER.map((id) => SOCIALS.find((s) => s.id === id));

export default function Footer() {
  const time = useClock();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white border-t border-slate-200/90 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-100">

          {/* Logo & Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-400 p-[2px]">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-sky-600" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                {PROFILE.name}
              </span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              {PROFILE.tagline}
            </p>

            <div className="flex items-center gap-3 pt-2">
              {footerSocials.map(({ id, icon: Icon, label, href }) => {
                const external = !href.startsWith("mailto:");
                return (
                  <a
                    key={id}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                    title={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="text-slate-600 hover:text-sky-600 transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* High-Tech System Monitor Widget */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Right now</h4>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Your time</span>
                <span className="text-sky-600 font-bold">{time}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Status</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                  Open to work
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
