import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Target, Eye } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { getTeam } from "@/lib/data/team";
import { getWhyChooseUs } from "@/lib/data/site-content";
import type { Locale } from "@/i18n/routing";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animations/reveal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AnimatedCounter } from "@/components/animations/animated-counter";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription", { name: siteConfig.name }),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.about" });
  const tStats = await getTranslations({ locale, namespace: "stats" });
  const team = getTeam(locale);
  const whyChooseUs = getWhyChooseUs(locale);

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description", { founded: siteConfig.founded })}
        breadcrumbs={[{ label: t("metaTitle") }]}
      />

      <section className="relative pb-20">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">
          <Reveal direction="left" className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/about-hq.jpg"
              alt={t("teamOnSite")}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <div>
            <Reveal>
              <h2 className="text-balance-heading font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {t("ourStory")}
              </h2>
              <p className="mt-5 text-balance text-base leading-relaxed text-muted-foreground">{t("storyP1")}</p>
              <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground">{t("storyP2")}</p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {siteConfig.stats.slice(0, 3).map((stat) => (
                <div key={stat.labelKey}>
                  <p className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-subtle-foreground sm:text-sm">{tStats(stat.labelKey)}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-surface/30">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal className="rounded-2xl border border-border bg-background/60 p-8">
              <Target className="h-7 w-7 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">{t("missionTitle")}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t("mission")}</p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-2xl border border-border bg-background/60 p-8">
              <Eye className="h-7 w-7 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">{t("visionTitle")}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t("vision")}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow={t("standardsEyebrow")}
            title={t("standardsTitle")}
            description={t("standardsDescription")}
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-surface/60 p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{item.year}</span>
                <h3 className="mt-2 font-heading text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-surface/30">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <SectionHeading eyebrow={t("teamEyebrow")} title={t("teamTitle")} description={t("teamDescription")} />
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <StaggerItem key={member.name} className="rounded-2xl border border-border bg-background/60 p-7 text-center">
                <Avatar className="mx-auto h-20 w-20">
                  <AvatarFallback className="text-lg">{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{member.name}</h3>
                <p className="mt-1 text-xs font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
