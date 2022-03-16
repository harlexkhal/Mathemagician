import React, { useState } from 'react';
import Calculate from '../logic/Calculate';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const onBtnPressed = (btnName) => {
    const result = Calculate(state, btnName);
    setState(result);
  };

  const { total, next, operation } = state;
  let buffer = `${total}${operation}${next}`.replace(/null/g, '');
  buffer = buffer.replace(/undefined/g, '');
  const window = buffer;
  return (
    <div className="main">
      <Display display={window === '' ? undefined : window} />
      <Button ctrls={['AC', '+/-', '%', '÷']} setBtn={onBtnPressed} last={false} />
      <Button ctrls={['7', '8', '9', 'x']} setBtn={onBtnPressed} last={false} />
      <Button ctrls={['4', '5', '6', '-']} setBtn={onBtnPressed} last={false} />
      <Button ctrls={['1', '2', '3', '+']} setBtn={onBtnPressed} last={false} />
      <Button ctrls={['0', '.', '=']} setBtn={onBtnPressed} last />
    </div>
  );
};

export default Calculator;
