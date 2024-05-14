import { hooks } from "#site/content";
import { siteConfig } from "@/config/site";
import { type MetadataRoute } from "next";

const postsSitemap: MetadataRoute.Sitemap = hooks.map((hook) => ({
  url: `${process.env.HOST}/docs/${hook.slug}`,
  lastModified: hook.date
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    ...postsSitemap
  ];
}
