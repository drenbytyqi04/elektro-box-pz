import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
}

export function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pt-40">
      <div className="grid-lines absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="animate-glow-pulse absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-subtle-foreground">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" />
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-primary">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <Reveal>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-6 bg-primary" />
              {eyebrow}
            </span>
          )}
          <h1 className="text-balance-heading mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
