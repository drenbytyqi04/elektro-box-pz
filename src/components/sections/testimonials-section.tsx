"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/shared/section-heading";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, []);
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="section-spacing relative bg-surface/30">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading align="left" eyebrow="Client stories" title="Trusted by homeowners and businesses alike" />
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="-ml-6 flex">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="min-w-0 shrink-0 grow-0 basis-full pl-6 sm:basis-1/2 lg:basis-1/3">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-background/60 p-7">
                  <Quote className="h-7 w-7 text-primary/40" />
                  <div className="mt-4 flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <Avatar>
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-heading text-sm font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-subtle-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                "h-1.5 cursor-pointer rounded-full transition-all duration-300",
                selected === i ? "w-6 bg-primary" : "w-1.5 bg-border-strong"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
