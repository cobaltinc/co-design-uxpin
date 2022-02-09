import * as React from 'react';
import PropTypes from 'prop-types';
import { EquallyGrid as CoreEquallyGrid } from '@co-design/core';

const EquallyGrid = (props) => {
  return <CoreEquallyGrid {...props}>{props.children}</CoreEquallyGrid>;
};

EquallyGrid.propTypes = {
  /** @uxpinignoreprop */
  children: PropTypes.node,

  /** @uxpinpropname Columns */
  cols: PropTypes.number,

  /** @uxpinpropname Spacing */
  spacing: PropTypes.string,

  overrideStyles: PropTypes.object,
};

export default EquallyGrid;
