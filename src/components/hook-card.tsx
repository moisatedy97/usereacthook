"use client";

import { addHookToCookies } from "@/lib/cookies";
import { copyToClipboard } from "@/lib/utils";
import { type Hook } from "@/server/db/schema";
import axios from "axios";
import { Atom, Check, Rabbit } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

function HookCard({ hook }: { hook: Hook }) {
  const handleIncrementClickCount = async () => {
    await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/hook/statistics/incrementClickCount?hookId=${hook.id}`);
  };

  return (
    <Card className="hover:border-gradient group relative w-full">
      <CardHeader>
        <CardTitle className="text-gradient mb-2 truncate">{hook.name}</CardTitle>
        <CardDescription className="line-clamp-2">{hook.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-wrap">
        <Link
          href={`/docs/${hook.name}`}
          className="text-gradient flex items-center"
          onClick={handleIncrementClickCount}
        >
          Discover
          <Atom className="ml-2 h-4 w-4" color="#52ddfd" />
        </Link>
        <CardCopyAction hook={hook} />
      </CardFooter>
    </Card>
  );
}

export default HookCard;

const CardCopyAction = ({ hook }: { hook: Hook }): React.JSX.Element => {
  const [fileContent, setFileContent] = React.useState<string | null>(null);

  const fetchFileContent = async (fileSource: string) => {
    try {
      const response = await axios.get<string>(fileSource, {
        responseType: "arraybuffer"
      });
      const decodedContent = Buffer.from(response.data, "base64").toString("utf-8");

      setFileContent(decodedContent);
      await copyToClipboard(decodedContent);
    } catch (error) {
      console.error("Error fetching file content:", error);
      setFileContent(null);
    }
  };

  const handleCopyHook = async () => {
    await fetchFileContent(hook.source!);
    await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/hook/statistics/incrementCopyCount?hookId=${hook.id}`);

    addHookToCookies(hook.id);

    setTimeout(() => {
      setFileContent(null);
    }, 1000);
  };

  return (
    <Button size={"sm"} variant="ghost" className="ml-auto" onClick={handleCopyHook}>
      {fileContent ? (
        <div className="flex items-center">
          Copied
          <Check className="ml-2 h-4 w-4" />
        </div>
      ) : (
        <div className="flex items-center">
          Fast copy code
          <Rabbit className="ml-2 h-4 w-4" />
        </div>
      )}
    </Button>
  );
};
