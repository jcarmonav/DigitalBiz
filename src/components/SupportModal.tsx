import React, { useState } from 'react';
import { X, Headphones, AlertTriangle, CheckCircle, PhoneCall, Mail } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [ticketData, setTicketData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    severity: 'P2 - Alto',
    description: ''
  });
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const generatedId = `DB-TICK-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket(generatedId);
      setLoading(false);
    }, 700);
  };

  const handleClose = () => {
    setSubmittedTicket(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2E8F0] relative">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#edf3ff] flex items-center justify-center text-[#0051d5]">
              <Headphones size={18} />
            </div>
            <div>
              <h3 className="font-bold text-[17px] text-[#000000]">
                Mesa de Ayuda &amp; Soporte Técnico 24/7
              </h3>
              <p className="text-[11px] text-gray-500">Atención de incidentes y asistencia técnica</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {submittedTicket ? (
          <div className="p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle size={32} />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-1">
              Ticket Creado: {submittedTicket}
            </h4>
            <p className="text-xs text-gray-600 mb-6">
              El equipo de guardia ha recibido tu reporte de severidad <span className="font-semibold text-gray-900">{ticketData.severity}</span>. Nos comunicaremos de inmediato al correo <span className="font-semibold text-gray-900">{ticketData.email}</span>.
            </p>

            <div className="bg-[#f7f9fb] border border-gray-200 rounded-lg p-4 text-xs text-left mb-6 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-gray-800">
                <PhoneCall size={14} className="text-[#0051d5]" />
                <span>Línea Telefónica de Emergencia Directa:</span>
              </div>
              <p className="text-gray-600 pl-6">
                <a href="tel:+56934500790" className="hover:text-[#0051d5] transition-colors font-medium">
                  +56934500790
                </a> (Opción 1 - Soporte Crítico)
              </p>
            </div>

            <button
              onClick={handleClose}
              className="bg-[#000000] text-white px-6 py-2.5 rounded text-xs font-semibold hover:bg-gray-800 transition-colors"
            >
              Entendido
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Quick Emergency Banner */}
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-800">
              <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">¿Incidente crítico fuera de servicio?</span> Si tu sistema principal está caído, genera el ticket y llama directamente a nuestra línea de emergencia.
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Carlos Martínez"
                  value={ticketData.name}
                  onChange={(e) => setTicketData({ ...ticketData, name: e.target.value })}
                  className="w-full bg-[#f7f9fb] border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#0051d5]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="carlos@empresa.com"
                    value={ticketData.email}
                    onChange={(e) => setTicketData({ ...ticketData, email: e.target.value })}
                    className="w-full bg-[#f7f9fb] border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#0051d5]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="+56 9 3450 0790"
                    value={ticketData.phone}
                    onChange={(e) => setTicketData({ ...ticketData, phone: e.target.value })}
                    className="w-full bg-[#f7f9fb] border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#0051d5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Nivel de Severidad
                </label>
                <select
                  value={ticketData.severity}
                  onChange={(e) => setTicketData({ ...ticketData, severity: e.target.value })}
                  className="w-full bg-[#f7f9fb] border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#0051d5]"
                >
                  <option value="P1 - Crítico (Servicio caído / Detención total)">P1 - Crítico (Servicio caído / Detención total)</option>
                  <option value="P2 - Alto (Afectación severa a múltiples usuarios)">P2 - Alto (Afectación severa a múltiples usuarios)</option>
                  <option value="P3 - Medio (Incidencia parcial con workaround)">P3 - Medio (Incidencia parcial con workaround)</option>
                  <option value="P4 - Bajo (Consulta o requerimiento menor)">P4 - Bajo (Consulta o requerimiento menor)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Descripción del Incidente / Requerimiento *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Detalla qué está ocurriendo, sistemas afectados y mensajes de error..."
                  value={ticketData.description}
                  onChange={(e) => setTicketData({ ...ticketData, description: e.target.value })}
                  className="w-full bg-[#f7f9fb] border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#0051d5] resize-none"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={handleClose}
                className="text-xs text-gray-500 hover:text-gray-800"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-[#000000] text-white px-5 py-2.5 rounded text-xs font-semibold hover:bg-gray-800 transition-colors disabled:opacity-60"
              >
                {loading ? 'Generando ticket...' : 'Crear Ticket de Soporte'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
