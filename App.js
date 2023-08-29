import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: '0',
      inputValue: '',
      operator: null,
      waitingForOperand: false,
    };
  }

  handleNumberClick = (number) => {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: String(number),
        waitingForOperand: false,
      });
    } else {
      this.setState({
        displayValue:
          displayValue === '0' ? String(number) : displayValue + number,
      });
    }
  };

  handleOperatorClick = (operator) => {
    const { displayValue } = this.state;

    this.setState({
      inputValue: displayValue,
      operator: operator,
      waitingForOperand: true,
    });
  };

  handleEqualClick = () => {
    const { inputValue, displayValue, operator } = this.state;

    const input = parseFloat(inputValue);
    const current = parseFloat(displayValue);

    if (operator === '+') {
      this.setState({
        displayValue: String(input + current),
      });
    } else if (operator === '-') {
      this.setState({
        displayValue: String(input - current),
      });
    } else if (operator === '*') {
      this.setState({
        displayValue: String(input * current),
      });
    } else if (operator === '/') {
      this.setState({
        displayValue: String(input / current),
      });
    }

    this.setState({
      inputValue: '',
      operator: null,
      waitingForOperand: true,
    });
  };

  handleClearClick = () => {
    this.setState({
      displayValue: '0',
      inputValue: '',
      operator: null,
      waitingForOperand: false,
    });
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.displayValue}</div>
        <div className="keypad">
          <div className="row">
            <div className="key" onClick={() => this.handleNumberClick('7')}>
              7
            </div>
            <div className="key" onClick={() => this.handleNumberClick('8')}>
              8
            </div>
            <div className="key" onClick={() => this.handleNumberClick('9')}>
              9
            </div>
            <div className="key" onClick={() => this.handleOperatorClick('+')}>
              +
            </div>
          </div>
          <div className="row">
            <div className="key" onClick={() => this.handleNumberClick('4')}>
              4
            </div>
            <div className="key" onClick={() => this.handleNumberClick('5')}>
              5
            </div>
            <div className="key" onClick={() => this.handleNumberClick('6')}>
              6
            </div>
            <div className="key" onClick={() => this.handleOperatorClick('-')}>
              -
            </div>
          </div>
          <div className="row">
            <div className="key" onClick={() => this.handleNumberClick('1')}>
              1
            </div>
            <div className="key" onClick={() => this.handleNumberClick('2')}>
              2
            </div>
            <div className="key" onClick={() => this.handleNumberClick('3')}>
              3
            </div>
            <div className="key" onClick={() => this.handleOperatorClick('*')}>
              ×
            </div>
          </div>
          <div className="row">
            <div className="key" onClick={() => this.handleNumberClick('0')}>
              0
            </div>
            <div className="key" onClick={() => this.handleNumberClick('.')}>
              .
            </div>
            <div className="key" onClick={this.handleEqualClick}>
              =
            </div>
            <div className="key" onClick={() => this.handleOperatorClick('/')}>
              ÷
            </div>
          </div>
          <div className="row">
            <div className="key" onClick={this.handleClearClick}>
              C
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
