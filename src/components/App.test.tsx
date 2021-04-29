import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  window.scrollTo = jest.fn();
  render(<App />);
  const linkElement = screen.getByText(/F2E Exam Practice/i);
  expect(linkElement).toBeInTheDocument();
});
