import { useTranslations } from "next-intl";
import { ArrowUpRight, MapPin } from "lucide-react";

import type { Project } from "@/lib/data/projects";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { MediaPlaceholder } from "@/components/shared/media-placeholder";

const categoryIcon: Record<Project["category"], string> = {
  Residential: "House",
  Commercial: "Building2",
  "Smart Home": "Workflow",
  Security: "ShieldCheck",
};

export function ProjectCard({ project }: { project: Project }) {
  const tCategory = useTranslations("projectCategories");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
          <MediaPlaceholder icon={categoryIcon[project.category]} variant="circuit" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-80" />
        <Badge className="absolute left-4 top-4" variant="solid">
          {tCategory(project.category)}
        </Badge>
        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full glass text-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-xs text-subtle-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {project.location} · {project.year}
        </div>
        <h3 className="mt-2 font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
      </div>
    </Link>
  );
}
