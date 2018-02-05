// @flow

import React from 'react';
import { css } from 'glamor';

const keypadStyle = {
  display: 'flex',
  width: '400px',
  flexDirection: 'column',
  border: '1px solid tomato',
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

type RowT = {
  style: ?Object,
  children: React.Node,
};

type KeyT = {
  style: ?Object,
  children: React.Node,
};

const Row = ({ style, children }: RowT) => (
  <div {...css(keyRowStyle, style)}>{children}</div>
);
const Key = ({ style, children }: KeyT) => (
  <div {...css(keyStyle, style)}>{children}</div>
);

const Keypad = () => (
  <div {...css(keypadStyle)}>
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
