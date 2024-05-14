import React, { type RefObject } from "react";

const useHoverOutside = <T extends HTMLElement>(ref: RefObject<T>, fn: () => void) => {
  React.useEffect(() => {
    const element = ref?.current;

    element?.addEventListener("mouseleave", fn);

    return () => element?.removeEventListener("mouseleave", fn);
  }, [ref, fn]);
};

export default useHoverOutside;
