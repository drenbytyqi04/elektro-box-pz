"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { processSteps } from "@/lib/data/site-content";
import { SectionHeading } from "@/components/shared/section-heading";

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (!lineRef.current || !containerRef.current) return;

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );

      const nodes = gsap.utils.toArray<HTMLElement>(".process-node");
      nodes.forEach((node) => {
        gsap.fromTo(
          node,
          { opacity: 0, y: 24, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: node,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-spacing relative">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="How we work"
          title="A process built to remove surprises"
          description="Five stages, one point of contact, from first call to years of ongoing support."
        />

        <div ref={containerRef} className="relative mt-20">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
          <div
            ref={lineRef}
            className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-primary md:block"
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="process-node relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background font-heading text-sm font-bold text-primary">
                  {step.step}
                </div>
                <h3 className="mt-5 font-heading text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
