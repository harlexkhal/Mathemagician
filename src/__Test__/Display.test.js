import { render, screen } from '@testing-library/react';
import Display from '../components/Display';
import '@testing-library/jest-dom';

test('Render Results (Display Component) | Pass Prop [69]', () => {
  render(<Display display="69" />);
  const element = screen.getByText(/69/i);
  expect(element).toBeInTheDocument();
});

test('Render Results (Display Component) | Pass Prop [100000]', () => {
  render(<Display display="100000" />);
  const element = screen.getByText(/100000/i);
  expect(element).toBeInTheDocument();
});

test('Render Results (Display Component) | Pass Prop [-9999]', () => {
  render(<Display display="-9999" />);
  const element = screen.getByText(/-9999/i);
  expect(element).toBeInTheDocument();
});
