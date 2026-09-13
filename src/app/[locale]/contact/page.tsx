import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";

import { siteConfig, businessHours } from "@/lib/constants";
import { getGeneralFaqs } from "@/lib/data/site-content";
import type { Locale } from "@/i18n/routing";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/shared/contact-form";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { ContactInfoRow } from "@/components/shared/contact-info-row";
import { Reveal } from "@/components/animations/reveal";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.contact" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription", { name: siteConfig.name }),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.contact" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const tHours = await getTranslations({ locale, namespace: "businessHours" });
  const generalFaqs = getGeneralFaqs(locale);

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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <Reveal direction="left" className="flex flex-col gap-6 lg:col-span-2">
              <div className="flex flex-col gap-5 rounded-2xl border border-border bg-surface/60 p-7">
                <ContactInfoRow icon={Phone} label={tCommon("callUs")} value={siteConfig.phone} href={siteConfig.phoneHref} />
                <ContactInfoRow
                  icon={WhatsAppIcon}
                  label={tCommon("whatsapp")}
                  value={tCommon("messageInstantly")}
                  href={siteConfig.whatsappHref}
                  external
                />
                <ContactInfoRow icon={Mail} label={tCommon("email")} value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
                <ContactInfoRow icon={MapPin} label={tCommon("visit")} value={siteConfig.addressFull} />
              </div>

              <div className="rounded-2xl border border-border bg-surface/60 p-7">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4.5 w-4.5 text-primary" />
                  <h3 className="font-heading text-sm font-semibold text-foreground">{tCommon("businessHours")}</h3>
                </div>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {businessHours.map((h) => (
                    <li key={h.dayKey} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{tHours(h.dayKey)}</span>
                      <span className="font-medium text-foreground">
                        {"hoursKey" in h ? tHours(h.hoursKey) : h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-xl border border-primary/20 bg-primary/5 px-3 py-2.5 text-xs text-primary">
                  {t("emergencyDescription")} {siteConfig.emergencyPhone}
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-6">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">{t("emergencyTitle")}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t("emergencyDescription")}{" "}
                    <a href={siteConfig.phoneHref} className="font-medium text-primary hover:underline">
                      {siteConfig.emergencyPhone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="aspect-video overflow-hidden rounded-2xl border border-border grayscale invert-0">
                <iframe
                  title={t("mapTitle")}
                  src={siteConfig.mapEmbedSrc}
                  className="h-full w-full opacity-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="rounded-2xl border border-border bg-surface/60 p-7 lg:col-span-3 lg:p-10">
              <h2 className="font-heading text-2xl font-bold text-foreground">{t("requestFreeQuote")}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t("formIntro")}</p>
              <div className="mt-8">
                <ContactForm extended />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-surface/30">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
          <SectionHeading eyebrow={t("faqEyebrow")} title={t("faqTitle")} />
          <div className="mt-12">
            <FaqAccordion faqs={generalFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
