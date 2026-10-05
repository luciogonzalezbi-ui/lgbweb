import React, { useState } from 'react';
import {
  ArrowRight,
  Code2,
  Layers,
  Monitor,
  Tablet,
  Smartphone,
  CheckCircle2,
  Zap,
  Eye
} from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onExploreWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreWorkClick }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeInspector, setActiveInspector] = useState<string>('hero');
  const [wireframeMode, setWireframeMode] = useState<boolean>(true);

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAFAFC]">
      {/* Patrón de puntos de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

      {/* Resplandor ambiental de marca */}
      <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[450px] h-[450px] bg-[#0D1935]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* COLUMNA IZQUIERDA: Tipografía y Contenido Principal */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Indicador de Agencia */}
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-[#0D1935]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E95325]" />
              <span>ESTUDIO DE DESARROLLO Y DISEÑO WEB</span>
            </div>

            {/* Titular Principal: LGB ESTUDIO WEB */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0D1935] tracking-tight leading-[1.08]">
                LGB{' '}
                <span className="text-[#E95325] block sm:inline">ESTUDIO WEB</span>
              </h1>

              {/* Eslogan de la imagen */}
              <p className="text-xl sm:text-2xl font-bold text-[#3E4C5E] tracking-tight pt-1">
                Páginas web a medida para negocios y profesionales
              </p>
            </div>

            {/* Párrafo explicativo */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Creamos experiencias digitales exclusivas, con diseño limpio, velocidad de carga 
              excepcional y optimizadas para convertir visitantes en clientes reales.
            </p>

            {/* Botones de llamada a la acción */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onContactClick}
                className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-[#E95325] hover:bg-[#D4471B] text-white text-base font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>¡Hablemos de tu proyecto!</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onExploreWorkClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-[#0D1935] text-[#0D1935] hover:bg-[#0D1935] hover:text-white text-base font-bold transition-all duration-200 cursor-pointer"
              >
                <span>Ver Portafolio</span>
              </button>
            </div>

            {/* Pilares de Confianza */}
            <div className="pt-4 border-t border-slate-200">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm font-semibold text-slate-600">
                <span className="inline-flex items-center gap-1.5 text-[#0D1935]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Código 100% a medida</span>
                </span>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5 text-[#0D1935]">
                  <Zap className="w-4 h-4 text-[#E95325]" />
                  <span>Velocidad y Posicionamiento SEO</span>
                </span>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5 text-[#0D1935]">
                  <CheckCircle2 className="w-4 h-4 text-[#0D1935]" />
                  <span>Atención directa de Lucio</span>
                </span>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: Ilustración Gráfica de Diseño Web */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden transition-all duration-300">
              
              {/* Barra superior de la ventana del navegador */}
              <div className="bg-[#0D1935] text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E95325]" />
                  <div className="w-3 h-3 rounded-full bg-white" />
                  <div className="w-3 h-3 rounded-full bg-white/70" />
                  <span className="ml-2 text-xs font-mono text-slate-300 hidden sm:inline">
                    lgbestudioweb.com/vista-previa
                  </span>
                </div>

                {/* Alternador de dispositivos */}
                <div className="flex items-center gap-1 bg-[#070D1B] p-1 rounded-lg border border-slate-700/60">
                  <button
                    type="button"
                    onClick={() => setDeviceView('desktop')}
                    className={`p-1.5 rounded cursor-pointer transition-colors ${
                      deviceView === 'desktop' ? 'bg-[#E95325] text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Vista de Computadora"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeviceView('tablet')}
                    className={`p-1.5 rounded cursor-pointer transition-colors ${
                      deviceView === 'tablet' ? 'bg-[#E95325] text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Vista de Tableta"
                  >
                    <Tablet className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeviceView('mobile')}
                    className={`p-1.5 rounded cursor-pointer transition-colors ${
                      deviceView === 'mobile' ? 'bg-[#E95325] text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Vista de Teléfono"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Alternador de modo */}
                <button
                  type="button"
                  onClick={() => setWireframeMode(!wireframeMode)}
                  className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer transition-colors"
                >
                  <Eye className="w-3 h-3 text-[#E95325]" />
                  <span className="hidden sm:inline">
                    {wireframeMode ? 'Modo Boceto' : 'Modo Color'}
                  </span>
                </button>
              </div>

              {/* Área del lienzo de diseño */}
              <div className="p-4 sm:p-6 bg-slate-100/70 min-h-[380px] flex justify-center items-start transition-all duration-300">
                <div
                  className={`transition-all duration-500 bg-white border border-slate-300/80 rounded-xl shadow-xs overflow-hidden ${
                    deviceView === 'desktop'
                      ? 'w-full'
                      : deviceView === 'tablet'
                      ? 'w-[75%]'
                      : 'w-[50%]'
                  }`}
                >
                  {/* Navegación simulada */}
                  <div className="px-4 py-2.5 border-b border-slate-200 flex items-center justify-between bg-white">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#0D1935] flex items-center justify-center">
                        <span className="text-[10px] font-black text-[#E95325]">L</span>
                      </div>
                      <div className="w-14 h-2 rounded bg-slate-700" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-1.5 rounded bg-slate-200 hidden sm:block" />
                      <div className="w-6 h-1.5 rounded bg-slate-200 hidden sm:block" />
                      <div className="w-12 h-4 rounded bg-[#E95325]" />
                    </div>
                  </div>

                  {/* Bloque principal simulado */}
                  <div
                    onClick={() => setActiveInspector('hero')}
                    className={`p-4 border-b border-dashed border-slate-200 cursor-pointer transition-all ${
                      activeInspector === 'hero'
                        ? 'bg-orange-50/50 ring-1 ring-[#E95325]/50'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="w-16 h-2 rounded bg-orange-200" />
                        <div className="w-4/5 h-4 sm:h-5 rounded bg-[#0D1935]" />
                        <div className="w-3/5 h-2.5 rounded bg-slate-400" />
                        <div className="flex items-center gap-2 pt-1.5">
                          <div className="w-20 h-5 rounded bg-[#E95325]" />
                          <div className="w-14 h-5 rounded border border-slate-300 bg-white" />
                        </div>
                      </div>

                      {/* Elemento gráfico geométrico */}
                      <div className="w-20 h-16 sm:w-24 sm:h-20 rounded-lg border-2 border-dashed border-slate-300 flex flex-col items-center justify-center bg-slate-50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/60 to-blue-100/40" />
                        <Layers className="w-6 h-6 text-[#E95325] relative z-10" />
                        <span className="text-[9px] font-bold text-[#0D1935] relative z-10 mt-1">DISEÑO</span>
                      </div>
                    </div>
                  </div>

                  {/* Cuadrícula de 3 servicios */}
                  <div
                    onClick={() => setActiveInspector('services')}
                    className={`p-4 cursor-pointer transition-all ${
                      activeInspector === 'services'
                        ? 'bg-blue-50/50 ring-1 ring-[#0D1935]/40'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-24 h-2 rounded bg-slate-700 mb-3" />
                    <div
                      className={`grid gap-2 sm:gap-3 ${
                        deviceView === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'
                      }`}
                    >
                      <div className="p-2.5 rounded border border-slate-200 bg-white space-y-1.5">
                        <div className="w-5 h-5 rounded bg-[#E95325]/15 text-[#E95325] flex items-center justify-center text-[10px] font-bold">
                          &lt;/&gt;
                        </div>
                        <div className="w-12 h-1.5 rounded bg-slate-800" />
                        <div className="w-full h-1 rounded bg-slate-200" />
                        <div className="w-3/4 h-1 rounded bg-slate-200" />
                      </div>

                      <div className="p-2.5 rounded border border-slate-200 bg-white space-y-1.5">
                        <div className="w-5 h-5 rounded bg-amber-100 text-amber-600 flex items-center justify-center text-[10px] font-bold">
                          ❖
                        </div>
                        <div className="w-12 h-1.5 rounded bg-slate-800" />
                        <div className="w-full h-1 rounded bg-slate-200" />
                        <div className="w-4/5 h-1 rounded bg-slate-200" />
                      </div>

                      <div className="p-2.5 rounded border border-slate-200 bg-white space-y-1.5">
                        <div className="w-5 h-5 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">
                          ⚡
                        </div>
                        <div className="w-12 h-1.5 rounded bg-slate-800" />
                        <div className="w-full h-1 rounded bg-slate-200" />
                        <div className="w-2/3 h-1 rounded bg-slate-200" />
                      </div>
                    </div>
                  </div>

                  {/* Barra inferior simulada */}
                  <div className="p-3 bg-[#0D1935] text-white flex items-center justify-between">
                    <div className="w-28 h-2 rounded bg-white/70" />
                    <div className="w-16 h-4 rounded bg-[#E95325]" />
                  </div>

                </div>
              </div>

              {/* Insignia tecnológica */}
              <div className="absolute -bottom-2 -left-2 bg-[#0D1935] text-white px-3.5 py-2.5 rounded-xl shadow-lg border border-slate-700 hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E95325]/20 text-[#E95325] flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-200 font-bold">Arquitectura Web LGB</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">100% Adaptable a Móviles</div>
                </div>
              </div>

              <div className="absolute top-16 -right-2 bg-white text-[#0D1935] p-2.5 rounded-xl shadow-lg border border-slate-200 hidden sm:flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#E95325]/15 text-[#E95325] flex items-center justify-center font-bold text-xs">
                  ⚡
                </div>
                <div className="text-[11px] font-bold">
                  &lt; 0.5s Velocidad
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
