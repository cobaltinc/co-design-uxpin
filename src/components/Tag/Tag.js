import * as React from 'react';
import PropTypes from 'prop-types';
import { Tag as CoreTag } from '@co-design/core';

const Tag = (props) => {
  return <CoreTag {...props}>{props.children}</CoreTag>;
};

Tag.propTypes = {
  /** @uxpinpropname Letters */
  children: PropTypes.string,

  /** @uxpinpropname Color */
  color: PropTypes.string,

  /** @uxpinpropname FullWidth */
  fullWidth: PropTypes.bool,

  /** @uxpinpropname Strong */
  strong: PropTypes.bool,

  overrideStyles: PropTypes.object,
};

export default Tag;
