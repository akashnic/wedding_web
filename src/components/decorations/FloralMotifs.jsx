import React from 'react';

/**
 * Color presets for Indian Hindu Wedding Floral Motifs
 */
export const FLORAL_VARIANTS = {
  gold: {
    primary: '#C9A45C',      // Royal Antique Gold
    secondary: '#EDDFC4',    // Champagne Ivory
    accent: '#E5C07B',       // Bright Gold
    glow: 'rgba(201, 164, 92, 0.4)',
    stroke: '#C9A45C',
    fill: '#C9A45C'
  },
  burgundy: {
    primary: '#651F30',      // Deep Royal Burgundy / Crimson
    secondary: '#A8697A',    // Dusty Rose
    accent: '#C9A45C',       // Gold highlight
    glow: 'rgba(101, 31, 48, 0.3)',
    stroke: '#651F30',
    fill: '#651F30'
  },
  light: {
    primary: '#651F30',      // Deep Burgundy on light backgrounds
    secondary: '#A8697A',    // Dusty Rose
    accent: '#C9A45C',       // Gold
    glow: 'rgba(168, 105, 122, 0.25)',
    stroke: '#651F30',
    fill: '#651F30'
  },
  dark: {
    primary: '#EDDFC4',      // Warm Ivory / Pale Gold on dark backgrounds
    secondary: '#C9A45C',    // Royal Gold
    accent: '#FFF8EC',       // Light highlight
    glow: 'rgba(201, 164, 92, 0.4)',
    stroke: '#EDDFC4',
    fill: '#EDDFC4'
  },
  sage: {
    primary: '#6E6B41',      // Olive Sage
    secondary: '#B7BB88',    // Light Sage
    accent: '#C9A45C',       // Gold
    glow: 'rgba(183, 187, 136, 0.3)',
    stroke: '#6E6B41',
    fill: '#6E6B41'
  }
};

/**
 * Indian Floral Corner Motif
 * Features blooming lotus at corner origin, paisley (kalka) scrolls,
 * royal vine tendrils, and auspicious petal beads.
 */
