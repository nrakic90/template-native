import { colors, type ColorTokens } from './colors';
import { typography, type TypographyTokens } from './typography';
import { spacing, type SpacingTokens } from './spacing';
import { shadows, type ShadowTokens } from './shadows';
import { radius, type RadiusTokens } from './radius';
import { breakpoints, type BreakpointTokens } from './breakpoints';

// Main theme object
export const theme = {
  colors,
  typography,
  spacing,
  shadows,
  radius,
  breakpoints,
} as const;

// Theme types
export type Theme = {
  colors: ColorTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  shadows: ShadowTokens;
  radius: RadiusTokens;
  breakpoints: BreakpointTokens;
};

// Theme variants (light/dark)
export const lightTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: {
      primary: theme.colors.white,
      secondary: theme.colors.gray[50],
      tertiary: theme.colors.gray[100],
      inverse: theme.colors.gray[900],
    },
    text: {
      primary: theme.colors.gray[900],
      secondary: theme.colors.gray[700],
      tertiary: theme.colors.gray[600],
      inverse: theme.colors.white,
      muted: theme.colors.gray[500],
    },
    border: {
      primary: theme.colors.gray[200],
      secondary: theme.colors.gray[300],
      focus: theme.colors.primary[500],
      error: theme.colors.error[500],
    },
  },
} as const;

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: {
      primary: theme.colors.gray[900],
      secondary: theme.colors.gray[800],
      tertiary: theme.colors.gray[700],
      inverse: theme.colors.white,
    },
    text: {
      primary: theme.colors.white,
      secondary: theme.colors.gray[300],
      tertiary: theme.colors.gray[400],
      inverse: theme.colors.gray[900],
      muted: theme.colors.gray[500],
    },
    border: {
      primary: theme.colors.gray[700],
      secondary: theme.colors.gray[600],
      focus: theme.colors.primary[400],
      error: theme.colors.error[400],
    },
  },
} as const;

// Export individual token sets
export { colors, typography, spacing, shadows, radius, breakpoints };

// Export types
export type {
  ColorTokens,
  TypographyTokens,
  SpacingTokens,
  ShadowTokens,
  RadiusTokens,
  BreakpointTokens,
};

// Default export
export default theme;