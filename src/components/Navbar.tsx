import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Menu, X, ArrowUpRight, Gauge, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  onOpenSeoAudit: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onContactClick,
  onOpenSeoAudit,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Servicios', href: '#servicios', id: 'servicios' },
    { name: 'Portafolio', href: '#portafolio', id: 'portafolio' },
    { name: 'Testimonios', href: '#testimonios', id: 'testimonios' },
    { name: 'Acerca de', href: '#acerca-de', id: 'acerca-de' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-xs py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with squircle browser icon, orange L, white pill & LGB ESTUDIO WEB */}
          <Logo
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            size="md"
          />

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative text-sm font-semibold transition-colors duration-200 py-1 ${
                      isActive
                        ? 'text-[#E95325]'
                        : 'text-[#0D1935]/80 hover:text-[#0D1935]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E95325] rounded-full animate-in fade-in duration-300" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Actions: SEO Audit and Prominent Contact */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <button
                type="button"
                onClick={onOpenSeoAudit}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:text-[#0D1935] hover:bg-slate-100 transition-colors cursor-pointer"
                title="Ver informe de Auditoría SEO y Rendimiento"
              >
                <Gauge className="w-3.5 h-3.5 text-[#E95325]" />
                <span>Auditoría Web</span>
              </button>

              <button
                type="button"
                onClick={onContactClick}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E95325] hover:bg-[#D4471B] text-white text-sm font-bold shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Contáctanos</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenSeoAudit}
              className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Auditoría Web"
            >
              <Gauge className="w-5 h-5 text-[#E95325]" />
            </button>
            <button
              type="button"
              onClick={onContactClick}
              className="px-3.5 py-1.5 rounded-lg bg-[#E95325] text-white text-xs font-bold cursor-pointer"
            >
              Contacto
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2 rounded-lg text-base font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'bg-orange-50 text-[#E95325]'
                    : 'text-[#0D1935] hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSeoAudit();
              }}
              className="w-full flex items-center justify-start gap-2 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 text-sm font-bold cursor-pointer"
            >
              <Gauge className="w-4 h-4 text-[#E95325]" />
              <span>Ver Auditoría de Rendimiento y SEO</span>
            </button>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E95325] hover:bg-[#D4471B] text-white text-base font-bold shadow-sm transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Contáctanos</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
