import React, { useState } from 'react';
import { Eye, X, CheckCircle2, ArrowRight } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Tiendas en Línea' | 'Sitios Corporativos' | 'Aplicaciones Web' | 'Páginas de Aterrizaje';
  description: string;
  fullStory: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  previewUrl: string;
  mockupBg: string;
}

interface PortfolioProps {
  onQuoteSimilar: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onQuoteSimilar }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Todos', 'Tiendas en Línea', 'Sitios Corporativos', 'Aplicaciones Web', 'Páginas de Aterrizaje'];

  const projects: Project[] = [
    {
      id: 'nexora-logistics',
      title: 'Nexora Global',
      client: 'Nexora Transporte y Logística',
      category: 'Sitios Corporativos',
      description: 'Portal corporativo y sistema de seguimiento de envíos internacionales en tiempo real.',
      fullStory: 'Diseñamos una experiencia web corporativa de máxima solidez para una compañía de transporte internacional. Incluye mapa interactivo de rutas, cotizador automático de carga y panel de seguimiento para clientes empresariales.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Conexión con APIs'],
      metrics: [
        { label: 'Tiempo de apertura', value: '0.45s' },
        { label: 'Aumento en cotizaciones', value: '+140%' },
        { label: 'Puntuación en Google', value: '100/100' }
      ],
      accentColor: '#FF6B00',
      previewUrl: 'https://nexora-logistics.ejemplo',
      mockupBg: 'bg-gradient-to-br from-slate-900 to-[#0F1D36]'
    },
    {
      id: 'aura-boutique',
      title: 'Tienda Aura',
      client: 'Aura Moda y Diseño Sostenible',
      category: 'Tiendas en Línea',
      description: 'Comercio electrónico con catálogo interactivo y cobro ágil sin fricciones.',
      fullStory: 'Tienda en línea minimalista enfocada en la presentación visual de productos. Simplificamos el proceso de pago a solo 2 pasos, incrementando notablemente las ventas desde teléfonos móviles.',
      tags: ['Tienda en Línea', 'Pasarela de Pagos', 'Diseño en Figma', 'Catálogo Dinámico'],
      metrics: [
        { label: 'Efectividad de compra', value: '+3.8%' },
        { label: 'Fidelidad de usuarios', value: '72%' },
        { label: 'Carga en teléfonos', value: '0.6s' }
      ],
      accentColor: '#EF4444',
      previewUrl: 'https://auraboutique.ejemplo',
      mockupBg: 'bg-gradient-to-br from-stone-800 to-amber-950'
    },
    {
      id: 'fintrack-saas',
      title: 'FinTrack Finanzas',
      client: 'FinTrack Servicios Financieros',
      category: 'Aplicaciones Web',
      description: 'Plataforma web financiera con paneles analíticos interactivos y reportes periódicos.',
      fullStory: 'Aplicación web con visualización de datos en tiempo real, gráficos interactivos y sincronización de cuentas bancarias bajo un entorno de máxima seguridad y cifrado.',
      tags: ['Aplicación Web', 'Gráficos Analíticos', 'Acceso Seguro', 'Código Moderno'],
      metrics: [
        { label: 'Usuarios activos', value: '+25.000' },
        { label: 'Disponibilidad anual', value: '99.99%' },
        { label: 'Satisfacción de clientes', value: '98%' }
      ],
      accentColor: '#10B981',
      previewUrl: 'https://fintrackpro.ejemplo',
      mockupBg: 'bg-gradient-to-br from-emerald-950 to-slate-900'
    },
    {
      id: 'klinik-salud',
      title: 'Clínica Médica Integral',
      client: 'Grupo Sanitario Klinik',
      category: 'Sitios Corporativos',
      description: 'Portal institucional de salud y sistema automatizado de reservas médicas online.',
      fullStory: 'Plataforma web con reserva de turnos sincronizada con las agendas de los médicos especialistas y acceso protegido a estudios e historiales para pacientes.',
      tags: ['Salud Digital', 'Accesibilidad Universal', 'Reserva de Citas', 'Seguridad de Datos'],
      metrics: [
        { label: 'Citas por internet', value: '+210%' },
        { label: 'Reducción de inasistencias', value: '-45%' },
        { label: 'Nivel de accesibilidad', value: 'AAA' }
      ],
      accentColor: '#38BDF8',
      previewUrl: 'https://kliniksalud.ejemplo',
      mockupBg: 'bg-gradient-to-br from-sky-950 to-slate-900'
    },
    {
      id: 'artisan-roastery',
      title: 'Cafetería Artisan',
      client: 'Tostaduría de Café Artisan',
      category: 'Páginas de Aterrizaje',
      description: 'Página de lanzamiento para suscripciones de café artesanal y franquicias.',
      fullStory: 'Página de captación con animaciones sutiles, historia de marca e integración directa con WhatsApp para contacto inmediato con inversores y clientes.',
      tags: ['Página de Captación', 'Diseño Atractivo', 'WhatsApp Directo', 'Venta Rápida'],
      metrics: [
        { label: 'Tasa de contacto', value: '18.4%' },
        { label: 'Tiempo en la página', value: '3m 42s' },
        { label: 'Costo por contacto', value: '-60%' }
      ],
      accentColor: '#F59E0B',
      previewUrl: 'https://artisancafe.ejemplo',
      mockupBg: 'bg-gradient-to-br from-amber-900 to-stone-900'
    },
    {
      id: 'arq-estudio',
      title: 'Estudio de Arquitectura Vanguard',
      client: 'Vanguard Arquitectos Asociados',
      category: 'Páginas de Aterrizaje',
      description: 'Muestra visual minimalista para estudio de arquitectura y visualización tridimensional.',
      fullStory: 'Sitio web ultra limpio donde la fotografía de proyectos y obras es la protagonista, con carga progresiva para mantener la máxima fidelidad sin demoras de apertura.',
      tags: ['Portafolio Visual', 'Diseño Minimalista', 'Optimización de Imágenes', 'SEO'],
      metrics: [
        { label: 'Reconocimientos de diseño', value: '2' },
        { label: 'Proyectos cotizados', value: '+35' },
        { label: 'Velocidad de carga', value: '100%' }
      ],
      accentColor: '#FF6B00',
      previewUrl: 'https://vanguardarq.ejemplo',
      mockupBg: 'bg-gradient-to-br from-zinc-900 to-slate-800'
    }
  ];

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portafolio" className="py-20 md:py-28 bg-[#FAFAFB] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#E95325]">
              <span className="w-2 h-2 rounded-full bg-[#E95325]" />
              <span>Casos de Éxito</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D1935] tracking-tight">
              Portafolio de Proyectos
            </h2>
            <p className="text-base text-slate-600 max-w-xl">
              Explora una selección de sitios web y aplicaciones desarrolladas por LGB ESTUDIO WEB con foco en rendimiento y resultados comerciales.
            </p>
          </div>

          {/* Pestañas de Filtro en Español */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/70 rounded-xl max-w-full">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeCategory === category
                    ? 'bg-white text-[#0D1935] shadow-xs'
                    : 'text-slate-600 hover:text-[#0D1935]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Cuadrícula de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cabecera Visual */}
                <div className={`relative h-52 ${project.mockupBg} p-5 flex flex-col justify-between text-white overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  {/* Simulación de Navegador */}
                  <div className="relative z-10 w-full bg-slate-900/60 backdrop-blur-sm rounded-lg p-2.5 border border-white/10 shadow-lg">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-300 truncate max-w-[140px]">
                        {project.previewUrl.replace('https://', '')}
                      </span>
                      <div className="w-2 h-2" />
                    </div>

                    <div className="space-y-1.5 py-1">
                      <div className="w-1/2 h-2 rounded bg-white/40" />
                      <div className="w-3/4 h-1.5 rounded bg-white/20" />
                      <div className="flex gap-1 pt-1">
                        <div className="w-10 h-3 rounded" style={{ backgroundColor: project.accentColor }} />
                        <div className="w-8 h-3 rounded bg-white/10" />
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-xs text-white/90 font-semibold">
                    <span className="tracking-wide uppercase">{project.category}</span>
                    <span className="text-white/60">LGB Estudio Web</span>
                  </div>
                </div>

                {/* Cuerpo de la Tarjeta */}
                <div className="p-6">
                  <div className="mb-2">
                    <h3 className="text-xl font-black text-[#0D1935] group-hover:text-[#E95325] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Cliente: {project.client}</p>
                  </div>

                  <p className="text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-1 text-xs text-slate-500 font-medium mb-4">
                    {project.tags.map((tag, idx) => (
                      <React.Fragment key={tag}>
                        {idx > 0 && <span className="text-slate-300">·</span>}
                        <span>{tag}</span>
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">{project.metrics[0].label}</span>
                    <span className="font-bold text-[#0D1935]">{project.metrics[0].value}</span>
                  </div>
                </div>
              </div>

              {/* Botón de la Tarjeta */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-50 hover:bg-[#0D1935] text-[#0D1935] hover:text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ver detalles del proyecto</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Ventana de Detalles del Proyecto */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-[#0F1D36] text-white">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                </div>
                <h3 className="font-bold text-base">{selectedProject.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <span>{selectedProject.category}</span>
                  <span>·</span>
                  <span>{selectedProject.client}</span>
                </div>
                <h2 className="text-2xl font-black text-[#0D1935]">{selectedProject.title}</h2>
                <p className="text-base text-slate-600 mt-2 leading-relaxed">
                  {selectedProject.fullStory}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Resultados Clave Obtenidos
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedProject.metrics.map((metric, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-2xl font-black text-[#0D1935]">{metric.value}</div>
                      <div className="text-xs font-medium text-slate-500 mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Especialidades y Código Aplicado
                </h4>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded bg-slate-100 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Cerrar
              </button>
              <button
                type="button"
                onClick={() => {
                  const projName = selectedProject.title;
                  setSelectedProject(null);
                  onQuoteSimilar(projName);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#E95325] hover:bg-[#D4471B] text-white font-bold text-sm shadow-sm transition-colors cursor-pointer"
              >
                <span>Cotizar un proyecto similar en dólares</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
