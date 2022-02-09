import * as React from 'react';
import PropTypes from 'prop-types';
import { View as CoreView } from '@co-design/core';

const View = (props) => {
  return <CoreView {...props}>{props.children}</CoreView>;
};

View.propTypes = {
  /** @uxpinignoreprop */
  children: PropTypes.node,

  co: PropTypes.object,
};

export default View;
