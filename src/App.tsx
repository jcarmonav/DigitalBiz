import React, { useState, useEffect } from 'react';
import { TopNavBar } from './components/TopNavBar';
import { HeroSection } from './components/HeroSection';
import { SolutionsGrid } from './components/SolutionsGrid';
import { MetricsSection } from './components/MetricsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { SupportModal } from './components/SupportModal';
import { SolutionItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState<boolean>(false);
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [quoteServiceId, setQuoteServiceId] = useState<string | undefined>(undefined);

  // Smooth navigation handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Scroll listener to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = ['contact', 'about', 'services', 'solutions', 'home'];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition <= top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      if (window.scrollY < 150) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuoteWithService = (serviceId?: string) => {
    setQuoteServiceId(serviceId);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fb] text-[#191c1e] font-['Inter',sans-serif]">
      {/* Top Navigation Bar */}
      <TopNavBar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteWithService()}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreServices={() => handleNavigate('services')}
          onContactSupport={() => setIsSupportModalOpen(true)}
        />

        {/* 2. Solutions Grid (3x2) */}
        <SolutionsGrid
          onSelectSolution={(sol) => setSelectedSolution(sol)}
        />

        {/* 3. Metrics Bar */}
        <MetricsSection />

        {/* 4. About Us Section */}
        <AboutSection />

        {/* 5. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialServiceId={quoteServiceId}
      />

      <ServiceDetailModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onRequestQuote={(solId) => {
          setSelectedSolution(null);
          handleOpenQuoteWithService(solId);
        }}
      />

      <SupportModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />
    </div>
  );
}
