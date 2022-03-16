import React from 'react';
import Calculate from '../logic/Calculate';
import Button from './Button';
import Display from './Display';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      total: null,
      next: null,
      operation: null,
    });
  }

  onBtnPressed = (btnName) => {
    const result = Calculate(this.state, btnName);
    this.setState(result);
  };

  render = () => {
    const { total, next, operation } = this.state;
    let buffer = `${total}${operation}${next}`.replace(/null/g, '');
    buffer = buffer.replace(/undefined/g, '');
    const window = buffer;

    return (
      <div className="main">
        <Display display={window === '' ? undefined : window} />
        <Button ctrls={['AC', '+/-', '%', '÷']} setBtn={this.onBtnPressed} last={false} />
        <Button ctrls={['7', '8', '9', 'x']} setBtn={this.onBtnPressed} last={false} />
        <Button ctrls={['4', '5', '6', '-']} setBtn={this.onBtnPressed} last={false} />
        <Button ctrls={['1', '2', '3', '+']} setBtn={this.onBtnPressed} last={false} />
        <Button ctrls={['0', '.', '=']} setBtn={this.onBtnPressed} last />
      </div>
    );
  }
}

export default Calculator;
