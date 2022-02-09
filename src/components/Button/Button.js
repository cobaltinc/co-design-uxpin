import React from 'react';
import PropTypes from 'prop-types';
import { Button as CoreButton } from '@co-design/core';

const Button = (props) => {
  return <CoreButton {...props}>{props.children}</CoreButton>;
};

Button.propTypes = {
  /** @uxpinpropname Label */
  children: PropTypes.string,

  /** @uxpinpropname Size */
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),

  /** @uxpinpropname Variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'inverse', 'transparent']),

  /** @uxpinpropname Color */
  color: PropTypes.oneOf(['purple', 'dark', 'red', 'blue', 'orange', 'green', 'yellow']),

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
