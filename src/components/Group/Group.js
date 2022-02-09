import * as React from 'react';
import PropTypes from 'prop-types';
import { Group as CoreGroup } from '@co-design/core';

const Group = (props) => {
  return <CoreGroup {...props}>{props.children}</CoreGroup>;
};

Group.propTypes = {
  /** @uxpinignoreprop */
  children: PropTypes.node,

  /** @uxpinpropname Direction */
  direction: PropTypes.oneOf(['column', 'row']),

  /** @uxpinpropname Position */
  position: PropTypes.oneOf(['left', 'center', 'right', 'apart']),

  /** @uxpinpropname Align */
  align: PropTypes.oneOf(['start', 'center', 'end']),

  /** @uxpinpropname Spacing */
  spacing: PropTypes.string,

  /** @uxpinpropname Inline */
  inline: PropTypes.bool,

  /** @uxpinpropname Grow */
  grow: PropTypes.bool,

  /** @uxpinpropname No Wrap */
  noWrap: PropTypes.bool,

  overrideStyles: PropTypes.object,
};

export default Group;
