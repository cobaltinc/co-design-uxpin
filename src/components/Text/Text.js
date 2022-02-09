import React from 'react';
import PropTypes from 'prop-types';
import { Text as CoreText } from '@co-design/core';

const Text = (props) => {
  return <CoreText {...props}>{props.children}</CoreText>;
};

Text.propTypes = {
  /** @uxpinpropname Text */
  children: PropTypes.node,

  /** @uxpinpropname Size */
  size: PropTypes.string,

  /** @uxpinpropname Alignment */
  align: PropTypes.oneOf(['left', 'center', 'right']),

  /** @uxpinpropname Color */
  color: PropTypes.string,

  /** @uxpinpropname Underline */
  underline: PropTypes.bool,

  /** @uxpinpropname Bold */
  strong: PropTypes.bool,

  /** @uxpinpropname Line Clamp */
  lineClamp: PropTypes.number,

  /** @uxpinpropname Block */
  block: PropTypes.bool,

  overrideStyles: PropTypes.object,
};

export default Text;
