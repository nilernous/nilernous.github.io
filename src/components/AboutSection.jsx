import { useState } from "react";
import { User, Calendar, MapPin, Briefcase, Award, CheckCircle2, Rocket } from "lucide-react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const highlights = [
    {
      icon: <Briefcase className="w-5 h-5 text-sky-500" />,
      title: "Vị trí",
      value: "Frontend & Web Developer",
    },
    {
      icon: <Calendar className="w-5 h-5 text-indigo-500" />,
      title: "Kinh nghiệm",
      value: "2022 - Hiện tại",
    },
    {
      icon: <MapPin className="w-5 h-5 text-purple-500" />,
      title: "Khu vực",
      value: "Việt Nam",
    },
    {
      icon: <Award className="w-5 h-5 text-emerald-500" />,
      title: "Định hướng",
      value: "Fullstack Performance",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Profile Detail</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Về tôi — <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">Nilernous</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Khám phá hành trình phát triển phần mềm, triết lý thiết kế và mục tiêu nghề nghiệp.
          </p>
        </div>

        {/* Highlight Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glass-panel p-5 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{item.title}</p>
                <p className="text-base font-bold text-slate-900 mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabbed Detail Content Box */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl bg-white/80">
          
          {/* Tabs header */}
          <div className="flex flex-wrap gap-2 pb-6 mb-8 border-b border-slate-200/80">
            {[
              { id: "overview", label: "Tổng quan & Bio" },
              { id: "philosophy", label: "Triết lý phát triển" },
              { id: "journey", label: "Hành trình Dev" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-indigo-500/20"
                    : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="md:col-span-8 space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  Lập trình viên đam mê công nghệ & sáng tạo web
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  Mình là một Frontend Developer yêu thích việc nghiên cứu và áp dụng những công nghệ web mới nhất. Mình tập trung tạo ra các giao diện người dùng mượt mà, phản hồi nhanh, tối ưu SEO và có giá trị sử dụng cao.
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  Bên cạnh Frontend (React, Next.js, TypeScript), mình mở rộng kiến thức sang Backend (Node.js, Python, Golang, SQL) và lập trình ứng dụng để hướng tới hình mẫu Fullstack Developer toàn diện.
                </p>
                <div className="pt-3 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Tối ưu UI/UX & Responsive
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Cấu trúc Code sạch & Dễ bảo trì
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Cập nhật công nghệ mới liên tục
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex justify-center">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50 border border-slate-200/90 text-center space-y-3 w-full">
                  <Rocket className="w-10 h-10 text-sky-600 mx-auto" />
                  <h4 className="font-extrabold text-slate-900 text-lg">Mục tiêu dài hạn</h4>
                  <p className="text-xs text-slate-600 italic">
                    "Trở thành Full-stack Developer lấy hiệu năng làm trọng tâm, cống hiến giá trị thực sự cho cộng đồng công nghệ."
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Philosophy */}
          {activeTab === "philosophy" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-2xl font-bold text-slate-900">
                3 Trụ cột cốt lõi trong công việc
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="text-sky-600 font-extrabold text-lg">01. Trải nghiệm người dùng</div>
                  <p className="text-sm text-slate-600">
                    Giao diện phải trực quan, dễ thao tác, có phản hồi tức thì và tương thích hoàn hảo trên mọi thiết bị.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="text-indigo-600 font-extrabold text-lg">02. Tốc độ & Hiệu năng</div>
                  <p className="text-sm text-slate-600">
                    Tối ưu hóa thời gian tải trang, dung lượng bundle và rendering mượt mà ở mức 60FPS.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="text-purple-600 font-extrabold text-lg">03. Khả năng mở rộng</div>
                  <p className="text-sm text-slate-600">
                    Code sạch, tổ chức module chặt chẽ giúp dễ dàng nâng cấp và làm việc nhóm hiệu quả.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Journey */}
          {activeTab === "journey" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-2xl font-bold text-slate-900">Cột mốc phát triển</h3>
              <div className="space-y-4 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-200 pl-8">
                <div className="relative">
                  <span className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-sky-500 ring-4 ring-sky-100" />
                  <h4 className="font-bold text-slate-900 text-base">2024 - Present</h4>
                  <p className="text-sm text-slate-600">Phát triển các hệ thống Web Apps phức tạp, Next.js, TypeScript và ứng dụng 3D tương tác.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-100" />
                  <h4 className="font-bold text-slate-900 text-base">2022 - 2023</h4>
                  <p className="text-sm text-slate-600">Xây dựng nền tảng Frontend vững chắc với ReactJS, TailwindCSS, REST API và các ứng dụng thực tế.</p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
