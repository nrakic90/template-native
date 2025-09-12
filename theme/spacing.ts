export const spacing = {
  0: '0px',
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  2.5: '10px',
  3: '12px',
  3.5: '14px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',

  // Semantic spacing tokens
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',

  // Component specific spacing
  component: {
    buttonPadding: {
      sm: { x: '12px', y: '6px' },
      md: { x: '16px', y: '8px' },
      lg: { x: '20px', y: '12px' },
    },
    cardPadding: {
      sm: '12px',
      md: '16px',
      lg: '24px',
    },
    inputPadding: {
      sm: { x: '8px', y: '6px' },
      md: { x: '12px', y: '8px' },
      lg: { x: '16px', y: '12px' },
    },
    containerPadding: {
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '48px',
    },
    sectionSpacing: {
      sm: '24px',
      md: '32px',
      lg: '48px',
      xl: '64px',
    },
  },

  // Layout spacing
  layout: {
    headerHeight: '64px',
    footerHeight: '80px',
    sidebarWidth: '280px',
    maxContentWidth: '1200px',
    gutter: '16px',
    section: '80px',
  },
} as const;

export type SpacingTokens = typeof spacing;