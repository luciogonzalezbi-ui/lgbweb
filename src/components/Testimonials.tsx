import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, LayoutGrid, SlidersHorizontal } from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  highlightMetric: string;
  projectType: string;
}

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  const testimonials: Testimonial[] = [
    {
      id: 'mariana-rossi',
      name: 'Mariana Rossi',
      role: 'Directora de Comunicación y Marketing',
      company: 'Nexora Global',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&h=256&q=80',
      quote: 'El rediseño de nuestro portal corporativo por parte de Lucio y el equipo de LGB Estudio Web superó todas nuestras expectativas. Logramos reducir el tiempo de carga a menos de medio segundo y nuestras solicitudes de cotización aumentaron un 140% en los primeros tres meses.',
      rating: 5,
      highlightMetric: '+140% Solicitudes de Cotización',
      projectType: 'Portal Corporativo',
    },
    {
      id: 'carlos-mendez',
      name: 'Carlos Méndez',
      role: 'Fundador y Director General',
      company: 'Tienda Aura',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80',
      quote: 'Buscábamos una tienda en línea que transmitiera la exclusividad de nuestros productos. El trabajo de diseño de interfaz y la integración técnica de cobros sin demoras nos permitió triplicar las ventas desde teléfonos móviles. Atención impecable de principio a fin.',
      rating: 5,
      highlightMetric: '+210% Ventas Concretadas',
      projectType: 'Tienda en Línea a Medida',
    },
    {
      id: 'sofia-valenzuela',
      name: 'Dra. Sofía Valenzuela',
      role: 'Directora de Operaciones Médicas',
      company: 'Clínica Salud',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&h=256&q=80',
      quote: 'La plataforma de reserva de citas médicas desarrollada a medida resolvió un cuello de botella histórico en nuestra clínica. Ahora los pacientes reservan turnos en segundos, el sistema nunca falla y la asistencia técnica las 24 horas ha sido impecable.',
      rating: 5,
      highlightMetric: '-45% Reducción de Inasistencias',
      projectType: 'Plataforma Médica Digital',
    },
    {
      id: 'martin-albarracin',
      name: 'Arq. Martín Albarracín',
      role: 'Socio Director de Proyectos',
      company: 'Vanguard Arquitectos',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80',
      quote: 'Tener un sitio web que refleje la pureza estética de nuestras obras arquitectónicas era fundamental. El minimalismo visual y la velocidad con la que cargan las fotografías y planos de alta resolución es sencillamente brillante.',
      rating: 5,
      highlightMetric: '100% Velocidad de Apertura',
      projectType: 'Portafolio de Arquitectura',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying || viewMode !== 'carousel') return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, viewMode, testimonials.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#E95325]">
              <span className="w-2 h-2 rounded-full bg-[#E95325]" />
              <span>Experiencias Reales</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D1935] tracking-tight">
              Testimonios de Clientes
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl">
              Conoce la opinión de empresas y profesionales que confiaron el desarrollo de sus páginas web a LGB ESTUDIO WEB.
            </p>
          </div>

          {/* Alternador de vista */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-white text-[#0D1935] shadow-xs'
                    : 'text-slate-600 hover:text-[#0D1935]'
                }`}
                title="Vista en Carrusel"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Carrusel</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#0D1935] shadow-xs'
                    : 'text-slate-600 hover:text-[#0D1935]'
                }`}
                title="Vista en Cuadrícula"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Ver Todos</span>
              </button>
            </div>
          </div>
        </div>

        {/* VISTA EN CARRUSEL */}
        {viewMode === 'carousel' ? (
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#FAFAFC] border-2 border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-sm relative transition-all duration-300">
                <div className="absolute top-8 right-8 text-slate-200 pointer-events-none">
                  <Quote className="w-16 h-16 stroke-[1.5]" />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-2 text-xs font-bold text-slate-700">5.0 de 5 estrellas</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D1935] bg-white px-3 py-1 rounded-md border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>{testimonials[currentIndex].highlightMetric}</span>
                  </div>
                </div>

                <blockquote className="text-lg sm:text-xl md:text-2xl text-[#0D1935] font-medium leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={`Fotografía de ${testimonials[currentIndex].name}, ${testimonials[currentIndex].role} en ${testimonials[currentIndex].company}`}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm ring-2 ring-[#E95325]/30"
                      loading="lazy"
                      width={56}
                      height={56}
                    />
                    <div>
                      <h4 className="text-lg font-bold text-[#0D1935]">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium">
                        {testimonials[currentIndex].role} · <strong className="text-[#0D1935]">{testimonials[currentIndex].company}</strong>
                      </p>
                      <div className="text-[11px] font-medium text-[#E95325] mt-0.5">
                        Proyecto desarrollado: {testimonials[currentIndex].projectType}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="p-2.5 rounded-full border border-slate-300 hover:border-[#0D1935] hover:bg-[#0D1935] hover:text-white transition-all cursor-pointer text-slate-700"
                      aria-label="Ver testimonio anterior"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="p-2.5 rounded-full border border-slate-300 hover:border-[#0D1935] hover:bg-[#0D1935] hover:text-white transition-all cursor-pointer text-slate-700"
                      aria-label="Ver testimonio siguiente"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </div>

              <div className="flex items-center justify-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx
                        ? 'w-8 bg-[#E95325]'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Ir al testimonio número ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* VISTA EN CUADRÍCULA */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAFAFC] border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#0D1935] bg-white px-2.5 py-0.5 rounded border border-slate-200">
                      {item.highlightMetric}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={`Fotografía de ${item.name}`}
                    className="w-12 h-12 rounded-full object-cover border border-slate-200"
                    loading="lazy"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#0D1935]">{item.name}</h4>
                    <p className="text-xs text-slate-500">
                      {item.role} · <strong className="text-slate-700">{item.company}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
