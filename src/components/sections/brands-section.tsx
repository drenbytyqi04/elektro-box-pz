import { brands } from "@/lib/data/brands";
import { SectionHeading } from "@/components/shared/section-heading";

export function BrandsSection() {
  const loop = [...brands, ...brands];

  return (
    <section className="section-spacing relative overflow-hidden border-y border-border">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Trusted hardware" title="Brands we install and integrate" />
      </div>

      <div className="relative mt-14 flex flex-col gap-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent sm:w-48" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent sm:w-48" />

        <div className="flex w-max animate-marquee gap-4 [animation-play-state:running] hover:[animation-play-state:paused]">
          {loop.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex h-24 w-56 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface/50 px-6 transition-colors hover:border-primary/40"
            >
              <span className="font-heading text-xl font-bold tracking-tight text-foreground/70">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
