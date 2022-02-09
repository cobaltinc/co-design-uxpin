import React from 'react';
import PropTypes from 'prop-types';
import { Button as CoreButton, ButtonProps } from '@co-design/core';
import { DEFAULT_COLORS, DEFAULT_RADIUS, DEFAULT_SIZES } from '../../constants';

const Button = (props) => {
  return <CoreButton {...props}>{props.children}</CoreButton>;
};

Button.propTypes = {
  /** @uxpinpropname Image URL */
  src: PropTypes.string,

  /** @uxpinpropname Width */
  width: PropTypes.number,

  /** @uxpinpropname Height */
  height: PropTypes.number,

  /** @uxpinpropname Radius */
  radius: PropTypes.oneOf(DEFAULT_RADIUS),

  /** @uxpinpropname Fit */
  fit: PropTypes.oneOf(['cover', 'fill', 'contain']),

  overrideStyles: PropTypes.object,
};

export default Button;
