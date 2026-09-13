import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { getServices } from "@/lib/data/services";
import type { Locale } from "@/i18n/routing";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { MediaPlaceholder } from "@/components/shared/media-placeholder";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animations/reveal";

const securitySlugs = ["security-camera-systems", "cctv", "access-control"];

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.security" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription", { name: siteConfig.name }),
  };
}

export default async function SecuritySystemsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.security" });
  const services = getServices(locale);
  const securityServices = services.filter((s) => securitySlugs.includes(s.slug));
  const features: string[] = t.raw("features");

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
          <Reveal className="aspect-[21/9] overflow-hidden rounded-2xl border border-border">
            <MediaPlaceholder icon="Camera" label={t("monitoredLabel")} variant="circuit" />
          </Reveal>

          <div className="mt-16">
            <SectionHeading eyebrow={t("coverageEyebrow")} title={t("coverageTitle")} />
            <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {securityServices.map((service, index) => (
                <StaggerItem key={service.slug}>
                  <ServiceCard service={service} index={index} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 rounded-3xl border border-border bg-surface/60 p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{t("whyAiEyebrow")}</span>
              <h3 className="mt-3 font-heading text-2xl font-bold text-foreground sm:text-3xl">{t("whyAiTitle")}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t("whyAiDescription")}</p>
            </div>
            <ul className="flex flex-col gap-4">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner title={t("ctaTitle")} description={t("ctaDescription")} />
    </>
  );
}
