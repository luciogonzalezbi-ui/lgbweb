import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

interface CtaSectionProps {
  onContactClick: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onContactClick }) => {
  return (
    <section className="py-20 md:py-24 bg-[#0D1935] text-white relative overflow-hidden">
      {/* Subtle brand dots decoration in top corners */}
      <div className="absolute top-8 left-8 flex items-center gap-2 opacity-30">
        <span className="w-2.5 h-2.5 rounded-full bg-[#E95325]" />
        <span className="w-2.5 h-2.5 rounded-full bg-white" />
        <span className="w-2.5 h-2.5 rounded-full bg-white" />
      </div>

      {/* Decorative gradient glow matching brand colors */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E95325]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Title exactly as requested */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          ¿Listo para llevar tu negocio al siguiente nivel digital?
        </h2>

        {/* Supporting description */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Diseñamos páginas web que generan confianza, atraen clientes cualificados 
          y posicionan tu marca con la máxima solvencia profesional.
        </p>

        {/* Big clear orange button exactly as requested */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onContactClick}
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-[#E95325] hover:bg-[#D4471B] text-white text-lg sm:text-xl font-black shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <span>¡Hablemos de tu proyecto!</span>
            <ArrowRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1.5" />
          </button>
        </div>

        {/* Zero-Pill compliant reassurance */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400 font-medium pt-4">
          <span>Respuesta garantizada en menos de 24 horas</span>
          <span aria-hidden="true">·</span>
          <span>Presupuesto personalizado sin compromiso</span>
          <span aria-hidden="true">·</span>
          <span>Atención directa de especialistas</span>
        </div>

      </div>
    </section>
  );
};
