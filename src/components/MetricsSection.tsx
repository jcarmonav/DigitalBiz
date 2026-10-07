import React from 'react';
import { METRICS_DATA } from '../data/solutions';

export const MetricsSection: React.FC = () => {
  return (
    <section className="w-full px-6 py-16 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#E2E8F0]">
        {METRICS_DATA.map((metric, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center p-4"
          >
            <span
              className={`text-[36px] sm:text-[44px] lg:text-[56px] font-extrabold tracking-tight leading-none ${
                metric.highlight ? 'text-[#0051d5]' : 'text-[#000000]'
              }`}
            >
              {metric.value}
            </span>
            <span className="text-[13px] font-semibold text-[#475569] mt-3 uppercase tracking-wider">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
