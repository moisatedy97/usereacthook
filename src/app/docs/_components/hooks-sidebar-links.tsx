"use client";

import { Button } from "@/components/ui/button";
import { type NavItem } from "@/config/docs";
import { FileJson2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function HooksSidebarLinks({ items }: { items: NavItem[] }): React.JSX.Element {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {items.map((item) => (
        <div key={item.title}>
          <Button variant={!isActive(item.href) ? "ghost" : "secondary"} asChild>
            <Link href={item.href} className="flex items-center">
              {item.title} {isActive(item.href) && <FileJson2 className="ml-2 h-4 w-4" />}
            </Link>
          </Button>
        </div>
      ))}
    </>
  );
}

export default HooksSidebarLinks;
