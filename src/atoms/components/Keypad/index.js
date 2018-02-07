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
  border: '1px solid tomato',
  padding: '1rem',
};

type rowT = {
  style: ?Object,
  children: React.Node,
};

type keyT = {
  style: ?Object,
  children: React.Node,
};

type keypadT = {
  keypadStyle: ?Object,
};

const Row = ({ style, children }: rowT) => (
  <div {...css(keyRowStyle, style)}>{children}</div>
);
const Key = ({ style, children }: keyT) => (
  <div {...css(keyStyle, style)}>{children}</div>
);

const Keypad = ({ keypadStyle }: keypadT) => (
  <div {...css(baseKeypadStyle, keypadStyle)}>
    <Row>
      <Key>AC</Key>
      <Key>+/-</Key>
      <Key>%</Key>
      <Key>/</Key>
    </Row>
    <Row>
      <Key>7</Key>
      <Key>8</Key>
      <Key>9</Key>
      <Key>X</Key>
    </Row>
    <Row>
      <Key>4</Key>
      <Key>5</Key>
      <Key>6</Key>
      <Key>-</Key>
    </Row>
    <Row>
      <Key>1</Key>
      <Key>2</Key>
      <Key>3</Key>
      <Key>+</Key>
    </Row>
    <Row>
      <div {...css({ flex: 2 })}>
        <Key>0</Key>
      </div>
      <div {...css({ display: 'flex', flexDirection: 'row', flex: 2 })}>
        <Key style={{ flex: 1 }}>.</Key>
        <Key style={{ flex: 1 }}>=</Key>
      </div>
    </Row>
  </div>
);

export default Keypad;
