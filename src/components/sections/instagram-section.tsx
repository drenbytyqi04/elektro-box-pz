import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { instagramPosts } from "@/lib/data/instagram-posts";
import { PosterTile } from "@/components/shared/poster-tile";
import { InstagramIcon } from "@/components/shared/social-icons";
import { StaggerGroup, StaggerItem } from "@/components/animations/reveal";

export function InstagramSection() {
  return (
    <section className="section-spacing relative">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
              <InstagramIcon className="h-6 w-6" />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">On Instagram</span>
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">@elektroboxllc</h2>
            </div>
          </div>
          <Link
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Follow us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <StaggerGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {instagramPosts.map((post) => (
            <StaggerItem key={post.headline}>
              <Link href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="block">
                <PosterTile post={post} />
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
