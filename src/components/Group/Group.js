import * as React from "react";
import PropTypes from "prop-types";
import { Group as CoreGroup } from "@co-design/core";
import Divider from "@mui/material/Divider";

function Group(props) {
  return <CoreGroup {...props}>{props.children}</CoreGroup>;
}

Stack.propTypes = {
  children: PropTypes.node,

  position: PropTypes.oneOf(["left", "center", "right", "apart"]),

  align: PropTypes.oneOf(["start", "center", "end"]),

  direction: PropTypes.oneOf(["column", "row"]),

  /**
   * Defines the space between immediate children in px
   */
  spacing: PropTypes.number,

  inline: PropTypes.bool,

  grow: PropTypes.bool,

  noWrap: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  co: PropTypes.object,

  overrideStyles: PropTypes.object,
};

export default Group;
