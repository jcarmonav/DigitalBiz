import React, { useState } from 'react';
import { X, Shield, ArrowUp, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { DigitalBizLogo } from './DigitalBizLogo';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const policyContent: Record<string, { title: string; body: string }> = {
    privacy: {
      title: 'Política de Privacidad',
      body: 'En DigitalBiz protegemos los datos empresariales y la información confidencial de nuestros clientes bajo estrictos estándares de seguridad ISO/IEC 27001 y RGPD. Toda información recolectada a través de nuestros formularios o canales de soporte se utiliza exclusivamente para fines de prestación de servicios tecnológicos, formulación de propuestas técnicas y atención de incidencias.',
    },
    terms: {
      title: 'Términos del Servicio',
      body: 'Los servicios de infraestructura TI, administración cloud y soporte técnico prestados por DigitalBiz se rigen por Acuerdos de Nivel de Servicio (SLA) específicos para cada cliente. Garantizamos disponibilidad, confidencialidad mediante acuerdos de no divulgación (NDA) y buenas prácticas de ingeniería.',
    },
    cookies: {
      title: 'Política de Cookies',
      body: 'Utilizamos únicamente cookies técnicas esenciales para garantizar el correcto funcionamiento y la navegación segura en nuestra plataforma web.',
    },
    security: {
      title: 'Compromiso de Seguridad',
      body: 'Nuestros entornos operativos implementan autenticación multifactor (MFA), cifrado en tránsito (TLS 1.3) y en reposo (AES-256), segmentación de redes Zero-Trust y monitoreo continuo de amenazas.',
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Footer Section with Crisp White Background */}
      <footer className="w-full border-t border-[#E2E8F0] bg-white text-[#191c1e] transition-colors">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Main Footer Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-10 border-b border-[#E2E8F0]">
            {/* Integrated Logo: Graphic 'D' followed by 'DigitalBiz - IT & Cloud Solutions' in black text */}
            <div className="flex flex-col gap-2">
              <DigitalBizLogo size="lg" onClick={scrollToTop} />
              <p className="text-xs sm:text-sm text-gray-500 max-w-md mt-1">
                Líderes en soluciones de infraestructura TI, cloud computing empresarial, ciberseguridad y soporte técnico especializado.
              </p>
            </div>

            {/* Quick Contact & Action */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#0051d5]" />
                <a href="mailto:digitalbizcl@gmail.com" className="hover:text-[#0051d5] transition-colors">
                  digitalbizcl@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#0051d5]" />
                <a href="tel:+56934500790" className="hover:text-[#0051d5] transition-colors">
                  +56934500790
                </a>
              </div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 p-2 rounded-lg border border-[#E2E8F0] hover:bg-[#F8FAFC] text-gray-700 hover:text-black transition-colors"
                title="Volver arriba"
                aria-label="Volver arriba"
              >
                <ArrowUp size={16} />
                <span className="text-xs font-medium">Arriba</span>
              </button>
            </div>
          </div>

          {/* Secondary Footer Row: Legal Links & Copyright */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            {/* Legal Links */}
            <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-7">
              <button
                onClick={() => setActiveModal('privacy')}
                className="hover:text-[#0051d5] transition-colors cursor-pointer"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => setActiveModal('terms')}
                className="hover:text-[#0051d5] transition-colors cursor-pointer"
              >
                Términos del Servicio
              </button>
              <button
                onClick={() => setActiveModal('cookies')}
                className="hover:text-[#0051d5] transition-colors cursor-pointer"
              >
                Política de Cookies
              </button>
              <button
                onClick={() => setActiveModal('security')}
                className="hover:text-[#0051d5] transition-colors cursor-pointer"
              >
                Seguridad &amp; Cumplimiento
              </button>
            </nav>

            {/* Copyright */}
            <div className="text-center md:text-right text-gray-500">
              &copy; {new Date().getFullYear()} <strong className="text-black font-semibold">DigitalBiz</strong> - IT &amp; Cloud Solutions. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Modal */}
      {activeModal && policyContent[activeModal] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border border-gray-200 relative">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-[#0051d5]" />
                <h4 className="font-bold text-gray-900 text-base">
                  {policyContent[activeModal].title}
                </h4>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                aria-label="Cerrar modal"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {policyContent[activeModal].body}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-[#000000] text-white px-5 py-2 rounded text-xs font-semibold hover:bg-[#222222] transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
