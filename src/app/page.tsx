import type { Metadata } from "next";
import Link from "next/link";
import RiskCard from "@/components/RiskCard";
import StatBand from "@/components/StatBand";
import ServiceTier from "@/components/ServiceTier";
import LeadMagnet from "@/components/LeadMagnet";
import CTABanner from "@/components/CTABanner";
import CircuitPattern from "@/components/CircuitPattern";
import ShieldIcon from "@/components/ShieldIcon";

export const metadata: Metadata = {
  title: "AI Security Audit for SMBs | AITrustAudit.com",
  description:
    "Professional AI security audit reports for small and medium businesses. Get a clear picture of your AI risk in 5 business days. Starting at $499.",
  openGraph: {
    title: "AI Security Audit for SMBs | AITrustAudit.com",
    description:
      "Professional AI security audit reports for small and medium businesses. Get a clear picture of your AI risk in 5 business days. Starting at $499.",
  },
};

const RISKS = [
  {
    severity: "critical" as const,
    number: 1,
    title: "Shadow AI: The Invisible Attack Surface",
    description:
      "Your employees are using ChatGPT, Claude, and dozens of other AI tools you never approved. Each one is a potential data exfiltration channel you can't see, can't audit, and definitely can't remediate.",
    question: "How many AI tools is your team using right now — and how many do you actually know about?",
  },
  {
    severity: "high" as const,
    number: 2,
    title: "Client Data in AI Training Pipelines",
    description:
      "When your team pastes client files, contracts, or PII into AI tools, that data may be used to train the model. You just handed a third party your most sensitive assets with zero contractual protection.",
    question: "Are your employees inadvertently training AI models on client data without consent?",
  },
  {
    severity: "high" as const,
    number: 3,
    title: "No AI Acceptable Use Policy",
    description:
      "73% of SMBs have no written policy governing AI use. No policy means no accountability, no limits, and no defense when something goes wrong. It also means your cyber insurance claim might get denied.",
    question: "What happens legally if an employee's AI use causes a data breach and you have no policy?",
  },
  {
    severity: "high" as const,
    number: 4,
    title: "Compliance Exposure (HIPAA, GDPR, SOC 2)",
    description:
      "AI tools break existing compliance frameworks in ways your current controls don't catch. HIPAA covered entities using AI without a BAA. GDPR-subject data flowing to non-compliant LLM providers. SOC 2 scopes that don't cover AI systems.",
    question: "Have you mapped your AI tool stack against your specific compliance obligations?",
  },
  {
    severity: "medium" as const,
    number: 5,
    title: "Unchecked AI Vendor & Third-Party Risk",
    description:
      "Every AI vendor in your stack is a potential supply chain risk. Most SMBs have never reviewed an AI vendor's security posture, data retention policy, or incident response plan.",
    question: "Who reviewed the security posture of the last AI tool your team adopted?",
  },
];

const STATS = [
  { stat: "80%",   label: "of AI data leaks come from inside the organization" },
  { stat: "73%",   label: "of SMBs have zero AI security policy" },
  { stat: "$4.9M", label: "average cost of an AI-related breach" },
  { stat: "$499",  label: "starting price for a full audit report" },
];

const TIERS = [
  {
    name: "Basic",
    price: "$499",
    features: [
      { label: "AI Tools Assessed", value: "Up to 3" },
      { label: "Intake",            value: "15-question form" },
      { label: "Calls",             value: "1 discovery call" },
    ],
    deliverable: "8–12 page PDF report",
    turnaround:  "5 business days",
  },
  {
    name: "Standard",
    price: "$999",
    features: [
      { label: "AI Tools Assessed", value: "Up to 8" },
      { label: "Intake",            value: "Full intake + data review" },
      { label: "Calls",             value: "2 calls" },
    ],
    deliverable: "15–25 page report + risk matrix",
    turnaround:  "5 business days",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$2,499",
    features: [
      { label: "AI Tools Assessed", value: "Unlimited" },
      { label: "Intake",            value: "Full intake + team interviews" },
      { label: "Calls",             value: "Full engagement" },
    ],
    deliverable: "Full report + 90-day roadmap",
    turnaround:  "7 business days",
  },
];

