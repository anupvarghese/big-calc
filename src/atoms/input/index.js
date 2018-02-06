// @flow
import React from 'react';
import { css } from 'glamor';

const inputT = {
  onChange: () => {},
  baseStyle: Object,
};

const Input = ({ baseStyle, ...props }: inputT) => {
  return <input {...css(baseStyle)} {...props} />;
};

export default Input;
