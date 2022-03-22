import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quotes from '../components/Quotes';

test('Render Section Checks (Quotes Component) | Should Display Text', () => {
  render(<Quotes />);
  const element = screen.getByText(/2. “Just because we can’t find a solution it doesn’t mean that there isn’t one.” – Andrew Wiles/i);
  expect(element).toBeInTheDocument();
});
