import React from 'react';
import { ShieldCheck, Award, Users, Cpu, Clock, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Award className="text-[#0051d5]" size={24} />,
      title: 'Ingeniería Certificada',
      desc: 'Equipo multidisciplinario certificado en AWS Solutions Architect, Microsoft Azure, Cisco CCNP y normativas ISO 27001.'
    },
    {
      icon: <Clock className="text-[#0051d5]" size={24} />,
      title: 'SLA con Garantía Contractual',
      desc: 'Compromiso riguroso de tiempos de atención y resolución para mantener la operatividad ininterrumpida de tu infraestructura.'
    },
    {
      icon: <ShieldCheck className="text-[#0051d5]" size={24} />,
      title: 'Seguridad por Diseño',
      desc: 'Cada solución implementa protocolos de cifrado robusto, control de accesos Zero-Trust y monitoreo continuo contra incidentes.'
    },
    {
      icon: <Cpu className="text-[#0051d5]" size={24} />,
      title: 'Eficiencia y Escalabilidad',
      desc: 'Optimizamos la inversión tecnológica mediante arquitecturas modulares que crecen dinámicamente con tu negocio.'
    }
  ];

  const partners = [
    'Amazon Web Services',
    'Microsoft Azure',
    'Google Cloud',
    'Cisco Systems',
    'Fortinet',
    'CrowdStrike'
  ];

  return (
    <section id="about" className="w-full px-6 py-20 max-w-[1280px] mx-auto">
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 sm:p-12 shadow-sm">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 bg-[#edf3ff] text-[#0051d5] px-3.5 py-1 rounded text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Sobre DigitalBiz</span>
          </div>
          <h2 className="text-[30px] sm:text-[36px] font-bold text-[#000000] tracking-tight leading-tight mb-4">
            Aliados Estratégicos en Infraestructura TI y Crecimiento Empresarial
          </h2>
          <p className="text-[16px] text-[#334155] leading-relaxed">
            Desde hace más de una década, en DigitalBiz transformamos la complejidad tecnológica en ventajas competitivas tangibles. Acompañamos a medianas y grandes corporaciones en su modernización hacia entornos cloud seguros, resilientes y eficientes.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#f7f9fb] border border-[#E2E8F0] flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center shadow-xs">
                {pillar.icon}
              </div>
              <h3 className="text-[17px] font-bold text-[#000000]">
                {pillar.title}
              </h3>
              <p className="text-[14px] text-[#475569] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Partners & Ecosystem */}
        <div className="pt-8 border-t border-[#E2E8F0]">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center mb-6">
            Ecosistema de Tecnologías &amp; Alianzas Globales
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-[#f7f9fb] border border-[#E2E8F0] rounded-md text-sm font-semibold text-[#334155]"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
