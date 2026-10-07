import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, ShieldCheck, Mail } from 'lucide-react';
import { DigitalBizLogo } from './DigitalBizLogo';

interface TopNavBarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenQuoteModal: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  activeSection,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Spanish links maintaining exact requested order: 'Home', 'Services', 'Solutions', 'About Us', 'Contact'
  const navItems = [
    { id: 'home', label: 'Inicio', original: 'Home' },
    { id: 'services', label: 'Servicios', original: 'Services' },
    { id: 'solutions', label: 'Soluciones', original: 'Solutions' },
    { id: 'about', label: 'Nosotros', original: 'About Us' },
    { id: 'contact', label: 'Contacto', original: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when collapsible menu drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="w-full h-24 sm:h-28 sticky top-0 border-b border-[#E2E8F0] bg-white z-40 transition-colors shadow-xs">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 w-full max-w-[1340px] mx-auto h-full">
          {/* LEFT SIDE: Integrated Logo with 'D' from D-db.jpg and 'DigitalBiz - IT & Cloud Solutions' */}
          <div className="flex items-center min-w-0">
            <DigitalBizLogo
              onClick={() => handleLinkClick('home')}
              size="md"
            />
          </div>

          {/* RIGHT SIDE: 'Solicitar Cotización' button placed right next to the collapsible hamburger menu */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* 'Solicitar Cotización' Button moved to the right */}
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center bg-[#000000] text-white text-[13px] sm:text-[14px] font-semibold tracking-wide px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-[#222222] active:scale-[0.98] transition-all shadow-xs cursor-pointer shrink-0"
              title="Solicitar Cotización de Servicios TI"
            >
              <span>Solicitar Cotización</span>
            </button>

            {/* Black 'three-line' Hamburger Menu Icon to represent the collapsible menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-11 h-11 flex flex-col justify-center items-center rounded-lg hover:bg-[#F3F4F6] active:bg-[#E5E7EB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0051d5]/40"
              aria-label="Abrir menú de navegación"
              aria-expanded={isMenuOpen}
              title="Menú"
            >
              {/* Crisp 3-line black hamburger icon */}
              <div className="w-6 flex flex-col justify-between items-center gap-[5px]">
                <span
                  className={`block h-[2.5px] w-6 bg-[#000000] rounded-full transition-transform duration-200 origin-center ${
                    isMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''
                  }`}
                />
                <span
                  className={`block h-[2.5px] w-6 bg-[#000000] rounded-full transition-opacity duration-150 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-[2.5px] w-6 bg-[#000000] rounded-full transition-transform duration-200 origin-center ${
                    isMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* COLLAPSIBLE MENU DRAWER & BACKDROP */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Overlay */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-200"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-white h-full shadow-2xl z-10 flex flex-col justify-between border-l border-[#E2E8F0] animate-in slide-in-from-right duration-250 ease-out">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <DigitalBizLogo size="sm" showSubtitle={false} />
                <span className="text-xs font-semibold px-2 py-0.5 bg-[#edf3ff] text-[#0051d5] rounded">
                  Menú Principal
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
                aria-label="Cerrar menú"
              >
                <X size={22} className="text-[#000000]" />
              </button>
            </div>

            {/* Navigation Links in requested order: Inicio, Servicios, Soluciones, Nosotros, Contacto */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3 px-3">
                Navegación
              </p>
              <nav className="flex flex-col gap-1.5">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.id)}
                      className={`group flex items-center justify-between px-4 py-3.5 rounded-lg text-left transition-all ${
                        isActive
                          ? 'bg-[#0051d5] text-white font-semibold shadow-xs'
                          : 'text-[#191c1e] hover:bg-[#F3F4F6] font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-6 text-xs font-mono ${
                            isActive ? 'text-blue-100' : 'text-gray-400'
                          }`}
                        >
                          0{index + 1}
                        </span>
                        <span className="text-[17px]">{item.label}</span>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className={`transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          isActive ? 'text-white' : 'text-gray-400 group-hover:text-black'
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>

              {/* Extra Info Box inside Menu */}
              <div className="mt-8 p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0051d5] mb-1.5">
                  <ShieldCheck size={16} />
                  <span>Soporte Empresarial 24/7</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Monitoreo proactivo, gestión cloud y mesa de ayuda con atención inmediata para tu infraestructura TI.
                </p>
                <div className="mt-3 pt-3 border-t border-[#E2E8F0] flex flex-col gap-1.5 text-xs text-gray-700">
                  <a href="tel:+56934500790" className="flex items-center gap-2 hover:text-[#0051d5] transition-colors">
                    <Phone size={13} className="text-[#0051d5]" />
                    <span className="font-medium">+56934500790</span>
                  </a>
                  <a href="mailto:digitalbizcl@gmail.com" className="flex items-center gap-2 hover:text-[#0051d5] transition-colors">
                    <Mail size={13} className="text-[#0051d5]" />
                    <span className="font-medium">digitalbizcl@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="p-6 border-t border-[#E2E8F0] bg-gray-50/50">
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-[#000000] text-white py-3.5 px-4 rounded-lg font-semibold text-sm hover:bg-[#222222] active:scale-[0.99] transition-all shadow-sm text-center cursor-pointer"
              >
                Solicitar Cotización Ahora
              </button>
              <p className="text-[11px] text-center text-gray-500 mt-2">
                Respuesta técnica garantizada en menos de 2 horas
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
