import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  window.scrollTo = jest.fn();
  render(<App />);
  const linkElement = screen.getByText(/⾦融市場常識與職業道德/i);
  expect(linkElement).toBeInTheDocument();
});
