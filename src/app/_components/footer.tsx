"use client";

import Icons from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container bottom-0 flex items-center gap-4 py-5">
      <div>
        <Icons />
      </div>
      <p className="ml-auto text-sm text-muted-foreground">
        <span className="text-gradient">useReactHooks</span>
        {` | © ${year}`}
      </p>
    </footer>
  );
}
