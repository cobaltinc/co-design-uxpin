import React from 'react';
import PropTypes from 'prop-types';
import { Heading as CoreHeading } from '@co-design/core';

const Heading = (props) => {
  return <CoreHeading {...props}>{props.children}</CoreHeading>;
};

Heading.propTypes = {
  /** @uxpinpropname Text */
  children: PropTypes.node,

  /** @uxpinpropname Level */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

  /** @uxpinpropname Alignment */
  align: PropTypes.oneOf(['left', 'center', 'right']),

  /** @uxpinpropname Color */
  color: PropTypes.string,

  /** @uxpinpropname Inline */
  inline: PropTypes.bool,

  /** @uxpinpropname Underline */
  underline: PropTypes.bool,

  /** @uxpinpropname Bold */
  strong: PropTypes.bool,

  overrideStyles: PropTypes.object,
};

export default Heading;
