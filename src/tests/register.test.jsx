import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

test('Registration: email input', () => {
  render(<input placeholder="Enter email" />);
  const emailInput = screen.getByPlaceholderText('Enter email');
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  expect(emailInput.value).toBe('test@example.com');
})