import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

import type { BlogPost } from "@/lib/data/blog";
import { Badge } from "@/components/ui/badge";
import { MediaPlaceholder } from "@/components/shared/media-placeholder";

const categoryIcon: Record<string, string> = {
  Electrical: "Zap",
  "Smart Home": "House",
  Security: "ShieldCheck",
  Networking: "Network",
};

export function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.date);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
          <MediaPlaceholder icon={categoryIcon[post.category] ?? "Zap"} variant="grid" />
        </div>
        <Badge className="absolute left-4 top-4" variant="solid">
          {post.category}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-xs text-subtle-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>
        <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Read article <ArrowUpRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </Link>
  );
}
