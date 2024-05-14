"use client";

import React from "react";

/**
 * A custom React hook that triggers a callback function when a click event occurs inside a specified DOM element.
 * This hook is useful for handling interactions within a specific component, such as a modal or dropdown menu.
 *
 * @param {React.RefObject<HTMLDivElement>} ref - A React ref object pointing to the target DOM element.
 * @param {() => void} fn - A callback function to be executed when a click event is detected inside the element.
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * useClickInside(ref, () => {
 *   console.log('Element was clicked inside');
 * });
 *
 * return <div ref={ref}>Click inside me!</div>;
 *
 * @api
 * - `ref` parameter accepts a React ref object created by `useRef` or `createRef` and should point to an HTMLDivElement.
 * - `fn` parameter is a no-argument callback function that will be called whenever a click event occurs inside the referenced element.
 *
 * This hook sets up an event listener for clicks on the document and checks if the click occurred inside the referenced element.
 * If the click is inside, it calls the provided callback function `fn`.
 * The effect properly cleans up by removing the event listener when the component unmounts or the dependencies change.
 */
function useClickInside(ref: React.RefObject<HTMLDivElement>, fn: () => void) {
  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        fn();
      }
    };

    // Use capture phase to ensure the click is captured as soon as it happens
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, fn]);
}

export default useClickInside;
