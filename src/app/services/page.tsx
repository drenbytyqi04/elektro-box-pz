import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";
import { services } from "@/lib/data/services";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceCard } from "@/components/shared/service-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { StaggerGroup, StaggerItem } from "@/components/animations/reveal";

export const metadata: Metadata = {
  title: "Services",
  description: `Electrical installations, smart home automation, security systems and more — explore every service ${siteConfig.name} provides.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Every system a modern building needs"
        description="From the electrical panel to the app on your phone — engineered end-to-end by one certified team."
        breadcrumbs={[{ label: "Services" }]}
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

      <CtaBanner
        title="Not sure which service you need?"
        description="Tell us about your property and goals — we'll recommend the right scope, free of charge."
      />
    </>
  );
}
