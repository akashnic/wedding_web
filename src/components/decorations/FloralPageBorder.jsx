import React from 'react';
import { IndianFloralCorner, FloralToranHeader, FloralToranFooter } from './FloralMotifs';

/**
 * FloralPageBorder
 * Surrounds an entire page or section with an authentic Indian Hindu Wedding floral frame.
 * 
 * Props:
 * - variant: 'gold' | 'burgundy' | 'light' | 'dark' | 'sage'
 * - showCorners: boolean (default: true)
 * - showToran: boolean (default: true) - top garland festoon
 * - showFooterGarland: boolean (default: false)
 * - showDoubleBorder: boolean (default: true)
 * - cornerSize: number (default: 80-120 responsive)
 * - inset: string (tailwind padding or margin class)
 * - className: custom container class
 * - children: wrapped section content
 */
export default function FloralPageBorder({
  children,
  variant = 'light',
  showCorners = true,
  showToran = true,
  showFooterGarland = false,
  showDoubleBorder = true,
  cornerSize = 90,
  className = '',
  innerClassName = ''
}) {
  const borderColorMap = {
    gold: 'border-[#C9A45C]/35',
    burgundy: 'border-[#651F30]/30',
    light: 'border-[#A8697A]/25',
    dark: 'border-[#C9A45C]/30',
    sage: 'border-[#B7BB88]/40'
  };

  const innerBorderColorMap = {
    gold: 'border-[#EDDFC4]/30',
    burgundy: 'border-[#C9A45C]/25',
    light: 'border-[#C9A45C]/20',
    dark: 'border-[#EDDFC4]/20',
    sage: 'border-[#6E6B41]/25'
  };

  const borderColor = borderColorMap[variant] || borderColorMap.light;
  const innerBorderColor = innerBorderColorMap[variant] || innerBorderColorMap.light;

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Decorative Outer Double Border Frame (Responsive Inset) */}
      {showDoubleBorder && (
        <div className="absolute inset-2 sm:inset-4 md:inset-6 pointer-events-none z-0 rounded-2xl md:rounded-3xl border border-solid transition-colors duration-300" style={{ borderColor: 'inherit' }}>
          <div className={`w-full h-full rounded-2xl md:rounded-3xl border ${borderColor} p-1 sm:p-1.5`}>
            <div className={`w-full h-full rounded-xl md:rounded-2xl border border-dashed ${innerBorderColor}`} />
          </div>
        </div>
      )}

      {/* 4 Corner Floral Ornaments */}
      {showCorners && (
        <>
          {/* Top-Left */}
          <div className="absolute top-2 sm:top-4 md:top-6 left-2 sm:left-4 md:left-6 pointer-events-none z-10">
            <IndianFloralCorner
              position="top-left"
              variant={variant}
              size={cornerSize}
              className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          </div>

          {/* Top-Right */}
          <div className="absolute top-2 sm:top-4 md:top-6 right-2 sm:right-4 md:right-6 pointer-events-none z-10">
            <IndianFloralCorner
              position="top-right"
              variant={variant}
              size={cornerSize}
              className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          </div>

          {/* Bottom-Left */}
          <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-2 sm:left-4 md:left-6 pointer-events-none z-10">
            <IndianFloralCorner
              position="bottom-left"
              variant={variant}
              size={cornerSize}
              className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          </div>

          {/* Bottom-Right */}
          <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 right-2 sm:right-4 md:right-6 pointer-events-none z-10">
            <IndianFloralCorner
              position="bottom-right"
              variant={variant}
              size={cornerSize}
              className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          </div>
        </>
      )}

      {/* Top Auspicious Floral Toran (Garland) */}
      {showToran && (
        <div className="absolute top-2 sm:top-4 md:top-6 left-0 right-0 z-10 px-8 sm:px-16 pointer-events-none">
          <FloralToranHeader variant={variant} />
        </div>
      )}

      {/* Optional Bottom Garland */}
      {showFooterGarland && (
        <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-0 right-0 z-10 px-8 sm:px-16 pointer-events-none">
          <FloralToranFooter variant={variant} />
        </div>
      )}

      {/* Content Container */}
      <div className={`relative z-10 w-full ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}
