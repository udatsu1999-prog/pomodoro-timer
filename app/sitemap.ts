import type { MetadataRoute } from "next";
import { results } from "@/data/results";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/diagnosis",
    "/services",
    "/about",
    "/privacy",
    "/disclaimer",
    "/ads",
    "/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const resultEntries: MetadataRoute.Sitemap = results.map((result) => ({
    url: `${siteConfig.url}/result/${result.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...resultEntries];
}
