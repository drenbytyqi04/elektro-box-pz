import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { generalFaqs } from "@/lib/data/site-content";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/shared/contact-form";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { ContactInfoRow } from "@/components/shared/contact-info-row";
import { Reveal } from "@/components/animations/reveal";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a free quote from ${siteConfig.name} — electrical, smart home and security engineering in Prishtina, Kosovo.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's engineer your next project"
        description="Tell us what you're building — service, budget and timeline — and we'll respond with a clear scope and fixed quote within one business day."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="relative pb-24">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <Reveal direction="left" className="flex flex-col gap-6 lg:col-span-2">
              <div className="flex flex-col gap-5 rounded-2xl border border-border bg-surface/60 p-7">
                <ContactInfoRow icon={Phone} label="Call us" value={siteConfig.phone} href={siteConfig.phoneHref} />
                <ContactInfoRow icon={WhatsAppIcon} label="WhatsApp" value="Message us instantly" href={siteConfig.whatsappHref} external />
                <ContactInfoRow icon={Mail} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
                <ContactInfoRow icon={MapPin} label="Visit" value={siteConfig.addressFull} />
              </div>

              <div className="rounded-2xl border border-border bg-surface/60 p-7">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4.5 w-4.5 text-primary" />
                  <h3 className="font-heading text-sm font-semibold text-foreground">Business Hours</h3>
                </div>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {siteConfig.businessHours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium text-foreground">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-6">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">24/7 Emergency Line</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Maintenance plan clients &amp; critical safety issues:{" "}
                    <a href={siteConfig.phoneHref} className="font-medium text-primary hover:underline">
                      {siteConfig.emergencyPhone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="aspect-video overflow-hidden rounded-2xl border border-border grayscale invert-0">
                <iframe
                  title="Electro Box LLC location"
                  src={siteConfig.mapEmbedSrc}
                  className="h-full w-full opacity-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="rounded-2xl border border-border bg-surface/60 p-7 lg:col-span-3 lg:p-10">
              <h2 className="font-heading text-2xl font-bold text-foreground">Request a free quote</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                The more detail you share, the faster and more accurate your quote will be.
              </p>
              <div className="mt-8">
                <ContactForm extended />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-surface/30">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-12">
            <FaqAccordion faqs={generalFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
