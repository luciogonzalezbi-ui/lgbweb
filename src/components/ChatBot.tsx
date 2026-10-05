import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Phone,
  Mail,
  ArrowRight,
  RefreshCw,
  Clock,
  ChevronDown
} from 'lucide-react';
import { Logo } from './Logo.tsx';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actions?: { label: string; action: () => void; icon?: React.ReactNode; primary?: boolean }[];
}

interface ChatBotProps {
  onNavigateToSection?: (sectionId: string) => void;
}

export const ChatBot: React.FC<ChatBotProps> = ({ onNavigateToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const phoneDisplay = '+54 9 223 349-0126';
  const phoneNumber = '5492233490126';
  const emailReal = 'luciogonzalezbi@gmail.com';

  const initialBotMessage: Message = {
    id: 'welcome',
    sender: 'bot',
    text: `¡Hola! 👋 Te damos la bienvenida al Asistente Virtual las 24 Horas de **LGB ESTUDIO WEB**.\n\nEstoy a tu disposición en cualquier momento para responder dudas sobre desarrollo de páginas web, diseño de interfaces, plazos de entrega, cotizaciones estimadas en dólares y comunicarte de forma directa con Lucio González.\n\n¿En qué podemos ayudarte hoy?`,
    timestamp: 'Ahora',
    actions: [
      {
        label: '💰 ¿Cuáles son los precios en dólares?',
        action: () => handleSendQuickMessage('¿Cuáles son los precios en dólares para el desarrollo de páginas web?'),
      },
      {
        label: '⏱️ ¿Cuáles son los plazos de entrega?',
        action: () => handleSendQuickMessage('¿Cuáles son los tiempos estimados de entrega?'),
      },
      {
        label: '💻 ¿Qué servicios y código utilizan?',
        action: () => handleSendQuickMessage('¿Qué servicios ofrecen y con qué tecnología programan?'),
      },
      {
        label: '💬 Chatear con Lucio por WhatsApp',
        action: () => openWhatsApp('Hola Lucio, te contacto desde el asistente 24 horas de LGB Estudio Web para consultar por un proyecto.'),
        primary: true,
      },
    ],
  };

  const [messages, setMessages] = useState<Message[]>([initialBotMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
    }
  }, [isOpen, messages]);

  const openWhatsApp = (customText?: string) => {
    const text = customText || 'Hola Lucio, me comunico desde la web de LGB Estudio Web para consultar por una página web.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const openEmail = () => {
    window.location.href = `mailto:${emailReal}?subject=Consulta%20Proyecto%20Web%20LGB%20Estudio`;
  };

  const getKnowledgeResponse = (userText: string): { responseText: string; actions?: any[] } => {
    const query = userText.toLowerCase();

    // Precios / Costos en Dólares
    if (query.includes('cuanto') || query.includes('cuánto') || query.includes('precio') || query.includes('costo') || query.includes('cotiz') || query.includes('tarifa') || query.includes('presupuesto') || query.includes('dolar') || query.includes('dólar')) {
      return {
        responseText: `En **LGB ESTUDIO WEB** los presupuestos se expresan en **dólares estadounidenses (USD)**, con código 100% propio y sin cuotas forzosas de mantenimiento:\n\n• **Página de Captación / Ventas**: desde **$450 USD** (plazo de 1 a 2 semanas).\n• **Sitio Web Corporativo Completo**: desde **$850 USD** (plazo de 2 a 3 semanas).\n• **Tienda en Línea con Cobros Electrónicos**: desde **$1.400 USD** (plazo de 3 a 4 semanas).\n• **Aplicación Web a Medida**: desde **$1.950 USD** (plazo de 4 a 6 semanas).\n\nTodos los proyectos incluyen adaptación móvil total, velocidad de apertura instantánea y optimización en motores de búsqueda (SEO).`,
        actions: [
          {
            label: '🧮 Abrir Calculadora de Presupuestos',
            action: () => {
              setIsOpen(false);
              onNavigateToSection?.('contacto');
            },
            primary: true,
          },
          {
            label: '📱 Solicitar cotización personalizada por WhatsApp',
            action: () => openWhatsApp('Hola Lucio, quisiera consultar un presupuesto específico en dólares para mi proyecto web.'),
          },
        ],
      };
    }

    // Tiempos / Plazos
    if (query.includes('tiempo') || query.includes('plazo') || query.includes('demora') || query.includes('cuanto tarda') || query.includes('cuándo') || query.includes('dias') || query.includes('días')) {
      return {
        responseText: `Trabajamos con cronogramas estrictos y entregas predecibles:\n\n• **Páginas de captación (Landing Pages)**: entre 7 y 14 días hábiles.\n• **Sitios institucionales y corporativos**: entre 14 y 21 días hábiles.\n• **Tiendas de comercio electrónico**: entre 20 y 30 días hábiles.\n\nEn caso de requerir una entrega prioritaria express, disponemos de modalidad acelerada con dedicación continua.`,
        actions: [
          {
            label: '🚀 Consultar entrega prioritaria por WhatsApp',
            action: () => openWhatsApp('Hola Lucio, necesito consultar por un proyecto web con entrega urgente.'),
            primary: true,
          },
        ],
      };
    }

    // Contacto / Teléfono / Correo / WhatsApp / Lucio
    if (query.includes('contacto') || query.includes('telefono') || query.includes('teléfono') || query.includes('whatsapp') || query.includes('mail') || query.includes('correo') || query.includes('lucio') || query.includes('donde') || query.includes('ubicacion')) {
      return {
        responseText: `Puedes comunicarte directamente con **Lucio González** por los siguientes canales oficiales:\n\n• **WhatsApp y Llamadas**: [+54 9 223 349-0126](https://wa.me/5492233490126)\n• **Correo Electrónico**: [luciogonzalezbi@gmail.com](mailto:luciogonzalezbi@gmail.com)\n• **Modalidad de Trabajo**: 100% a distancia para clientes de Argentina, España, México, Estados Unidos y cualquier país de habla hispana.\n• **Horario**: Atención personalizada de lunes a viernes y asistencia técnica continua las 24 horas.`,
        actions: [
          {
            label: '🟢 Abrir chat de WhatsApp con Lucio (+54 9 223 349-0126)',
            action: () => openWhatsApp(),
            primary: true,
          },
          {
            label: '✉️ Enviar correo a luciogonzalezbi@gmail.com',
            action: () => openEmail(),
          },
        ],
      };
    }

    // Servicios / Qué hacen
    if (query.includes('servicio') || query.includes('hacen') || query.includes('ofrecen') || query.includes('desarrollo') || query.includes('diseño') || query.includes('mantenimiento')) {
      return {
        responseText: `Nuestros tres servicios principales son:\n\n1. **Desarrollo Web**: Sitios y plataformas personalizadas creadas con código moderno, ultra rápidas y adaptables a cualquier dispositivo.\n2. **Diseño de Interfaces y Experiencia (UI/UX)**: Diseño gráfico y prototipos enfocados en transmitir confianza y facilitar la compra.\n3. **Mantenimiento y Optimización**: Actualizaciones periódicas, seguridad, copias de respaldo y aceleración de carga para que tu web vuele.`,
        actions: [
          {
            label: '🔍 Ver sección de Servicios',
            action: () => {
              setIsOpen(false);
              onNavigateToSection?.('servicios');
            },
          },
          {
            label: '💬 Consultar con Lucio por WhatsApp',
            action: () => openWhatsApp('Hola Lucio, me interesa conocer más detalles sobre sus servicios web.'),
            primary: true,
          },
        ],
      };
    }

    // Tecnologías / Stack
    if (query.includes('tecnolog') || query.includes('stack') || query.includes('react') || query.includes('wordpress') || query.includes('lenguaje') || query.includes('codigo') || query.includes('código')) {
      return {
        responseText: `Utilizamos estándares tecnológicos de primer nivel mundial:\n\n• **Programación**: React, TypeScript, Tailwind y Vite.\n• **Velocidad de Carga**: Tiempos de apertura inferiores a medio segundo.\n• **Pasarelas de Pago**: Cobros seguros con tarjetas y billeteras digitales.\n• **Posicionamiento**: Estructura optimizada para aparecer en los primeros resultados de Google.\n• **Propiedad**: El sitio web y su código fuente te pertenecen al 100%.`,
        actions: [
          {
            label: '📊 Ver Auditoría de Posicionamiento y Rendimiento',
            action: () => {
              setIsOpen(false);
              onNavigateToSection?.('seo-audit');
            },
          },
        ],
      };
    }

    // Portafolio / Trabajos / Ejemplos
    if (query.includes('portafolio') || query.includes('ejemplo') || query.includes('trabajo') || query.includes('caso') || query.includes('clientes')) {
      return {
        responseText: `Contamos con proyectos reales exitosos en diversos rubros:\n\n• **Nexora Global** (Portal corporativo y seguimiento de envíos en tiempo real)\n• **Tienda Aura** (Comercio electrónico con catálogo interactivo y cobros ágiles)\n• **Clínica Médica** (Portal institucional de salud y reservas de turnos)\n• **Estudio de Arquitectura Vanguard** (Galería visual minimalista en alta definición)\n\nPuedes revisar todos los casos en nuestra sección de portafolio.`,
        actions: [
          {
            label: '🎨 Ver Portafolio de Trabajos',
            action: () => {
              setIsOpen(false);
              onNavigateToSection?.('portafolio');
            },
            primary: true,
          },
        ],
      };
    }

    // Respuesta por defecto
    return {
      responseText: `¡Gracias por tu mensaje! Cuéntame qué tipo de proyecto estás planeando (una página corporativa, una tienda online o una página de venta) y te daremos una respuesta personalizada.\n\nTambién puedes escribirle de forma directa a **Lucio González** al teléfono **+54 9 223 349-0126** o al correo **luciogonzalezbi@gmail.com**.`,
      actions: [
        {
          label: '🟢 Enviar mensaje de WhatsApp a Lucio',
          action: () => openWhatsApp(`Hola Lucio, me contacto desde la web por la siguiente consulta: "${userText}"`),
          primary: true,
        },
        {
          label: '✉️ Enviar correo a luciogonzalezbi@gmail.com',
          action: () => openEmail(),
        },
        {
          label: '📝 Ir al formulario de contacto',
          action: () => {
            setIsOpen(false);
            onNavigateToSection?.('contacto');
          },
        },
      ],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Ahora',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const { responseText, actions } = getKnowledgeResponse(text);
      const botReply: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: responseText,
        timestamp: 'Ahora',
        actions,
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 550);
  };

  const handleSendQuickMessage = (text: string) => {
    handleSendMessage(text);
  };

  const handleResetChat = () => {
    setMessages([initialBotMessage]);
  };

  return (
    <>
      {/* Botón flotante inferior derecho */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
        {!isOpen && (
          <div className="mb-2 hidden sm:flex items-center gap-2 bg-[#0D1935] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-slate-700 animate-in fade-in duration-300">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span>Atención en Línea las 24 Horas</span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0D1935] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/20 cursor-pointer"
          aria-label={isOpen ? 'Cerrar ventana de atención' : 'Abrir ventana de atención al cliente las 24 horas'}
        >
          <div className="absolute inset-0 rounded-2xl bg-[#E95325] opacity-20 blur-md group-hover:opacity-40 transition-opacity" />

          {isOpen ? (
            <X className="w-6 h-6 text-white relative z-10" />
          ) : (
            <div className="relative z-10 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-[#E95325]" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#E95325] text-white rounded-full text-[9px] font-black flex items-center justify-center ring-2 ring-white">
                  1
                </span>
              )}
            </div>
          )}
        </button>
      </div>

      {/* Ventana de Chat */}
      {isOpen && (
        <div className="fixed bottom-22 right-4 sm:right-6 z-50 w-[92vw] sm:w-[410px] h-[560px] max-h-[82vh] bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Cabecera del Chat */}
          <div className="bg-[#0D1935] text-white px-5 py-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-[#142346] flex items-center justify-center border border-white/10">
                  <Logo size="sm" showText={false} variant="dark" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#10B981] ring-2 ring-[#0D1935]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-white">Asistente 24 Horas</h3>
                  <span className="text-[10px] font-bold bg-[#E95325] text-white px-1.5 py-0.2 rounded">
                    EN LÍNEA
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Atención Inmediata · Lucio González
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-slate-400">
              <button
                type="button"
                onClick={handleResetChat}
                className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                title="Reiniciar chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                title="Minimizar ventana"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Banda de Acceso Directo por WhatsApp */}
          <div className="bg-[#091226] px-4 py-2 text-[11px] text-slate-300 flex items-center justify-between border-b border-slate-800/80">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>WhatsApp: +54 9 223 349-0126</span>
            </div>
            <a
              href={`https://wa.me/${phoneNumber}?text=Hola%20Lucio%2C%20quisiera%20consultar%20por%20un%20proyecto%20web`}
              target="_blank"
              rel="noreferrer"
              className="text-[#E95325] hover:underline font-bold"
            >
              Abrir WhatsApp ↗
            </a>
          </div>

          {/* Lista de Mensajes */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#F8F9FA]/80">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-[#0D1935] flex items-center justify-center flex-shrink-0 mt-1 shadow-xs text-white">
                    <Bot className="w-4 h-4 text-[#E95325]" />
                  </div>
                )}

                <div className="max-w-[85%] space-y-2">
                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed whitespace-pre-line shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-[#E95325] text-white rounded-tr-none font-medium'
                        : 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-none font-normal'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-col gap-1.5 pt-1">
                      {msg.actions.map((act, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={act.action}
                          className={`text-left text-xs font-semibold px-3 py-2 rounded-xl transition-all flex items-center justify-between gap-2 cursor-pointer ${
                            act.primary
                              ? 'bg-[#0D1935] hover:bg-[#15254D] text-white shadow-xs'
                              : 'bg-white hover:bg-slate-100 text-[#0D1935] border border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <span>{act.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 opacity-70" />
                        </button>
                      ))}
                    </div>
                  )}

                  <span className={`block text-[10px] text-slate-400 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1 text-[#E95325]">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs py-1">
                <div className="w-7 h-7 rounded-lg bg-[#0D1935] flex items-center justify-center text-white">
                  <Bot className="w-4 h-4 text-[#E95325]" />
                </div>
                <div className="bg-white border border-slate-200 px-3 py-2 rounded-2xl flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E95325] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E95325] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E95325] animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Formulario de Entrada */}
          <div className="p-3 bg-white border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Escribe tu consulta o pide cotización en dólares..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm text-[#0D1935] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E95325] focus:bg-white transition-all"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="p-2.5 rounded-xl bg-[#E95325] hover:bg-[#D4471B] disabled:opacity-50 text-white transition-colors cursor-pointer flex-shrink-0"
                aria-label="Enviar mensaje"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-400 px-1">
              <span>Respuestas instantáneas en español</span>
              <a
                href={`mailto:${emailReal}`}
                className="hover:text-[#E95325] transition-colors"
              >
                {emailReal}
              </a>
            </div>
          </div>

        </div>
      )}
    </>
  );
};
