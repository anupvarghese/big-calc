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
    this.resetDisplay = true;

    // negate
    if (operator === '+/-') {
      const value = helper['+/-'](this.state.display);
      this.setState({
        display: value.toString(),
      });
      return;
    }

    // all-clear
    if (operator === 'AC') {
      const value = helper[operator]();
      this.setState({
        display: value.toString(),
      });
      return;
    }

    // finish calc
    if (operator === '=') {
      const value =
        typeof this.operation === 'function'
          ? this.operation(this.state.display)
          : this.state.display;
      this.setState({
        display: value.toString(),
      });
      this.operation = null;
      return;
    }

    // continue calc
    if (!['AC', '='].includes(operator) && '+/-' !== operator) {
      this.operation = helper[operator](this.state.display);
      return;
    }
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
