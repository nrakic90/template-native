# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native Expo application using TypeScript, NativeWind (Tailwind CSS), and a custom theme system. The app supports cross-platform deployment (iOS, Android, Web) and includes advanced features like typed routes and React Compiler experiments.

## Key Commands

### Development
- `npm install` - Install dependencies
- `npm start` or `npx expo start` - Start development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator  
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

### Testing
- `npm test` - Run tests in watch mode
- `npm run test:ci` - Run tests once with coverage (for CI)
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:watch` - Run tests in watch mode (same as `npm test`)
- `npm run test:update` - Update test snapshots

### Project Management
- `npm run reset-project` - Move starter code to app-example/ and create blank app/ directory

## Architecture

### Routing System
Uses Expo Router with file-based routing in the `app/` directory:
- `app/_layout.tsx` - Root layout with ThemeProvider wrapper
- `app/index.tsx` - Home screen/landing page
- Uses typed routes (enabled in app.json experiments)

### Theme System
Comprehensive design token system located in `theme/` directory:
- `theme/index.ts` - Main theme export with light/dark variants
- `theme/hooks.tsx` - React context and hooks for theme management
- `theme/colors.ts`, `theme/typography.ts`, etc. - Individual token definitions
- Theme Provider supports 'light', 'dark', and 'system' modes with automatic switching

### Styling Architecture
- **NativeWind**: Tailwind CSS for React Native, configured in `tailwind.config.js`
- **Design Tokens**: Custom theme tokens are automatically injected into Tailwind configuration
- **Dark Mode**: Uses CSS class-based dark mode with automatic system detection
- **Cross-Platform**: Styles work consistently across iOS, Android, and Web

### Configuration Files
- `app.json` - Expo configuration with React Compiler and typed routes enabled
- `tsconfig.json` - TypeScript config with strict mode and path aliases (@/*)
- `tailwind.config.js` - NativeWind configuration that extends custom theme tokens
- `global.css` - Global styles imported in app/index.tsx

## Development Patterns

### State Management
- **MobX Stores**: Use MobX for all state management
- **Store Location**: All stores must live in the `stores/` folder in the root directory
- **Global Store**: Single global store for application-wide state, named `App.store.ts`
- **Local Stores**: Create local stores to extract business logic from components
- **Store Lifecycle**: Local MobX stores should be tied to the lifecycle of the component they are made for
- **Component Separation**: Components should focus solely on UI, with all logic handled by stores
- **Store Files**: All stores must use `.store.ts` file extension

### Styling Guidelines
- **NativeWind Only**: All styling must be done through NativeWind (Tailwind CSS)
- **Avoid Other Styling**: Only use alternative styling methods when absolutely no NativeWind solution exists
- **Design Tokens**: Use semantic color names from design tokens rather than raw Tailwind colors
- **Dark Mode**: Prefer theme-aware utilities over dark: prefixes when possible

### Theme Usage
- Access theme via `useTheme()` hook from `theme/hooks`
- Use semantic color names from design tokens rather than raw Tailwind colors
- Prefer theme-aware utilities over dark: prefixes when possible

### Component Development
- **Reusable Components**: Always identify and extract reusable components
- **Component Location**: All reusable components must live in the `components/` folder in the root directory
- **Component Focus**: Components should focus solely on UI presentation
- **Logic Extraction**: Extract all business logic to corresponding MobX stores

### Testing Guidelines
- **Jest + React Native Testing Library**: All tests use Jest with React Native Testing Library
- **Test Location**: Tests go in `__tests__/` directory, mirroring the source structure
- **Test Files**: Use `.test.ts` or `.test.tsx` extensions
- **Component Testing**: Focus on user interactions and behavior, not implementation details
- **Store Testing**: Test MobX stores in isolation with comprehensive scenarios
- **Mocking**: Mock external dependencies (React Native modules, Expo modules)
- **Coverage**: Aim for good coverage of critical paths and edge cases
- **Testing Utilities**: Use `render`, `screen`, `fireEvent`, and `act` from React Native Testing Library
- **Current Status**: Testing infrastructure is fully configured, but compatibility issues with Expo SDK 54 and jest-expo prevent tests from running currently. See `TESTING.md` for detailed status.

### File Organization
- App screens go in `app/` directory following Expo Router conventions
- Reusable components go in `components/` directory in the root
- Store files go in `stores/` directory in the root with `.store.ts` extension
- Theme-related code stays in `theme/` directory
- Global styles and imports handled at app/index.tsx level
- Tests go in `__tests__/` directory with structure mirroring source files

### TypeScript
- Strict TypeScript configuration enabled
- Path aliases configured (@/* maps to root)
- Design token types exported from theme system for type safety

## Platform Support

The app is configured for universal deployment:
- **iOS**: Supports tablets, edge-to-edge design
- **Android**: Adaptive icons, edge-to-edge, predictive back gestures disabled  
- **Web**: Metro bundler with static output, custom favicon

## Experimental Features

- **React Compiler**: Enabled for automatic optimizations
- **Typed Routes**: Compile-time route type checking with Expo Router
- **New Architecture**: React Native's new architecture enabled