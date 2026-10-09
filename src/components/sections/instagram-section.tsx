import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, Play } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { getInstagramPosts } from "@/lib/data/instagram-posts";
import type { Locale } from "@/i18n/routing";
import { InstagramIcon } from "@/components/shared/social-icons";
import { StaggerGroup, StaggerItem } from "@/components/animations/reveal";

export function InstagramSection() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const instagramPosts = getInstagramPosts(locale);

  return (
    <section className="section-spacing relative">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
              <InstagramIcon className="h-6 w-6" />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{t("common.onInstagram")}</span>
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">{t("sections.instagram.handle")}</h2>
            </div>
          </div>
          <Link
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {t("common.followUs")} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <StaggerGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post) => (
            <StaggerItem key={post.shortcode}>
              <Link
                href={`https://www.instagram.com/p/${post.shortcode}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-border"
              >
                <Image
                  src={`/images/instagram/${post.shortcode}.jpg`}
                  alt={post.caption}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {post.isVideo && (
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur">
                    <Play className="h-3.5 w-3.5" fill="currentColor" />
                  </span>
                )}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <InstagramIcon className="mb-3 h-5 w-5 text-primary" />
                  <p className="line-clamp-3 text-sm leading-snug text-white">{post.caption}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
