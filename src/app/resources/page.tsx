import type { Metadata } from "next";
import Link from "next/link";
import LeadMagnet from "@/components/LeadMagnet";
import CTABanner from "@/components/CTABanner";
import CircuitPattern from "@/components/CircuitPattern";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Free AI Security Resources",
  description:
    "Free templates, guides, and tools for AI security practitioners. Start learning before you spend a dollar — risk overview PDF, AUP template, vendor questionnaire, and more.",
  openGraph: {
    title: "Free AI Security Resources | AITrustAudit.com",
    description:
      "Free templates, guides, and tools for AI security practitioners. Start learning before you spend a dollar.",
  },
};

const TEMPLATES = [
  {
    title: "AI Security Risk Overview",
    description:
      "A one-page breakdown of the 5 critical AI security risks facing organizations today — with severity ratings and the questions every practitioner should be asking. Used by 500+ security professionals.",
    badge: "PDF Download",
    badgeColor: "bg-teal/20 text-teal-lt border-teal/30",
    cta: "Get the Free PDF",
    href: "/free-risk-overview",
  },
  {
    title: "AI Acceptable Use Policy Template",
    description:
      "A complete, editable AUP template covering scope, prohibited uses, approved tools, data handling rules, and enforcement. Built to be dropped straight into a real engagement or your own organization.",
    badge: "Free Template",
    badgeColor: "bg-teal/20 text-teal-lt border-teal/30",
    cta: "Read the Guide + Template",
    href: "/blog/how-to-write-an-ai-acceptable-use-policy",
  },
  {
    title: "Shadow AI Discovery Guide",
    description:
      "A step-by-step guide to finding unauthorized AI tools inside an organization — including DNS/proxy log analysis, browser audits, and intake questionnaire techniques. With a free discovery checklist.",
    badge: "Free Guide",
    badgeColor: "bg-teal/20 text-teal-lt border-teal/30",
    cta: "Read the Guide",
    href: "/blog/shadow-ai-what-it-is-why-its-dangerous-and-how-to-find-it",
  },
  {
    title: "OWASP LLM Top 10 Reference Card",
    description:
      "All 10 LLM security risks explained in plain practitioner language — what each risk means, a real-world example, and how to assess it in an engagement. Bookmark this one.",
    badge: "Free Reference",
    badgeColor: "bg-teal/20 text-teal-lt border-teal/30",
    cta: "Read the Guide",
    href: "/blog/owasp-llm-top-10-what-every-security-pro-needs-to-know",
  },
];

const COMING_SOON = [
  {
    title: "6-Domain Audit Workbook",
    description: "The full audit workbook used in the course — adapted for a free starter version.",
  },
  {
    title: "Vendor Risk Questionnaire",
    description: "A ready-to-send questionnaire for evaluating AI vendor security posture.",
  },
  {
    title: "AI Tool Inventory Template",
    description: "A spreadsheet template for cataloguing every AI tool in use across an organization.",
  },
];

