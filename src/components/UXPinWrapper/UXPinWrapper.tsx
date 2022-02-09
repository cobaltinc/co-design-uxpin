// eslint-disable-next-line no-unused-vars
import React from "react";
import { CoProvider } from "@co-design/core";

export default ({ children }) => {
  return (
    <CoProvider withGlobalStyles withNormalizeCSS>
      {children}
    </CoProvider>
  );
};
