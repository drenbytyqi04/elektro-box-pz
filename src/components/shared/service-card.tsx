import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Service } from "@/lib/data/services";
import { getIcon } from "@/lib/icon-map";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = getIcon(service.icon);

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:bg-surface"
    >
      <div className="absolute -right-6 -top-6 font-heading text-7xl font-bold text-white/[0.03] transition-colors duration-500 group-hover:text-primary/[0.08]">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:border-primary">
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </div>

      <h3 className="relative z-10 mt-5 font-heading text-lg font-semibold text-foreground">{service.title}</h3>
      <p className="relative z-10 mt-2 text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>

      <div className="relative z-10 grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <ul className="mt-4 flex flex-col gap-1.5 border-t border-border pt-4">
            {service.benefits.slice(0, 2).map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-xs text-subtle-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 mt-5 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        Learn more <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
