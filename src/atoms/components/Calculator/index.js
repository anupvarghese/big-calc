// @flow

import React, { Component } from 'react';
import { css } from 'glamor';
import Keypad from '../Keypad';
import Display from '../Display';
import helper from '../../../utils';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '',
      hasDecimal: false,
      operator: '',
    };
    this.operation = null;
    this.resetDisplay = false;
  }

  handleNumberClick = tag => () => {
    if (this.resetDisplay) {
      this.setState({
        display: tag,
      });
      this.resetDisplay = false;
    } else {
      this.setState({
        display: this.state.display + tag,
      });
    }
  };

  handleOperatorClick = operator => () => {
    let value = this.state.display;
    if (operator === '+/-') {
      value = helper['+/-'](this.state.display);
      this.resetDisplay = true;
      this.setState({
        display: value.toString(),
      });
      return;
    }

    if (operator === 'AC') {
      value = helper[operator]();
      this.resetDisplay = true;
    }

    if (typeof this.operation === 'function') {
      value = this.operation(value);
      this.resetDisplay = true;
    }

    this.setState({
      display: value.toString(),
    });

    if (!['AC', '='].includes(operator) && '+/-' !== operator) {
      this.operation = helper[operator](value);
      this.resetDisplay = true;
      return;
    }

    this.operation = null;
  };

  render() {
    return (
      <div
        {...css({
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
        })}
      >
        <Display value={this.state.display} />
        <Keypad
          handleOperatorClick={this.handleOperatorClick}
          handleNumberClick={this.handleNumberClick}
          hasDecimal={this.state.display && this.state.display.includes('.')}
          disableOperators={
            this.state.display &&
            this.state.display.length === 1 &&
            this.state.display[0] === '.'
          }
        />
      </div>
    );
  }
}

export default Calculator;
