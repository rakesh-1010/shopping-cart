import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/©2020 Rakesh Kumar All rights reserved/i);
  expect(linkElement).toBeInTheDocument();
});
