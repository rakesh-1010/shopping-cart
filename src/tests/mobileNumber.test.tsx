
import React from 'react';
import { render, screen } from '@testing-library/react';
import { CustomerMobile } from '../components/mobileNumber';

test('loads and displays mobile input', () => {
  render(<CustomerMobile mobile={'9897808136'} handleMobileNumber={jest.fn} />)
  expect(screen.getByTestId('mobile')).toHaveTextContent('Mobile')
})

test('should show validation message if number less than 10 digits', () => {
  render(<CustomerMobile mobile={'98978081'} handleMobileNumber={jest.fn} />)
  const validationMsg = screen.getByText(/Enter 10 digits valid number./i);
  expect(validationMsg).toBeInTheDocument();
})