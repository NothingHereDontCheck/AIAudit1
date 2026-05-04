import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/blog";
import CTABanner from "@/components/CTABanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.primaryKeyword, "AI security", "AI audit", "AITrustAudit"],
    openGraph: {
      title: `${post.title} | AITrustAudit.com`,
      description: post.excerpt,
      type: "article",
      authors: ["Jamel Rainey"],
      publishedTime: new Date().toISOString(),
    },
    other: {
      "article:author": "Jamel Rainey",
    },
  };
}

function renderMarkdown(content: string): string {
  return content
    .trim()
    .replace(/^## (.+)$/gm, '<h2 class="font-display text-navy text-2xl font-bold mt-10 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="font-display text-navy text-lg font-bold mt-8 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-navy font-semibold">$1</strong>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-teal hover:text-teal-lt underline underline-offset-2 transition-colors">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 text-mid-gray">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, (match) => `<ul class="list-disc space-y-1 my-3 pl-2">${match}</ul>`)
    .replace(/\n\n/g, '</p><p class="font-body text-mid-gray text-base leading-relaxed mb-4">')
    .replace(/^/, '<p class="font-body text-mid-gray text-base leading-relaxed mb-4">')
    .replace(/$/, '</p>');
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const allPosts = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "Jamel Rainey",
      url: "https://www.aitrustaudit.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "AITrustAudit.com",
      url: "https://www.aitrustaudit.com",
    },
    datePublished: new Date().toISOString(),
    mainEntityOfPage: `https://www.aitrustaudit.com/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Hero */}
      <section className="bg-navy pt-16 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/blog"
              className="font-body text-gray-500 hover:text-teal-lt text-sm transition-colors"
            >
              ← Blog
            </Link>
            <span className="text-gray-600">/</span>
            <span
              className="font-display text-xs font-bold px-2.5 py-0.5 rounded-full"
              style={{ backgroundColor: "rgba(0,172,193,0.15)", color: "#00ACC1" }}
            >
              {post.category}
            </span>
          </div>
          <h1 className="font-display text-white text-3xl md:text-4xl font-black leading-tight mb-4 text-glow">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-body text-gray-500">
            <span>By Jamel Rainey</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            {post.hasTemplate && (
              <>
                <span>·</span>
                <span className="text-teal-lt font-semibold">+ Free Template</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Lead paragraph */}
          <p className="font-body text-navy text-xl leading-relaxed mb-8 font-medium border-l-4 border-teal pl-4">
            {post.excerpt}
          </p>

          {/* Template CTA if applicable */}
          {post.hasTemplate && (
            <div className="mb-8 bg-teal-bg rounded-xl p-5 border border-teal/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="text-3xl" aria-hidden="true">📄</div>
              <div className="flex-1">
                <p className="font-display text-navy text-sm font-bold mb-0.5">Free Template Available</p>
                <p className="font-body text-mid-gray text-sm">
                  Download the free template mentioned in this article — no account required.
                </p>
              </div>
              <Link
                href="/free-risk-overview"
                className="shrink-0 bg-teal hover:bg-teal-lt text-white font-display font-bold text-xs px-4 py-2 rounded-lg tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-teal"
              >
                Get Free Template →
              </Link>
            </div>
          )}

          {/* Article content */}
          <article
            className="prose-article max-w-none"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          {/* Author box */}
          <div className="mt-12 border-t border-divider pt-8 flex items-start gap-4">
            <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center shrink-0">
              <span className="font-display text-teal-lt text-sm font-black">JR</span>
            </div>
            <div>
              <p className="font-display text-navy text-sm font-bold">Jamel Rainey</p>
              <p className="font-body text-teal text-xs font-semibold mb-2">AI Security Leader · AITrustAudit.com</p>
              <p className="font-body text-mid-gray text-sm">
                Building the practitioner&rsquo;s resource for AI security auditing. If you have to actually do the work — not just read about it — this is your home base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead magnet inline */}
      <section className="bg-light-bg py-12 px-4">
        <div className="max-w-3xl mx-auto bg-navy rounded-2xl p-8 text-center">
          <p className="section-label mb-3">// FREE RESOURCE</p>
          <h2 className="font-display text-white text-2xl font-bold mb-3">
            Get the Free AI Security Risk Overview
          </h2>
          <p className="font-body text-gray-400 mb-6">
            Used by 500+ security professionals. The 5 risks your leadership team needs to understand right now.
          </p>
          <Link
            href="/free-risk-overview"
            className="inline-block bg-teal hover:bg-teal-lt text-white font-display font-bold text-sm px-7 py-3 rounded-lg tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-teal-lt"
          >
            Download Free Risk Overview →
          </Link>
        </div>
      </section>

      {/* Related posts */}
      {allPosts.length > 0 && (
        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-navy text-2xl font-bold mb-8">More from the Blog</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {allPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block bg-light-bg rounded-xl border border-divider p-5 hover:border-teal transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal"
                >
                  <span className="font-display text-xs font-bold text-teal-lt uppercase tracking-wide block mb-2">
                    {p.category}
                  </span>
                  <h3 className="font-display text-navy text-sm font-bold mb-2 group-hover:text-teal transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="font-body text-mid-gray text-xs">{p.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        headline="Ready to Audit Your AI Stack?"
        subhead="Professional AI security audit reports starting at $499. Delivered in 5 business days."
        primaryCTA={{ label: "Book a Free Discovery Call", href: "https://calendly.com" }}
        secondaryCTA={{ label: "See Audit Service", href: "/audit" }}
      />
    </>
  );
}
