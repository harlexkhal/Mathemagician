import Calculate from '../logic/Calculate';

test('Test Calculate Logic Calculate({ total: 3, next: 6, operation: x }, =)', () => {
  const state = { total: '3', next: '6', operation: 'x' };
  expect(Calculate(state, '=')).toEqual({ total: '18', next: null, operation: null });
});

test('Test Calculate Logic Calculate({ total: null, next: 7, operation: null }, +)', () => {
  const state = { total: null, next: '7', operation: null };
  expect(Calculate(state, '+')).toEqual({ total: '7', next: null, operation: '+' });
});

test('Test Calculate Logic Calculate({ total: 6, next: 7, operation: - }, +)', () => {
  const state = { total: '6', next: '7', operation: '-' };
  expect(Calculate(state, '+')).toEqual({ total: '-1', next: null, operation: '+' });
});

test('Test Calculate Logic Calculate({ total: 6, next: null, operation: null}, x)', () => {
  const state = { total: '6', next: null, operation: null };
  expect(Calculate(state, 'x')).toEqual({ total: '6', next: null, operation: 'x' });
});

test('Test Calculate Logic Calculate({ total: null, next: 4, operation: null}, ÷)', () => {
  const state = { total: null, next: '4', operation: null };
  expect(Calculate(state, '÷')).toEqual({ total: '4', next: null, operation: '÷' });
});

test('Test Calculate Logic Calculate({ total: 4, next: 982, operation: null}, AC)', () => {
  const state = { total: '4', next: '982', operation: 'x' };
  expect(Calculate(state, 'AC')).toEqual({ total: null, operation: null, next: null });
});
