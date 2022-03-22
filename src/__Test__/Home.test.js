import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

test('Render Section Checks (Home Component) | Should Display Text', () => {
  render(<Home />);
  const element = screen.getByText(/Welcome!, to our page/i);
  expect(element).toBeInTheDocument();
});
