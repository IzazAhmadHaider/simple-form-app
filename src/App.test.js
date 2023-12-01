// App1.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App1 from './Components/App1';


describe('App1 Component', () => {
  it('renders form elements and handles form submission', () => {
    render(<App1 />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
    userEvent.type(screen.getByLabelText(/Name/i), 'izaz Ahmad');
    userEvent.type(screen.getByLabelText(/Email/i), 'izaz@ahmad.com');
    expect(screen.getByLabelText(/Name/i).value).toBe('izaz Ahmad');
    expect(screen.getByLabelText(/Email/i).value).toBe('izaz@ahmad.com');
    fireEvent.submit(screen.getByText(/Submit/i));
    expect(screen.getByText('Your Name izaz Ahmad')).toBeInTheDocument();
    expect(screen.getByText('Your Email izaz@ahmad.com')).toBeInTheDocument();
  });

  it('interacts with the dropdown', () => {
    render(<App1 />);
    const dropdown = screen.getByRole('combobox');
    // const dropdown = screen.getByTestId('custom-element')
    const consoleSpy = jest.spyOn(console, 'log');

    userEvent.click(dropdown);
    userEvent.click(screen.getByText('India'));
    const selectedValueIndia = screen.getByText('India');
    expect(selectedValueIndia).toBeInTheDocument();
    expect(consoleSpy).toHaveBeenCalledWith('Selected Option:', expect.objectContaining({ label: 'India', value: 'India' }));

    userEvent.click(dropdown);
    userEvent.click(screen.getByText('Pakistan'));
    const selectedValuePakistan = screen.getByText('Pakistan');
    expect(selectedValuePakistan).toBeInTheDocument();
    expect(consoleSpy).toHaveBeenCalledWith('Selected Option:', expect.objectContaining({ label: 'Pakistan', value: 'Pakistan' }));

    consoleSpy.mockRestore(); 
  });
});
