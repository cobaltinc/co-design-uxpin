import React from 'react';
import PropTypes from 'prop-types';
import { Anchor as CoreAnchor } from '@co-design/core';

const Anchor = (props) => {
  return <CoreAnchor {...props}>{props.children}</CoreAnchor>;
};

Anchor.propTypes = {
  /** @uxpinpropname Text */
  children: PropTypes.node,

  /**  @uxpinpropname Underline */
  underline: PropTypes.bool,

  /**  @uxpinpropname HoverUnderline */
  underlineOnHover: PropTypes.bool,

  /** š@uxpinpropname Size */
  size: PropTypes.string,

  /** @uxpinpropname Color */
  color: PropTypes.string,

  /** @uxpinpropname Bold */
  strong: PropTypes.bool,

  /** @uxpinpropname Alignment */
  align: PropTypes.oneOf(['left', 'center', 'right']),

  /** @uxpinpropname Line Clamp */
  lineClamp: PropTypes.number,

  /** @uxpinpropname Block */
  block: PropTypes.bool,

  onClick: PropTypes.func,

  overrideStyles: PropTypes.object,
};

export default Anchor;
