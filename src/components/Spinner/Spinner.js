import React from 'react';
import PropTypes from 'prop-types';
import { Spinner as CoreSpinner } from '@co-design/core';

const Spinner = (props) => {
  return <CoreSpinner {...props}>{props.children}</CoreSpinner>;
};

Spinner.propTypes = {
  /** @uxpinpropname Size */
  size: PropTypes.string,

  /** @uxpinpropname Color */
  color: PropTypes.string,

  overrideStyles: PropTypes.object,
};

export default Spinner;
