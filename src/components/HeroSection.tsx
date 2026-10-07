import React from 'react';
import { ArrowRight, Headphones, CheckCircle2, Shield } from 'lucide-react';
import logoDImg from '../assets/images/Gemini_Generated_Image_njotyhnjotyhnjot.jpg';
import fondoHero from '../assets/images/fondo-db.webp';

interface HeroSectionProps {
  onExploreServices: () => void;
  onContactSupport: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onContactSupport
}) => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-white border-b border-[#E2E8F0]">
      {/* Background Graphic: fondo-db.webp */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          src={fondoHero}
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.18]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.fallbackTried) {
              target.dataset.fallbackTried = 'true';
              target.src = '/fondo-db.webp';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white" />
      </div>

      <div className="relative z-10 w-full px-6 py-16 md:py-24 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Text Block */}
        <div className="flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 self-start bg-[#edf3ff] border border-[#dbe1ff] text-[#0051d5] px-3.5 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider">
          <Shield size={14} className="text-[#0051d5]" />
          <span>Infraestructura TI de Alto Rendimiento</span>
        </div>

        <h1 className="text-[38px] sm:text-[48px] lg:text-[56px] font-extrabold text-[#000000] leading-[1.1] tracking-[-0.02em]">
          Impulsamos la Transformación Digital de tu Empresa
        </h1>

        <p className="text-[17px] sm:text-[18px] text-[#334155] leading-[1.6] max-w-xl font-normal">
          Soluciones de infraestructura TI, soporte técnico integral, servicios cloud y seguridad de la información diseñadas para hacer crecer tu negocio.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-3">
          <button
            onClick={onExploreServices}
            className="inline-flex items-center justify-center gap-2 bg-[#000000] text-white font-semibold text-[15px] px-8 py-4 rounded hover:bg-[#1e293b] active:scale-[0.98] transition-all shadow-sm"
          >
            <span>Explorar Servicios</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onContactSupport}
            className="inline-flex items-center justify-center gap-2 border border-[#E2E8F0] bg-white text-[#0051d5] font-semibold text-[15px] px-8 py-4 rounded hover:bg-[#f7f9fb] hover:border-[#cbd5e1] active:scale-[0.98] transition-all"
          >
            <Headphones size={18} />
            <span>Contactar Soporte</span>
          </button>
        </div>

        {/* Value Highlights */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E2E8F0]/70 text-[13px] text-[#475569]">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#0051d5] shrink-0" />
            <span>Garantía de SLA por contrato</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#0051d5] shrink-0" />
            <span>Ingenieros certificados</span>
          </div>
        </div>
      </div>

      {/* Right Graphic / Blueprint Image */}
      <div className="relative w-full aspect-[4/3] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-[0px_20px_40px_rgba(15,23,42,0.1)] border border-[#E2E8F0] bg-white group">
        <img
          src={fondoHero}
          alt="DigitalBiz Infrastructure & Cloud Architecture - fondo-db.webp"
          className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          loading="eager"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.fallbackTried) {
              target.dataset.fallbackTried = 'true';
              target.src = '/fondo-db.webp';
            }
          }}
        />

        {/* Full Logo overlay on the left side: substantially larger logo, leveled with span */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex flex-row items-center gap-3.5 sm:gap-4 bg-white/95 backdrop-blur-md border border-white/80 rounded-2xl p-3 sm:p-4 shadow-[0_14px_36px_rgba(15,23,42,0.2)] ring-1 ring-slate-900/5 group-hover:scale-[1.02] transition-all duration-300">
          <div className="relative h-13 sm:h-16 md:h-18 lg:h-20 w-auto flex items-center shrink-0">
            <img
              src={logoDImg}
              alt="DigitalBiz Logo"
              className="h-13 sm:h-16 md:h-18 lg:h-20 w-auto object-contain mix-blend-multiply drop-shadow-xs"
              loading="eager"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.fallbackTried) {
                  target.dataset.fallbackTried = 'true';
                  target.src = '/Gemini_Generated_Image_njotyhnjotyhnjot.jpg';
                }
              }}
            />
          </div>
          <span className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#0051d5] tracking-tight bg-[#edf3ff] px-3.5 py-1.5 sm:py-2 rounded-lg border border-[#dbe1ff]/80 whitespace-nowrap shadow-xs">
            IT &amp; Cloud Solutions
          </span>
        </div>

        {/* Subtle Tech Overlay Badge */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-xs bg-white/92 backdrop-blur-md border border-[#E2E8F0] rounded-xl p-3 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <p className="text-xs font-bold text-gray-900 leading-tight">Infraestructura Activa</p>
              <p className="text-[11px] text-gray-500">Monitoreo continuo 24/7/365</p>
            </div>
          </div>
          <span className="text-[11px] font-semibold bg-[#edf3ff] text-[#0051d5] px-2.5 py-1 rounded">
            99.9% Uptime
          </span>
        </div>
      </div>
      </div>
    </section>
  );
};
