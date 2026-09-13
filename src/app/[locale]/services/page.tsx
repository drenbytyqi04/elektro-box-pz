import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { siteConfig } from "@/lib/constants";
import { getServices } from "@/lib/data/services";
import type { Locale } from "@/i18n/routing";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceCard } from "@/components/shared/service-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { StaggerGroup, StaggerItem } from "@/components/animations/reveal";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.services" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription", { name: siteConfig.name }),
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.services" });
  const services = getServices(locale);

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
          <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} index={index} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner title={t("notSureTitle")} description={t("notSureDescription")} />
    </>
  );
}
