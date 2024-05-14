"use client";

import React from "react";

/**
 * A custom React hook that triggers a callback function when a mouse hover event occurs inside a specified DOM element.
 * This hook is particularly useful for handling hover interactions within specific components, such as displaying tooltips,
 * changing styles, or triggering animations when the user hovers over an element.
 *
 * @param {React.RefObject<T>} ref - A React ref object pointing to the target DOM element.
 * @param {() => void} fn - A callback function to be executed when a hover event is detected inside the element.
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * useHoverInside(ref, () => {
 *   console.log('Mouse has entered the element');
 * });
 *
 * return <div ref={ref}>Hover over me!</div>;
 *
 * @api
 * - `ref` parameter accepts a React ref object created by `useRef` or `createRef` and should point to an element of type T, where T extends HTMLElement.
 * - `fn` parameter is a no-argument callback function that will be called whenever a mouseenter event occurs inside the referenced element.
 *
 * This hook sets up an event listener for the 'mouseenter' event on the referenced DOM element.
 * If the mouse enters the element, it calls the provided callback function `fn`.
 * The effect properly cleans up by removing the event listener when the component unmounts or the dependencies change.
 */
const useHoverInside = <T extends HTMLElement>(ref: React.RefObject<T>, fn: () => void) => {
  React.useEffect(() => {
    const element = ref.current;

    if (element) {
      const handleMouseEnter = () => fn();
      element.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
  }, [ref, fn]); // Include ref and fn in the dependency array to handle changes in the ref or the function
};

export default useHoverInside;
