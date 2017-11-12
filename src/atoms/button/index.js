import React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';

const propTypes = {
  style: PropTypes.object.isRequired,
};

const Button = ({ style, ...props }) => <button {...props} {...css(style)} />;

Button.propTypes = propTypes;

export default Button;
