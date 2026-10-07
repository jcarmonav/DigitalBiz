import React, { useState, useEffect } from 'react';
import { X, Check, Calculator, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/solutions';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

const formatCLPNumber = (val: number) =>
  Math.round(val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [selectedService, setSelectedService] = useState<string>(
    initialServiceId || SOLUTIONS_DATA[0].id
  );
  const [companySize, setCompanySize] = useState<'1-10' | '11-50' | '51-200' | '200+'>('11-50');
  const [addons, setAddons] = useState<string[]>(['monitoring']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync selectedService when initialServiceId changes
  useEffect(() => {
    if (initialServiceId) {
      setSelectedService(initialServiceId);
    }
  }, [initialServiceId]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const addonOptions = [
    { id: 'monitoring', label: 'Monitoreo Proactivo 24/7/365', price: 150000, tag: '+$150.000 CLP' },
    { id: 'backup', label: 'Copias de Seguridad Inmutables Offsite', price: 120000, tag: '+$120.000 CLP' },
    { id: 'dr', label: 'Plan de Recuperación ante Desastres (DRP)', price: 250000, tag: '+$250.000 CLP' },
    { id: 'dedicated', label: 'Ingeniero de Cuenta TI Dedicado', price: 350000, tag: '+$350.000 CLP' }
  ];

  const toggleAddon = (id: string) => {
    if (addons.includes(id)) {
      setAddons(addons.filter((a) => a !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  // Base estimate calculation in CLP
  const getBasePrice = () => {
    const baseMap: Record<string, number> = {
      'infraestructura-nube': 450000,
      'soporte-tecnico': 350000,
      'ciberseguridad': 500000,
      'desarrollo-software': 600000,
      'redes-cableado': 350000,
      'consultoria-tecnologica': 400000
    };
    const sizeMultiplier: Record<string, number> = {
      '1-10': 1,
      '11-50': 1.4,
      '51-200': 2.0,
      '200+': 3.2
    };
    const base = (baseMap[selectedService] || 400000) * (sizeMultiplier[companySize] || 1);
    const addonsTotal = addons.reduce((acc, curr) => {
      const found = addonOptions.find((o) => o.id === curr);
      return acc + (found ? found.price : 0);
    }, 0);
    return Math.round(base + addonsTotal);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const selectedSolutionObj = SOLUTIONS_DATA.find((s) => s.id === selectedService);
      const selectedAddonLabels = addons
        .map((aId) => addonOptions.find((o) => o.id === aId)?.label)
        .filter(Boolean)
        .join(', ');

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '226859a7-fe71-4791-bd67-5e41c5709a34',
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          service: selectedSolutionObj?.title || selectedService,
          companySize: `${companySize} colaboradores`,
          addons: selectedAddonLabels || 'Ninguno',
          estimatedInvestment: `$${formatCLPNumber(getBasePrice())} CLP/mes`,
          subject: `Nueva Solicitud de Cotización DigitalBiz: ${selectedSolutionObj?.title || 'Servicio TI'} - ${formData.company.trim() || formData.name.trim()}`
        })
      });
    } catch {
      // Continue to confirmation on network error
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2E8F0] relative">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#edf3ff] flex items-center justify-center text-[#0051d5]">
              <Calculator size={18} />
            </div>
            <div>
              <h3 className="font-bold text-[18px] text-[#000000]">
                Solicitar Cotización Personalizada
              </h3>
              <p className="text-xs text-gray-500">Estimación y propuesta técnica sin costo en Pesos Chilenos (CLP)</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="text-[22px] font-bold text-[#000000] mb-2">
              ¡Cotización Generada Exitosamente!
            </h4>
            <p className="text-sm text-gray-600 max-w-md mb-6">
              Hemos registrado tu solicitud para <span className="font-semibold text-gray-900">{formData.company || 'tu empresa'}</span>. Un arquitecto de soluciones de DigitalBiz revisará los requerimientos y te enviará la propuesta detallada con SLA a <span className="font-semibold text-gray-900">{formData.email}</span>.
            </p>

            <div className="bg-[#f7f9fb] border border-[#E2E8F0] rounded-xl p-5 w-full max-w-md mb-6 text-left text-xs text-gray-700 space-y-2">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium">Servicio Principal:</span>
                <span className="font-bold text-gray-900">
                  {SOLUTIONS_DATA.find((s) => s.id === selectedService)?.title}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium">Tamaño de Empresa:</span>
                <span>{companySize} colaboradores</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium">Módulos Opcionales:</span>
                <span>{addons.length} seleccionados</span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-sm text-[#0051d5]">
                <span>Inversión Estimada:</span>
                <span>~${formatCLPNumber(getBasePrice())} CLP/mes</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="bg-[#000000] text-white px-8 py-3 rounded text-sm font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Cerrar Ventana
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* 1. Service Selection */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                1. Selecciona la Solución Principal
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {SOLUTIONS_DATA.map((sol) => (
                  <button
                    key={sol.id}
                    type="button"
                    onClick={() => setSelectedService(sol.id)}
                    className={`p-3 rounded-lg border text-left text-xs transition-all flex flex-col justify-between gap-1 cursor-pointer ${
                      selectedService === sol.id
                        ? 'border-[#0051d5] bg-[#edf3ff] text-[#0051d5] font-semibold ring-1 ring-[#0051d5]'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                    }`}
                  >
                    <span>{sol.title}</span>
                    <span className="text-[10px] text-gray-500 font-normal">{sol.startingPrice}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Company Size */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                2. Número de Colaboradores / Equipos
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(['1-10', '11-50', '51-200', '200+'] as const).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setCompanySize(size)}
                    className={`py-2 px-3 rounded text-xs font-medium border text-center transition-all cursor-pointer ${
                      companySize === size
                        ? 'bg-[#000000] text-white border-[#000000]'
                        : 'bg-[#f7f9fb] border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Add-on services */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                3. Componentes Adicionales de Infraestructura
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {addonOptions.map((addon) => {
                  const isChecked = addons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-lg border text-xs cursor-pointer flex items-center justify-between transition-all ${
                        isChecked
                          ? 'border-[#0051d5] bg-[#edf3ff]/50 text-gray-900 font-medium'
                          : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked
                              ? 'bg-[#0051d5] border-[#0051d5] text-white'
                              : 'border-gray-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check size={12} />}
                        </div>
                        <span>{addon.label}</span>
                      </div>
                      <span className="text-gray-500 font-medium text-[11px] whitespace-nowrap">{addon.tag}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Real-time Calculation Badge */}
            <div className="p-4 rounded-xl bg-[#001f25] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
              <div>
                <span className="text-xs text-[#a1efff] uppercase tracking-wider font-semibold">
                  Presupuesto Estimado de Referencia
                </span>
                <p className="text-xs text-gray-300">
                  Incluye soporte técnico nivel 2, SLA 99.9% y gestión integral
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-2xl font-extrabold text-white">~${formatCLPNumber(getBasePrice())}</span>
                <span className="text-xs text-[#a1efff] ml-1 font-semibold">CLP/mes</span>
              </div>
            </div>

            {/* 4. Contact Fields */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                4. Datos de Contacto Corporativo
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Tu Nombre y Apellido *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#f7f9fb] border border-gray-300 rounded px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#0051d5]"
                />
                <input
                  type="email"
                  required
                  placeholder="Correo Corporativo *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#f7f9fb] border border-gray-300 rounded px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#0051d5]"
                />
                <input
                  type="text"
                  required
                  placeholder="Nombre de la Empresa *"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-[#f7f9fb] border border-gray-300 rounded px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#0051d5]"
                />
                <input
                  type="tel"
                  placeholder="Teléfono / WhatsApp"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-[#f7f9fb] border border-gray-300 rounded px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#0051d5]"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <ShieldCheck size={14} className="text-[#0051d5]" />
                Tus datos están protegidos bajo NDA y privacidad
              </span>
              <button
                type="submit"
                disabled={loading}
                className="bg-[#000000] text-white px-7 py-3 rounded text-xs font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                {loading ? 'Generando propuesta...' : 'Enviar Solicitud de Cotización'}
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
