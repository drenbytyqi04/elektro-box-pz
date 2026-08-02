import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";
import { blogPosts } from "@/lib/data/blog";
import { PageHero } from "@/components/shared/page-hero";
import { BlogCard } from "@/components/shared/blog-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { StaggerGroup, StaggerItem } from "@/components/animations/reveal";

export const metadata: Metadata = {
  title: "Blog",
  description: `Guides and insights on electrical safety, smart home automation, and security systems from the ${siteConfig.name} team.`,
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Field notes from the team"
        description="Practical guides on electrical safety, smart home automation, and security — written by the engineers who do the work."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="relative pb-24">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
