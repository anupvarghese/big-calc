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

  handleKeyClick = tag => () => {
    this.setState({
      clickedTag: tag,
      display: Number(this.state.display + tag),
    });
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
        <Keypad handleKeyClick={this.handleKeyClick} />
      </div>
    );
  }
}

export default Calculator;
