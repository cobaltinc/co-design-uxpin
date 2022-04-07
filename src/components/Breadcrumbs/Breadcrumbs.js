import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs as CoreBreadcrumbs } from '@co-design/core';

const Breadcrumbs = (props) => {
  return <CoreBreadcrumbs {...props}>{props.children}</CoreBreadcrumbs>;
};

Breadcrumbs.propTypes = {
  /** @uxpinpropname Node */
  children: PropTypes.node,

  /** @uxpinpropname Separator */
  separator: PropTypes.node,

  /** @uxpinpropname Spacing */
  spacing: PropTypes.number,

  overrideStyles: PropTypes.object,
};

export default Breadcrumbs;
