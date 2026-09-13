"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

import { getProjects, projectCategories, type ProjectCategory } from "@/lib/data/projects";
import type { Locale } from "@/i18n/routing";
import { ProjectCard } from "@/components/shared/project-card";
import { cn } from "@/lib/utils";

export function ProjectsFilterGrid() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const t = useTranslations("projectCategories");
  const locale = useLocale() as Locale;
  const projects = getProjects(locale);
  const displayed = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
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
            {t(cat)}
          </button>
        ))}
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
    </div>
  );
}
