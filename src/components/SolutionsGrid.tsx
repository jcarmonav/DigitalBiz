import React from 'react';
import { Cloud, Headphones, Shield, Code, Network, Lightbulb, ArrowUpRight } from 'lucide-react';
import { SolutionItem } from '../types';
import { SOLUTIONS_DATA } from '../data/solutions';

interface SolutionsGridProps {
  onSelectSolution: (solution: SolutionItem) => void;
}

export const SolutionsGrid: React.FC<SolutionsGridProps> = ({ onSelectSolution }) => {
  const getIcon = (iconName: SolutionItem['iconName']) => {
    const props = { size: 26, className: 'text-[#0051d5]' };
    switch (iconName) {
      case 'cloud':
        return <Cloud {...props} />;
      case 'support':
        return <Headphones {...props} />;
      case 'shield':
        return <Shield {...props} />;
      case 'code':
        return <Code {...props} />;
      case 'router':
        return <Network {...props} />;
      case 'lightbulb':
        return <Lightbulb {...props} />;
      default:
        return <Cloud {...props} />;
    }
  };

  return (
    <section id="services" className="w-full px-6 py-20 max-w-[1280px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-[32px] sm:text-[36px] font-bold text-[#000000] mb-4 tracking-[-0.01em]">
          Nuestras Soluciones
        </h2>
        <p className="text-[17px] text-[#334155] leading-[1.6]">
          Arquitectura tecnológica robusta y escalable para empresas que buscan liderar en el entorno digital.
        </p>
      </div>

      {/* 3x2 Grid on Desktop / 1x6 on Mobile */}
      <div id="solutions" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SOLUTIONS_DATA.map((solution) => (
          <div
            key={solution.id}
            onClick={() => onSelectSolution(solution)}
            className="group cursor-pointer bg-white border border-[#E2E8F0] p-8 rounded-xl hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)] hover:border-[#cbd5e1] transition-all duration-300 flex flex-col items-start justify-between min-h-[250px] relative overflow-hidden"
          >
            <div className="w-full flex flex-col items-start gap-4">
              {/* Icon Container with Electric Glow */}
              <div className="w-12 h-12 rounded-lg bg-[rgba(37,99,235,0.1)] flex items-center justify-center transition-transform group-hover:scale-105">
                {getIcon(solution.iconName)}
              </div>

              {/* Title */}
              <div className="flex items-center justify-between w-full">
                <h3 className="text-[20px] font-bold text-[#000000] tracking-tight group-hover:text-[#0051d5] transition-colors">
                  {solution.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="text-gray-300 group-hover:text-[#0051d5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>

              {/* Description */}
              <p className="text-[15px] text-[#334155] leading-[1.6]">
                {solution.shortDesc}
              </p>
            </div>

            {/* Micro Badge / Bottom Detail */}
            <div className="mt-6 pt-4 border-t border-gray-100 w-full flex items-center justify-between text-xs text-[#0051d5] font-medium">
              <span>Ver especificaciones técnicas</span>
              <span className="text-gray-400 group-hover:text-[#0051d5] font-normal">SLA Activo</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
