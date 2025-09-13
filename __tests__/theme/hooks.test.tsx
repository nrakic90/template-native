import React from 'react';
import { render, screen, act } from '@testing-library/react-native';
import { useColorScheme } from 'react-native';
import { ThemeProvider, useTheme } from '@/theme/hooks';

// Mock react-native's useColorScheme
jest.mock('react-native', () => ({
  ...jest.requireActual('react-native'),
  useColorScheme: jest.fn(),
}));

const mockUseColorScheme = useColorScheme as jest.MockedFunction<typeof useColorScheme>;

// Test component to access theme context
const TestComponent = () => {
  const { themeMode, isDark, toggleTheme, setTheme, systemColorScheme } = useTheme();
  
  return (
    <>
      <text testID="theme-mode">{themeMode}</text>
      <text testID="is-dark">{isDark.toString()}</text>
      <text testID="system-color-scheme">{systemColorScheme}</text>
      <button testID="toggle-theme" onPress={toggleTheme}>Toggle</button>
      <button testID="set-light" onPress={() => setTheme('light')}>Set Light</button>
      <button testID="set-dark" onPress={() => setTheme('dark')}>Set Dark</button>
      <button testID="set-system" onPress={() => setTheme('system')}>Set System</button>
    </>
  );
};

describe('ThemeProvider and useTheme', () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockUseColorScheme.mockReturnValue('light');
    
    // Mock document for web environment
    Object.defineProperty(global, 'document', {
      value: {
        documentElement: {
          classList: {
            add: jest.fn(),
            remove: jest.fn(),
          },
        },
      },
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('throws error when useTheme is used outside ThemeProvider', () => {
    const TestComponentWithoutProvider = () => {
      useTheme();
      return null;
    };

    expect(() => render(<TestComponentWithoutProvider />)).toThrow(
      'useTheme must be used within a ThemeProvider'
    );
  });

  it('defaults to system theme mode', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-mode')).toHaveTextContent('system');
    expect(screen.getByTestId('is-dark')).toHaveTextContent('false');
    expect(screen.getByTestId('system-color-scheme')).toHaveTextContent('light');
  });

  it('respects custom default theme', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-mode')).toHaveTextContent('dark');
    expect(screen.getByTestId('is-dark')).toHaveTextContent('true');
  });

  it('follows system color scheme in system mode', () => {
    mockUseColorScheme.mockReturnValue('dark');
    
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-mode')).toHaveTextContent('system');
    expect(screen.getByTestId('is-dark')).toHaveTextContent('true');
    expect(screen.getByTestId('system-color-scheme')).toHaveTextContent('dark');
  });

  it('toggles theme correctly', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-mode')).toHaveTextContent('light');

    // Toggle: light -> dark
    act(() => {
      screen.getByTestId('toggle-theme').props.onPress();
    });
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('dark');

    // Toggle: dark -> system
    act(() => {
      screen.getByTestId('toggle-theme').props.onPress();
    });
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('system');

    // Toggle: system -> light
    act(() => {
      screen.getByTestId('toggle-theme').props.onPress();
    });
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('light');
  });

  it('sets specific theme modes', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Set to dark
    act(() => {
      screen.getByTestId('set-dark').props.onPress();
    });
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('dark');
    expect(screen.getByTestId('is-dark')).toHaveTextContent('true');

    // Set to light
    act(() => {
      screen.getByTestId('set-light').props.onPress();
    });
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('light');
    expect(screen.getByTestId('is-dark')).toHaveTextContent('false');

    // Set to system
    act(() => {
      screen.getByTestId('set-system').props.onPress();
    });
    expect(screen.getByTestId('theme-mode')).toHaveTextContent('system');
  });

  it('applies dark class to document in web environment', () => {
    const mockAdd = jest.fn();
    const mockRemove = jest.fn();
    
    Object.defineProperty(global, 'document', {
      value: {
        documentElement: {
          classList: {
            add: mockAdd,
            remove: mockRemove,
          },
        },
      },
      writable: true,
    });

    render(
      <ThemeProvider defaultTheme="dark">
        <TestComponent />
      </ThemeProvider>
    );

    expect(mockAdd).toHaveBeenCalledWith('dark');
    expect(mockRemove).not.toHaveBeenCalled();
  });
});