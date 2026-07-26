import TechCanvas from "./components/TechCanvas";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import PurposeSection from "./components/PurposeSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white font-sans antialiased tech-grid-bg">
      {/* Background Interactive Tech Particle Network */}
      <TechCanvas />

      {/* Main Glassmorphic Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <PurposeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
