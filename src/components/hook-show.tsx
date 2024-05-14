import { ChevronRight } from "lucide-react";
import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import axios from "axios";
import { Button } from "./ui/button";

async function HookShow({ fileSource }: { fileSource: string }): Promise<React.JSX.Element | undefined> {
  const response = await axios.get<string>(fileSource, {
    responseType: "arraybuffer"
  });
  const decodedContent = Buffer.from(response.data, "base64").toString("utf-8");

  return (
    <div>
      <HoverCard>
        <HoverCardTrigger asChild={true}>
          <Button
            variant="ghost"
            className="absolute right-0 top-0 h-full items-center justify-center rounded-l-none rounded-r-md p-0.5 opacity-0 transition duration-150 ease-in-out hover:bg-secondary group-hover:opacity-100"
          >
            <ChevronRight className="size-4" />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent side="right" className="w-[32rem]">
          <pre className="overflow-auto rounded-md bg-secondary p-2">
            <code className="text-xs">{decodedContent}</code>
          </pre>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

export default HookShow;
