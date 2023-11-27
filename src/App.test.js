import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
test('renders form and handles submission', () => {
  render(<App />);
  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByText(/Submit/i)).toBeInTheDocument();

  

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'izaz Ahmad' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'izaz@ahmad.com' } });


  expect(screen.getByLabelText(/Name/i).value).toBe('izaz Ahmad');
  expect(screen.getByLabelText(/Email/i).value).toBe('izaz@ahmad.com');


  fireEvent.submit(screen.getByText(/Submit/i));
});
