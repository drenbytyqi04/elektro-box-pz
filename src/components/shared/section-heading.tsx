import { cn } from "@/lib/utils";
import { Reveal } from "@/components/animations/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "center", className }: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          <span className="h-px w-6 bg-primary" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance-heading max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={cn("max-w-2xl text-balance text-base leading-relaxed text-muted-foreground", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
