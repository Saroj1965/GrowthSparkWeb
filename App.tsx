import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroPillars } from './components/IntroPillars';
import { ServicesSection } from './components/ServicesSection';
import { PhilosophySection } from './components/PhilosophySection';
import { HowIWorkSection } from './components/HowIWorkSection';
import { WhoIHelpSection } from './components/WhoIHelpSection';
import { WhyUsSection } from './components/WhyUsSection';
import { InteractiveNeedsSection } from './components/InteractiveNeedsSection';
import { AboutSection } from './components/AboutSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServicePrefill, setSelectedServicePrefill] = useState<string | undefined>(undefined);
  const [selectedNeedPrefill, setSelectedNeedPrefill] = useState<string | undefined>(undefined);

  const scrollToContact = (serviceName?: string, needText?: string) => {
    if (serviceName) setSelectedServicePrefill(serviceName);
    if (needText) setSelectedNeedPrefill(needText);

    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-sky-500/20 selection:text-sky-900">
      {/* Sticky Navigation Bar */}
      <Navbar onNavigateToContact={() => scrollToContact()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onNavigateToContact={() => scrollToContact()}
          onExploreServices={scrollToServices}
          onSelectServiceNode={(serviceId) => {
            scrollToServices();
          }}
        />

        {/* 2. Introduction & 4 Pillars (Build, Organize, Execute, Grow) */}
        <IntroPillars />

        {/* 3. Core Services Section (7 Interactive Cards + Modal Details) */}
        <ServicesSection
          onSelectForContact={(serviceName) => scrollToContact(serviceName)}
        />

        {/* 4. "The Way I Think" Philosophy Section (6-Step Visual Process) */}
        <PhilosophySection />

        {/* 5. How I Work Section (5-Step Timeline) */}
        <HowIWorkSection onStartProject={() => scrollToContact('General Scoping & Step 01 Discovery')} />

        {/* 6. Who I Help Section (Founders, Entrepreneurs, Startups, etc.) */}
        <WhoIHelpSection
          onSelectPersona={(personaTitle) =>
            scrollToContact(undefined, `I am a ${personaTitle} seeking execution support`)
          }
        />

        {/* 7. Why GrowthSparkWeb (4 Differentiators) */}
        <WhyUsSection />

        {/* 8. Interactive "What Are You Trying to Get Done?" Matcher */}
        <InteractiveNeedsSection
          onSelectNeedForContact={(needQuestion, serviceName) =>
            scrollToContact(serviceName, needQuestion)
          }
        />

        {/* 9. About Section */}
        <AboutSection />

        {/* 10. Call-To-Action Banner */}
        <CTASection
          onContactClick={() => scrollToContact()}
          onServicesClick={scrollToServices}
        />

        {/* 11. Contact Section with Form Validation & Placeholders */}
        <ContactSection
          initialServicePrefill={selectedServicePrefill}
          initialNeedPrefill={selectedNeedPrefill}
        />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
