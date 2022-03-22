import { render, screen, fireEvent } from '@testing-library/react';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom';

expect.extend({ toMatchDiffSnapshot });

test('Render Section Checks (Display Component) | Should Display Text', () => {
  render(<Calculator />);
  const element = screen.getByText(/Let's do some Math/i);
  expect(element).toBeInTheDocument();
});

test('Perform Operation & Display Results (Calculator Component) | Test [AC] button', () => {
  // notes for me -> do this when you are not using the screen object from testing library
  const { getByText, asFragment } = render(<Calculator />);
  const firstRender = asFragment();
  fireEvent.click(getByText(/AC/));
  expect(firstRender).toMatchDiffSnapshot(asFragment());
});

test('Perform Operation & Display Results (Calculator Component) | Test [8] & [AC] button', () => {
  const { getByText, asFragment } = render(<Calculator />);
  const firstRender = asFragment();
  fireEvent.click(getByText(/8/));
  fireEvent.click(getByText(/AC/));

  // snap shot should be retained
  expect(firstRender).toMatchDiffSnapshot(asFragment());
});

test('Perform Operation & Display Results (Calculator Component) | Test [2] & [0] button', () => {
  const { asFragment } = render(<Calculator />);
  const firstRender = asFragment();
  // used a screen here so no need to perform destruction of getByText from render()
  fireEvent.click(screen.getByText(/2/));
  fireEvent.click(screen.getByText(/0/));

  // snap shot should be retained
  expect(firstRender).toMatchDiffSnapshot(asFragment());
});

test('Perform Operation & Display Results (Calculator Component) | Test Operation Negation [ 70 - 30 ] = [40]', () => {
  render(<Calculator />);
  fireEvent.click(screen.getAllByText(/7/i)[0]);
  fireEvent.click(screen.getAllByText(/0/i)[0]);
  fireEvent.click(screen.getAllByText(/-/i)[1]);
  fireEvent.click(screen.getAllByText(/3/i)[0]);
  fireEvent.click(screen.getAllByText(/0/i)[1]);
  fireEvent.click(screen.getAllByText(/=/i)[0]);

  const element = screen.getByText(/40/i);
  expect(element).toBeInTheDocument();
});

test('Perform Operation & Display Results (Calculator Component) | Test Operation Multiplication [ 10 x 30 ] = [300]', () => {
  render(<Calculator />);
  fireEvent.click(screen.getAllByText(/1/i)[0]);
  fireEvent.click(screen.getAllByText(/0/i)[0]);
  fireEvent.click(screen.getAllByText(/x/i)[0]);
  fireEvent.click(screen.getAllByText(/3/i)[0]);
  fireEvent.click(screen.getAllByText(/0/i)[1]);
  fireEvent.click(screen.getAllByText(/=/i)[0]);

  const element = screen.getByText(/300/i);
  expect(element).toBeInTheDocument();
});

test('Perform Operation & Display Results (Calculator Component) | Test Operation Division [ 100 ÷ 20 ] = [5]', () => {
  render(<Calculator />);
  fireEvent.click(screen.getAllByText(/1/i)[0]);
  fireEvent.click(screen.getAllByText(/0/i)[0]);
  fireEvent.click(screen.getAllByText(/0/i)[1]);
  fireEvent.click(screen.getAllByText(/÷/i)[0]);
  fireEvent.click(screen.getAllByText(/3/i)[0]);
  fireEvent.click(screen.getAllByText(/0/i)[1]);
  fireEvent.click(screen.getAllByText(/=/i)[0]);

  const element = screen.getByText(/5/i);
  expect(element).toBeInTheDocument();
});
