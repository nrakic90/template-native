export const shadows = {
  // Standard shadow scale
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  
  // Special shadows
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  none: '0 0 #0000',

  // Colored shadows
  primary: {
    sm: '0 1px 3px 0 rgba(59, 130, 246, 0.1), 0 1px 2px -1px rgba(59, 130, 246, 0.1)',
    md: '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -2px rgba(59, 130, 246, 0.1)',
    lg: '0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -4px rgba(59, 130, 246, 0.1)',
  },

  success: {
    sm: '0 1px 3px 0 rgba(34, 197, 94, 0.1), 0 1px 2px -1px rgba(34, 197, 94, 0.1)',
    md: '0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -2px rgba(34, 197, 94, 0.1)',
    lg: '0 10px 15px -3px rgba(34, 197, 94, 0.1), 0 4px 6px -4px rgba(34, 197, 94, 0.1)',
  },

  error: {
    sm: '0 1px 3px 0 rgba(239, 68, 68, 0.1), 0 1px 2px -1px rgba(239, 68, 68, 0.1)',
    md: '0 4px 6px -1px rgba(239, 68, 68, 0.1), 0 2px 4px -2px rgba(239, 68, 68, 0.1)',
    lg: '0 10px 15px -3px rgba(239, 68, 68, 0.1), 0 4px 6px -4px rgba(239, 68, 68, 0.1)',
  },

  warning: {
    sm: '0 1px 3px 0 rgba(245, 158, 11, 0.1), 0 1px 2px -1px rgba(245, 158, 11, 0.1)',
    md: '0 4px 6px -1px rgba(245, 158, 11, 0.1), 0 2px 4px -2px rgba(245, 158, 11, 0.1)',
    lg: '0 10px 15px -3px rgba(245, 158, 11, 0.1), 0 4px 6px -4px rgba(245, 158, 11, 0.1)',
  },

  // Component specific shadows
  card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  cardHover: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  modal: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  dropdown: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  button: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  buttonPressed: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  input: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  inputFocus: '0 0 0 3px rgba(59, 130, 246, 0.1)',

  // Elevation system (Material Design inspired)
  elevation: {
    0: 'none',
    1: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    2: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
    3: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    4: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    5: '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)',
  },
} as const;

export type ShadowTokens = typeof shadows;