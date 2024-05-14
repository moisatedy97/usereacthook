"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react";

function HookStatistics({ hookId }: { hookId: number }): React.JSX.Element {
  const [isThumbsUpClicked, setIsThumbsUpClicked] = React.useState(false);
  const [isThumbsDownClicked, setIsThumbsDownClicked] = React.useState(false);

  const handleThumbsUpClick = async () => {
    setIsThumbsUpClicked(true);
    setIsThumbsDownClicked(false);

    await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/hook/statistics/incrementUsefullCount?hookId=${hookId}`);
  };

  const handleThumbsDownClick = async () => {
    setIsThumbsDownClicked(true);
    setIsThumbsUpClicked(false);

    await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/hook/statistics/incrementUselessCount?hookId=${hookId}`);
  };

  return (
    <div className="flex items-center gap-2 py-5">
      <Button variant="outline" onClick={handleThumbsUpClick} disabled={isThumbsDownClicked}>
        <ThumbsUp className={"h-4 w-4"} />
      </Button>
      <Button variant="outline" onClick={handleThumbsDownClick} disabled={isThumbsUpClicked}>
        <ThumbsDown className={"h-4 w-4"} />
      </Button>
    </div>
  );
}

export default HookStatistics;
