"use client";

import React from "react";

/**
 * Defines the types of keyboard commands that can be handled.
 */
type KeyboardCommand = "cmd-k" | "escape" | "down" | "up" | "enter";

/**
 * Type definition for the callback function to be invoked when a keyboard command is detected.
 * @param key - The keyboard command that was triggered.
 */
type KeyboardCommandCallback = (key: KeyboardCommand) => void;

/**
 * A custom React hook that allows you to handle specific keyboard commands.
 * This hook listens for keydown events and triggers a callback function with the specific command.
 *
 * @param fn - A callback function that is called with the detected keyboard command.
 *
 * @example
 * const handleCommand = (command: KeyboardCommand) => {
 *   console.log(`Command triggered: ${command}`);
 * };
 *
 * useKeyboardCommands(handleCommand);
 *
 * return (
 *   <>
 *     <button onClick={() => handleCommand('cmd-k')}>Copy Text</button>
 *   </>
 * );
 */
const useKeyboardCommands = (fn: KeyboardCommandCallback) => {
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Detect ⌘ + k on Mac, Ctrl + k on Windows
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        fn("cmd-k");
      }

      // Handle other specific keys
      switch (event.key) {
        case "Escape":
          fn("escape");
          break;
        case "Enter":
          fn("enter");
          break;
        case "ArrowDown":
          fn("down");
          break;
        case "ArrowUp":
          fn("up");
          break;
      }
    };

    // Register the event listener for the 'keydown' event
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [fn]); // Effect dependencies
};

export default useKeyboardCommands;
