"use client";

import React from "react";

/**
 * A custom React hook that triggers a function when a click occurs outside a specified element.
 * This is particularly useful for closing modal windows, dropdown menus, or resetting states
 * when the user interacts with the rest of the application outside a specific UI component.
 *
 * @param {React.RefObject<T>} ref - A React ref object pointing to the element to monitor.
 * @param {() => void} fn - A function to execute when a click outside the referenced element is detected.
 *
 * @example
 * const modalRef = useRef(null);
 * useClickOutside(modalRef, () => {
 *   console.log("Clicked outside the modal!");
 *   closeModal();
 * });
 *
 * @template T - A generic parameter that extends HTMLElement to type-check the ref.
 */
const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  fn: () => void,
) => {
  const handleClickOutside = React.useCallback(
    (event: MouseEvent | TouchEvent) => {
      const element = ref?.current;
      const target = event.target as Node | null;

      if (element && target && !element.contains(target)) {
        fn();
      }
    },
    [ref, fn],
  );

  React.useEffect(() => {
    // Adding event listeners to handle clicks and touch events outside the referenced element.
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    // Cleanup function to remove event listeners when the component unmounts or dependencies change.
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useClickOutside;
