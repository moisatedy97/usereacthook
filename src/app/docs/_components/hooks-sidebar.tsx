import { type NavItem } from "@/config/docs";
import React from "react";
import HooksSidebarLinks from "./hooks-sidebar-links";

function HooksSidebar({ items }: { items: NavItem[] }): React.JSX.Element | undefined {
  return (
    <div className="flex h-screen flex-col gap-y-3 overflow-y-auto">
      <HooksSidebarLinks items={items} />
    </div>
  );
}

export default HooksSidebar;
