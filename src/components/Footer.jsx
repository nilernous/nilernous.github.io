import { useEffect, useState } from "react";
import { Code2, ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[2px] shadow-sm">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-sky-600" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                Nilernous
              </span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Xây dựng giao diện công nghệ hiện đại, sáng đẹp và tối ưu hiệu năng cho người dùng toàn cầu.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/nilernous"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/nilernous"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:phuctdm.dev@gmail.com"
                className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Danh mục</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#hero" className="text-slate-600 hover:text-sky-600 transition-colors">Trang chủ</a>
              <a href="#about" className="text-slate-600 hover:text-sky-600 transition-colors">Về tôi</a>
              <a href="#skills" className="text-slate-600 hover:text-sky-600 transition-colors">Kỹ năng</a>
              <a href="#projects" className="text-slate-600 hover:text-sky-600 transition-colors">Dự án</a>
              <a href="#purpose" className="text-slate-600 hover:text-sky-600 transition-colors">Mục tiêu</a>
              <a href="#contact" className="text-slate-600 hover:text-sky-600 transition-colors">Liên hệ</a>
            </div>
          </div>

          {/* High-Tech System Monitor Widget */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">System Status</h4>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>LOCAL TIME</span>
                <span className="text-sky-600 font-bold">{timeStr || "00:00:00"}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>STATUS</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                  100% HEALTH
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Nilernous. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors font-semibold"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
