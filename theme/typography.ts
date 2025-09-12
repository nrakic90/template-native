export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    serif: ['Georgia', 'serif'],
    mono: ['SF Mono', 'Monaco', 'monospace'],
    display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
  },

  fontSize: {
    xs: ['12px', { lineHeight: '16px', letterSpacing: '0.025em' }],
    sm: ['14px', { lineHeight: '20px', letterSpacing: '0.025em' }],
    base: ['16px', { lineHeight: '24px', letterSpacing: '0em' }],
    lg: ['18px', { lineHeight: '28px', letterSpacing: '-0.025em' }],
    xl: ['20px', { lineHeight: '28px', letterSpacing: '-0.025em' }],
    '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.025em' }],
    '3xl': ['30px', { lineHeight: '36px', letterSpacing: '-0.025em' }],
    '4xl': ['36px', { lineHeight: '40px', letterSpacing: '-0.025em' }],
    '5xl': ['48px', { lineHeight: '52px', letterSpacing: '-0.025em' }],
    '6xl': ['60px', { lineHeight: '64px', letterSpacing: '-0.025em' }],
    '7xl': ['72px', { lineHeight: '76px', letterSpacing: '-0.025em' }],
    '8xl': ['96px', { lineHeight: '100px', letterSpacing: '-0.025em' }],
    '9xl': ['128px', { lineHeight: '132px', letterSpacing: '-0.025em' }],
  },

  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Semantic typography tokens
  heading: {
    h1: {
      fontSize: ['48px', { lineHeight: '52px', letterSpacing: '-0.025em' }],
      fontWeight: '700',
      fontFamily: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
    },
    h2: {
      fontSize: ['36px', { lineHeight: '40px', letterSpacing: '-0.025em' }],
      fontWeight: '600',
      fontFamily: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
    },
    h3: {
      fontSize: ['30px', { lineHeight: '36px', letterSpacing: '-0.025em' }],
      fontWeight: '600',
      fontFamily: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
    },
    h4: {
      fontSize: ['24px', { lineHeight: '32px', letterSpacing: '-0.025em' }],
      fontWeight: '600',
      fontFamily: ['Inter', 'system-ui', 'sans-serif'],
    },
    h5: {
      fontSize: ['20px', { lineHeight: '28px', letterSpacing: '-0.025em' }],
      fontWeight: '600',
      fontFamily: ['Inter', 'system-ui', 'sans-serif'],
    },
    h6: {
      fontSize: ['18px', { lineHeight: '28px', letterSpacing: '-0.025em' }],
      fontWeight: '600',
      fontFamily: ['Inter', 'system-ui', 'sans-serif'],
    },
  },

  body: {
    large: {
      fontSize: ['18px', { lineHeight: '28px', letterSpacing: '-0.025em' }],
      fontWeight: '400',
      fontFamily: ['Inter', 'system-ui', 'sans-serif'],
    },
    medium: {
      fontSize: ['16px', { lineHeight: '24px', letterSpacing: '0em' }],
      fontWeight: '400',
      fontFamily: ['Inter', 'system-ui', 'sans-serif'],
    },
    small: {
      fontSize: ['14px', { lineHeight: '20px', letterSpacing: '0.025em' }],
      fontWeight: '400',
      fontFamily: ['Inter', 'system-ui', 'sans-serif'],
    },
  },

  caption: {
    fontSize: ['12px', { lineHeight: '16px', letterSpacing: '0.025em' }],
    fontWeight: '500',
    fontFamily: ['Inter', 'system-ui', 'sans-serif'],
  },

  button: {
    fontSize: ['16px', { lineHeight: '24px', letterSpacing: '0em' }],
    fontWeight: '600',
    fontFamily: ['Inter', 'system-ui', 'sans-serif'],
  },

  link: {
    fontSize: ['16px', { lineHeight: '24px', letterSpacing: '0em' }],
    fontWeight: '500',
    fontFamily: ['Inter', 'system-ui', 'sans-serif'],
  },
} as const;

export type TypographyTokens = typeof typography;