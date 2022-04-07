import React from 'react';
import PropTypes from 'prop-types';
import { Burger as CoreBurger } from '@co-design/core';

const Burger = (props) => {
  return <CoreBurger {...props}>{props.children}</CoreBurger>;
};

Burger.propTypes = {
  /** @uxpinpropname  */
  children: PropTypes.node,

  /** @uxpinpropname Opened */
  opened: PropTypes.bool,

  /** @uxpinpropname Size */
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),

  /** @uxpinpropname Color */
  color: PropTypes.oneOf(['purple', 'gray', 'red', 'blue']),

  overrideStyles: PropTypes.object,

  onClick: PropTypes.func,
};

export default Burger;
