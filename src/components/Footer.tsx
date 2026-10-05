import React, { useState } from 'react';
import { Logo } from './Logo.tsx';
import { Github, Linkedin, Twitter, Instagram, ArrowUp, X, Shield, Phone, Mail, Globe } from 'lucide-react';

interface FooterProps {
  onOpenSeoAudit?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSeoAudit }) => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const openLegalModal = (title: string, content: string) => {
    setModalTitle(title);
    setModalContent(content);
    setPrivacyModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D1935] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="dark" size="md" onClick={scrollToTop} />
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed pt-2">
              Páginas web a medida para negocios y profesionales. Creamos activos digitales 
              de alto impacto visual, código limpio y rendimiento técnico inigualable.
            </p>
            
            <div className="space-y-2 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E95325]" />
                <a href="mailto:luciogonzalezbi@gmail.com" className="hover:text-[#E95325] transition-colors">
                  luciogonzalezbi@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                <a
                  href="https://wa.me/5492233490126"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  +54 9 223 349-0126 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Servicio 100% Remoto para todo el mundo</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#E95325] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn de LGB Estudio Web"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#E95325] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram de LGB Estudio Web"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#E95325] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub de LGB Estudio Web"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-[#E95325] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#E95325] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portafolio" className="hover:text-[#E95325] transition-colors">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-[#E95325] transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#acerca-de" className="hover:text-[#E95325] transition-colors">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#E95325] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Especialidades & Auditoría SEO */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E95325]" />
                <span>Desarrollo Web Personalizado</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span>Diseño de Interfaces en Figma</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Mantenimiento y Velocidad de Carga</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>Tiendas en Línea con Cobros Seguros</span>
              </li>
            </ul>

            {onOpenSeoAudit && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenSeoAudit}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#E95325] text-xs font-bold text-white transition-colors cursor-pointer"
                >
                  <span>Ver Auditoría de Posicionamiento y Rendimiento</span>
                </button>
              </div>
            )}

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Volver al inicio</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="text-center sm:text-left">
            © 2023 LGB ESTUDIO WEB. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() =>
                openLegalModal(
                  'Política de Privacidad',
                  'En LGB ESTUDIO WEB nos comprometemos a garantizar la total confidencialidad de los datos personales proporcionados a través de nuestros formularios y canales de contacto. Lucio González utiliza tu información exclusivamente para evaluar requerimientos técnicos y comerciales. Puedes comunicarte directamente al correo luciogonzalezbi@gmail.com o al teléfono +54 9 223 349-0126.'
                )
              }
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              type="button"
              onClick={() =>
                openLegalModal(
                  'Términos y Condiciones',
                  'El uso de este sitio web y los servicios ofrecidos por LGB ESTUDIO WEB se rigen bajo contratos personalizados de desarrollo y diseño web acordados directamente con Lucio González. Todos los proyectos incluyen garantías de funcionalidad, optimización técnica y soporte continuo.'
                )
              }
              className="hover:text-white transition-colors cursor-pointer"
            >
              Términos de Servicio
            </button>
          </div>

        </div>

      </div>

      {/* Legal Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white text-slate-900 w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-[#0D1935] text-white">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#E95325]" />
                <h3 className="font-bold text-base">{modalTitle}</h3>
              </div>
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 text-sm text-slate-600 leading-relaxed space-y-4">
              <p>{modalContent}</p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500">
                LGB ESTUDIO WEB · Lucio González · luciogonzalezbi@gmail.com
              </div>
            </div>
            <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#0D1935] text-white font-semibold text-xs hover:bg-slate-800 cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
