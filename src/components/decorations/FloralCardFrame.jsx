import React from 'react';
import { IndianFloralCorner, LotusMedallion } from './FloralMotifs';

/**
 * FloralCardFrame
 * Gives individual highlight cards (such as events, RSVP box, venue box, photo frame)
 * an authentic Indian wedding patrika / card framing with delicate floral corner brackets.
 */
export default function FloralCardFrame({
  children,
  variant = 'light',
  className = '',
  cornerSize = 48,
  showLotusHeader = false,
  lotusSize = 36
}) {
  const borderVariants = {
    light: 'border-[#A8697A]/30 hover:border-[#651F30]/50 shadow-md',
    burgundy: 'border-[#C9A45C]/30 hover:border-[#C9A45C]/60 shadow-xl',
    gold: 'border-[#C9A45C]/40 hover:border-[#C9A45C]/70 shadow-xl',
    dark: 'border-[#C9A45C]/35 hover:border-[#EDDFC4]/60 shadow-2xl',
    sage: 'border-[#B7BB88]/50 hover:border-[#6E6B41]/60 shadow-md'
  };

  const selectedBorder = borderVariants[variant] || borderVariants.light;

  return (
    <div className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${selectedBorder} ${className}`}>
      {/* 4 Corner Ornaments */}
      <div className="absolute top-1 left-1 pointer-events-none z-10">
        <IndianFloralCorner position="top-left" variant={variant} size={cornerSize} className="w-8 h-8 sm:w-10 sm:h-10 opacity-75" />
      </div>
      <div className="absolute top-1 right-1 pointer-events-none z-10">
        <IndianFloralCorner position="top-right" variant={variant} size={cornerSize} className="w-8 h-8 sm:w-10 sm:h-10 opacity-75" />
      </div>
      <div className="absolute bottom-1 left-1 pointer-events-none z-10">
        <IndianFloralCorner position="bottom-left" variant={variant} size={cornerSize} className="w-8 h-8 sm:w-10 sm:h-10 opacity-75" />
      </div>
      <div className="absolute bottom-1 right-1 pointer-events-none z-10">
        <IndianFloralCorner position="bottom-right" variant={variant} size={cornerSize} className="w-8 h-8 sm:w-10 sm:h-10 opacity-75" />
      </div>

      {/* Optional Top Auspicious Lotus Crest */}
      {showLotusHeader && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 pointer-events-none z-10">
          <LotusMedallion variant={variant} size={lotusSize} />
        </div>
      )}

      {/* Card Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