export function IndianFloralCorner({
  position = 'top-left',
  variant = 'gold',
  size = 100,
  className = ''
}) {
  const colors = FLORAL_VARIANTS[variant] || FLORAL_VARIANTS.gold;

  // Transformations for each 4 corners
  const transforms = {
    'top-left': '',
    'top-right': 'scale(-1, 1)',
    'bottom-left': 'scale(1, -1)',
    'bottom-right': 'scale(-1, -1)'
  };

  const transform = transforms[position] || '';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none transition-all duration-300 ${className}`}
      style={{
        transform,
        transformOrigin: 'center'
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`floralGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.primary} />
          <stop offset="60%" stopColor={colors.secondary} />
          <stop offset="100%" stopColor={colors.accent} />
        </linearGradient>
        <filter id={`floralGlow-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor={colors.glow} />
        </filter>
      </defs>

      <g filter={`url(#floralGlow-${variant})`}>
        {/* Outer Frame Lines with Indian Scallop Corner */}
        <path
          d="M 6 114 L 6 36 C 6 20 20 6 36 6 L 114 6"
          stroke={`url(#floralGrad-${variant})`}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 14 114 L 14 40 C 14 26 26 14 40 14 L 114 14"
          stroke={colors.primary}
          strokeWidth="0.8"
          strokeOpacity="0.7"
          strokeDasharray="2 3"
        />

        {/* Auspicious Lotus Centerpiece at the Corner Nexus */}
        <g transform="translate(18, 18) scale(0.65)">
          {/* Central Lotus Petal */}
          <path
            d="M 20 0 C 14 12 16 26 20 32 C 24 26 26 12 20 0 Z"
            fill={colors.primary}
            opacity="0.9"
          />
          {/* Inner Petals */}
          <path
            d="M 20 6 C 10 16 12 28 20 32 C 16 26 14 16 20 6 Z"
            fill={colors.secondary}
          />
          <path
            d="M 20 6 C 30 16 28 28 20 32 C 24 26 26 16 20 6 Z"
            fill={colors.secondary}
          />
          {/* Outer Flaring Petals */}
          <path
            d="M 20 12 C 4 20 6 32 18 34 C 12 28 10 20 20 12 Z"
            fill={colors.primary}
            opacity="0.8"
          />
          <path
            d="M 20 12 C 36 20 34 32 22 34 C 28 28 30 20 20 12 Z"
            fill={colors.primary}
            opacity="0.8"
          />
          {/* Lotus Base / Kalash base */}
          <circle cx="20" cy="34" r="3.5" fill={colors.accent} />
        </g>

        {/* Horizontal Paisley / Mango Leaf Branch */}
        <path
          d="M 46 6 C 58 4 70 12 80 8 C 88 5 95 9 105 5 C 108 4 112 5 116 7"
          stroke={colors.primary}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Horizontal Floral Buds & Leaves */}
        <path
          d="M 64 6 C 66 1 73 1 73 6 C 73 11 66 11 64 6 Z"
          fill={colors.secondary}
        />
        <circle cx="78" cy="14" r="2" fill={colors.accent} />
        <path
          d="M 88 7 C 91 2 97 3 96 8 C 95 13 89 12 88 7 Z"
          fill={colors.primary}
          opacity="0.85"
        />
        <circle cx="106" cy="11" r="2.5" fill={colors.secondary} />
        <circle cx="115" cy="6" r="3" fill={colors.primary} />

        {/* Vertical Paisley / Mango Leaf Branch */}
        <path
          d="M 6 46 C 4 58 12 70 8 80 C 5 88 9 95 5 105 C 4 108 5 112 7 116"
          stroke={colors.primary}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Vertical Floral Buds & Leaves */}
        <path
          d="M 6 64 C 1 66 1 73 6 73 C 11 73 11 66 6 64 Z"
          fill={colors.secondary}
        />
        <circle cx="14" cy="78" r="2" fill={colors.accent} />
        <path
          d="M 7 88 C 2 91 3 97 8 96 C 13 95 12 89 7 88 Z"
          fill={colors.primary}
          opacity="0.85"
        />
        <circle cx="11" cy="106" r="2.5" fill={colors.secondary} />
        <circle cx="6" cy="115" r="3" fill={colors.primary} />

        {/* Decorative Inner Paisley Flourish (Kalpavriksha Vine) */}
        <path
          d="M 28 42 C 34 52 46 54 52 48 C 58 42 54 34 46 34 C 38 34 36 42 42 46 C 48 50 56 46 58 40"
          stroke={colors.primary}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
        <circle cx="48" cy="38" r="2.2" fill={colors.accent} />
        <circle cx="58" cy="40" r="1.8" fill={colors.secondary} />

        {/* Auspicious Pearl Beads arch */}
        <circle cx="28" cy="10" r="1.5" fill={colors.secondary} />
        <circle cx="21" cy="13" r="1.5" fill={colors.secondary} />
        <circle cx="13" cy="21" r="1.5" fill={colors.secondary} />
        <circle cx="10" cy="28" r="1.5" fill={colors.secondary} />
      </g>
    </svg>
  );
}

/**
 * Indian Floral Toran (Festoon / Garland) Header
 * Features traditional Marigold (Genda), Jasmine (Mogra), and Lotus drops
 * draped elegantly like a wedding entryway arch.
 */
