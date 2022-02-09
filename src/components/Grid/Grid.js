import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid as CoreGrid } from '@co-design/core';

const Grid = (props) => {
  return <CoreGrid {...props}>{props.children}</CoreGrid>;
};

Grid.propTypes = {
  /** @uxpinignoreprop */
  children: PropTypes.node,

  /** @uxpinpropname Position */
  justify: PropTypes.oneOf(['start', 'center', 'end']),

  /** @uxpinpropname Align */
  align: PropTypes.oneOf(['start', 'center', 'end']),

  /** @uxpinpropname Spacing */
  spacing: PropTypes.string,

  /** @uxpinpropname Grow */
  grow: PropTypes.bool,

  /** @uxpinpropname Columns */
  columns: PropTypes.number,

  overrideStyles: PropTypes.object,
};

export default Grid;
