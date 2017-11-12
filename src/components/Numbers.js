import React from 'react';
import { css } from 'glamor';
import Button from '../atoms/button';

const Numbers = () => {
  const buttonStyle = {
    margin: '0.5rem',
  };
  return [...Array(10).keys()].reverse().map(number => (
    <Button key={number} {...css(buttonStyle)}>
      {number}
    </Button>
  ));
};

export default Numbers;
