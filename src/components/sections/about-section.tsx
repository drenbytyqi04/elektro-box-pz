import { useTranslations } from "next-intl";
import { Target, Eye, ArrowRight } from "lucide-react";
import Image from "next/image";

import { siteConfig } from "@/lib/constants";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const t = useTranslations();

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">
        <Reveal direction="left" className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/about-hq.jpg"
              alt="Electro Box HQ — Prishtina"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="glass-strong absolute -bottom-6 -right-6 hidden w-56 rounded-2xl p-5 sm:block">
            <p className="font-heading text-3xl font-bold text-primary">
              {new Date().getFullYear() - siteConfig.founded}
              {t("sections.about.yearsSuffix")}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{t("sections.about.yearsLabel")}</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-6 bg-primary" />
              {t("sections.about.eyebrow")}
            </span>
            <h2 className="text-balance-heading mt-4 font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {t("sections.about.title")}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-balance text-base leading-relaxed text-muted-foreground">
              {t("sections.about.story", { founded: siteConfig.founded })}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <Target className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-3 font-heading text-base font-semibold text-foreground">{t("sections.about.missionTitle")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t("sections.about.mission")}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <Eye className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-3 font-heading text-base font-semibold text-foreground">{t("sections.about.visionTitle")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t("sections.about.vision")}</p>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="mt-8">
            <Button asChild variant="outline">
              <Link href="/about">
                {t("sections.about.meetTeam")} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
