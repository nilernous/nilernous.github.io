import TechCanvas from "./components/backgrounds/TechCanvas";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./sections/hero/HeroSection";
import AboutSection from "./sections/about/AboutSection";
import SkillsSection from "./sections/skills/SkillsSection";
import ProjectsSection from "./sections/projects/ProjectsSection";
import PurposeSection from "./sections/purpose/PurposeSection";
import ContactSection from "./sections/contact/ContactSection";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white font-sans antialiased tech-grid-bg">
      {/* Background Interactive Tech Particle Network */}
      <TechCanvas />

      {/* Main Glassmorphic Header */}
      <Navbar />

      {/* Main Content Sections: order must match src/data/navigation.js */}
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
