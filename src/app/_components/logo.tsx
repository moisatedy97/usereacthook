import { siteConfig } from "@/config/site";
import Link from "next/link";
import LogoAnimated from "./logo-animated";

export default function logo() {
  return (
    <div className="flex flex-1 items-center gap-2">
      <div>
        <LogoAnimated type={"navbar"} />
      </div>
      <Link href={"/"}>
        <h3 className="text-gradient text-2xl font-bold">{siteConfig.title}</h3>
      </Link>
    </div>
  );
}
