"use client";

import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { getServices } from "@/lib/data/services";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { StaggerGroup, staggerItem } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const services = getServices(locale);

  return (
    <section className="section-spacing relative">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={t("sections.services.eyebrow")}
          title={t("sections.services.title")}
          description={t("sections.services.description")}
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div key={service.slug} variants={staggerItem}>
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </StaggerGroup>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              {t("common.viewAllServices")} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
