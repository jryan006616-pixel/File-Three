import React from 'react';

interface RhinoLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
  asCard?: boolean;
}

export const RhinoLogo: React.FC<RhinoLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
  asCard = false
}) => {
  // 'dark' variant = for light backgrounds (grey text + purple tagline/rhino)
  // 'light' variant = for dark backgrounds (can render as a clean white logo card or bright text)
  const isDarkBg = variant === 'light';
  
  // If asCard is requested or on dark background, we can wrap in the signature crisp white badge card from the image
  const primaryTextColor = isDarkBg && !asCard ? 'text-white' : 'text-[#4A4B4D]';
  const secondaryTextColor = isDarkBg && !asCard ? 'text-[#E0E6E3]' : 'text-[#68696B]';
  const taglineColor = isDarkBg && !asCard ? 'text-[#F3AEF8]' : 'text-[#7D2D82]';
  const rhinoStrokeColor = isDarkBg && !asCard ? '#F3AEF8' : '#7D2D82';

  const iconSizes = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-12 h-12 sm:w-14 sm:h-14',
    lg: 'w-16 h-16 sm:w-20 sm:h-20'
  };

  const titleSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-xl sm:text-2xl lg:text-3xl',
    lg: 'text-2xl sm:text-3xl lg:text-4xl'
  };

  const subSizes = {
    sm: 'text-[11px] sm:text-xs',
    md: 'text-xs sm:text-base lg:text-lg',
    lg: 'text-sm sm:text-lg lg:text-xl'
  };

  const taglineSizes = {
    sm: 'text-[9px] sm:text-[10px]',
    md: 'text-[10px] sm:text-xs lg:text-sm',
    lg: 'text-xs sm:text-sm lg:text-base'
  };

  const content = (
    <div className="flex items-center gap-2.5 sm:gap-3.5 select-none">
      {/* Official Rhino Head Line-Art Icon (Purple Contour) */}
      <div className={`${iconSizes[size]} shrink-0 flex items-center justify-center relative`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-105"
        >
          {/* Ear & Head Crest Top Left */}
          <path
            d="M 28,18 C 22,12 16,18 20,28 C 22,34 26,38 24,46 C 21,54 12,58 14,70 C 16,78 26,86 36,80 C 44,76 38,68 34,66 C 30,64 26,58 28,50 C 30,42 34,36 30,28 C 28,24 30,20 28,18 Z"
            stroke={rhinoStrokeColor}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Main Large Horn Swooping Right */}
          <path
            d="M 32,48 C 42,46 54,40 68,28 C 64,38 52,50 38,58"
            stroke={rhinoStrokeColor}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Secondary Smaller Horn */}
          <path
            d="M 28,42 C 34,38 42,34 48,28 C 44,36 38,42 32,45"
            stroke={rhinoStrokeColor}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Eye Detail */}
          <circle cx="25" cy="38" r="1.8" fill={rhinoStrokeColor} />
          <path
            d="M 23,34 C 25,33 27,34 28,36"
            stroke={rhinoStrokeColor}
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Jaw / Chin contour */}
          <path
            d="M 22,62 C 26,66 32,68 36,66"
            stroke={rhinoStrokeColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Official Typography Stack */}
      <div className="flex flex-col justify-center leading-tight">
        {/* Row 1: RhinoMDs */}
        <div className={`font-serif font-normal tracking-normal ${titleSizes[size]} ${primaryTextColor} font-['Georgia','Garamond','Times_New_Roman',serif]`}>
          RhinoMDs
        </div>

        {/* Row 2: Billing Services */}
        <div className={`font-serif font-normal ${subSizes[size]} ${secondaryTextColor} tracking-normal -mt-0.5 sm:-mt-1 font-['Georgia','Garamond','Times_New_Roman',serif]`}>
          Billing Services
        </div>

        {/* Row 3: Tagline */}
        {showSubtitle && (
          <div className={`font-serif italic font-medium ${taglineSizes[size]} ${taglineColor} mt-0.5 sm:mt-1 tracking-tight font-['Georgia','Garamond','Times_New_Roman',serif]`}>
            Your Strength In Practice Management
          </div>
        )}
      </div>
    </div>
  );

  if (asCard) {
    return (
      <div className={`bg-white rounded-2xl p-2.5 sm:p-3.5 border border-[#823288]/20 shadow-md inline-block ${className}`}>
        {content}
      </div>
    );
  }

  return <div className={className}>{content}</div>;
};


