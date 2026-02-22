import { useEffect, useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { ParticleField } from './components/ParticleField';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative min-h-screen bg-dark-950 text-white overflow-x-hidden">
      {/* Loading screen */}
      <LoadingScreen isLoading={isLoading} />

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Particle background */}
      <ParticleField />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>

        <AboutSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </div>

        <ExperienceSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </div>

        <EducationSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </div>

        <SkillsSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>

        <ProjectsSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </div>

        <GallerySection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </div>

        <ServicesSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </div>

        {/* <GitHubSection /> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>

        <TestimonialsSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </div>

        {/* <BlogSection /> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>);

}