"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import { CheckCheck, Copy } from "lucide-react";

export const CopyButton = ({ children }: { children: React.ReactNode }) => {
  const textInput = React.useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const onEnter = () => {
    setHovered(true);
  };

  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };

  const handleCopy = async () => {
    setCopied(true);

    const content = textInput.current?.textContent;

    if (content) {
      await navigator.clipboard.writeText(content);
    }

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div ref={textInput} onMouseEnter={onEnter} onMouseLeave={onExit} className="relative">
      {hovered && (
        <Button
          variant="ghost"
          className={cn("absolute right-4 top-4 z-10 p-2 hover:cursor-pointer")}
          onClick={handleCopy}
        >
          {copied ? (
            <div className="flex items-center justify-center">
              <CheckCheck className="h-4 w-4 text-green-400" />
              <span className="ml-1">Copied!</span>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Copy className="h-4 w-4" />
              <span className="ml-1">Copy</span>
            </div>
          )}
        </Button>
      )}
      {children}
    </div>
  );
};

export default CopyButton;
