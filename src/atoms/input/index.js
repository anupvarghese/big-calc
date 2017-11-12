import React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const Input = (props, style) => {
  return (
    <input {...css(style)} onChange={props.onChange} value={props.children} />
  );
};

Input.propTypes = propTypes;

export default Input;
