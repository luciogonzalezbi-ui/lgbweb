import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';

interface CostEstimatorProps {
  onApplyEstimate: (summary: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onApplyEstimate }) => {
  const [projectType, setProjectType] = useState<'landing' | 'corporativo' | 'ecommerce' | 'custom'>('corporativo');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['seo', 'responsive']);
  const [timeline, setTimeline] = useState<'normal' | 'express'>('normal');

  const projectBase = {
    landing: { name: 'Página de Captación y Ventas (Landing Page)', basePrice: 450, time: '1 a 2 semanas' },
    corporativo: { name: 'Sitio Web Corporativo Completo', basePrice: 850, time: '2 a 3 semanas' },
    ecommerce: { name: 'Tienda en Línea con Pasarela de Pagos', basePrice: 1400, time: '3 a 4 semanas' },
    custom: { name: 'Aplicación Web Personalizada a Medida', basePrice: 1950, time: '4 a 6 semanas' },
  };

  const addonsList = [
    { id: 'seo', name: 'Optimización para Buscadores (SEO) e Indexación en Google', price: 120 },
    { id: 'responsive', name: 'Adaptación Completa a Teléfonos Móviles y Tabletas', price: 0 },
    { id: 'cms', name: 'Panel de Administración Autogestionable', price: 200 },
    { id: 'multilingual', name: 'Soporte en Múltiples Idiomas (Español e Inglés)', price: 180 },
    { id: 'payments', name: 'Integración de Cobros con Tarjeta y Pasarela Segura', price: 150 },
    { id: 'analytics', name: 'Estadísticas y Medición de Visitas Web', price: 90 },
  ];

  const toggleAddon = (id: string) => {
    if (id === 'responsive') return; // Siempre incluido
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const calculateTotal = () => {
    let total = projectBase[projectType].basePrice;
    selectedAddons.forEach((id) => {
      const addon = addonsList.find((a) => a.id === id);
      if (addon) total += addon.price;
    });
    if (timeline === 'express') {
      total = Math.round(total * 1.25);
    }
    return total;
  };

  const handleSendToContact = () => {
    const total = calculateTotal();
    const activeAddonNames = addonsList
      .filter((a) => selectedAddons.includes(a.id))
      .map((a) => a.name)
      .join(', ');
    const summary = `Cotización estimada: ${projectBase[projectType].name}. Módulos incluidos: [${activeAddonNames}]. Modalidad: ${
      timeline === 'express' ? 'Entrega Prioritaria Urgente' : 'Plazo Estándar'
    }. Total estimado: $${total} USD.`;
    onApplyEstimate(summary);
  };

  return (
    <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-[#0D1935] text-white shadow-2xl border border-slate-800">
      <div className="max-w-4xl mx-auto">
        
        {/* Encabezado */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E95325] mb-1">
              <Calculator className="w-3.5 h-3.5" />
              <span>Herramienta Interactiva</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Calculadora de Presupuesto Web
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Selecciona las opciones para tu proyecto y obtén un valor estimado en dólares al instante.
            </p>
          </div>

          <div className="text-right sm:text-right bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Presupuesto Estimado</div>
            <div className="text-3xl font-black text-[#E95325]">
              ${calculateTotal()} <span className="text-sm font-semibold text-white">USD</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Plazo: {timeline === 'express' ? 'Prioritario (7 a 10 días)' : projectBase[projectType].time}
            </div>
          </div>
        </div>

        {/* Paso 1: Tipo de Proyecto */}
        <div className="space-y-3 mb-8">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
            1. Selecciona el tipo de sitio web
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {(Object.keys(projectBase) as Array<keyof typeof projectBase>).map((key) => {
              const item = projectBase[key];
              const isSelected = projectType === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setProjectType(key)}
                  className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-white/10 border-[#E95325] ring-1 ring-[#E95325]'
                      : 'bg-white/5 border-white/10 hover:bg-white/8'
                  }`}
                >
                  <div className="text-xs font-bold text-white mb-1">{item.name}</div>
                  <div className="text-xs text-[#E95325] font-semibold">Desde ${item.basePrice} USD</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Paso 2: Módulos Adicionales */}
        <div className="space-y-3 mb-8">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
            2. Funcionalidades y módulos adicionales
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {addonsList.map((addon) => {
              const isChecked = selectedAddons.includes(addon.id);
              const isIncluded = addon.id === 'responsive';
              return (
                <button
                  key={addon.id}
                  type="button"
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-3 rounded-lg flex items-center justify-between text-xs transition-all border cursor-pointer ${
                    isChecked
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/8'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center text-xs ${
                        isChecked ? 'bg-[#E95325] text-white' : 'border border-slate-500'
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span>{addon.name}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {isIncluded ? 'Incluido' : `+$${addon.price} USD`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Paso 3: Plazo de Entrega */}
        <div className="space-y-3 mb-8">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
            3. Tiempo de desarrollo deseado
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setTimeline('normal')}
              className={`p-3.5 rounded-xl text-left border cursor-pointer transition-all ${
                timeline === 'normal'
                  ? 'bg-white/10 border-[#E95325] ring-1 ring-[#E95325]'
                  : 'bg-white/5 border-white/10 hover:bg-white/8'
              }`}
            >
              <div className="font-bold text-xs text-white">Plazo Estándar (Recomendado)</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Desarrollo ordenado con pruebas exhaustivas ({projectBase[projectType].time})</div>
            </button>
            <button
              type="button"
              onClick={() => setTimeline('express')}
              className={`p-3.5 rounded-xl text-left border cursor-pointer transition-all ${
                timeline === 'express'
                  ? 'bg-white/10 border-[#E95325] ring-1 ring-[#E95325]'
                  : 'bg-white/5 border-white/10 hover:bg-white/8'
              }`}
            >
              <div className="font-bold text-xs text-white">Entrega Prioritaria Urgente (+25%)</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Dedicación exclusiva en horario intensivo (7 a 10 días hábiles)</div>
            </button>
          </div>
        </div>

        {/* Botón de Acción */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            * Valores en dólares estadounidenses (USD). Esta estimación es orientativa y sin compromiso de contratación.
          </div>
          <button
            type="button"
            onClick={handleSendToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#E95325] hover:bg-[#D4471B] text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
          >
            <span>Transferir estimación al formulario de contacto</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
