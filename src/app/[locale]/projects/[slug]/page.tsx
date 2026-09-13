import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";

import { getProjects, getProjectBySlug } from "@/lib/data/projects";
import { routing, type Locale } from "@/i18n/routing";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBanner } from "@/components/shared/cta-banner";
import { ProjectCard } from "@/components/shared/project-card";
import { MediaPlaceholder } from "@/components/shared/media-placeholder";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";

const categoryIcon: Record<string, string> = {
  Residential: "House",
  Commercial: "Building2",
  "Smart Home": "Workflow",
  Security: "ShieldCheck",
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getProjects(locale).map((project) => ({ locale, slug: project.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(locale, slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProjectBySlug(locale, slug);
  if (!project) notFound();

  const t = await getTranslations({ locale, namespace: "pages.projects" });
  const tCategory = await getTranslations({ locale, namespace: "projectCategories" });
  const projects = getProjects(locale);
  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 3);
  const fallbackRelated = related.length > 0 ? related : projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={tCategory(project.category)}
        title={project.title}
        description={project.summary}
        breadcrumbs={[{ label: t("metaTitle"), href: "/projects" }, { label: project.title }]}
      />

      <section className="relative pb-24">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <Reveal className="aspect-[21/9] overflow-hidden rounded-2xl border border-border">
            <MediaPlaceholder icon={categoryIcon[project.category]} label={project.title} variant="circuit" />
          </Reveal>

          <div className="mt-10 flex flex-wrap items-center gap-6 border-b border-border pb-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> {project.location}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" /> {project.year}
            </span>
            <Badge>{tCategory(project.category)}</Badge>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="flex flex-col gap-10 lg:col-span-2">
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground">{t("theChallenge")}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{project.challenge}</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground">{t("ourSolution")}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{project.solution}</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground">{t("results")}</h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {project.results.map((result) => (
                    <li key={result} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground">{t("gallery")}</h2>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square overflow-hidden rounded-xl border border-border">
                      <MediaPlaceholder icon={categoryIcon[project.category]} variant="grid" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-surface/60 p-7">
                <h3 className="font-heading text-lg font-semibold text-foreground">{t("equipmentUsed")}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.equipment.map((eq) => (
                    <Badge key={eq} variant="outline">
                      {eq}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-surface/30">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <SectionHeading eyebrow={t("moreWorkEyebrow")} title={t("relatedTitle")} />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {fallbackRelated.map((p) => (
              <StaggerItem key={p.slug}>
                <ProjectCard project={p} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner title={t("wantResultsTitle")} />
    </>
  );
}
