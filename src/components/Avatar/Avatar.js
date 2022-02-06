import React from "react";
import PropTypes from "prop-types";
import { Avatar as CoreAvatar } from "@co-design/core";
import Icon from "../Icon/Icon";

/**
 * @uxpindocurl https://mui.com/api/avatar/
 */
function Avatar(props) {
  return <CoreAvatar {...props}>{props.children}</CoreAvatar>;
}

Avatar.propTypes = {
  /**
   * Letters for initial icons
   */
  /** @uxpinpropname  Letters */
  children: PropTypes.string,

  /**
   * The image URL source.
   */
  /** @uxpinpropname  ImageURL */
  src: PropTypes.string,

  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  /** @uxpinignoreprop */
  alt: PropTypes.string,

  /**
   * The shape of the avatar.
   * @uxpinpropname Shape
   */
  shape: PropTypes.oneOf(["square", "round", "circle"]),

  size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"]),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  co: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  overrideStyles: PropTypes.object,
};

export default Avatar;
