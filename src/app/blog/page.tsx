import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import CTABanner from "@/components/CTABanner";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "AI Security Blog — Practitioner Resources",
  description:
    "Practical AI security auditing guides, framework breakdowns, compliance deep-dives, and SMB case studies. Written by a practitioner, for practitioners.",
  openGraph: {
    title: "AI Security Blog | AITrustAudit.com",
    description: "Practical AI security auditing guides, framework breakdowns, and compliance deep-dives.",
  },
};

const PILLARS = [
  "All",
  "AI Risk Education",
  "Framework Guides",
  "Practitioner How-Tos",
  "Compliance",
  "SMB Spotlight",
  "Industry News",
];

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Header */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label mb-3">// THE BLOG</p>
          <h1 className="font-display text-white text-4xl font-black mb-4 text-glow">
            AI Security Intelligence
          </h1>
          <p className="font-body text-gray-400 text-lg max-w-2xl mx-auto">
            Frameworks, auditing techniques, compliance guides, and case studies — written for practitioners who have to do the work, not pass a test.
          </p>
        </div>
      </section>

      {/* Pillar filter (visual only — full filter would require client component) */}
      <div className="bg-white border-b border-divider px-4 py-4">
        <div className="max-w-7xl mx-auto flex gap-2 flex-wrap">
          {PILLARS.map((p) => (
            <span
              key={p}
              className={`font-display text-xs font-bold px-3 py-1.5 rounded-full cursor-pointer transition-colors ${
                p === "All"
                  ? "bg-navy text-white"
                  : "bg-light-bg text-mid-gray hover:bg-teal/10 hover:text-teal"
              }`}
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Posts grid */}
      <section className="bg-light-bg py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                readTime={post.readTime}
                date={post.date}
                hasTemplate={post.hasTemplate}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <CTABanner
        headline="Get AI Security Intel Every Week"
        subhead="The AI Trust Briefing — practitioner-level AI security news, framework updates, and field notes. No corporate fluff."
        primaryCTA={{ label: "Download Free Risk Overview", href: "/free-risk-overview" }}
        secondaryCTA={{ label: "See Audit Service", href: "/audit" }}
      />
    </>
  );
}
