import { useState } from "react";
import { Code2, Menu, X, Send } from "lucide-react";
import AvailabilityBadge from "../ui/AvailabilityBadge";
import useScrolled from "../../hooks/useScrolled";
import { NAV_ITEMS } from "../../data/navigation";
import { PROFILE } from "../../data/profile";

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-blue-400 to-indigo-400 p-[2px] transition-all duration-300">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-sky-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent">
                {PROFILE.name}
              </span>
              <span className="text-[10px] font-semibold text-sky-600 tracking-widest uppercase">
                {PROFILE.shortRole}
              </span>
            </div>
          </a>

          {/* Availability Status Badge */}
          <AvailabilityBadge className="hidden lg:flex px-3 py-1.5 rounded-full bg-emerald-50/80 border-emerald-200/80" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/80">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50/80 rounded-full transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-400 to-indigo-400 hover:from-sky-600 hover:to-indigo-500 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <AvailabilityBadge className="flex px-3 py-2 rounded-xl bg-emerald-50 border-emerald-200 mb-3" />

          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-colors"
            >
              {item.label}
            </a>
          ))}

          <div className="pt-2 border-t border-slate-100">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-400"
            >
              <Send className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
