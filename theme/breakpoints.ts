export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',

  // Semantic breakpoints
  mobile: '475px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
  wide: '1536px',

  // Container max widths
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Media query helpers
  media: {
    xs: `(min-width: 475px)`,
    sm: `(min-width: 640px)`,
    md: `(min-width: 768px)`,
    lg: `(min-width: 1024px)`,
    xl: `(min-width: 1280px)`,
    '2xl': `(min-width: 1536px)`,
    
    // Max width queries
    'max-xs': `(max-width: 474px)`,
    'max-sm': `(max-width: 639px)`,
    'max-md': `(max-width: 767px)`,
    'max-lg': `(max-width: 1023px)`,
    'max-xl': `(max-width: 1279px)`,
    'max-2xl': `(max-width: 1535px)`,

    // Range queries
    'sm-only': `(min-width: 640px) and (max-width: 767px)`,
    'md-only': `(min-width: 768px) and (max-width: 1023px)`,
    'lg-only': `(min-width: 1024px) and (max-width: 1279px)`,
    'xl-only': `(min-width: 1280px) and (max-width: 1535px)`,

    // Device specific
    mobile: `(max-width: 767px)`,
    tablet: `(min-width: 768px) and (max-width: 1023px)`,
    desktop: `(min-width: 1024px)`,

    // Orientation
    portrait: '(orientation: portrait)',
    landscape: '(orientation: landscape)',

    // High DPI
    retina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
  },
} as const;

export type BreakpointTokens = typeof breakpoints;