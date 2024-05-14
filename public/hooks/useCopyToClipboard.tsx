"use client";

import React from "react";

/**
 * Copies a given text to the clipboard.
 *
 * This function attempts to copy a provided string to the system clipboard.
 * If the input is undefined or the navigator object is not available (e.g., during SSR),
 * the function resolves to false.
 *
 * @param {string | undefined} value - The text to be copied to the clipboard.
 * @returns {Promise<boolean>} - A promise that resolves to true if the copy was successful, otherwise false.
 */
const copyToClipboard = async (value: string | undefined): Promise<boolean> => {
  if (!value || typeof navigator === "undefined") {
    return false;
  }

  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
};

/**
 * A React hook that provides clipboard copying functionality.
 *
 * This hook manages a state `copied` that indicates whether text has been recently copied to the clipboard.
 * It provides a function `copyText` that can be used to initiate copying of text.
 * The `copied` state automatically resets to false after a specified delay.
 *
 * @param {number} resetDelay - The delay in milliseconds after which the `copied` state is reset to false.
 * @returns {[boolean, (text: string | undefined) => Promise<void>]} - A tuple containing:
 *         - `copied`: A boolean state indicating if text has been copied.
 *         - `copyText`: A function to trigger copying text to the clipboard.
 *
 * @example
 * const [copied, copyText] = useCopyToClipboard(3000);
 *
 * return (
 *  <button onClick={() => copyText("Hello World")}>Copy Text</button>
 *  {copied && <p>Text copied to clipboard</p>}
 * )
 */
const useCopyToClipboard = (resetDelay: number = 3000) => {
  const [copied, setCopied] = React.useState(false);

  const copyText = React.useCallback(async (text: string | undefined) => {
    const result = await copyToClipboard(text);
    setCopied(result);
  }, []);

  React.useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;

    if (copied) {
      timerId = setTimeout(() => setCopied(false), resetDelay);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [copied, resetDelay]);

  return [copied, copyText] as const;
};

export default useCopyToClipboard;
