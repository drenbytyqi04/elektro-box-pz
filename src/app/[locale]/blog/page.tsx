import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { siteConfig } from "@/lib/constants";
import { getBlogPosts } from "@/lib/data/blog";
import type { Locale } from "@/i18n/routing";
import { PageHero } from "@/components/shared/page-hero";
import { BlogCard } from "@/components/shared/blog-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { StaggerGroup, StaggerItem } from "@/components/animations/reveal";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.blog" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription", { name: siteConfig.name }),
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.blog" });
  const blogPosts = getBlogPosts(locale);

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        breadcrumbs={[{ label: t("metaTitle") }]}
      />

      <section className="relative pb-24">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
