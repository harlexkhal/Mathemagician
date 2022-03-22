import Operate from '../logic/Operate';

test('Test Operate Logic (Addition) | Operate(6, 9, +)', () => {
  expect(Operate(6, 9, '+')).toEqual('15');
});

test('Test Operate Logic (Negation) | Operate(6, 9, -)', () => {
  expect(Operate(6, 9, '-')).toEqual('-3');
});

test('Test Operate Logic (Division) | Operate(9, 3, ÷)', () => {
  expect(Operate(9, 3, '÷')).toEqual('3');
});

test('Test Operate Logic (Multiplication) | Operate(7, 3, x)', () => {
  expect(Operate(7, 3, 'x')).toEqual('21');
});
