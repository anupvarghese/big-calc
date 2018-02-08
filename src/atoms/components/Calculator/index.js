import React, { Component } from 'react';
import { css } from 'glamor';
import Keypad from '../Keypad';
import Display from '../Display';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: 0,
    };
  }

  render() {
    return (
      <div
        {...css({
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
        })}
      >
        <Display />
        <Keypad />
      </div>
    );
  }
}

export default Calculator;