export function FloralToranHeader({
  variant = 'gold',
  className = ''
}) {
  const colors = FLORAL_VARIANTS[variant] || FLORAL_VARIANTS.gold;

  return (
    <div className={`w-full overflow-hidden flex justify-center pointer-events-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1000 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-5xl h-8 sm:h-12 md:h-14 opacity-90"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`toranGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.2" />
            <stop offset="25%" stopColor={colors.primary} stopOpacity="0.85" />
            <stop offset="50%" stopColor={colors.secondary} stopOpacity="1" />
            <stop offset="75%" stopColor={colors.primary} stopOpacity="0.85" />
            <stop offset="100%" stopColor={colors.primary} stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Main Golden Garland Rope */}
        <path
          d="M 0 5 Q 125 5 250 18 Q 375 32 500 12 Q 625 32 750 18 Q 875 5 1000 5"
          stroke={`url(#toranGrad-${variant})`}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 0 8 Q 125 8 250 21 Q 375 35 500 15 Q 625 35 750 21 Q 875 8 1000 8"
          stroke={colors.primary}
          strokeWidth="0.8"
          strokeDasharray="4 6"
          strokeOpacity="0.6"
          fill="none"
        />

        {/* Draped Floral Festoon Swags (4 arcs) */}
        <path
          d="M 80 8 Q 180 38 280 18"
          stroke={colors.primary}
          strokeWidth="1.2"
          strokeDasharray="2 3"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M 280 18 Q 390 48 500 15"
          stroke={colors.primary}
          strokeWidth="1.2"
          strokeDasharray="2 3"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M 500 15 Q 610 48 720 18"
          stroke={colors.primary}
          strokeWidth="1.2"
          strokeDasharray="2 3"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M 720 18 Q 820 38 920 8"
          stroke={colors.primary}
          strokeWidth="1.2"
          strokeDasharray="2 3"
          fill="none"
          opacity="0.85"
        />

        {/* Central Auspicious Royal Lotus Droplet (Center 500) */}
        <g transform="translate(500, 15) scale(0.9)">
          <line x1="0" y1="0" x2="0" y2="16" stroke={colors.primary} strokeWidth="1.5" />
          {/* Lotus Blossom */}
          <g transform="translate(0, 24) scale(0.7)">
            <path d="M 0 -12 C -6 -4 -6 6 0 10 C 6 6 6 -4 0 -12 Z" fill={colors.accent} />
            <path d="M 0 -10 C -12 -2 -10 8 0 10 C -4 4 -6 -2 0 -10 Z" fill={colors.primary} />
            <path d="M 0 -10 C 12 -2 10 8 0 10 C 4 4 6 -2 0 -10 Z" fill={colors.primary} />
            <path d="M 0 -6 C -18 2 -14 12 0 11 C -8 7 -10 2 0 -6 Z" fill={colors.secondary} />
            <path d="M 0 -6 C 18 2 14 12 0 11 C 8 7 10 2 0 -8 Z" fill={colors.secondary} />
            <circle cx="0" cy="13" r="2.5" fill={colors.accent} />
          </g>
        </g>

        {/* Marigold / Jasmine Drops at Key Intervals */}
        {[180, 280, 390, 610, 720, 820].map((x, idx) => (
          <g key={idx} transform={`translate(${x}, ${idx % 2 === 0 ? 28 : 20}) scale(0.65)`}>
            <line x1="0" y1="-12" x2="0" y2="0" stroke={colors.primary} strokeWidth="1.2" />
            {/* Multi-petaled Marigold (Genda) Flower */}
            <circle cx="0" cy="4" r="5" fill={colors.secondary} />
            <circle cx="0" cy="4" r="3" fill={colors.accent} />
            <circle cx="0" cy="4" r="1.5" fill={colors.primary} />
            {/* Hanging Jasmine bud */}
            <path d="M 0 9 C -2 13 -2 16 0 18 C 2 16 2 13 0 9 Z" fill={colors.secondary} />
            <circle cx="0" cy="20" r="1" fill={colors.accent} />
          </g>
        ))}

        {/* Golden Beads along the garland */}
        {[50, 120, 220, 330, 450, 550, 670, 780, 880, 950].map((bx, bidx) => (
          <circle key={`b-${bidx}`} cx={bx} cy={12 + Math.sin(bx * 0.01) * 6} r="1.8" fill={colors.accent} />
        ))}
      </svg>
    </div>
  );
}

/**
 * Indian Floral Toran Footer (Inverted Garland for Page / Card Bottoms)
 */
export function FloralToranFooter({
  variant = 'gold',
  className = ''
}) {
  return (
    <div className={`rotate-180 ${className}`} aria-hidden="true">
      <FloralToranHeader variant={variant} />
    </div>
  );
}

/**
 * Auspicious Lotus Medallion (Kamal Crest)
 * Traditional Hindu wedding sacred emblem for section headers, card tops,
 * and elegant page dividers.
 */
