import React from 'react';
import PropTypes from 'prop-types';
import { Button as CoreButton, ButtonProps } from '@co-design/core';
import { DEFAULT_COLORS, DEFAULT_SIZES } from '../../constants';

const Button = (props) => {
  return <CoreButton {...props}>{props.children}</CoreButton>;
};

Button.propTypes = {
  /** @uxpinpropname Label */
  children: PropTypes.string,

  /** @uxpinpropname Size */
  size: PropTypes.oneOf(DEFAULT_SIZES),

  /** @uxpinpropname Variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'inverse', 'transparent']),

  /** @uxpinpropname Color */
  color: PropTypes.oneOf(DEFAULT_COLORS),

  /** @uxpinpropname Disabled */
  disabled: PropTypes.bool,

  /** @uxpinpropname Loading */
  loading: PropTypes.bool,

  /** @uxpinpropname Full Width */
  fullWidth: PropTypes.bool,

  onClick: PropTypes.func,

  overrideStyles: PropTypes.object,
};

export default Button;
