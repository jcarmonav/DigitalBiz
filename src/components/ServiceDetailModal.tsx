import React from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, Server, Clock } from 'lucide-react';
import { SolutionItem } from '../types';

interface ServiceDetailModalProps {
  solution: SolutionItem | null;
  onClose: () => void;
  onRequestQuote: (solutionId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  solution,
  onClose,
  onRequestQuote
}) => {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2E8F0] relative flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[rgba(37,99,235,0.1)] flex items-center justify-center text-[#0051d5]">
              <Server size={20} />
            </div>
            <div>
              <h3 className="font-bold text-[18px] text-[#000000]">
                {solution.title}
              </h3>
              <p className="text-xs text-gray-500">Arquitectura y Especificaciones de Servicio</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 flex-1">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Descripción General
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed font-normal">
              {solution.fullDesc}
            </p>
          </div>

          {/* Key Deliverables & Features */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Alcance y Entregables Incluidos
            </h4>
            <div className="space-y-2.5">
              {solution.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                  <CheckCircle size={16} className="text-[#0051d5] shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Badges */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
              Tecnologías y Estándares
            </h4>
            <div className="flex flex-wrap gap-2">
              {solution.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#f7f9fb] border border-[#E2E8F0] rounded text-xs font-semibold text-[#334155]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* SLA & Price card */}
          <div className="p-4 rounded-xl bg-[#f7f9fb] border border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-[#0051d5] shrink-0" />
              <div>
                <p className="text-[11px] font-semibold text-gray-400 uppercase">Garantía SLA</p>
                <p className="text-xs font-bold text-gray-900">{solution.sla}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-[#0051d5] shrink-0" />
              <div>
                <p className="text-[11px] font-semibold text-gray-400 uppercase">Tarifa Referencial</p>
                <p className="text-xs font-bold text-[#0051d5]">{solution.startingPrice}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-white border-t border-[#E2E8F0] px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900"
          >
            Cerrar
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestQuote(solution.id);
            }}
            className="bg-[#000000] text-white px-6 py-2.5 rounded text-xs font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <span>Cotizar este Servicio</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
