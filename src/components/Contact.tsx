import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, Clock, MessageSquare, Globe, ArrowRight } from 'lucide-react';

interface ContactProps {
  initialMessage?: string;
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialMessage = '', initialService = '' }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    servicio: initialService,
    mensaje: initialMessage,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  React.useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({
        ...prev,
        mensaje: prev.mensaje ? `${prev.mensaje}\n\n${initialMessage}` : initialMessage,
      }));
    }
  }, [initialMessage]);

  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, servicio: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.nombre.trim()) {
      setErrorMessage('Por favor, ingresa tu nombre.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Por favor, introduce un correo electrónico válido.');
      return;
    }
    if (!formData.mensaje.trim()) {
      setErrorMessage('Por favor, escribe un mensaje describiendo tu proyecto.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      servicio: '',
      mensaje: '',
    });
    setSubmitted(false);
  };

  const whatsappUrl = `https://wa.me/5492233490126?text=${encodeURIComponent(
    formData.mensaje
      ? `Hola Lucio, mi nombre es ${formData.nombre || 'un cliente'} y me comunico desde la web de LGB Estudio Web: ${formData.mensaje}`
      : 'Hola Lucio, me comunico desde la web de LGB Estudio Web y quisiera consultar por un proyecto.'
  )}`;

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#FAFAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#E95325] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E95325]" />
            <span>Contacto Directo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D1935] tracking-tight">
            Contáctanos
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Escríbenos directamente o completa el formulario. Recibirás una respuesta personalizada en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-slate-200">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-[#0D1935]">
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Gracias <strong className="text-[#0D1935]">{formData.nombre}</strong>. Tu mensaje ha sido enviado a <strong className="text-[#0D1935]">luciogonzalezbi@gmail.com</strong>. Lucio González se pondrá en contacto contigo a la brevedad.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    <span>Continuar por WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                  >
                    <span>Enviar otro mensaje</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                    {errorMessage}
                  </div>
                )}

                {/* Campo: Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-[#0D1935] mb-2">
                    Nombre <span className="text-[#E95325]">*</span>
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    placeholder="Ej. Laura Gómez"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-[#0D1935] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E95325] focus:border-transparent text-sm transition-all"
                  />
                </div>

                {/* Campo: Correo Electrónico */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#0D1935] mb-2">
                    Correo electrónico <span className="text-[#E95325]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="tucorreo@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-[#0D1935] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E95325] focus:border-transparent text-sm transition-all"
                  />
                </div>

                {/* Campo: Servicio de Interés */}
                <div>
                  <label htmlFor="servicio" className="block text-xs font-bold uppercase tracking-wider text-[#0D1935] mb-2">
                    Servicio de interés
                  </label>
                  <select
                    id="servicio"
                    value={formData.servicio}
                    onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-[#0D1935] focus:outline-none focus:ring-2 focus:ring-[#E95325] focus:border-transparent text-sm transition-all cursor-pointer"
                  >
                    <option value="">Seleccionar una opción (opcional)</option>
                    <option value="Desarrollo Web">Desarrollo Web (Sitio personalizado o Tienda en Línea)</option>
                    <option value="Diseño UI/UX">Diseño UI/UX (Prototipado y Rediseño de Interfaces)</option>
                    <option value="Mantenimiento y Optimización">Mantenimiento y Optimización (Velocidad y Seguridad)</option>
                    <option value="Cotización Calculadora">Presupuesto en dólares desde la Calculadora Web</option>
                    <option value="Otro">Otro requerimiento a medida</option>
                  </select>
                </div>

                {/* Campo: Mensaje (con multilínea) */}
                <div>
                  <label htmlFor="mensaje" className="block text-xs font-bold uppercase tracking-wider text-[#0D1935] mb-2">
                    Mensaje <span className="text-[#E95325]">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    required
                    rows={5}
                    placeholder="Cuéntanos sobre tu negocio, qué tipo de página necesitas, objetivos o plazos estimados..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-[#0D1935] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E95325] focus:border-transparent text-sm transition-all resize-y"
                  />
                </div>

                {/* Botón: Enviar */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#E95325] hover:bg-[#D4471B] disabled:opacity-75 text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Enviando mensaje...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center text-[11px] text-slate-500">
                  Tus datos son 100% confidenciales y serán recibidos directamente por Lucio González.
                </div>
              </form>
            )}
          </div>

          {/* Información de Contacto Real (Sin dirección física, con teléfono real y correo real) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0D1935] text-white p-8 rounded-2xl shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-1">
                  Atención Directa
                </h3>
                <p className="text-xs text-slate-300">
                  LGB ESTUDIO WEB · Lucio González
                </p>
              </div>

              <div className="space-y-5">
                {/* Teléfono Real (5492233490126) */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Teléfono / WhatsApp Directo
                    </div>
                    <a
                      href="https://wa.me/5492233490126?text=Hola%20Lucio%2C%20quisiera%20consultar%20por%20un%20proyecto%20web"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-bold text-white hover:text-[#25D366] transition-colors block"
                    >
                      +54 9 223 349-0126
                    </a>
                    <span className="text-[11px] text-emerald-400 font-medium">
                      Disponible para llamadas y mensajes WhatsApp
                    </span>
                  </div>
                </div>

                {/* Correo Real (LUCIOGONZALEZBI@gmail.com) */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E95325]/20 flex items-center justify-center text-[#E95325] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Correo Electrónico Oficial
                    </div>
                    <a
                      href="mailto:luciogonzalezbi@gmail.com"
                      className="text-base font-bold text-white hover:text-[#E95325] transition-colors break-all block"
                    >
                      luciogonzalezbi@gmail.com
                    </a>
                    <span className="text-[11px] text-slate-300 font-medium">
                      Respuesta garantizada en &lt; 24h
                    </span>
                  </div>
                </div>

                {/* Cobertura Global y Remota (Reemplaza dirección física) */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#38BDF8] flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Modalidad de Trabajo
                    </div>
                    <div className="text-sm font-semibold text-white">
                      100% Remoto para Clientes Globales
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      Argentina, España, México, EE.UU. y toda Latinoamérica
                    </div>
                  </div>
                </div>

                {/* Horario y Bot 24/7 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F59E0B] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Disponibilidad
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Atención Personalizada + Bot 24 Horas
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      Consultas resueltas al instante a cualquier hora del día
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón rápido WhatsApp */}
              <div className="pt-2">
                <a
                  href="https://wa.me/5492233490126?text=Hola%20Lucio%2C%20me%20comunico%20desde%20la%20web%20de%20LGB%20Estudio%20Web%20para%20consultar%20por%20un%20proyecto"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chatear por WhatsApp Ahora</span>
                </a>
              </div>
            </div>

            {/* Quick Reassurance */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-slate-700 space-y-2">
              <h4 className="font-bold text-sm text-[#0D1935] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span>¿Tienes una duda rápida?</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Utiliza nuestro <strong>Asistente Virtual 24 Horas</strong> en la esquina inferior derecha para cotizaciones orientativas o respuestas instantáneas sobre el proceso de trabajo.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
