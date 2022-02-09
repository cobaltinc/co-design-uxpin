import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as CoreAvatar, AvatarProps } from '@co-design/core';

const Avatar = (props) => {
  return <CoreAvatar {...props}>{props.children}</CoreAvatar>;
};

Avatar.propTypes = {
  /** @uxpinpropname Letters */
  children: PropTypes.string,

  /** @uxpinpropname Image URL */
  src: PropTypes.string,

  /** @uxpinignoreprop */
  alt: PropTypes.string,

  /** @uxpinpropname Shape */
  shape: PropTypes.oneOf(['square', 'round', 'circle']),

  /** @uxpinpropname Size */
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),

  overrideStyles: PropTypes.object,
};

export default Avatar;
