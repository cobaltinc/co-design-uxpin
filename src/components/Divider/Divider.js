import * as React from 'react';
import PropTypes from 'prop-types';
import { Divider as CoreDivider } from '@co-design/core';

const Divider = (props) => {
  return <CoreDivider {...props}>{props.children}</CoreDivider>;
};

Divider.propTypes = {
  /** @uxpinpropname Orientation */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /** @uxpinpropname Variant */
  variant: PropTypes.oneOf(['solid', 'dahsed', 'dotted']),

  /** @uxpinpropname Margin */
  margin: PropTypes.string,

  overrideStyles: PropTypes.object,
};

export default Divider;
