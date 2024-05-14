import ResizableDocs from "./_components/resizable-docs";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="block pt-5 lg:hidden">{children}</div>
      <div className="hidden lg:block">
        <ResizableDocs>{children}</ResizableDocs>
      </div>
    </main>
  );
}
