import { useTranslations } from "next-intl";
import { ArrowRight, Phone } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export function CtaBanner({ title, description }: CtaBannerProps) {
  const t = useTranslations("common");
  const resolvedTitle = title ?? t("readyToStart");
  const resolvedDescription = description ?? t("readyToStartDescription");

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <Reveal className="glass-strong relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
          <div className="grid-lines absolute inset-0 opacity-30" />
          <div className="animate-glow-pulse absolute left-1/2 top-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />
          <div className="relative">
            <h2 className="text-balance-heading mx-auto max-w-xl font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {resolvedTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
              {resolvedDescription}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="glow-primary">
                <Link href="/contact">
                  {t("requestQuote")} <ArrowRight className="h-4 w-4" />
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
