import React from 'react';
import PropTypes from 'prop-types';
import { Image as CoreImage } from '@co-design/core';

const Image = (props) => {
  return <CoreImage {...props}>{props.children}</CoreImage>;
};

Image.propTypes = {
  /** @uxpinpropname Image URL */
  src: PropTypes.string,

  /** @uxpinpropname Width */
  width: PropTypes.number,

  /** @uxpinpropname Height */
  height: PropTypes.number,

  /** @uxpinpropname Radius */
  radius: PropTypes.oneOf(['small', 'medium', 'large', 'round', 'circular']),

  /** @uxpinpropname Fit */
  fit: PropTypes.oneOf(['cover', 'fill', 'contain']),

  overrideStyles: PropTypes.object,
};

export default Image;
