import type { Metadata } from "next";
import { Check } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { services } from "@/lib/data/services";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { MediaPlaceholder } from "@/components/shared/media-placeholder";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animations/reveal";

export const metadata: Metadata = {
  title: "Security Systems",
  description: `AI-powered CCTV, access control and video intercom systems monitored from anywhere — engineered by ${siteConfig.name}.`,
};

const securitySlugs = ["security-camera-systems", "cctv", "access-control"];

export default function SecuritySystemsPage() {
  const securityServices = services.filter((s) => securitySlugs.includes(s.slug));

  return (
    <>
      <PageHero
        eyebrow="Security"
        title="See everything. Miss nothing."
        description="AI-powered surveillance, access control and video intercoms — monitored from anywhere, engineered to actually catch what matters."
        breadcrumbs={[{ label: "Security Systems" }]}
      />

      <section className="relative pb-24">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <Reveal className="aspect-[21/9] overflow-hidden rounded-2xl border border-border">
            <MediaPlaceholder icon="Camera" label="24/7 AI-monitored security" variant="circuit" />
          </Reveal>

          <div className="mt-16">
            <SectionHeading eyebrow="Coverage" title="Three layers of protection" />
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
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Why AI detection</span>
              <h3 className="mt-3 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Alerts that actually mean something
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Traditional motion sensors flag everything — passing cars, shadows, blowing leaves. Our
                Hikvision and Ajax systems classify what they see, so you only get alerted about people and
                vehicles that matter.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {[
                "Person & vehicle AI classification",
                "License plate recognition on driveways & gates",
                "Cloud + local redundant recording",
                "Two-factor secured mobile access",
                "Optional 24/7 professional monitoring",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Protect what matters most"
        description="Free security assessment — we'll identify blind spots and recommend the right coverage."
      />
    </>
  );
}
