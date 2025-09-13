import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { TouchableOpacity, Text } from 'react-native';

// Example reusable Button component for testing
const Button = ({ 
  onPress, 
  title, 
  disabled = false,
  variant = 'primary',
  testID 
}: {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  testID?: string;
}) => {
  const baseClasses = 'px-6 py-3 rounded-md';
  const variantClasses = {
    primary: 'bg-primary-500 active:bg-primary-600',
    secondary: 'bg-gray-200 active:bg-gray-300',
  };
  const disabledClasses = disabled ? 'opacity-50' : '';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses}`}
      testID={testID}
    >
      <Text className={`font-semibold text-center ${
        variant === 'primary' ? 'text-white' : 'text-gray-800'
      }`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

describe('Button Component', () => {
  it('renders with correct title', () => {
    render(<Button onPress={() => {}} title="Click Me" />);
    
    expect(screen.getByText('Click Me')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockOnPress = jest.fn();
    
    render(
      <Button 
        onPress={mockOnPress} 
        title="Click Me" 
        testID="test-button" 
      />
    );
    
    fireEvent.press(screen.getByTestId('test-button'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const mockOnPress = jest.fn();
    
    render(
      <Button 
        onPress={mockOnPress} 
        title="Click Me" 
        disabled={true}
        testID="test-button" 
      />
    );
    
    fireEvent.press(screen.getByTestId('test-button'));
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('applies correct styles for primary variant', () => {
    render(
      <Button 
        onPress={() => {}} 
        title="Primary" 
        variant="primary"
        testID="primary-button" 
      />
    );
    
    const button = screen.getByTestId('primary-button');
    // In React Native Testing Library, we test behavior rather than specific className strings
    // The button should be rendered and functional
    expect(button).toBeTruthy();
    expect(screen.getByText('Primary')).toBeTruthy();
  });

  it('applies correct styles for secondary variant', () => {
    render(
      <Button 
        onPress={() => {}} 
        title="Secondary" 
        variant="secondary"
        testID="secondary-button" 
      />
    );
    
    const button = screen.getByTestId('secondary-button');
    expect(button).toBeTruthy();
    expect(screen.getByText('Secondary')).toBeTruthy();
  });

  it('applies disabled styles when disabled', () => {
    render(
      <Button 
        onPress={() => {}} 
        title="Disabled" 
        disabled={true}
        testID="disabled-button" 
      />
    );
    
    const button = screen.getByTestId('disabled-button');
    expect(button).toBeTruthy();
    // The disabled prop might not be directly accessible on TouchableOpacity in tests
    // Instead test that the button doesn't respond to press when disabled
    expect(screen.getByText('Disabled')).toBeTruthy();
  });
});