export function LotusMedallion({
  variant = 'gold',
  size = 48,
  className = ''
}) {
  const colors = FLORAL_VARIANTS[variant] || FLORAL_VARIANTS.gold;

  return (
    <div className={`inline-flex items-center justify-center pointer-events-none ${className}`} aria-hidden="true">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`lotusGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.accent} />
            <stop offset="50%" stopColor={colors.primary} />
            <stop offset="100%" stopColor={colors.secondary} />
          </linearGradient>
        </defs>

        {/* Aura Ring with Auspicious Dots */}
        <circle cx="32" cy="32" r="28" stroke={colors.primary} strokeWidth="0.8" strokeDasharray="2 3" strokeOpacity="0.7" />
        <circle cx="32" cy="32" r="31" stroke={colors.secondary} strokeWidth="0.5" strokeOpacity="0.4" />

        {/* 8-fold Sunburst Rays */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 32 32)`}>
            <circle cx="32" cy="3.5" r="1.2" fill={colors.accent} />
          </g>
        ))}

        {/* Sacred Blooming Lotus (Full 7-petal layout) */}
        <g transform="translate(32, 33) scale(0.75)">
          {/* Base leaves */}
          <path
            d="M 0 16 C -18 16 -24 6 -12 6 C -6 6 0 12 0 16 Z"
            fill={colors.primary}
            opacity="0.7"
          />
          <path
            d="M 0 16 C 18 16 24 6 12 6 C 6 6 0 12 0 16 Z"
            fill={colors.primary}
            opacity="0.7"
          />

          {/* Outer Petals */}
          <path
            d="M 0 14 C -22 6 -20 -8 -6 -8 C -2 -8 0 4 0 14 Z"
            fill={colors.secondary}
            opacity="0.85"
          />
          <path
            d="M 0 14 C 22 6 20 -8 6 -8 C 2 -8 0 4 0 14 Z"
            fill={colors.secondary}
            opacity="0.85"
          />

          {/* Middle Petals */}
          <path
            d="M 0 14 C -14 0 -12 -16 0 -22 C 2 -16 4 0 0 14 Z"
            fill={`url(#lotusGrad-${variant})`}
          />
          <path
            d="M 0 14 C -8 -2 -8 -18 0 -22 C 8 -18 8 -2 0 14 Z"
            fill={colors.accent}
          />

          {/* Center Lotus Flame / Seed */}
          <circle cx="0" cy="0" r="3" fill={colors.primary} />
          <circle cx="0" cy="0" r="1.5" fill={colors.accent} />
          
          {/* Auspicious Diya / Lotus Base */}
          <path
            d="M -8 16 C -4 19 4 19 8 16 Z"
            fill={colors.accent}
          />
        </g>
      </svg>
    </div>
  );
}

/**
 * Indian Floral Vine Horizontal Divider
 * Beautiful symmetrical floral divider with blooming lotus center and curling vines.
 */
export function FloralVineDivider({
  variant = 'gold',
  className = ''
}) {
  const colors = FLORAL_VARIANTS[variant] || FLORAL_VARIANTS.gold;

  return (
    <div className={`w-full flex items-center justify-center gap-3 my-6 pointer-events-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 400 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-md h-6 sm:h-7 opacity-90"
      >
        <defs>
          <linearGradient id={`dividerGradLeft-${variant}`} x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="1" />
            <stop offset="60%" stopColor={colors.secondary} stopOpacity="0.8" />
            <stop offset="100%" stopColor={colors.primary} stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`dividerGradRight-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="1" />
            <stop offset="60%" stopColor={colors.secondary} stopOpacity="0.8" />
            <stop offset="100%" stopColor={colors.primary} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Center Lotus Motif (x: 200, y: 15) */}
        <g transform="translate(200, 15) scale(0.6)">
          <path d="M 0 -16 C -6 -6 -6 6 0 10 C 6 6 6 -6 0 -16 Z" fill={colors.accent} />
          <path d="M 0 -14 C -14 -4 -12 6 0 10 C -4 4 -6 -4 0 -14 Z" fill={colors.primary} />
          <path d="M 0 -14 C 14 -4 12 6 0 10 C 4 4 6 -4 0 -14 Z" fill={colors.primary} />
          <path d="M 0 -8 C -18 0 -14 10 0 10 C -8 6 -10 2 0 -8 Z" fill={colors.secondary} />
          <path d="M 0 -8 C 18 0 14 10 0 10 C 8 6 10 2 0 -8 Z" fill={colors.secondary} />
          <circle cx="0" cy="12" r="2.5" fill={colors.accent} />
        </g>

        {/* Left Curling Floral Vine */}
        <path
          d="M 175 15 C 150 15 140 8 120 12 C 100 16 90 14 60 15 L 10 15"
          stroke={`url(#dividerGradLeft-${variant})`}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Left Leaves & Buds */}
        <path d="M 145 13 C 148 8 155 9 154 14 Z" fill={colors.secondary} />
        <circle cx="120" cy="12" r="2" fill={colors.accent} />
        <path d="M 95 15 C 92 10 85 11 86 16 Z" fill={colors.primary} opacity="0.8" />
        <circle cx="65" cy="15" r="1.5" fill={colors.secondary} />

        {/* Right Curling Floral Vine */}
        <path
          d="M 225 15 C 250 15 260 8 280 12 C 300 16 310 14 340 15 L 390 15"
          stroke={`url(#dividerGradRight-${variant})`}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right Leaves & Buds */}
        <path d="M 255 13 C 252 8 245 9 246 14 Z" fill={colors.secondary} />
        <circle cx="280" cy="12" r="2" fill={colors.accent} />
        <path d="M 305 15 C 308 10 315 11 314 16 Z" fill={colors.primary} opacity="0.8" />
        <circle cx="335" cy="15" r="1.5" fill={colors.secondary} />
      </svg>
    </div>
  );
}
