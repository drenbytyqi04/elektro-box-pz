import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { siteConfig } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";
import { PageHero } from "@/components/shared/page-hero";
import { ProjectsFilterGrid } from "@/components/shared/projects-filter-grid";
import { CtaBanner } from "@/components/shared/cta-banner";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.projects" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription", { name: siteConfig.name }),
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.projects" });

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
          <ProjectsFilterGrid />
        </div>
      </section>

      <CtaBanner title={t("haveProjectTitle")} description={t("haveProjectDescription")} />
    </>
  );
}
