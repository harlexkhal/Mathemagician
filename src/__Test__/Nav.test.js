import { render, screen, fireEvent } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import Nav from '../components/Nav';
import '@testing-library/jest-dom';

expect.extend({ toMatchDiffSnapshot });

test('Make sure events does not make differences in snapshot (Nav Component) | [Home] Menu Click  Event Trigger', () => {
  const { asFragment } = render(<HashRouter><Nav /></HashRouter>);
  const firstRender = asFragment();
  fireEvent.click(screen.getByText(/Home/));

  expect(firstRender).toMatchDiffSnapshot(asFragment());
});

test('Make sure events does not make differences in snapshot (Nav Component) | [Calculator] Menu Click  Event Trigger', () => {
  const { asFragment } = render(<HashRouter><Nav /></HashRouter>);
  const firstRender = asFragment();
  fireEvent.click(screen.getByText(/Calculator/));

  expect(firstRender).toMatchDiffSnapshot(asFragment());
});

test('Make sure events does not make differences in snapshot (Nav Component) | [Quotes] Menu Click  Event Trigger', () => {
  const { asFragment } = render(<HashRouter><Nav /></HashRouter>);
  const firstRender = asFragment();
  fireEvent.click(screen.getByText(/Quotes/));

  expect(firstRender).toMatchDiffSnapshot(asFragment());
});
