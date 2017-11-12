import React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object.isRequired,
};

const Input = ({ children, style, ...props }) => {
  return <input {...css(style)} value={children} {...props} />;
};

Input.propTypes = propTypes;

export default Input;
