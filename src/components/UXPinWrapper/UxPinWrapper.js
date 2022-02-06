// eslint-disable-next-line no-unused-vars
import React from "react";
import { ThemeProvider } from "@co-design/core";

export default function UXPinWrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
