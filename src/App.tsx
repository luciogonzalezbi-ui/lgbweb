import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { About } from './components/About.tsx';
import { CostEstimator } from './components/CostEstimator.tsx';
import { CtaSection } from './components/CtaSection.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ChatBot } from './components/ChatBot.tsx';
import { SeoAuditModal } from './components/SeoAuditModal.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [contactInitialMessage, setContactInitialMessage] = useState<string>('');
  const [contactInitialService, setContactInitialService] = useState<string>('');
  const [isSeoAuditOpen, setIsSeoAuditOpen] = useState<boolean>(false);

  // Scrollspy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'portafolio', 'testimonios', 'acerca-de', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (service?: string, customNote?: string) => {
    if (service) {
      setContactInitialService(service);
    }
    if (customNote) {
      setContactInitialMessage(customNote);
    }
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'seo-audit') {
      setIsSeoAuditOpen(true);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0D1935] selection:bg-[#E95325] selection:text-white">
      {/* Fixed Navigation Header */}
      <Navbar
        onContactClick={() => scrollToContact()}
        onOpenSeoAudit={() => setIsSeoAuditOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onContactClick={() => scrollToContact()}
          onExploreWorkClick={() => scrollToSection('portafolio')}
        />

        {/* Services Section */}
        <Services
          onSelectService={(serviceTitle) => {
            scrollToContact(serviceTitle, `Hola Lucio, me interesa consultar por el servicio de "${serviceTitle}".`);
          }}
        />

        {/* Portfolio Section */}
        <Portfolio
          onQuoteSimilar={(projectName) => {
            scrollToContact('Desarrollo Web', `Hola Lucio, he visto el proyecto "${projectName}" en el portafolio y me gustaría cotizar una web similar.`);
          }}
        />

        {/* Testimonials Section */}
        <Testimonials />

        {/* About Section */}
        <About
          onContactClick={() => scrollToContact()}
        />

        {/* Interactive Cost Estimator */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CostEstimator
              onApplyEstimate={(summaryText) => {
                scrollToContact('Cotización Calculadora', summaryText);
              }}
            />
          </div>
        </section>

        {/* Dark Navy CTA Section */}
        <CtaSection
          onContactClick={() => scrollToContact()}
        />

        {/* Contact Form Section */}
        <Contact
          initialMessage={contactInitialMessage}
          initialService={contactInitialService}
        />
      </main>

      {/* Footer */}
      <Footer onOpenSeoAudit={() => setIsSeoAuditOpen(true)} />

      {/* 24/7 Customer Service Bot */}
      <ChatBot onNavigateToSection={scrollToSection} />

      {/* SEO & Performance Technical Audit Modal */}
      <SeoAuditModal
        isOpen={isSeoAuditOpen}
        onClose={() => setIsSeoAuditOpen(false)}
      />
    </div>
  );
}
