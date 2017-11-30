import React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  baseStyle: PropTypes.object.isRequired,
};

const Input = ({ baseStyle, ...props }) => {
  return <input {...css(baseStyle)} {...props} />;
};

Input.propTypes = propTypes;

export default Input;
