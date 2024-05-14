import { hooks } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import React from "react";
import "@/styles/mdx.css";
import DocHeader from "../_components/doc-header";
import { type Metadata } from "next";
import HookStatistics from "../_components/hook-statistics";
import { getHookByName } from "@/server/db/queries";

type HookPageProps = {
  params: {
    slug: string[];
  };
};

async function getHookBySlug(params: HookPageProps["params"]) {
  const slug = params.slug.join("/");
  const hook = hooks.find((hook) => hook.slugAsParams === slug);

  return hook;
}

export async function generateMetadata({ params }: HookPageProps): Promise<Metadata> {
  const hook = await getHookBySlug(params);

  if (!hook) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", hook.title);
  // ogSearchParams.set("description", hook.description);

  return {
    title: hook.title,
    description: hook.description,
    openGraph: {
      title: hook.title,
      description: hook.description,
      type: "website",
      url: hook.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: hook.title
        }
      ]
    }
  };
}

export async function generateStaticParams(): Promise<HookPageProps["params"][]> {
  return hooks.map((hook) => ({ slug: hook.slugAsParams.split("/") }));
}

async function HookDocsIndex({ params }: HookPageProps): Promise<React.JSX.Element> {
  const hook = await getHookBySlug(params);
  const hookId = await getHookByName(hook!.title);

  if (!hook || !hook.published) {
    notFound();
  }

  return (
    <article className="relative">
      <DocHeader title={hook.title} description={hook.description} />
      {hookId && <HookStatistics hookId={hookId.id} />}
      <MDXContent code={hook.body} />
      {hookId && <HookStatistics hookId={hookId.id} />}
    </article>
  );
}

export default HookDocsIndex;