const WHO = [
  {
    icon: "🔒",
    title: "Security Practitioners",
    body: "AI just rewrote the threat model. If you can't speak fluently to AI risk — shadow AI, LLM prompt injection, model poisoning — you're behind. This site gives you the frameworks and practitioner vocabulary to catch up fast.",
  },
  {
    icon: "📋",
    title: "Compliance & GRC Teams",
    body: "AI broke your existing frameworks before you had a chance to adapt. NIST CSF doesn't cover LLMs. ISO 27001 doesn't address training data. This is where you get AI-specific compliance mapping built for the work you actually have to do.",
  },
  {
    icon: "🏢",
    title: "SMB Operators",
    body: "You're using Copilot, ChatGPT, and half a dozen other AI tools across your team. Nobody approved them. Nobody audited them. Nobody knows what data they're ingesting. That's not a technology problem — it's a liability problem. Let's fix it.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy min-h-[90vh] flex items-center overflow-hidden scanlines">
        <CircuitPattern opacity={0.12} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-lt/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-4">// AITRUSTAUDIT.COM</p>
            <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-glow">
              Is Your AI Stack a Security Liability?
            </h1>
            <p className="font-body text-teal-lt text-xl mb-8 leading-relaxed">
              AITrustAudit.com is the practitioner&rsquo;s resource for AI security auditing — built for the professionals who have to actually do the work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-teal hover:bg-teal-lt text-white font-display font-bold text-sm px-7 py-4 rounded-lg tracking-wide transition-all duration-200 shadow-lg shadow-teal/30 focus:outline-none focus:ring-2 focus:ring-teal-lt focus:ring-offset-2 focus:ring-offset-navy"
              >
                Book a Free Discovery Call
              </a>
              <Link
                href="/free-risk-overview"
                className="inline-flex items-center justify-center border border-teal-lt/50 hover:border-teal-lt text-teal-lt hover:text-white font-display font-bold text-sm px-7 py-4 rounded-lg tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-lt focus:ring-offset-2 focus:ring-offset-navy"
              >
                Download Free Risk Overview
              </Link>
            </div>
          </div>

          {/* Animated shield visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-teal/10 rounded-full blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ShieldIcon size="lg" glow />
              </div>
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 256 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <line x1="128" y1="0"   x2="128" y2="56"  stroke="#00ACC1" strokeWidth="1" opacity="0.5" />
                <line x1="128" y1="200" x2="128" y2="256" stroke="#00ACC1" strokeWidth="1" opacity="0.5" />
                <line x1="0"   y1="128" x2="56"  y2="128" stroke="#00ACC1" strokeWidth="1" opacity="0.5" />
                <line x1="200" y1="128" x2="256" y2="128" stroke="#00ACC1" strokeWidth="1" opacity="0.5" />
                <circle cx="128" cy="0"   r="4" fill="#00ACC1" opacity="0.7" />
                <circle cx="128" cy="256" r="4" fill="#00ACC1" opacity="0.7" />
                <circle cx="0"   cy="128" r="4" fill="#00ACC1" opacity="0.7" />
                <circle cx="256" cy="128" r="4" fill="#00ACC1" opacity="0.7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatBand stats={STATS} />

      {/* THE 5 RISKS */}
      <section className="bg-light-bg py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">// WHAT WE FIX</p>
            <h2 className="font-display text-navy text-3xl md:text-4xl font-bold mb-4">
              The 5 AI Security Risks Threatening Your Business
            </h2>
            <p className="font-body text-mid-gray text-lg max-w-2xl mx-auto">
              80% of unauthorized AI activity comes from inside your organization. Here&rsquo;s what you&rsquo;re almost certainly dealing with right now.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RISKS.map((risk) => (
              <RiskCard key={risk.number} {...risk} />
            ))}
            <div className="md:col-span-2 lg:col-span-3 bg-navy rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-teal/30">
              <div>
                <p className="font-display text-teal-lt text-sm font-bold mb-1">READY TO SEE YOUR ACTUAL EXPOSURE?</p>
                <p className="font-body text-gray-300">
                  A professional audit report tells you exactly which of these risks apply to your stack — and what to do about them.
                </p>
              </div>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-teal hover:bg-teal-lt text-white font-display font-bold text-sm px-6 py-3 rounded-lg tracking-wide transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-teal-lt"
              >
                Book a Free Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">// WHO THIS IS FOR</p>
            <h2 className="font-display text-navy text-3xl md:text-4xl font-bold">
              Built for the Professional Who Has to Do the Work
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {WHO.map((item) => (
              <div key={item.title} className="relative bg-navy rounded-xl p-8 overflow-hidden hover:shadow-xl hover:shadow-teal/10 transition-shadow">
                <div className="absolute top-0 left-0 w-full h-1 bg-teal opacity-60" />
                <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="font-display text-teal-lt text-lg font-bold mb-3">{item.title}</h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <LeadMagnet
        headline="Start Here: Free AI Security Risk Overview"
        subhead="Know exactly where your risks are. Zero cost. No sales call required. Used by 500+ security professionals to brief SMB leadership."
      />

      {/* AUDIT SERVICE TEASER */}
      <section className="bg-light-bg py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">// AUDIT SERVICE</p>
            <h2 className="font-display text-navy text-3xl md:text-4xl font-bold mb-4">
              Professional AI Security Audit Reports
            </h2>
            <p className="font-body text-mid-gray text-lg max-w-2xl mx-auto">
              A clear picture of your AI risk, delivered in 5 business days. No retainer. No fluff. Just the truth about your exposure — and a prioritized plan to fix it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start mb-10">
            {TIERS.map((tier) => (
              <ServiceTier key={tier.name} {...tier} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/audit" className="font-body text-teal hover:text-teal-lt font-semibold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-teal rounded-md">
              See full audit details and what&rsquo;s included →
            </Link>
          </div>
        </div>
      </section>

      {/* COURSE TEASER */}
      <section className="relative bg-navy py-20 px-4 overflow-hidden">
        <CircuitPattern opacity={0.08} />
        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-3">// ONLINE COURSE</p>
            <h2 className="font-display text-white text-3xl font-bold mb-4 text-glow">
              Learn to Audit AI Systems Yourself
            </h2>
            <p className="font-body text-gray-400 text-lg mb-6">
              <span className="text-teal-lt font-semibold">AI Security Audit Fundamentals</span> — the only practitioner-level course built for the professional who has to produce an actual report, not just pass a test.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Master the 6-Domain AI Audit Methodology",
                "Apply NIST AI RMF, OWASP LLM Top 10, and ISO 42001",
                "Write a professional-grade audit report",
                "Build a complete AI tool risk inventory",
                "Conduct vendor risk reviews for AI suppliers",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm font-body text-gray-300">
                  <span className="text-teal-lt mt-0.5 shrink-0">✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Link href="/course" className="bg-teal hover:bg-teal-lt text-white font-display font-bold text-sm px-6 py-3 rounded-lg tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-teal-lt">
                Join the Waitlist
              </Link>
              <Link href="/course" className="border border-white/20 hover:border-teal-lt text-gray-300 hover:text-teal-lt font-display font-bold text-sm px-6 py-3 rounded-lg tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-teal-lt">
                See Curriculum
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { num: "8",     label: "Modules" },
              { num: "35",    label: "Lessons" },
              { num: "6.5h",  label: "Total Runtime" },
              { num: "$297",  label: "Launch Price" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-4 bg-white/5 rounded-lg px-5 py-4 border border-white/10">
                <span className="font-display text-teal-lt text-3xl font-black w-20 text-glow">{s.num}</span>
                <span className="font-body text-gray-300 font-semibold">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABanner
        headline="Your AI Stack Has Gaps. Let's Find Them Before Someone Else Does."
        subhead="Book a free 20-minute discovery call and find out exactly where your AI risk exposure is."
        primaryCTA={{ label: "Book a Free Discovery Call", href: "https://calendly.com" }}
        secondaryCTA={{ label: "Download Free Risk Overview", href: "/free-risk-overview" }}
      />
    </>
  );
}
