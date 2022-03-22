import { render, screen, fireEvent } from '@testing-library/react';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import Button from '../components/Button';
import '@testing-library/jest-dom';

expect.extend({ toMatchDiffSnapshot });

test('Click Button User Interaction (Button Component) | Test onclick [AC]', () => {
  const onBtnPressed = jest.fn();
  render(<Button ctrls={['AC', '+/-', '%', '÷']} setBtn={onBtnPressed} last={false} />);
  fireEvent.click(screen.getByText(/AC/i));
  fireEvent.click(screen.getByText(/AC/i));
  expect(onBtnPressed).toHaveBeenCalledTimes(2);
});

test('Click Button User Interaction (Button Component) | Test onclick [8]', () => {
  const onBtnPressed = jest.fn();
  render(<Button ctrls={['7', '8', '9', 'x']} setBtn={onBtnPressed} last={false} />);
  fireEvent.click(screen.getByText(/8/i));
  expect(onBtnPressed).toHaveBeenCalledTimes(1);
});

test('Click Button User Interaction (Button Component) | Test onclick [6]', () => {
  const onBtnPressed = jest.fn();
  render(<Button ctrls={['4', '5', '6', '-']} setBtn={onBtnPressed} last={false} />);
  fireEvent.click(screen.getByText(/6/i));
  fireEvent.click(screen.getByText(/6/i));
  fireEvent.click(screen.getByText(/6/i));
  fireEvent.click(screen.getByText(/6/i));
  fireEvent.click(screen.getByText(/6/i));
  expect(onBtnPressed).toHaveBeenCalledTimes(5);
});

test('Click Button User Interaction (Button Component) | Test onclick [+]', () => {
  const onBtnPressed = jest.fn();
  render(<Button ctrls={['1', '2', '3', '+']} setBtn={onBtnPressed} last={false} />);
  fireEvent.click(screen.getAllByText(/.+/)[1]);
  fireEvent.click(screen.getAllByText(/.+/)[1]);
  fireEvent.click(screen.getAllByText(/.+/)[1]);
  expect(onBtnPressed).toHaveBeenCalledTimes(3);
});

test('Click Button User Interaction (Button Component) | Test onclick [=]', () => {
  const onBtnPressed = jest.fn();
  render(<Button ctrls={['0', '.', '=']} setBtn={onBtnPressed} last />);
  fireEvent.click(screen.getByText(/=/));
  fireEvent.click(screen.getByText(/=/));
  fireEvent.click(screen.getByText(/=/));
  expect(onBtnPressed).toHaveBeenCalledTimes(3);
});
