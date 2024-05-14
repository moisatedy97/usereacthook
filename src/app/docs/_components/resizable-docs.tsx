import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import React from "react";
import HooksSidebar from "./hooks-sidebar";
import { docsConfig } from "@/config/docs";

function ResizibleDocs({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={25} className="min-w-64 pt-5">
        <HooksSidebar items={docsConfig} />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75} className="min-w-80 pl-5 pt-5">
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default ResizibleDocs;
