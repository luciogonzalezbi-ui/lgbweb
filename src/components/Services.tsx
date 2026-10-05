import React from 'react';
import {
  Code,
  Layout,
  Wrench,
  Check,
  ArrowRight
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

interface ServiceDetail {
  id: string;
  icon: React.ReactNode;
  dotColor: string;
  dotBorder: string;
  dotBg: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const servicesData: ServiceDetail[] = [
    {
      id: 'desarrollo-web',
      icon: <Code className="w-7 h-7 text-[#EF4444]" />,
      dotColor: '#EF4444',
      dotBorder: 'group-hover:border-[#EF4444]/60',
      dotBg: 'bg-[#EF4444]/10 text-[#EF4444]',
      title: 'Desarrollo Web',
      subtitle: 'Arquitectura moderna y código limpio',
      description: 'Sitios web personalizados, rápidos y responsivos.',
      features: [
        'Desarrollo a medida con React, TypeScript y Tailwind',
        'Carga instantánea sin demoras ni pantallas congeladas',
        'Adaptabilidad perfecta a teléfonos móviles, tabletas y monitores',
        'Estructura optimizada para aparecer en los primeros puestos de Google',
        'Integración con pasarelas de pago y cobros electrónicos seguros'
      ]
    },
    {
      id: 'diseno-ui-ux',
      icon: <Layout className="w-7 h-7 text-[#F59E0B]" />,
      dotColor: '#F59E0B',
      dotBorder: 'group-hover:border-[#F59E0B]/60',
      dotBg: 'bg-[#F59E0B]/10 text-[#F59E0B]',
      title: 'Diseño UI/UX',
      subtitle: 'Interfaces intuitivas y atractivas',
      description: 'Interfaces atractivas e intuitivas centradas en el usuario.',
      features: [
        'Diseño gráfico exclusivo y prototipos interactivos en Figma',
        'Estructura visual pensada para aumentar las ventas y consultas',
        'Identidad estética alineada a los valores de tu negocio',
        'Navegación sencilla y accesible para todo tipo de público',
        'Diseño de componentes modulares y armonía de colores'
      ]
    },
    {
      id: 'mantenimiento-optimizacion',
      icon: <Wrench className="w-7 h-7 text-[#10B981]" />,
      dotColor: '#10B981',
      dotBorder: 'group-hover:border-[#10B981]/60',
      dotBg: 'bg-[#10B981]/10 text-[#10B981]',
      title: 'Mantenimiento y Optimización',
      subtitle: 'Seguridad, estabilidad y velocidad garantizadas',
      description: 'Actualizaciones, seguridad y velocidad para tu sitio.',
      features: [
        'Monitoreo constante y copias de seguridad automáticas',
        'Protección contra ataques informáticos y certificados de seguridad SSL',
        'Aceleración de velocidad para carga en menos de 1 segundo',
        'Actualización continua de librerías y componentes del código',
        'Informes periódicos de rendimiento y asistencia técnica directa'
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#E95325]">
            <span className="w-2 h-2 rounded-full bg-[#E95325]" />
            <span>Nuestras Soluciones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D1935] tracking-tight">
            Nuestros Servicios
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Soluciones digitales integrales con foco en rendimiento, estética y resultados de negocio comprobados.
          </p>
        </div>

        {/* Cuadrícula de 3 Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`group relative flex flex-col justify-between p-8 rounded-2xl bg-[#FAFAFB] border-2 border-slate-200/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${service.dotBorder}`}
            >
              {/* Punto de color de la marca */}
              <div className="absolute top-5 right-5 flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full transition-transform duration-300 group-hover:scale-125"
                  style={{ backgroundColor: service.dotColor }}
                />
              </div>

              <div>
                <div
                  className={`w-14 h-14 rounded-xl ${service.dotBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-xs`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-black text-[#0D1935] mb-2 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  {service.subtitle}
                </p>

                <p className="text-base text-slate-700 leading-relaxed font-medium mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-200/80 mb-8">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: service.dotColor }}
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-slate-300 text-[#0D1935] font-bold text-sm hover:bg-[#0D1935] hover:text-white transition-all duration-200 group-hover:shadow-sm cursor-pointer"
                >
                  <span>Solicitar este servicio</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bloque inferior de Garantía */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0D1935] to-[#122346] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold">¿Tienes un proyecto especial con requerimientos específicos?</h4>
            <p className="text-sm text-slate-300">
              Evaluamos tus requerimientos técnicos y comerciales para enviarte una cotización en dólares sin compromiso en menos de 24 horas.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('Presupuesto a Medida')}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E95325] hover:bg-[#D4471B] text-white text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer"
          >
            <span>Consultar requerimientos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
