import { useState } from "react";
import { Mail, Linkedin, Github, Send, Copy, Check, MessageSquare, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sentSuccess, setSentSuccess] = useState(false);

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5 text-sky-500" />,
      label: "Direct Email",
      value: "phuctdm.dev@gmail.com",
      href: "mailto:phuctdm.dev@gmail.com",
      copyable: true,
    },
    {
      icon: <Linkedin className="w-5 h-5 text-blue-600" />,
      label: "LinkedIn Profile",
      value: "/in/nilernous",
      href: "https://www.linkedin.com/in/nilernous",
      copyable: false,
    },
    {
      icon: <Github className="w-5 h-5 text-slate-900" />,
      label: "GitHub Repository",
      value: "@nilernous",
      href: "https://github.com/nilernous",
      copyable: false,
    },
  ];

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-200/40 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-200/30 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact & <span className="bg-gradient-to-r from-sky-500 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">Collaboration</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Open for career opportunities, new projects, or technical collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl bg-white/90 space-y-6">
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">Official Contact Channels</h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Feel free to reach out directly via email or connect on social platforms below:
                </p>
              </div>

              <div className="space-y-4">
                {contactItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-between group hover:bg-slate-100/80 transition-colors"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                        {item.icon}
                      </div>
                      <div className="truncate">
                        <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">{item.label}</p>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold text-slate-800 hover:text-sky-600 truncate block"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>

                    {item.copyable && (
                      <button
                        onClick={() => handleCopy(item.value, idx)}
                        className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-sky-600 hover:bg-slate-50 transition-all shrink-0 ml-2"
                        title="Copy Email"
                      >
                        {copiedIndex === idx ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-200 text-xs text-slate-600 space-y-1">
                <p className="font-bold text-sky-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  Fast Response
                </p>
                <p>I typically review and respond to messages within 24 business hours.</p>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl bg-white/90">
              
              <h3 className="text-xl font-bold text-slate-900 mb-6">Send a Direct Message</h3>

              {sentSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-emerald-700">
                    Thank you for reaching out! Nilernous will respond to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Message Content</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter your message or project proposal..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-600 hover:to-purple-700 shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
