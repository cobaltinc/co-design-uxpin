import * as React from 'react';
import PropTypes from 'prop-types';
import { Center as CoreCenter } from '@co-design/core';

const Center = (props) => {
  return <CoreCenter {...props}>{props.children}</CoreCenter>;
};

Center.propTypes = {
  /** @uxpinignoreprop */
  children: PropTypes.node,

  /** @uxpinpropname Inline */
  inline: PropTypes.bool,

  overrideStyles: PropTypes.object,
};

export default Center;
