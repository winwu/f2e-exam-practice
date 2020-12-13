import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/⾦融市場常識與職業道德/i);
  expect(linkElement).toBeInTheDocument();
});
