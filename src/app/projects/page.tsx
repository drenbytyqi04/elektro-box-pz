import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";
import { PageHero } from "@/components/shared/page-hero";
import { ProjectsFilterGrid } from "@/components/shared/projects-filter-grid";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Projects",
  description: `Residential, commercial, smart home and security projects delivered by ${siteConfig.name} across Kosovo.`,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Projects engineered to be lived in"
        description="Browse residential, commercial, smart home and security projects across Kosovo."
        breadcrumbs={[{ label: "Projects" }]}
      />

      <section className="relative pb-24">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <ProjectsFilterGrid />
        </div>
      </section>

      <CtaBanner title="Have a project in mind?" description="Let's discuss the scope and get you a fixed quote." />
    </>
  );
}
