"use client";

import { useEffect, useState } from "react";

/**
 * A custom React hook that determines if a component has mounted on the client side.
 * This is useful for ensuring that certain hooks or components that rely on window or document objects
 * are only executed in the client environment, especially useful in Next.js or other SSR frameworks.
 *
 * @returns {boolean} - Returns true if the component has mounted on the client side, false otherwise.
 *
 * Example usage:
 * ```tsx
 * const hasMounted = useHasMounted();
 * if (hasMounted) {
 *   // Perform client-specific logic such as accessing window or document
 * }
 * ```
 */
const useHasMounted = (): boolean => {
  const [hasMounted, setHasMounted] = useState(false); // Simplified typing

  useEffect(() => {
    setHasMounted(true);

    // Cleanup function to reset the mounted state when the component unmounts
    return () => {
      setHasMounted(false);
    };
  }, []); // The empty dependency array ensures this effect runs only once after the initial render.

  return hasMounted;
};

export default useHasMounted;
