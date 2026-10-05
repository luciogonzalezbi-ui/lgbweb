import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showSlogan?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showText = true,
  showSlogan = false,
  className = '',
  onClick,
}) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24 md:w-28 md:h-28',
  };

  const textSizes = {
    sm: { lgb: 'text-xl', estudio: 'text-[9px] tracking-[0.26em]' },
    md: { lgb: 'text-2xl md:text-3xl', estudio: 'text-[10px] md:text-[11px] tracking-[0.28em]' },
    lg: { lgb: 'text-4xl md:text-5xl', estudio: 'text-xs md:text-sm tracking-[0.3em]' },
    xl: { lgb: 'text-6xl md:text-7xl', estudio: 'text-base md:text-lg tracking-[0.32em]' },
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col select-none transition-all duration-200 group ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      aria-label="LGB ESTUDIO WEB"
    >
      <div className="flex items-center gap-3.5 md:gap-4.5">
        {/* Exact Vector Replica of the Browser Squircle Icon */}
        <div className={`relative flex-shrink-0 ${iconSizes[size]} transition-transform duration-300 group-hover:scale-105`}>
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-sm"
          >
            {/* Dark Navy Squircle Container */}
            <rect
              x="2"
              y="2"
              width="96"
              height="96"
              rx="26"
              className={isDark ? 'fill-[#0D1935] stroke-white/20' : 'fill-[#0D1935]'}
              strokeWidth={isDark ? '2' : '0'}
            />

            {/* Top 3 Browser Dots: 1st Orange, 2nd White, 3rd White */}
            <circle cx="27" cy="23" r="3.5" fill="#E95325" />
            <circle cx="39" cy="23" r="3.5" fill="#FFFFFF" />
            <circle cx="51" cy="23" r="3.5" fill="#FFFFFF" />

            {/* Subtle Divider Line across the top bar */}
            <line
              x1="22"
              y1="33"
              x2="78"
              y2="33"
              stroke="#2B3A5C"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Rounded letter 'L' in signature bright orange */}
            <path
              d="M37 44V68C37 70.2091 38.7909 72 41 72H67"
              stroke="#E95325"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* White rounded pill / UI block next to the upper stem of 'L' */}
            <rect
              x="50"
              y="48"
              width="21"
              height="9"
              rx="4.5"
              fill="#FFFFFF"
            />
          </svg>
        </div>

        {/* Text next to the icon: LGB (navy/white) + ESTUDIO WEB (orange) */}
        {showText && (
          <div className="flex flex-col justify-center leading-none">
            <span
              className={`font-black tracking-tight ${textSizes[size].lgb} ${
                isDark ? 'text-white' : 'text-[#0D1935]'
              }`}
            >
              LGB
            </span>
            <span
              className={`font-bold uppercase text-[#E95325] ${textSizes[size].estudio} mt-1`}
            >
              ESTUDIO WEB
            </span>
          </div>
        )}
      </div>

      {/* Optional Slogan underneath */}
      {showSlogan && (
        <p className={`mt-3.5 font-medium ${isDark ? 'text-slate-300' : 'text-[#3E4C5E]'} ${
          size === 'xl' ? 'text-base sm:text-lg md:text-xl' : 'text-xs sm:text-sm'
        }`}>
          Páginas web a medida para negocios y profesionales
        </p>
      )}
    </div>
  );
};
