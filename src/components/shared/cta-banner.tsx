import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export function CtaBanner({
  title = "Ready to start your project?",
  description = "Tell us what you're building — we'll respond with a clear scope and fixed quote within one business day.",
}: CtaBannerProps) {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <Reveal className="glass-strong relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
          <div className="grid-lines absolute inset-0 opacity-30" />
          <div className="animate-glow-pulse absolute left-1/2 top-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />
          <div className="relative">
            <h2 className="text-balance-heading mx-auto max-w-xl font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="glow-primary">
                <Link href="/contact">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="glass">
                <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4" /> {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
