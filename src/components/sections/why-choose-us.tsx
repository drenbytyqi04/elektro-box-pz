"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Cpu, Clock, BadgeCheck, GraduationCap } from "lucide-react";

import { getWhyChooseUs } from "@/lib/data/site-content";
import type { Locale } from "@/i18n/routing";
import { SectionHeading } from "@/components/shared/section-heading";

const icons = [GraduationCap, Award, Cpu, Clock, ShieldCheck, BadgeCheck];

export function WhyChooseUs() {
  const t = useTranslations("sections.whyChooseUs");
  const locale = useLocale() as Locale;
  const whyChooseUs = getWhyChooseUs(locale);

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />

          <div className="flex flex-col gap-10 lg:gap-0">
            {whyChooseUs.map((item, index) => {
              const Icon = icons[index % icons.length];
              const isEven = index % 2 === 0;

              return (
                <div key={item.title} className="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:py-8">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`${isEven ? "lg:col-start-1 lg:text-right" : "lg:col-start-2"}`}
                  >
                    <div className={`flex items-center gap-4 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary">{item.year}</span>
                        <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </motion.div>

                  <div className="absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
