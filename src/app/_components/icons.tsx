import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Icons() {
  return (
    <div className="flex items-center gap-x-2">
      <ModeToggle />
      <Button variant="ghost" size={"icon"} asChild>
        <Link href={"https://github.com"}>
          <Github className="text-main h-5 w-5" />
        </Link>
      </Button>
    </div>
  );
}
