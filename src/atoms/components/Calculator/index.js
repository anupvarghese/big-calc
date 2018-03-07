// @flow

import React, { Component } from 'react';
import { css } from 'glamor';
import BigNumber from 'bignumber.js';
import Keypad from '../Keypad';
import Display from '../Display';
import helper from '../../../utils';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '',
      operation: null,
    };
    this.resetDisplay = false;
  }

  handleNumberClick = tag => () => {
    const { display } = this.state;
    if (this.resetDisplay) {
      this.setState({
        display: tag === '.' ? `0.` : tag,
      });
      this.resetDisplay = false;
      return;
    }

    if (display.includes('.') && tag === '.') {
      return;
    }

    if (display === '' && tag === '.') {
      this.setState({
        display: '0.',
      });
      return;
    }

    this.setState({
      display: new BigNumber(this.state.display + tag).toString(),
    });
  };

  handleOperatorClick = operator => () => {
    this.resetDisplay = true;
    const { display } = this.state;
    // negate
    if (operator === '+/-') {
      const value = helper['+/-'](display);
      this.setState({
        display: value.toString(),
      });
      return;
    }

    // all-clear
    if (operator === 'AC') {
      this.setState({
        display: '0',
        operation: null,
      });
      return;
    }

    // finish calc
    if (operator === '=') {
      const value =
        typeof this.state.operation === 'function'
          ? this.state.operation(display)
          : display;
      this.setState({
        display: value.toString(),
        operation: null,
      });
      return;
    }

    // continue calc
    if (!['AC', '='].includes(operator) && '+/-' !== operator) {
      const value =
        typeof this.state.operation === 'function'
          ? this.state.operation(display)
          : display;
      this.setState({
        display: value.toString(),
        operation: helper[operator](value),
      });
      this.operation = helper[operator](value);
      return;
    }
  };

  render() {
    return (
      <div
        {...css({
          display: 'flex',
          flexDirection: 'column',
          width: '350px',
          fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        })}
      >
        <Display value={this.state.display} />
        <Keypad
          handleOperatorClick={this.handleOperatorClick}
          handleNumberClick={this.handleNumberClick}
        />
      </div>
    );
  }
}

export default Calculator;
