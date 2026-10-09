import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

import type { Service } from "@/lib/data/services";
import { Link } from "@/i18n/navigation";
import { getIcon } from "@/lib/icon-map";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = getIcon(service.icon);
  const t = useTranslations("common");

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:bg-surface"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={`/images/services/${service.slug}.jpg`}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
        <span className="absolute right-4 top-3 font-heading text-3xl font-bold text-white/70 drop-shadow">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col px-7 pb-7">
        <div className="relative z-10 -mt-6 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/40 bg-background text-primary transition-all duration-500 group-hover:scale-110 group-hover:border-primary">
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
          {t("learnMore")} <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
