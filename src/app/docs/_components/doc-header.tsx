import BreadcrumbMenu from "@/components/breadcrumb-menu";
import React from "react";

type DocHeaderProps = {
  title: string;
  description: string;
};

export default function DocHeader({ title, description }: DocHeaderProps) {
  return (
    <>
      <BreadcrumbMenu pageName={title} />
      <h1 className="text-gradient text-3xl font-bold lg:text-5xl">{title}</h1>
      <h3 className="mt-5 text-muted-foreground lg:text-lg">{description}</h3>
    </>
  );
}
