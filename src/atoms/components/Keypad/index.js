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
};

type keypadT = {
  keypadStyle: ?Object,
  handleKeyClick: () => {},
};

const Row = ({ style, children }: rowT) => (
  <div {...css(keyRowStyle, style)}>{children}</div>
);
const Key = ({ style, handleOnClick, tag }: keyT) => (
  <div {...css(keyStyle, style)} onClick={handleOnClick(tag)}>
    {tag}
  </div>
);

const Keypad = ({ keypadStyle, handleKeyClick }: keypadT) => {
  const keyProps = {
    handleOnClick: handleKeyClick,
  };
  return (
    <div {...css(baseKeypadStyle, keypadStyle)}>
      <Row>
        {['AC', '+/-', '%', '/'].map(k => (
          <Key key={k} tag={k} {...keyProps} />
        ))}
      </Row>
      <Row>
        {['7', '8', '9', 'X'].map(k => <Key key={k} tag={k} {...keyProps} />)}
      </Row>
      <Row>
        {['4', '5', '6', '-'].map(k => <Key key={k} tag={k} {...keyProps} />)}
      </Row>
      <Row>
        {['1', '2', '3', '+'].map(k => <Key key={k} tag={k} {...keyProps} />)}
      </Row>
      <Row>
        <div {...css({ flex: 2 })}>
          <Key key="0" tag="0" {...keyProps} />
        </div>
        <div {...css({ display: 'flex', flexDirection: 'row', flex: 2 })}>
          {['.', '='].map(k => (
            <Key style={{ flex: 1 }} key={k} tag={k} {...keyProps} />
          ))}
        </div>
      </Row>
    </div>
  );
};

export default Keypad;