export default function ResourcesPage() {
  const featuredPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy py-24 px-4 overflow-hidden scanlines">
        <CircuitPattern opacity={0.10} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="section-label mb-4">// FREE RESOURCES</p>
          <h1 className="font-display text-white text-4xl md:text-5xl font-black leading-tight mb-6 text-glow">
            Start Learning for Free
          </h1>
          <p className="font-body text-teal-lt text-xl mb-4 leading-relaxed max-w-2xl mx-auto">
            Every template, guide, and reference card below is free — no strings attached. Build your foundation first. The paid course is there when you&apos;re ready to go deeper.
          </p>
          <p className="font-body text-gray-500 text-sm">
            No credit card. No sales call. Just practitioner-level content you can use today.
          </p>
        </div>
      </section>

      {/* FREE TEMPLATES & GUIDES */}
      <section className="bg-light-bg py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">// FREE DOWNLOADS & GUIDES</p>
            <h2 className="font-display text-navy text-3xl md:text-4xl font-bold mb-4">
              Templates & Reference Guides
            </h2>
            <p className="font-body text-mid-gray text-lg max-w-2xl mx-auto">
              Built for real engagements and real organizations. Use them as-is or adapt them to your context.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {TEMPLATES.map((t) => (
              <div
                key={t.title}
                className="bg-white rounded-xl p-7 border border-divider hover:border-teal/40 hover:shadow-lg hover:shadow-teal/5 transition-all group"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-display text-navy text-lg font-bold leading-tight">{t.title}</h3>
                  <span className={`shrink-0 font-display text-xs font-bold px-3 py-1 rounded-full border ${t.badgeColor}`}>
                    {t.badge}
                  </span>
                </div>
                <p className="font-body text-mid-gray text-sm leading-relaxed mb-6">{t.description}</p>
                <Link
                  href={t.href}
                  className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-teal hover:text-teal-lt transition-colors focus:outline-none focus:ring-2 focus:ring-teal rounded-md"
                >
                  {t.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD MAGNET — RISK OVERVIEW */}
      <LeadMagnet
        headline="Download the Free AI Security Risk Overview"
        subhead="The 5 critical AI risks explained in plain language — with severity ratings, real examples, and the questions every practitioner should be asking. Free PDF, no spam."
      />

      {/* COMING SOON */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">// COMING SOON</p>
            <h2 className="font-display text-navy text-3xl font-bold mb-4">
              More Free Tools on the Way
            </h2>
            <p className="font-body text-mid-gray text-lg max-w-xl mx-auto">
              Subscribe to the newsletter to be notified when these drop.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {COMING_SOON.map((item) => (
              <div
                key={item.title}
                className="relative bg-light-bg rounded-xl p-7 border border-divider border-dashed"
              >
                <div className="absolute top-4 right-4 font-display text-xs font-bold text-gray-400 bg-white px-2 py-0.5 rounded-full border border-divider">
                  Soon
                </div>
                <h3 className="font-display text-navy text-base font-bold mb-3 pr-12">{item.title}</h3>
                <p className="font-body text-mid-gray text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE BLOG ARTICLES */}
      <section className="bg-light-bg py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">// FREE ARTICLES</p>
            <h2 className="font-display text-navy text-3xl font-bold mb-4">
              Practitioner-Level Reading
            </h2>
            <p className="font-body text-mid-gray text-lg max-w-xl mx-auto">
              No email required. Just open and read.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-display text-sm font-bold text-teal hover:text-teal-lt transition-colors focus:outline-none focus:ring-2 focus:ring-teal rounded-md"
            >
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      {/* COURSE TEASER */}
      <section className="relative bg-navy py-20 px-4 overflow-hidden">
        <CircuitPattern opacity={0.08} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="section-label mb-4">// READY TO GO DEEPER?</p>
          <h2 className="font-display text-white text-3xl font-bold mb-4 text-glow">
            The Full Course Is There When You&apos;re Ready
          </h2>
          <p className="font-body text-gray-400 text-lg mb-8 leading-relaxed">
            <span className="text-teal-lt font-semibold">AI Security Audit Fundamentals</span> — 8 modules, 35 lessons, 6.5 hours of practitioner-level content. Covers the full 6-Domain methodology, NIST AI RMF, OWASP LLM Top 10, report writing, and everything included in the free resources above — but in depth, with templates, and with a certificate at the end.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/course"
              className="bg-teal hover:bg-teal-lt text-white font-display font-bold text-sm px-7 py-4 rounded-lg tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-teal-lt"
            >
              See the Full Curriculum
            </Link>
            <Link
              href="/course"
              className="border border-white/20 hover:border-teal-lt text-gray-300 hover:text-teal-lt font-display font-bold text-sm px-7 py-4 rounded-lg tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-teal-lt"
            >
              Enroll Now — $297
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Get Notified When New Free Resources Drop"
        subhead="Subscribe to the AI Trust Briefing — weekly practitioner content, free templates, and framework updates. No fluff."
        primaryCTA={{ label: "Enroll in the Course", href: "/course" }}
        secondaryCTA={{ label: "Browse the Blog", href: "/blog" }}
      />
    </>
  );
}
