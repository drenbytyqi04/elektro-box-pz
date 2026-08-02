"use client";

import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ArrowRight } from "lucide-react";

import { services } from "@/lib/data/services";
import { getIcon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

export function MegaMenu() {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger className="group flex cursor-pointer items-center gap-1 rounded-full px-1 py-2 text-sm font-medium text-foreground/80 outline-none transition-colors hover:text-foreground data-[state=open]:text-primary">
        Services
        <svg
          aria-hidden
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className="mt-px transition-transform duration-300 group-data-[state=open]:rotate-180"
        >
          <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </NavigationMenu.Trigger>
      <NavigationMenu.Content
        className={cn(
          "absolute left-1/2 top-full w-screen max-w-4xl -translate-x-1/2 pt-4",
          "data-[motion=from-start]:animate-in data-[motion=from-start]:fade-in-0 data-[motion=from-start]:slide-in-from-top-2",
          "data-[motion=to-start]:animate-out data-[motion=to-start]:fade-out-0"
        )}
      >
        <div className="glass-strong grid grid-cols-1 gap-1 rounded-2xl p-4 shadow-2xl sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <NavigationMenu.Link key={service.slug} asChild>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col gap-3 rounded-xl p-4 transition-colors hover:bg-white/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-semibold text-foreground">{service.title}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {service.shortDescription}
                    </span>
                  </span>
                </Link>
              </NavigationMenu.Link>
            );
          })}
          <div className="col-span-full mt-1 flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm text-muted-foreground">Not sure what you need? We&apos;ll help you figure it out.</p>
            <NavigationMenu.Link asChild>
              <Link href="/contact" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                Get a free consultation <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </NavigationMenu.Link>
          </div>
        </div>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}
