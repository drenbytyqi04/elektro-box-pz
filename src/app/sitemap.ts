import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/constants";
import { routing, type Locale } from "@/i18n/routing";
import { getServices } from "@/lib/data/services";
import { getProjects } from "@/lib/data/projects";
import { getBlogPosts } from "@/lib/data/blog";

function localizedEntry(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number
): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}${path}`,
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${siteConfig.url}/${l}${path}`])
      ),
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    ...localizedEntry("", "weekly", 1),
    ...localizedEntry("/about", "monthly", 0.8),
    ...localizedEntry("/services", "monthly", 0.9),
    ...localizedEntry("/projects", "weekly", 0.8),
    ...localizedEntry("/smart-home", "monthly", 0.8),
    ...localizedEntry("/security-systems", "monthly", 0.8),
    ...localizedEntry("/blog", "weekly", 0.7),
    ...localizedEntry("/contact", "yearly", 0.9),
  ];

  const serviceRoutes: MetadataRoute.Sitemap = routing.locales.flatMap((locale: Locale) =>
    getServices(locale).map((service) => ({
      url: `${siteConfig.url}/${locale}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const projectRoutes: MetadataRoute.Sitemap = routing.locales.flatMap((locale: Locale) =>
    getProjects(locale).map((project) => ({
      url: `${siteConfig.url}/${locale}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  const blogRoutes: MetadataRoute.Sitemap = routing.locales.flatMap((locale: Locale) =>
    getBlogPosts(locale).map((post) => ({
      url: `${siteConfig.url}/${locale}/blog/${post.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    }))
  );

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}
