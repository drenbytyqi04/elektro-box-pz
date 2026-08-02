import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";

import { services, getServiceBySlug } from "@/lib/data/services";
import { getIcon } from "@/lib/icon-map";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { CtaBanner } from "@/components/shared/cta-banner";
import { ServiceCard } from "@/components/shared/service-card";
import { MediaPlaceholder } from "@/components/shared/media-placeholder";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = getIcon(service.icon);
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.heroTagline}
        title={service.title}
        description={service.description}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
      />

      <section className="relative pb-24">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Reveal className="aspect-video overflow-hidden rounded-2xl border border-border">
                <MediaPlaceholder icon={service.icon} label={service.title} variant="circuit" />
              </Reveal>

              <div className="mt-14">
                <SectionHeading align="left" eyebrow="Our process" title="How we deliver this service" />
                <div className="relative mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {service.process.map((step, i) => (
                    <div key={step.title} className="relative rounded-2xl border border-border bg-surface/60 p-6">
                      <span className="font-heading text-3xl font-bold text-primary/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-3 font-heading text-base font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-14">
                <SectionHeading align="left" eyebrow="Gallery" title="A closer look" />
                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square overflow-hidden rounded-xl border border-border">
                      <MediaPlaceholder icon={service.icon} variant="grid" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-14">
                <SectionHeading align="left" eyebrow="FAQ" title="Common questions" />
                <div className="mt-10">
                  <FaqAccordion faqs={service.faqs} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-surface/60 p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">Key benefits</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-surface/60 p-7">
                <h3 className="font-heading text-lg font-semibold text-foreground">Hardware we install</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.equipment.map((eq) => (
                    <Badge key={eq} variant="outline">
                      {eq}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-surface/30">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Related" title="Other services you might need" />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {related.map((s) => (
              <StaggerItem key={s.slug}>
                <ServiceCard service={s} index={services.indexOf(s)} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner title={`Ready to start your ${service.title.toLowerCase()} project?`} />
    </>
  );
}
