import * as React from 'react';
import PropTypes from 'prop-types';
import { Stack as CoreStack } from '@co-design/core';

const Stack = (props) => {
  return <CoreStack {...props}>{props.children}</CoreStack>;
};

Stack.propTypes = {
  /** @uxpinignoreprop */
  children: PropTypes.node,

  /** @uxpinpropname Position */
  justify: PropTypes.oneOf(['left', 'center', 'right', 'apart']),

  /** @uxpinpropname Align */
  align: PropTypes.oneOf(['start', 'center', 'end']),

  /** @uxpinpropname Spacing */
  spacing: PropTypes.string,

  overrideStyles: PropTypes.object,
};

export default Stack;
