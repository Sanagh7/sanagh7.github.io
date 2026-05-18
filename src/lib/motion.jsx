import React from "react";

const motionProps = new Set([
  "animate",
  "exit",
  "initial",
  "layout",
  "layoutId",
  "transition",
  "variants",
  "viewport",
  "whileHover",
  "whileInView",
  "whileTap",
]);

const createMotionElement = (tag) =>
  function MotionElement(props) {
    const domProps = {};

    for (const [key, value] of Object.entries(props)) {
      if (!motionProps.has(key)) {
        domProps[key] = value;
      }
    }

    return React.createElement(tag, domProps);
  };

export const motion = new Proxy(
  {},
  {
    get(target, tag) {
      if (!target[tag]) {
        target[tag] = createMotionElement(tag);
      }

      return target[tag];
    },
  }
);

export function AnimatePresence({ children }) {
  return children;
}
