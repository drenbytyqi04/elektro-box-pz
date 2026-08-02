import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";
import { team } from "@/lib/data/team";
import { whyChooseUs } from "@/lib/data/site-content";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animations/reveal";
import { MediaPlaceholder } from "@/components/shared/media-placeholder";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { Target, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `The story, mission and engineering team behind ${siteConfig.name} — Prishtina's certified electrical and smart home integrator.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Electro Box"
        title="Engineering trust into every circuit"
        description={`Founded in ${siteConfig.founded}, we've grown from a two-person electrical crew into Prishtina's certified engineering team for electrical, smart home and security systems.`}
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="relative pb-20">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">
          <Reveal direction="left" className="aspect-[4/5] overflow-hidden rounded-3xl border border-border">
            <MediaPlaceholder icon="Building2" label="Electro Box team on site" variant="circuit" />
          </Reveal>

          <div>
            <Reveal>
              <h2 className="text-balance-heading font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Our story
              </h2>
              <p className="mt-5 text-balance text-base leading-relaxed text-muted-foreground">
                Electro Box LLC started with a simple frustration: too many electrical contractors treated
                safety and design as separate concerns. We built our practice around the opposite idea — that
                the safest systems and the most elegant ones should be the same system.
              </p>
              <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground">
                Today our certified engineers handle everything from full residential rewiring to enterprise
                CCTV rollouts and whole-home Control4 automation, always to the same standard: engineered
                first, beautiful by design.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {siteConfig.stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-subtle-foreground sm:text-sm">{stat.label}</p>
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
              <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Deliver electrical, automation and security systems engineered to the highest safety
                standard — without compromising on design, reliability, or the experience of living with
                them every day.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-2xl border border-border bg-background/60 p-8">
              <Eye className="h-7 w-7 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To be the region&apos;s benchmark for premium smart-building engineering — trusted across
                Kosovo the way Control4 and Lutron are trusted globally.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Our standards"
            title="Six commitments behind every project"
            description="The same discipline whether it's a single room retrofit or a full commercial rollout."
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
          <SectionHeading
            eyebrow="Our team"
            title="Licensed engineers, not subcontractors"
            description="Every technician on site is a directly employed, certified member of our team."
          />
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
