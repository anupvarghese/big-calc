// @flow

import React from 'react';
import { css } from 'glamor';
import C from '../../../constants';

const baseKeypadStyle = {
  display: 'flex',
  flexDirection: 'column',
  background: C.GRAY_BROWN,
  borderTopColor: C.BLACK,
};

const keyRowStyle = {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const keyStyle = (operator = false) => {
  const color = operator ? C.ORANGE : C.GRAY_WHITE;
  return {
    flex: 1,
    margin: '0.5px',
    border: `2px solid ${color}`,
    padding: '1rem',
    background: color,
    fontWeight: 'medium',
    fontSize: '1.3rem',
  };
};

type rowT = {
  style: ?Object,
  children: React.Node,
};

type keyT = {
  style: ?Object,
  handleOnClick: () => {},
  tag: string,
};

type keypadT = {
  keypadStyle: ?Object,
  handleNumberClick: () => {},
  handleOperatorClick: () => {},
};

const Row = ({ style, children }: rowT) => (
  <div {...css(keyRowStyle, style)}>{children}</div>
);
const Key = ({ style, handleOnClick, tag }: keyT) => (
  <div
    {...css(keyStyle(['/', 'X', '-', '+', '='].includes(tag)), style)}
    onClick={handleOnClick(tag)}
  >
    {tag}
  </div>
);

const Keypad = ({
  keypadStyle,
  handleNumberClick,
  handleOperatorClick,
}: keypadT) => {
  return (
    <div {...css(baseKeypadStyle, keypadStyle)}>
      <Row>
        {['AC', '+/-', '%', '/'].map(k => (
          <Key key={k} tag={k} handleOnClick={handleOperatorClick} />
        ))}
      </Row>
      <Row>
        {['7', '8', '9'].map(k => (
          <Key key={k} tag={k} handleOnClick={handleNumberClick} />
        ))}
        <Key key="X" tag="X" handleOnClick={handleOperatorClick} />
      </Row>
      <Row>
        {['4', '5', '6'].map(k => (
          <Key key={k} tag={k} handleOnClick={handleNumberClick} />
        ))}
        <Key key="-" tag="-" handleOnClick={handleOperatorClick} />
      </Row>
      <Row>
        {['1', '2', '3'].map(k => (
          <Key key={k} tag={k} handleOnClick={handleNumberClick} />
        ))}
        <Key key="+" tag="+" handleOnClick={handleOperatorClick} />
      </Row>
      <Row>
        <div {...css({ flex: 2 })}>
          <Key key="0" tag="0" handleOnClick={handleNumberClick} />
        </div>
        <div {...css({ display: 'flex', flexDirection: 'row', flex: 2 })}>
          <Key key="." tag="." handleOnClick={handleNumberClick} />
          <Key key="=" tag="=" handleOnClick={handleOperatorClick} />
        </div>
      </Row>
    </div>
  );
};

export default Keypad;
