/**
 * @file
 * Component1.js
 *
 * Placeholder component for testing npm package.
 */
import React from "react";

const Component1 = function({ className, children }) {
  let classes = [];
  if (typeof className === "string" && className.trim() !== "") {
    classes.push(className);
  }

  return (
    <h1 className={classes.join(" ")}>I am a component with children: {children}</h1>
  );
};

export default Component1;
