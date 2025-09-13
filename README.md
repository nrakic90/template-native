# Template Native

A modern React Native application built with Expo, featuring a comprehensive design system, MobX state management, and NativeWind styling.

## Features

- **Universal Platform Support**: Runs on iOS, Android, and Web
- **Modern Tech Stack**: TypeScript, Expo Router, React Compiler
- **Design System**: Complete theme system with design tokens and automatic dark/light mode
- **NativeWind Styling**: Tailwind CSS for React Native with custom theme integration
- **MobX State Management**: Reactive state management with separation of concerns
- **File-based Routing**: Type-safe routing with Expo Router

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   # or
   npx expo start
   ```

3. **Run on specific platforms**
   ```bash
   npm run android    # Android emulator
   npm run ios        # iOS simulator
   npm run web        # Web browser
   ```

## Architecture

### Theme System
- **Design Tokens**: Comprehensive token system in `theme/` directory
- **Theme Provider**: React context with system theme detection
- **Dark Mode**: Automatic light/dark mode switching
- **NativeWind Integration**: Theme tokens automatically available in Tailwind classes

### State Management
- **MobX Stores**: All state management handled by MobX stores
- **Global Store**: `App.store.ts` for application-wide state
- **Local Stores**: Component-specific stores with `.store.ts` extension
- **UI Separation**: Components focus purely on UI, logic handled by stores

### Styling Guidelines
- **NativeWind Only**: All styling done through NativeWind (Tailwind CSS)
- **Design Tokens**: Use semantic colors from theme system
- **Cross-Platform**: Consistent styling across iOS, Android, and Web

### Project Structure
```
app/                 # File-based routing
├── _layout.tsx      # Root layout with providers
├── index.tsx        # Home screen
theme/               # Design system
├── index.ts         # Main theme export
├── hooks.tsx        # Theme provider & hooks
├── colors.ts        # Color tokens
├── typography.ts    # Typography tokens
└── ...              # Other design tokens
stores/              # MobX stores
├── App.store.ts     # Global application store
└── *.store.ts       # Feature-specific stores
components/          # Reusable components
__tests__/           # Test files
├── app/             # App screen tests
├── components/      # Component tests
├── stores/          # Store tests
└── theme/           # Theme tests
```

## Development

### Available Scripts

**Development**
- `npm start` - Start development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

**Testing**
- `npm run test:watch` - Run tests in watch mode
- `npm run test:ci` - Run tests with coverage (CI mode)
- `npm run test:coverage` - Generate coverage report
- `npm run test:update` - Update test snapshots

**Project Management**
- `npm run reset-project` - Reset to blank project

### Creating Components
1. Create UI components in `components/` directory
2. Extract logic to corresponding `.store.ts` files
3. Use MobX `observer` wrapper for reactive components
4. Style exclusively with NativeWind classes

### Theme Usage
```tsx
import { useTheme } from '@/theme/hooks';

export default function MyComponent() {
  const { isDark, toggleTheme } = useTheme();
  // Use theme in component
}
```

### Testing

The project includes comprehensive testing setup with Jest and React Native Testing Library.

⚠️ **Current Status**: There are compatibility issues between Expo SDK 54 and jest-expo. All testing infrastructure is configured and ready - tests will work once compatibility is resolved.

**What's Ready**
- ✅ Jest and React Native Testing Library configured
- ✅ Example tests for components, stores, and themes
- ✅ TypeScript support and coverage reporting
- ✅ Proper mocking and setup files

**Test Structure**
- Tests in `__tests__/` directory mirroring source structure
- Example tests showing best practices for:
  - Component testing with user interactions
  - MobX store testing in isolation  
  - Theme provider and context testing
  - Integration testing of app screens

See `TESTING.md` for detailed testing documentation and examples.

## Configuration

- **TypeScript**: Strict mode enabled with path aliases (`@/*`)
- **Expo Config**: `app.json` with React Compiler and typed routes
- **Tailwind**: `tailwind.config.js` extends custom theme tokens
- **Platform Support**: Universal deployment for iOS, Android, Web

## Experimental Features

- **React Compiler**: Automatic React optimizations
- **Typed Routes**: Compile-time route type checking
- **New Architecture**: React Native's new architecture enabled

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [MobX Documentation](https://mobx.js.org/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
