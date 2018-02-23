// @flow

import React from 'react';
import { css } from 'glamor';

const baseKeypadStyle = {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid tomato',
  borderRadius: '4px',
  marginTop: '0.5rem',
};

const keyRowStyle = {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const keyStyle = {
  flex: 1,
  margin: '0.5rem',
  border: `1px solid tomato`,
  padding: '1rem',
};

type rowT = {
  style: ?Object,
  children: React.Node,
};

type keyT = {
  style: ?Object,
  handleOnClick: () => {},
  tag: string,
  disable: boolean,
};

type keypadT = {
  keypadStyle: ?Object,
  handleNumberClick: () => {},
  handleOperatorClick: () => {},
  hasDecimal: boolean,
  disableOperators: boolean,
};

const Row = ({ style, children }: rowT) => (
  <div {...css(keyRowStyle, style)}>{children}</div>
);
const Key = ({ style, handleOnClick, tag, disable = false }: keyT) => (
  <div
    {...css(keyStyle, style, { pointerEvents: disable ? 'none' : '' })}
    onClick={handleOnClick(tag)}
  >
    {tag}
  </div>
);

const Keypad = ({
  keypadStyle,
  handleNumberClick,
  handleOperatorClick,
  hasDecimal,
  disableOperators,
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
        <Key
          key="X"
          tag="X"
          handleOnClick={handleOperatorClick}
          disable={disableOperators}
        />
      </Row>
      <Row>
        {['4', '5', '6'].map(k => (
          <Key key={k} tag={k} handleOnClick={handleNumberClick} />
        ))}
        <Key
          key="-"
          tag="-"
          handleOnClick={handleOperatorClick}
          disable={disableOperators}
        />
      </Row>
      <Row>
        {['1', '2', '3'].map(k => (
          <Key key={k} tag={k} handleOnClick={handleNumberClick} />
        ))}
        <Key
          key="+"
          tag="+"
          handleOnClick={handleOperatorClick}
          disable={disableOperators}
        />
      </Row>
      <Row>
        <div {...css({ flex: 2 })}>
          <Key key="0" tag="0" handleOnClick={handleNumberClick} />
        </div>
        <div {...css({ display: 'flex', flexDirection: 'row', flex: 2 })}>
          <Key
            key="."
            tag="."
            handleOnClick={handleNumberClick}
            disable={hasDecimal}
          />
          <Key
            key="="
            tag="="
            handleOnClick={handleOperatorClick}
            disable={disableOperators}
          />
        </div>
      </Row>
    </div>
  );
};

export default Keypad;
