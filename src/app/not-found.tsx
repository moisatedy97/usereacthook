import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex flex-col gap-5 text-center">
        <iframe
          src="https://giphy.com/embed/mYhd1NHQkHmZLiqN7M"
          frameBorder="0"
          className="giphy-embed h-auto w-full"
          allowFullScreen
        ></iframe>
        <p></p>
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-muted-foreground">This page does not exists</p>
        <Button size={"lg"}>
          <MoveLeft className="mr-2 h-4 w-4" />
          Back to Homepage
        </Button>
      </div>
    </div>
  );
}
