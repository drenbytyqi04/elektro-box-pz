"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Plus, House } from "lucide-react";

import { getSmartHomeHotspots } from "@/lib/data/site-content";
import type { Locale } from "@/i18n/routing";
import { getIcon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

export function SmartHomeShowcase() {
  const [open, setOpen] = useState<string | null>(null);
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const smartHomeHotspots = getSmartHomeHotspots(locale);

  return (
    <section className="section-spacing relative overflow-hidden bg-surface/30">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={t("sections.smartHomeShowcase.eyebrow")}
          title={t("sections.smartHomeShowcase.title")}
          description={t("sections.smartHomeShowcase.description")}
        />

        <Reveal className="relative mx-auto mt-14 aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-background">
          <div className="grid-lines absolute inset-0 opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,153,0,0.12),transparent_65%)]" />

          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
            <House className="h-9 w-9 text-primary" strokeWidth={1.5} />
          </div>
          <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 animate-glow-pulse rounded-full border border-primary/20" />

          {smartHomeHotspots.map((hotspot) => {
            const Icon = getIcon(hotspot.icon);
            const isOpen = open === hotspot.id;
            return (
              <Popover key={hotspot.id} open={isOpen} onOpenChange={(v) => setOpen(v ? hotspot.id : null)}>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    style={{ top: hotspot.position.top, left: hotspot.position.left }}
                    className={cn(
                      "absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border transition-all duration-300",
                      isOpen
                        ? "border-primary bg-primary text-primary-foreground scale-110"
                        : "glass-strong border-primary/40 text-primary hover:scale-110 hover:border-primary"
                    )}
                    aria-label={hotspot.label}
                  >
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                    {!isOpen && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" style={{ animationDuration: "2.5s" }} />
                    )}
                  </button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex items-center gap-2.5">
                    <Plus className="h-4 w-4 rotate-45 text-primary" />
                    <h4 className="font-heading text-sm font-semibold text-foreground">{hotspot.label}</h4>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{hotspot.description}</p>
                </PopoverContent>
              </Popover>
            );
          })}
        </Reveal>

        <p className="mt-6 text-center text-xs text-subtle-foreground">{t("common.tapDiagram")}</p>
      </div>
    </section>
  );
}
