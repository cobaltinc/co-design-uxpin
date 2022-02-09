import * as React from 'react';
import PropTypes from 'prop-types';
import { Col as CoreCol } from '@co-design/core';

const Col = (props) => {
  return <CoreCol {...props}>{props.children}</CoreCol>;
};

Col.propTypes = {
  /** @uxpinignoreprop */
  children: PropTypes.node,

  /** @uxpinpropname Span */
  span: PropTypes.number,

  /** @uxpinpropname Offset */
  offset: PropTypes.number,

  overrideStyles: PropTypes.object,
};

export default Col;
