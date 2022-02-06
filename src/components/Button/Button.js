import React from "react";
import PropTypes from "prop-types";
import { Button as CoreButton } from "@co-design/core";

function Button(props) {
  const { uxpinRef, ...other } = props;

  return (
    <CoreButton {...other} ref={uxpinRef}>
      {props.children}
    </CoreButton>
  );
}

Button.propTypes = {
  /**
   * The label of the button.
   * @uxpinpropname Label
   * */
  children: PropTypes.string,

  /**
   * The color of the button.
   */
  color: PropTypes.oneOf([
    "purple",
    "dark",
    "red",
    "blue",
    "orange",
    "green",
    "yellow",
  ]),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the button will be loading.
   */
  loading: PropTypes.bool,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"]),

  /**
   * The type of button.
   */
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "inverse",
    "transparent",
  ]),

  /**
   * On click event to use with UXPin interactions.
   */
  onClick: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  co: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  overrideStyles: PropTypes.object,
};

export default Button;
