import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as CoreAvatar, AvatarProps } from '@co-design/core';

interface Props extends AvatarProps<'div'> {
  uxpId?: string;
}

const Avatar = (props: Props) => {
  return <CoreAvatar {...props}>{props.children}</CoreAvatar>;
};

Avatar.propTypes = {
  /** @uxpinpropname Letters */
  children: PropTypes.string,

  /** @uxpinpropname ImageURL */
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
