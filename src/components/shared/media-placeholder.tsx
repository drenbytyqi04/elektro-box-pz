import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icon-map";

interface MediaPlaceholderProps {
  icon?: string;
  label?: string;
  className?: string;
  variant?: "grid" | "circuit" | "plain";
}

/**
 * Stylized abstract placeholder used wherever real photography/video isn't
 * available yet. Renders on-brand gradient + grid artwork instead of a
 * broken image or a stock photo that doesn't represent real project work.
 */
export function MediaPlaceholder({ icon, label, className, variant = "grid" }: MediaPlaceholderProps) {
  const Icon = icon ? getIcon(icon) : null;

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-surface via-background to-surface",
        variant === "grid" && "grid-lines",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,153,0,0.14),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,153,0,0.08),transparent_55%)]" />
      {variant === "circuit" && (
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full opacity-[0.15]"
          viewBox="0 0 400 300"
          fill="none"
        >
          <path
            d="M0 60 H120 V20 H400 M0 150 H80 V220 H250 V150 H400 M0 260 H180 V180"
            stroke="#FF9900"
            strokeWidth="1.5"
          />
          <circle cx="120" cy="60" r="4" fill="#FF9900" />
          <circle cx="250" cy="150" r="4" fill="#FF9900" />
          <circle cx="180" cy="260" r="4" fill="#FF9900" />
        </svg>
      )}
      {Icon && (
        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
            <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
          </div>
          {label && <span className="text-sm font-medium text-subtle-foreground">{label}</span>}
        </div>
      )}
    </div>
  );
}
