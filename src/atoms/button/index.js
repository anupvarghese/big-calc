import React from 'react';
import { css } from 'glamor';

const Button = (props, style) => <button {...props} {...css(style)} />;

export default Button;
