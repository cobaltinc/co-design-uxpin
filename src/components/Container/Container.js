import * as React from 'react';
import PropTypes from 'prop-types';
import { Container as CoreContainer } from '@co-design/core';

const Container = (props) => {
  return <CoreContainer {...props}>{props.children}</CoreContainer>;
};

Container.propTypes = {
  /** @uxpinignoreprop */
  children: PropTypes.node,

  /** @uxpinpropname Size */
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),

  /** @uxpinpropname Padding */
  padding: PropTypes.string,

  /** @uxpinpropname Fluid */
  fluid: PropTypes.bool,

  /** @uxpinpropname Break */
  break: PropTypes.bool,

  overrideStyles: PropTypes.object,
};

export default Container;
