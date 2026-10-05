import React from 'react';
import { Target, Users2, ShieldCheck, Award, ArrowRight, Lightbulb, Rocket, Code, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const processSteps = [
    {
      number: '01',
      title: 'Estrategia y Diagnóstico Inicial',
      desc: 'Analizamos a fondo tu negocio, tu cliente ideal y tus metas comerciales para trazar la estructura perfecta de tu sitio.',
      icon: <Lightbulb className="w-5 h-5 text-[#E95325]" />,
    },
    {
      number: '02',
      title: 'Diseño de Interfaces y Prototipado',
      desc: 'Creamos maquetas visuales interactivas en Figma centradas en la claridad, la estética y la facilidad de navegación.',
      icon: <Target className="w-5 h-5 text-[#0D1935]" />,
    },
    {
      number: '03',
      title: 'Programación con Código Limpio',
      desc: 'Desarrollamos tu sitio con tecnología moderna, garantizando carga ultrarrápida, posicionamiento en Google y seguridad.',
      icon: <Code className="w-5 h-5 text-[#E95325]" />,
    },
    {
      number: '04',
      title: 'Lanzamiento y Optimización Continua',
      desc: 'Publicamos tu proyecto con pruebas exhaustivas y brindamos asistencia técnica constante para asegurar su rendimiento.',
      icon: <Rocket className="w-5 h-5 text-[#10B981]" />,
    },
  ];

  return (
    <section id="acerca-de" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#E95325] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E95325]" />
            <span>Nuestra Filosofía</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D1935] tracking-tight">
            Acerca de LGB ESTUDIO WEB
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Somos una agencia especializada en desarrollo y diseño web orientada a crear activos 
            digitales que no solo se ven elegantes, sino que multiplican las consultas y ventas 
            de empresas y profesionales independientes.
          </p>
        </div>

        {/* Sección de 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0D1935] tracking-tight">
              Diseño con propósito, tecnología sin atajos.
            </h3>
            
            <p className="text-slate-600 leading-relaxed">
              En <strong className="text-[#0D1935]">LGB ESTUDIO WEB</strong> sabemos que tu página 
              web es el activo digital más importante de tu marca. Por eso rechazamos las plantillas 
              lentas y genéricas, construyendo cada proyecto de manera artesanal y a medida, cuidando 
              cada detalle para que cargue en menos de un segundo.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Enfoque 100% orientado a conseguir clientes y cerrar ventas.',
                'Diseño adaptable a teléfonos celulares, tabletas y computadoras.',
                'Presupuestos claros en dólares sin cargos sorpresa ni letras chicas.',
                'Acompañamiento personalizado directo con Lucio González.'
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E95325] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm sm:text-base font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bloque de Compromiso */}
          <div className="lg:col-span-5 bg-[#0D1935] text-white p-8 rounded-2xl shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E95325]/10 rounded-full blur-2xl pointer-events-none" />
            
            <h4 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>El Compromiso LGB</span>
              <span className="w-2 h-2 rounded-full bg-[#E95325]" />
            </h4>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-white mb-1">Velocidad Máxima</div>
                <div>Garantizamos tiempos de apertura de página inferiores a 1 segundo bajo los estándares más exigentes de Google.</div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-white mb-1">Propiedad Total del Código</div>
                <div>Sin mensualidades obligatorias ni alquileres de plataforma. Tu sitio web y su código fuente son 100% tuyos.</div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-white mb-1">Atención Directa y Personalizada</div>
                <div>Hablas directamente con Lucio González, responsable del desarrollo de tu proyecto, sin secretarias ni demoras.</div>
              </div>
            </div>
          </div>

        </div>

        {/* Proceso en 4 Pasos */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0D1935]">
              Cómo Trabajamos Contigo
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              Un proceso ordenado, transparente y estructurado de inicio a fin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-[#FAFAFC] border border-slate-200/80 hover:border-[#E95325]/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-slate-300">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-white shadow-xs border border-slate-200">
                      {step.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-[#0D1935] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
