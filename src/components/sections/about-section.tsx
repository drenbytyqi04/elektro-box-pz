import Link from "next/link";
import { Target, Eye, ArrowRight } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/shared/media-placeholder";

export function AboutSection() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">
        <Reveal direction="left" className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border">
            <MediaPlaceholder icon="Building2" label="Electro Box HQ — Prishtina" variant="circuit" />
          </div>
          <div className="glass-strong absolute -bottom-6 -right-6 hidden w-56 rounded-2xl p-5 sm:block">
            <p className="font-heading text-3xl font-bold text-primary">
              {new Date().getFullYear() - siteConfig.founded}+
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Years engineering smart, safe electrical systems</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-6 bg-primary" />
              About Electro Box
            </span>
            <h2 className="text-balance-heading mt-4 font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Engineering trust into every circuit
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-balance text-base leading-relaxed text-muted-foreground">
              Founded in {siteConfig.founded}, Electro Box LLC began as a two-person electrical crew in
              Prishtina and grew into a certified engineering team trusted with residential, commercial and
              industrial projects across Kosovo. We don&apos;t just wire buildings — we design the systems
              that make modern life feel effortless: lighting that anticipates you, security that never
              sleeps, and networks that simply work.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <Target className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-3 font-heading text-base font-semibold text-foreground">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Deliver electrical and automation systems engineered to the highest safety standard, without
                compromising design.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <Eye className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-3 font-heading text-base font-semibold text-foreground">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                To be the region&apos;s benchmark for premium smart-building engineering — trusted the way
                Control4 and Lutron are trusted globally.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="mt-8">
            <Button asChild variant="outline">
              <Link href="/about">
                Meet the team <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
