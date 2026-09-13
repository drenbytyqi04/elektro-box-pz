import { Zap } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5 focus-visible:outline-none", className)}
      aria-label="Electro Box LLC — home"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_24px_-4px_rgba(255,153,0,0.7)]">
        <Zap className="h-5 w-5 text-primary" fill="currentColor" strokeWidth={0} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-base font-bold tracking-tight text-foreground">
          ELECTRO<span className="text-primary">BOX</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-subtle-foreground">
          Smart Systems
        </span>
      </span>
    </Link>
  );
}
