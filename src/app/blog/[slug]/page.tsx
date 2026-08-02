import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, User } from "lucide-react";

import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { BlogCard } from "@/components/shared/blog-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { MediaPlaceholder } from "@/components/shared/media-placeholder";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animations/reveal";

const categoryIcon: Record<string, string> = {
  Electrical: "Zap",
  "Smart Home": "House",
  Security: "ShieldCheck",
  Networking: "Network",
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const date = new Date(post.date);
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <section className="relative pb-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center gap-6 border-b border-border pb-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              {date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> {post.readTime}
            </span>
          </div>

          <Reveal className="my-10 aspect-video overflow-hidden rounded-2xl border border-border">
            <MediaPlaceholder icon={categoryIcon[post.category] ?? "Zap"} variant="circuit" />
          </Reveal>

          <div className="flex flex-col gap-5">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-surface/30">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Keep reading" title="More from the blog" />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <StaggerItem key={p.slug}>
                <BlogCard post={p} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
