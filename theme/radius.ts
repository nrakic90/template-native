export const radius = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  full: '9999px',

  // Semantic radius tokens
  button: {
    sm: '4px',
    md: '6px',
    lg: '8px',
  },

  card: {
    sm: '6px',
    md: '8px',
    lg: '12px',
  },

  input: {
    sm: '4px',
    md: '6px',
    lg: '8px',
  },

  modal: {
    sm: '8px',
    md: '12px',
    lg: '16px',
  },

  avatar: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    full: '9999px',
  },

  badge: {
    sm: '4px',
    md: '6px',
    full: '9999px',
  },

  // Component specific radius
  component: {
    pill: '9999px',
    circle: '50%',
    rounded: '8px',
    square: '0px',
  },
} as const;

export type RadiusTokens = typeof radius;