import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { getServiceBySlug } from "@/lib/data/services";
import { getSmartHomeHotspots } from "@/lib/data/site-content";
import type { Locale } from "@/i18n/routing";
import { getIcon } from "@/lib/icon-map";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { SmartHomeShowcase } from "@/components/sections/smart-home-showcase";
import { CtaBanner } from "@/components/shared/cta-banner";
import { StaggerGroup, StaggerItem } from "@/components/animations/reveal";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.smartHome" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription", { name: siteConfig.name }),
  };
}

export default async function SmartHomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.smartHome" });
  const service = getServiceBySlug(locale, "smart-home-automation");
  const smartHomeHotspots = getSmartHomeHotspots(locale);

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        breadcrumbs={[{ label: t("metaTitle") }]}
      />

      <SmartHomeShowcase />

      <section className="section-spacing">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow={t("includedEyebrow")}
            title={t("includedTitle")}
            description={t("includedDescription")}
          />
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {smartHomeHotspots.map((hotspot) => {
              const Icon = getIcon(hotspot.icon);
              return (
                <StaggerItem key={hotspot.id} className="rounded-2xl border border-border bg-surface/60 p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{hotspot.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{hotspot.description}</p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {service && (
        <section className="section-spacing bg-surface/30">
          <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <SectionHeading align="left" eyebrow={t("whyEyebrow")} title={t("whyTitle")} />
              <div>
                <ul className="flex flex-col gap-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <CtaBanner title={t("ctaTitle")} description={t("ctaDescription")} />
    </>
  );
}
