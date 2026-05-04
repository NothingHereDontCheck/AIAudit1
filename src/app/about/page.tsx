import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import CircuitPattern from "@/components/CircuitPattern";
import ShieldIcon from "@/components/ShieldIcon";

export const metadata: Metadata = {
  title: "About Jamel Rainey — AI Security Leader",
  description:
    "Jamel Rainey is an AI Security Leader and the founder of AITrustAudit.com — the practitioner's resource for AI security auditing.",
  openGraph: {
    title: "About Jamel Rainey | AITrustAudit.com",
    description: "AI Security Leader and founder of AITrustAudit.com — the practitioner's resource for AI security auditing.",
  },
};

const FRAMEWORKS = [
  "NIST AI RMF 1.0",
  "OWASP LLM Top 10",
  "ISO/IEC 42001",
  "NIST CSF 2.0",
  "HIPAA Security Rule",
  "GDPR",
  "SOC 2 Type II",
];

const CONTENT = [
  {
    icon: "🔍",
    title: "What I Do",
    body: "I conduct AI security audits for small and medium businesses — organizations that are using AI tools across their operations but haven't built the governance layer to manage the risk that comes with them. The deliverable is a professional audit report: clear findings, clear risk scores, and a prioritized list of exactly what to fix.",
  },
  {
    icon: "📚",
    title: "Why AITrustAudit.com",
    body: "When I started auditing AI systems, the resources I needed didn't exist. What was out there was either enterprise-scale (not useful for an SMB engagement) or purely academic (not useful for someone who has to produce an actual report on Monday morning). I built this site to be the resource I wish someone had handed me.",
  },
  {
    icon: "🎯",
    title: "Who I Work With",
    body: "SMB owners and operators who know they need to get their AI governance in order but don't have the internal expertise to know where to start. Security and GRC professionals who need to add AI-specific skills to their toolkit. Compliance teams whose existing frameworks don't cover LLMs and AI systems.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-24 px-4 overflow-hidden scanlines">
        <CircuitPattern opacity={0.10} />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-4">// ABOUT</p>
            <h1 className="font-display text-white text-4xl md:text-5xl font-black leading-tight mb-4 text-glow">
              Jamel Rainey
            </h1>
            <p className="font-display text-teal-lt text-lg font-semibold mb-6">
              AI Security Leader · Founder, AITrustAudit.com
            </p>
            <p className="font-body text-gray-300 text-lg leading-relaxed mb-6">
              I audit AI deployments for businesses that are using AI tools without adequate governance — and I build the resources practitioners need to do the same work professionally.
            </p>
            <p className="font-body text-gray-400 text-base leading-relaxed italic border-l-4 border-teal pl-4">
              &ldquo;80% of AI data leaks come from inside your organization. Your team is the threat vector. Let&rsquo;s fix that.&rdquo;
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-teal/10 rounded-full blur-3xl" />
              <div className="relative w-56 h-56 bg-navy/60 rounded-full border-2 border-teal/30 flex items-center justify-center">
                <ShieldIcon size="lg" glow />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content cards */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {CONTENT.map((c) => (
            <div key={c.title} className="bg-light-bg rounded-xl p-7 border border-divider">
              <div className="text-3xl mb-4" aria-hidden="true">{c.icon}</div>
              <h2 className="font-display text-navy text-base font-bold mb-3">{c.title}</h2>
              <p className="font-body text-mid-gray text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Frameworks */}
      <section className="relative bg-navy py-20 px-4 overflow-hidden">
        <CircuitPattern opacity={0.08} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="section-label mb-4">// FRAMEWORKS & STANDARDS</p>
          <h2 className="font-display text-white text-2xl font-bold mb-8">
            Every Audit Is Grounded in the Standards That Matter
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {FRAMEWORKS.map((f) => (
              <span
                key={f}
                className="font-display text-xs font-bold px-4 py-2 rounded-full border border-teal/40 text-teal-lt hover:border-teal-lt transition-colors"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-3">// THE MISSION</p>
            <h2 className="font-display text-navy text-3xl font-bold">
              Why Practitioner-Level Matters
            </h2>
          </div>
          <div className="space-y-5 font-body text-mid-gray text-base leading-relaxed">
            <p>
              There&rsquo;s no shortage of AI security content on the internet. Most of it falls into two categories: theoretical frameworks that don&rsquo;t tell you what to actually do, and enterprise-scale programs that assume you have a 20-person security team and a seven-figure budget.
            </p>
            <p>
              AITrustAudit.com is built for the practitioner in the middle — the security professional adding AI to their toolkit, the GRC team trying to figure out how AI breaks their existing compliance program, the SMB operator who knows they have a problem and needs a pragmatic path to fixing it.
            </p>
            <p>
              Every piece of content, every template, every audit methodology on this site is designed to be usable in the real world — in a client engagement, in a compliance review, in a conversation with leadership at 9am on a Tuesday.
            </p>
            <p>
              That&rsquo;s the standard. Useful in practice, not just in theory.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter / resource links */}
      <section className="bg-light-bg py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-navy text-2xl font-bold mb-6">Where to Start</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Free Risk Overview", href: "/free-risk-overview", desc: "5 risks explained, free PDF" },
              { label: "The Blog",           href: "/blog",              desc: "Frameworks, auditing, compliance" },
              { label: "Book a Call",        href: "/audit",             desc: "Talk through your AI risk" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-white rounded-xl p-5 border border-divider hover:border-teal transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal"
              >
                <p className="font-display text-navy text-sm font-bold mb-1">{item.label}</p>
                <p className="font-body text-mid-gray text-xs">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Let's Figure Out Your AI Risk Together"
        subhead="Book a free 20-minute discovery call. No commitment. Just a straight conversation about where your AI exposure is."
        primaryCTA={{ label: "Book a Free Discovery Call", href: "https://calendly.com" }}
        secondaryCTA={{ label: "Download Free Risk Overview", href: "/free-risk-overview" }}
      />
    </>
  );
}
