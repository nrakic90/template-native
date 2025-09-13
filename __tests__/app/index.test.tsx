import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { useColorScheme } from 'react-native';
import App from '@/app/index';
import { ThemeProvider } from '@/theme/hooks';

// Mock react-native's useColorScheme
jest.mock('react-native', () => ({
  ...jest.requireActual('react-native'),
  useColorScheme: jest.fn(),
}));

// Mock the global.css import
jest.mock('@/global.css', () => ({}));

const mockUseColorScheme = useColorScheme as jest.MockedFunction<typeof useColorScheme>;

const AppWithThemeProvider = ({ defaultTheme = 'system' as const }) => (
  <ThemeProvider defaultTheme={defaultTheme}>
    <App />
  </ThemeProvider>
);

describe('App Component', () => {
  beforeEach(() => {
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

  it('renders the app title', () => {
    render(<AppWithThemeProvider />);
    
    expect(screen.getByText('Remembrall v2')).toBeTruthy();
  });

  it('renders the subtitle', () => {
    render(<AppWithThemeProvider />);
    
    expect(screen.getByText('No dark: prefixes needed!')).toBeTruthy();
  });

  it('displays current theme information', () => {
    render(<AppWithThemeProvider />);
    
    expect(screen.getByText(/Current theme: Light \(system\)/)).toBeTruthy();
  });

  it('renders toggle theme button', () => {
    render(<AppWithThemeProvider />);
    
    expect(screen.getByText('Toggle Theme')).toBeTruthy();
  });

  it('renders success, warning, and error buttons', () => {
    render(<AppWithThemeProvider />);
    
    expect(screen.getByText('Success')).toBeTruthy();
    expect(screen.getByText('Warning')).toBeTruthy();
    expect(screen.getByText('Error')).toBeTruthy();
  });

  it('toggles theme when button is pressed', () => {
    render(<AppWithThemeProvider defaultTheme="light" />);
    
    // Initial state should be light
    expect(screen.getByText(/Current theme: Light \(light\)/)).toBeTruthy();
    
    // Press toggle button
    const toggleButton = screen.getByText('Toggle Theme');
    fireEvent.press(toggleButton);
    
    // Should now be dark
    expect(screen.getByText(/Current theme: Dark \(dark\)/)).toBeTruthy();
  });

  it('shows correct theme in system mode with light system preference', () => {
    mockUseColorScheme.mockReturnValue('light');
    
    render(<AppWithThemeProvider defaultTheme="system" />);
    
    expect(screen.getByText(/Current theme: Light \(system\)/)).toBeTruthy();
  });

  it('shows correct theme in system mode with dark system preference', () => {
    mockUseColorScheme.mockReturnValue('dark');
    
    render(<AppWithThemeProvider defaultTheme="system" />);
    
    expect(screen.getByText(/Current theme: Dark \(system\)/)).toBeTruthy();
  });

  it('renders additional informational text', () => {
    render(<AppWithThemeProvider />);
    
    expect(screen.getByText('Use dark: only when light/dark need different colors')).toBeTruthy();
  });
});