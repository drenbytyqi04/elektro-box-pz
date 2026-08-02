import type { Metadata } from "next";
import { Check } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { getServiceBySlug } from "@/lib/data/services";
import { smartHomeHotspots } from "@/lib/data/site-content";
import { getIcon } from "@/lib/icon-map";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { SmartHomeShowcase } from "@/components/sections/smart-home-showcase";
import { CtaBanner } from "@/components/shared/cta-banner";
import { StaggerGroup, StaggerItem } from "@/components/animations/reveal";

export const metadata: Metadata = {
  title: "Smart Home Automation",
  description: `Control4 and Lutron powered whole-home automation — lighting, climate, security and entertainment unified in one system, by ${siteConfig.name}.`,
};

export default function SmartHomePage() {
  const service = getServiceBySlug("smart-home-automation");

  return (
    <>
      <PageHero
        eyebrow="Smart Home"
        title="One system. Every room. Zero friction."
        description="We design Control4 and Lutron automation ecosystems that feel invisible — lights that anticipate you, climate that adjusts itself, and one app that controls it all."
        breadcrumbs={[{ label: "Smart Home" }]}
      />

      <SmartHomeShowcase />

      <section className="section-spacing">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="What's included"
            title="Six systems, orchestrated together"
            description="Every category below runs on the same platform — no separate apps, no compromises between them."
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
              <SectionHeading align="left" eyebrow="Why it matters" title="Built on platforms that actually last" />
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

      <CtaBanner
        title="See what smart home automation could look like in your space"
        description="Free consultation — we'll walk your property and design a system around how you actually live."
      />
    </>
  );
}
