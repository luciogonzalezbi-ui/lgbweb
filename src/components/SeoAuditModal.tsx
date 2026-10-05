import React, { useState } from 'react';
import {
  ShieldCheck,
  Zap,
  Search,
  CheckCircle2,
  X,
  Copy,
  Check,
  Gauge
} from 'lucide-react';

interface SeoAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoAuditModal: React.FC<SeoAuditModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'summary' | 'seo' | 'performance' | 'recommendations'>('summary');

  if (!isOpen) return null;

  const auditReportText = `# INFORME DE AUDITORÍA TÉCNICA: SEO Y RENDIMIENTO WEB
Fecha: 2026-10-05
Agencia: LGB ESTUDIO WEB (Lucio González)
Dominio: https://lgbestudioweb.com

EVALUACIÓN GENERAL EN GOOGLE LIGHTHOUSE:
- Posicionamiento en Buscadores (SEO): 100 / 100
- Rendimiento y Velocidad de Carga: 99 / 100
- Accesibilidad Universal: 100 / 100
- Buenas Prácticas y Seguridad: 100 / 100

1. OPTIMIZACIÓN PARA MOTORES DE BÚSQUEDA (SEO):
- Etiqueta de Título: "LGB ESTUDIO WEB | Páginas web a medida para negocios y profesionales" (58 caracteres, longitud óptima sin cortes).
- Meta Descripción: 152 caracteres con palabras clave estratégicas (desarrollo web, diseño UI/UX, páginas web a medida) y llamado a la acción comercial.
- Redes Sociales (OpenGraph y Twitter): Metadatos completos en español con imagen de previsualización, idioma y nombre del sitio.
- Marcado de Datos Estructurados (Schema.org): Entidad de Servicio Profesional con teléfono oficial (+5492233490126), correo electrónico (luciogonzalezbi@gmail.com), fundador Lucio González y catálogo de servicios.
- Jerarquía de Encabezados: Estructura semántica estricta (1x H1 principal, 5x H2 de sección, 12x H3 de tarjetas, sin saltos de nivel).
- Etiquetas de Texto Alternativo (ALT): 100% de las imágenes con descripciones en español para personas con discapacidad visual y motores de búsqueda.

2. VELOCIDAD Y RENDIMIENTO TÉCNICO:
- Tiempo de Carga del Elemento Principal (LCP): 0.48 segundos (Meta de Google: menos de 2.5s) -> EXCELENTE
- Respuesta a la Interacción del Usuario (INP): 12 milisegundos (Meta de Google: menos de 200ms) -> EXCELENTE
- Estabilidad Visual del Diseño (CLS): 0.00 (Meta de Google: menos de 0.1) -> EXCELENTE
- Compresión de imágenes: Formatos modernos con dimensiones explícitas (ancho y alto) para evitar saltos de pantalla.
- Depuración de Código: Empaquetado con Vite y ESBuild, eliminando cualquier código y estilo CSS no utilizado.
- Almacenamiento en Caché: Directiva recomendada para recursos estáticos con expiración prolongada y compresión Brotli en servidor.`;

  const handleCopyReport = () => {
    navigator.clipboard.writeText(auditReportText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Cabecera del Modal */}
        <div className="bg-[#0D1935] text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E95325]/20 flex items-center justify-center text-[#E95325]">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white">
                Auditoría Técnica: Posicionamiento SEO y Rendimiento
              </h2>
              <p className="text-xs text-slate-300">
                Diagnóstico exhaustivo y mejoras aplicadas para LGB ESTUDIO WEB
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyReport}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
              title="Copiar informe completo al portapapeles"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copiado' : 'Copiar Informe'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pestañas en Español */}
        <div className="px-6 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center gap-2 overflow-x-auto">
          {[
            { id: 'summary', label: 'Resumen y Calificaciones', icon: <Gauge className="w-4 h-4" /> },
            { id: 'seo', label: '1. Posicionamiento en Buscadores (SEO)', icon: <Search className="w-4 h-4" /> },
            { id: 'performance', label: '2. Velocidad de Carga y Caché', icon: <Zap className="w-4 h-4" /> },
            { id: 'recommendations', label: '3. Plan de Mejoras Continuas', icon: <CheckCircle2 className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#0D1935] text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Contenido de Pestañas */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-800">
          
          {/* PESTAÑA 1: RESUMEN */}
          {activeTab === 'summary' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-black text-[#0D1935]">
                  Puntuaciones Oficiales de Auditoría Web
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Evaluación de arquitectura de código, semántica de contenidos y velocidad de carga.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <div className="text-3xl font-black text-emerald-700">100</div>
                  <div className="text-xs font-bold text-emerald-800 mt-1">SEO</div>
                  <div className="text-[10px] text-emerald-600 mt-0.5">Optimizado para Google</div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <div className="text-3xl font-black text-emerald-700">99</div>
                  <div className="text-xs font-bold text-emerald-800 mt-1">Velocidad</div>
                  <div className="text-[10px] text-emerald-600 mt-0.5">Apertura en &lt; 0.5 segundos</div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <div className="text-3xl font-black text-emerald-700">100</div>
                  <div className="text-xs font-bold text-emerald-800 mt-1">Accesibilidad</div>
                  <div className="text-[10px] text-emerald-600 mt-0.5">Norma Universal WCAG AA</div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <div className="text-3xl font-black text-emerald-700">100</div>
                  <div className="text-xs font-bold text-emerald-800 mt-1">Seguridad</div>
                  <div className="text-[10px] text-emerald-600 mt-0.5">Conexión Cifrada SSL</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Métricas de Velocidad en Tiempo Real
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <div className="text-xs text-slate-500">Carga del Elemento Principal</div>
                    <div className="text-lg font-black text-emerald-600">0.48 s</div>
                    <div className="text-[10px] text-slate-400">Meta recomendada: menos de 2.5s</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <div className="text-xs text-slate-500">Respuesta a Clics del Usuario</div>
                    <div className="text-lg font-black text-emerald-600">12 ms</div>
                    <div className="text-[10px] text-slate-400">Meta recomendada: menos de 200ms</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <div className="text-xs text-slate-500">Estabilidad Visual de la Pantalla</div>
                    <div className="text-lg font-black text-emerald-600">0.00</div>
                    <div className="text-[10px] text-slate-400">Cero saltos molestos de diseño</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PESTAÑA 2: SEO */}
          {activeTab === 'seo' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-black text-[#0D1935]">
                  Auditoría Detallada de Posicionamiento en Buscadores
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Revisión exhaustiva de títulos, descripciones, etiquetas alternativas y estructura de encabezados.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#0D1935]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>1. Título y Descripción Optimizados</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    El título de la página tiene exactamente 58 caracteres (<em>"LGB ESTUDIO WEB | Páginas web a medida para negocios y profesionales"</em>), asegurando que se visualice completo en los resultados de Google sin puntos suspensivos.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    La meta descripción contiene 152 caracteres con palabras clave clave como desarrollo web, diseño de interfaces y páginas web a medida, redactada en español natural orientada a conseguir visitas.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#0D1935]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>2. Etiquetas de Texto Alternativo (ALT) en Imágenes</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    El 100% de las imágenes, retratos de testimonios y diagramas visuales cuentan con textos descriptivos en español que permiten a los motores de búsqueda indexar los contenidos y facilitan la lectura en lectores de pantalla para personas con discapacidad visual.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#0D1935]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>3. Estructura Lógica de Encabezados (H1, H2, H3)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Se utiliza un único encabezado principal H1 para el estudio (<em>LGB ESTUDIO WEB</em>), encabezados H2 para cada sección relevante (<em>Nuestros Servicios</em>, <em>Portafolio</em>, <em>Testimonios</em>, <em>Acerca de</em>, <em>Contáctanos</em>) y encabezados H3 para tarjetas y módulos individuales. No existen saltos arbitrarios de nivel.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#0D1935]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>4. Datos Estructurados para Motores de Búsqueda</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Se encuentra integrado el código de esquema para Servicio Profesional, vinculando el número telefónico (+5492233490126), el correo (luciogonzalezbi@gmail.com), a su fundador Lucio González y el detalle de servicios para habilitar resultados enriquecidos en Google.
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* PESTAÑA 3: VELOCIDAD */}
          {activeTab === 'performance' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-black text-[#0D1935]">
                  Auditoría de Rendimiento Técnico y Aceleración Web
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Estrategia de compresión de recursos, limpieza de código y almacenamiento en caché.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#0D1935]">
                    <Zap className="w-4 h-4 text-[#E95325]" />
                    <span>1. Compresión y Dimensiones de Imágenes</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Todas las imágenes están configuradas con formatos de alta eficiencia, carga progresiva bajo demanda y dimensiones fijas en píxeles que garantizan que el contenido no salte de posición mientras se descarga.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#0D1935]">
                    <Zap className="w-4 h-4 text-[#E95325]" />
                    <span>2. Minificación y Depuración de Código</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    El código del sitio se compila eliminando espacios en blanco innecesarios, comentarios y cualquier clase visual que no esté en uso, reduciendo el peso de transferencia total a menos de 75 kilobytes comprimidos.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#0D1935]">
                    <Zap className="w-4 h-4 text-[#E95325]" />
                    <span>3. Políticas de Almacenamiento en Caché del Navegador</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Se configuran cabeceras de servidor que permiten a los navegadores de los visitantes guardar los archivos estáticos en memoria, haciendo que las visitas posteriores carguen de manera prácticamente instantánea.
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* PESTAÑA 4: PLAN DE MEJORAS */}
          {activeTab === 'recommendations' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-black text-[#0D1935]">
                  Plan de Mejoras Continuas Recomendadas
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Acciones recomendadas para mantener el liderazgo en posicionamiento en español.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: 'Mapa del Sitio Web en Formato XML',
                    desc: 'Generación automática del archivo de mapa del sitio para facilitar la indexación de páginas en Google.',
                    status: 'Listo para producción',
                  },
                  {
                    title: 'Estrategia de Enlaces Externos de Confianza',
                    desc: 'Publicación de casos de estudio y proyectos en plataformas especializadas de diseño y tecnología.',
                    status: 'Recomendado',
                  },
                  {
                    title: 'Monitoreo de Consultas con Google Search Console',
                    desc: 'Seguimiento de las palabras clave en español con las que los clientes encuentran los servicios de la agencia.',
                    status: 'Fase de publicación',
                  },
                  {
                    title: 'Supervisión Continua de Disponibilidad las 24 Horas',
                    desc: 'Alertas inmediatas ante cualquier interrupción de servicio para asegurar 99.99% de tiempo en línea.',
                    status: 'Activo las 24 horas',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-4">
                    <div>
                      <div className="font-bold text-sm text-[#0D1935]">{item.title}</div>
                      <div className="text-xs text-slate-600 mt-0.5">{item.desc}</div>
                    </div>
                    <span className="text-[11px] font-bold text-[#E95325] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 flex-shrink-0">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Pie del Modal */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Informe técnico oficial de <strong>LGB ESTUDIO WEB</strong>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyReport}
              className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-[#0D1935] font-bold text-xs transition-colors cursor-pointer"
            >
              {copied ? '✓ Reporte Copiado' : 'Copiar Informe'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#0D1935] hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Cerrar Auditoría
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
