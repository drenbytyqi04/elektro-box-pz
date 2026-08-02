import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/shared/contact-form";
import { ContactInfoRow } from "@/components/shared/contact-info-row";
import { Reveal } from "@/components/animations/reveal";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="section-spacing relative">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's engineer your next project"
          description="Tell us what you're building — we'll respond with a clear scope and fixed quote."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
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
              <p className="mt-4 rounded-xl border border-primary/20 bg-primary/5 px-3 py-2.5 text-xs text-primary">
                24/7 emergency line for maintenance plan clients: {siteConfig.emergencyPhone}
              </p>
            </div>

            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Open full contact page <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-border bg-surface/60 p-7 lg:col-span-3 lg:p-9">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
