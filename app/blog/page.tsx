import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "The Second Plate journal. No posts have been published yet.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Our Blog" photo={photos.sprouts} />
      <section className="empty-state">
        <p className="eyebrow">All Posts</p>
        <h2>Check back soon</h2>
        <p>Once posts are published, you’ll see them here.</p>
      </section>
    </>
  );
}
