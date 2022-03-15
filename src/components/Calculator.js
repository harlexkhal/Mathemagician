import React from 'react';
import Button from './Button';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="main">
        <div className="display">
          <h1 className="pixel font">0</h1>
        </div>
        <Button ctrls={['AC', '+/-', '%', '÷']} last={false} />
        <Button ctrls={['7', '8', '9', 'X']} last={false} />
        <Button ctrls={['4', '5', '6', '-']} last={false} />
        <Button ctrls={['1', '2', '3', '+']} last={false} />
        <Button ctrls={['0', '.', '=']} last />
      </div>
    );
  }
}

export default Calculator;
