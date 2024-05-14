"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type NavBarLink } from "./navbar";

export default function NavbarMenu({ links }: { links: NavBarLink[] }) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {links.map((link: NavBarLink, index: number) => (
        <div key={index}>
          <Button variant={!isActive(link.href) ? "ghost" : "secondary"} asChild>
            <Link href={link.href}>{link.title}</Link>
          </Button>
        </div>
      ))}
    </>
  );
}
