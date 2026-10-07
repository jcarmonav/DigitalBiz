import React, { useState } from 'react';
import logoFullImg from '../assets/images/Gemini_Generated_Image_njotyhnjotyhnjot.jpg';

interface DigitalBizLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  showSubtitle?: boolean;
}

export const DigitalBizLogo: React.FC<DigitalBizLogoProps> = ({
  className = '',
  size = 'md',
  onClick,
  showSubtitle = true,
}) => {
  const [hasImageError, setHasImageError] = useState(false);

  // Height definitions for the horizontal logo - significantly larger and bolder for high visual impact
  const logoHeightClass = {
    sm: 'h-[44px] sm:h-[50px]',
    md: 'h-[58px] sm:h-[70px] md:h-[80px] lg:h-[88px]',
    lg: 'h-[72px] sm:h-[84px] md:h-[96px] lg:h-[108px]',
  }[size];

  const subSize = {
    sm: 'text-[13px]',
    md: 'text-[15px] sm:text-[16px] md:text-[17.5px]',
    lg: 'text-[17px] sm:text-[19px]',
  }[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${onClick ? 'cursor-pointer group' : ''} ${className}`}
      title="DigitalBiz - IT & Cloud Solutions"
    >
      {/* Official DigitalBiz Full Logo (Cyan & Blue Cyber D + DigitalBiz wordmark) */}
      <div className="relative shrink-0 flex items-center bg-transparent transition-transform duration-200 group-hover:scale-[1.02]">
        {!hasImageError ? (
          <img
            src={logoFullImg}
            alt="DigitalBiz"
            className={`${logoHeightClass} w-auto object-contain mix-blend-multiply`}
            onError={() => setHasImageError(true)}
            loading="eager"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-linear-to-tr from-[#0051d5] to-[#00b4d8] flex items-center justify-center text-white font-black text-2xl shadow-xs">
              D
            </div>
            <span className="font-black text-[#000000] text-2xl tracking-tight">
              DigitalBiz
            </span>
          </div>
        )}
      </div>

      {/* Subtitle: '- IT & Cloud Solutions' perfectly leveled with the logo */}
      {showSubtitle && (
        <span className={`font-semibold text-[#1e293b] tracking-tight whitespace-nowrap transition-colors group-hover:text-[#0051d5] ${subSize}`}>
          - IT &amp; Cloud Solutions
        </span>
      )}
    </div>
  );
};

