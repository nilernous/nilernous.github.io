import { Target, CheckCircle2, ShieldCheck, BookOpen, Flame, Compass } from "lucide-react";

export default function PurposeSection() {
  const goals = [
    {
      title: "Chuyên sâu Security & Best Practices",
      desc: "Nghiên cứu kiến trúc bảo mật ứng dụng web, phòng chống OWASP Top 10 và tối ưu hóa hệ thống.",
      status: "In Progress",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: "Mentorship & Cống hiến cộng đồng",
      desc: "Chia sẻ kiến thức lập trình, viết bài hướng dẫn kỹ thuật và hỗ trợ các lập trình viên mới.",
      status: "Active",
      icon: <BookOpen className="w-5 h-5 text-sky-500" />,
    },
    {
      title: "Hệ thống Web Hiệu Năng Cao",
      desc: "Xây dựng microservices tốc độ cao với Golang / Node.js và tối ưu hóa trải nghiệm Frontend mượt mà.",
      status: "Planned",
      icon: <Flame className="w-5 h-5 text-amber-500" />,
    },
  ];

  return (
    <section id="purpose" className="py-24 relative overflow-hidden bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Mission & Future Goals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sứ Mệnh & <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">Mục Tiêu Phát Triển</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Định hướng phát triển dài hạn trong sự nghiệp công nghệ thông tin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Mission Card */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl bg-gradient-to-br from-white via-slate-50 to-indigo-50/40 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Sứ mệnh cá nhân
              </h3>
              <blockquote className="text-slate-700 italic text-base sm:text-lg leading-relaxed border-l-4 border-indigo-500 pl-4 py-1">
                "To be a full-stack performance-driven developer who continuously learns and contributes to the tech community."
              </blockquote>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hành trình lập trình là không ngừng tự hoàn thiện, chinh phục các bài toán khó và mang lại giải pháp công nghệ giá trị cho người dùng cuối.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Goal Horizon: 2025 - 2026</span>
              <span className="text-indigo-600">Fullstack Mastery</span>
            </div>
          </div>

          {/* Goals Roadmap Grid */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            {goals.map((goal, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 bg-white/90 flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 shrink-0">
                  {goal.icon}
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-slate-900">{goal.title}</h4>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" />
                      {goal.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {goal.desc}
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
