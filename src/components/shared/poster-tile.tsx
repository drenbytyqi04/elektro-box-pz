import { Zap } from "lucide-react";

import type { InstagramPost } from "@/lib/data/instagram-posts";
import { getIcon } from "@/lib/icon-map";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PosterTile({ post }: { post: InstagramPost }) {
  const Icon = getIcon(post.icon);
  const isOrange = post.variant === "orange";

  return (
    <div
      className={cn(
        "group relative flex aspect-square w-full flex-col overflow-hidden rounded-2xl border p-5",
        isOrange ? "border-primary-hover bg-primary" : "border-border bg-surface"
      )}
    >
      {!isOrange && <div className="grid-lines absolute inset-0 opacity-30" />}
      {!isOrange && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(255,153,0,0.18),transparent_55%)]" />
      )}
      {isOrange && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_85%,rgba(0,0,0,0.25),transparent_60%)]" />
      )}

      {post.tag && (
        <span
          className={cn(
            "absolute right-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
            isOrange ? "bg-black/80 text-primary" : "bg-primary text-primary-foreground"
          )}
        >
          {post.tag}
        </span>
      )}

      <div className="relative z-10 flex flex-1 flex-col">
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl border",
            isOrange ? "border-black/20 bg-black/10 text-primary-foreground" : "border-primary/30 bg-primary/10 text-primary"
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>

        <div className="mt-auto">
          <h3
            className={cn(
              "font-heading text-xl font-extrabold uppercase leading-[1.05] tracking-tight",
              isOrange ? "text-primary-foreground" : "text-foreground"
            )}
          >
            {post.headline}
          </h3>
          {post.subline && (
            <p className={cn("mt-2 text-xs leading-snug", isOrange ? "text-primary-foreground/80" : "text-muted-foreground")}>
              {post.subline}
            </p>
          )}
        </div>
      </div>

      <div
        className={cn(
          "relative z-10 mt-4 flex items-center justify-between border-t pt-3 text-[10px]",
          isOrange ? "border-black/15 text-primary-foreground/80" : "border-border text-subtle-foreground"
        )}
      >
        <span className="flex items-center gap-1.5 font-semibold tracking-wide">
          <Zap className={cn("h-3 w-3", isOrange ? "text-primary-foreground" : "text-primary")} fill="currentColor" strokeWidth={0} />
          ELECTRO BOX LLC
        </span>
        <span>{siteConfig.phone}</span>
      </div>
    </div>
  );
}
