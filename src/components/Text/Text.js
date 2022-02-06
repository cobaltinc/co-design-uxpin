import React from "react";
import PropTypes from "prop-types";
import { Text as CoreText } from "@co-design/core";

function Text(props) {
  return <CoreText {...props}>{props.children}</CoreText>;
}

Text.propTypes = {
  /**
   * The typography style to apply.
   * @uxpinpropname  Text
   */
  children: PropTypes.node,

  /**
   * Alignment of text.
   */
  align: PropTypes.oneOf([undefined, "left", "center", "right"]),

  /**
   * Color of text.
   */
  color: PropTypes.string,

  underline: PropTypes.bool,

  strong: PropTypes.bool,

  lineClamp: PropTypes.number,

  /**
   * If `true`, the text will be block.
   */
  block: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  co: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  overrideStyles: PropTypes.object,
};

export default Text;
