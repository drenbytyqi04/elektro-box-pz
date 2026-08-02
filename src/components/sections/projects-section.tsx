"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { projects, projectCategories, type ProjectCategory } from "@/lib/data/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { BeforeAfterSlider } from "@/components/shared/before-after-slider";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const displayed =
    filter === "All"
      ? projects.filter((p) => p.featured).concat(projects.filter((p) => !p.featured)).slice(0, 3)
      : projects.filter((p) => p.category === filter).slice(0, 3);

  return (
    <section className="section-spacing relative bg-surface/30">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our work"
            title="Projects engineered to be lived in, not just installed"
            className="lg:max-w-xl"
          />
          <div className="flex flex-wrap justify-center gap-2">
            {(["All", ...projectCategories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "cursor-pointer rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300",
                  filter === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border-strong text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {displayed.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        <Reveal className="mt-16 grid grid-cols-1 items-center gap-10 rounded-3xl border border-border bg-background/40 p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Real transformation</span>
            <h3 className="mt-3 font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Drag to see the difference
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Outdated panels and exposed wiring become clean, code-compliant installations — engineered to
              last and disappear into the architecture.
            </p>
          </div>
          <BeforeAfterSlider />
        </Reveal>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
