import type { Metadata } from "next";
import RiskCard from "@/components/RiskCard";
import ServiceTier from "@/components/ServiceTier";
import CTABanner from "@/components/CTABanner";
import CircuitPattern from "@/components/CircuitPattern";

export const metadata: Metadata = {
  title: "AI Security Audit Service | $499–$2,499",
  description:
    "Comprehensive AI security audit reports covering Shadow AI, data handling, vendor risk, and compliance. Delivered in 5 business days. No retainer required.",
  openGraph: {
    title: "AI Security Audit Service | $499–$2,499 | AITrustAudit.com",
    description:
      "Comprehensive AI security audit reports covering Shadow AI, data handling, vendor risk, and compliance. Delivered in 5 business days. No retainer required.",
  },
};

const RISKS = [
  {
    severity: "critical" as const,
    number: 1,
    title: "Shadow AI: The Invisible Attack Surface",
    description:
      "Your team is using AI tools you've never approved, vetted, or even seen. ChatGPT, Claude, Gemini, and dozens of niche tools are running on company devices right now. Each one is a data channel you don't control.",
    question: "Can you name every AI tool active in your organization right now?",
  },
  {
    severity: "high" as const,
    number: 2,
    title: "Client Data in AI Training Pipelines",
    description:
      "Employees pasting client contracts, PII, and financial data into AI tools without realizing that data may be retained and used for model training. One paste can become a breach across thousands of future users.",
    question: "Has your team ever pasted client or employee data into an AI tool?",
  },
  {
    severity: "high" as const,
    number: 3,
    title: "No AI Acceptable Use Policy",
    description:
      "Without a policy, you have no baseline, no enforcement mechanism, and no legal protection when something goes wrong. Your cyber insurer will ask. Your enterprise clients will ask. You need an answer.",
    question: "Do you have a written AI Acceptable Use Policy signed by your employees?",
  },
  {
    severity: "high" as const,
    number: 4,
    title: "Compliance Exposure (HIPAA, GDPR, SOC 2)",
    description:
      "HIPAA requires a BAA for any vendor handling PHI — most AI providers won't sign one. GDPR requires documented lawful basis for processing in AI systems. SOC 2 auditors are increasingly asking about AI controls.",
    question: "Have you formally mapped your AI stack against your compliance obligations?",
  },
  {
    severity: "medium" as const,
    number: 5,
    title: "Unchecked AI Vendor & Third-Party Risk",
    description:
      "Every AI vendor is a potential supply chain risk. When was the last time you reviewed their security posture, data retention terms, incident response SLA, or sub-processor list?",
    question: "When did you last review the security documentation for your AI vendors?",
  },
];

const TIERS = [
  {
    name: "Basic",
    price: "$499",
    features: [
      { label: "AI Tools Assessed",  value: "Up to 3" },
      { label: "Intake Method",      value: "15-question intake form" },
      { label: "Calls Included",     value: "1 discovery call" },
      { label: "Report Length",      value: "8–12 pages" },
    ],
    deliverable: "Professional PDF audit report with findings, risk score, and prioritized recommendations",
    turnaround:  "5 business days",
    ctaLabel:    "Get Started — Basic",
  },
  {
    name: "Standard",
    price: "$999",
    features: [
      { label: "AI Tools Assessed",  value: "Up to 8" },
      { label: "Intake Method",      value: "Full intake + data flow review" },
      { label: "Calls Included",     value: "2 calls (discovery + debrief)" },
      { label: "Report Length",      value: "15–25 pages" },
    ],
    deliverable: "Full report + risk matrix with Critical/High/Medium/Low classification",
    turnaround:  "5 business days",
    highlighted: true,
    ctaLabel:    "Get Started — Standard",
  },
  {
    name: "Enterprise",
    price: "$2,499",
    features: [
      { label: "AI Tools Assessed",  value: "Unlimited" },
      { label: "Intake Method",      value: "Full intake + team interviews" },
      { label: "Calls Included",     value: "Full engagement" },
      { label: "Report Length",      value: "Full report" },
    ],
    deliverable: "Full report + risk matrix + 90-day prioritized remediation roadmap",
    turnaround:  "7 business days",
    ctaLabel:    "Get Started — Enterprise",
  },
];

const REPORT_SECTIONS = [
  {
    icon: "📊",
    title: "Executive Summary",
    desc: "Overall AI risk score (1–10), top 3 critical findings, and a plain-English summary your leadership team can actually read.",
  },
  {
    icon: "🗂️",
    title: "AI Tool Inventory",
    desc: "Every AI tool in scope, classified by risk level, data handling practices, and current governance status.",
  },
  {
    icon: "⚠️",
    title: "Findings & Risk Matrix",
    desc: "All findings rated Critical / High / Medium / Low with supporting evidence and impact assessment.",
  },
  {
    icon: "⚖️",
    title: "Compliance Gap Analysis",
    desc: "Mapped against HIPAA, SOC 2, and GDPR requirements as applicable to your organization.",
  },
  {
    icon: "🛠️",
    title: "Remediation Recommendations",
    desc: "Prioritized action list. Every finding has a corresponding fix — no vague 'improve your security posture' recommendations.",
  },
  {
    icon: "🗺️",
    title: "30/60/90-Day Roadmap",
    desc: "Enterprise tier only. A sequenced implementation plan so you know what to fix first and why.",
  },
];

const DOMAINS = [
  { num: "01", title: "AI Tool Inventory",             desc: "Identify and document every AI tool in use — approved and unapproved." },
  { num: "02", title: "Data Classification & Handling", desc: "Map what data types are flowing into AI systems and how they're being processed." },
  { num: "03", title: "Access Controls & Identity",     desc: "Evaluate who has access to AI tools and whether least privilege is enforced." },
  { num: "04", title: "Vendor & Third-Party Risk",      desc: "Review AI vendor security posture, contractual protections, and sub-processor risks." },
  { num: "05", title: "Policy & Governance",            desc: "Assess whether AI-specific policies exist, are current, and are actually enforced." },
  { num: "06", title: "Compliance Alignment",           desc: "Map AI tool usage against applicable regulatory requirements." },
];

const FAQS = [
  {
    q: "How long does the audit take?",
    a: "5–7 business days from intake completion, depending on tier. Enterprise engagements are 7 business days.",
  },
  {
    q: "Do I need technical staff for this?",
    a: "No. The intake process is designed for non-technical business owners and operations managers. You describe what you're using and how — I do the technical analysis.",
  },
  {
    q: "What do I do with the report?",
    a: "The report gives you a prioritized action list with specific next steps for each finding. If you need help implementing the recommendations, that's a separate engagement we can discuss.",
  },
  {
    q: "Is my data safe during the audit?",
    a: "Yes. All data is stored encrypted, retained for 90 days post-engagement, and covered under a data processing agreement provided at intake. I don't share client data with any third party.",
  },
  {
    q: "Can this help with HIPAA or SOC 2 compliance?",
    a: "Yes. Compliance gap analysis against HIPAA, SOC 2, and GDPR is included in every tier. The report documents where your AI stack creates compliance exposure and what controls would address it.",
  },
  {
    q: "What's the difference between an audit report and a penetration test?",
    a: "A penetration test looks for technical exploits in your systems. An AI security audit assesses your governance, data handling practices, policy posture, and vendor risk — the human and process layer that pen tests typically miss.",
  },
];

export default function AuditPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy py-24 px-4 overflow-hidden scanlines">
        <CircuitPattern opacity={0.12} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="section-label mb-4">// AI SECURITY AUDIT SERVICE</p>
          <h1 className="font-display text-white text-4xl md:text-5xl font-black leading-tight mb-6 text-glow">
            Find Out Exactly Where Your AI Stack Is Exposed
          </h1>
          <p className="font-body text-gray-300 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            A professional AI Security Audit Report delivered in 5 business days. No retainer. No fluff. Just the truth about your AI risk.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-teal hover:bg-teal-lt text-white font-display font-bold text-sm px-8 py-4 rounded-lg tracking-wide transition-all duration-200 shadow-lg shadow-teal/30 focus:outline-none focus:ring-2 focus:ring-teal-lt focus:ring-offset-2 focus:ring-offset-navy"
          >
            Book a Free 20-Minute Discovery Call
          </a>
          <p className="font-body text-gray-500 text-sm mt-4">No commitment required. No sales pressure.</p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="section-label mb-3">// THE PROBLEM</p>
            <h2 className="font-display text-navy text-3xl font-bold mb-4">
              Your Team Is Using AI Tools You Don&rsquo;t Know About
            </h2>
            <p className="font-body text-mid-gray text-lg">
              80% of unauthorized AI activity comes from inside the organization. That&rsquo;s not a technology problem — it&rsquo;s a governance problem. And it&rsquo;s creating real liability right now.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RISKS.map((risk) => (
              <RiskCard key={risk.number} {...risk} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE TIERS */}
      <section className="bg-light-bg py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">// AUDIT TIERS</p>
            <h2 className="font-display text-navy text-3xl font-bold mb-4">Choose Your Engagement Level</h2>
            <p className="font-body text-mid-gray text-lg max-w-xl mx-auto">
              Every tier includes a professional audit report. Choose based on the size and complexity of your AI stack.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {TIERS.map((tier) => (
              <ServiceTier key={tier.name} {...tier} />
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S IN THE REPORT */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">// REPORT CONTENTS</p>
            <h2 className="font-display text-navy text-3xl font-bold mb-4">What&rsquo;s in Your Audit Report</h2>
            <p className="font-body text-mid-gray text-lg max-w-xl mx-auto">
              Every report follows the same structured format so you know exactly what you&rsquo;re getting — and can act on it immediately.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REPORT_SECTIONS.map((s) => (
              <div key={s.title} className="relative bg-light-bg rounded-xl p-6 border border-divider">
                <div className="text-3xl mb-3" aria-hidden="true">{s.icon}</div>
                <h3 className="font-display text-navy text-sm font-bold mb-2">{s.title}</h3>
                <p className="font-body text-mid-gray text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="relative bg-navy py-20 px-4 overflow-hidden">
        <CircuitPattern opacity={0.08} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">// AUDIT METHODOLOGY</p>
            <h2 className="font-display text-white text-3xl font-bold mb-4 text-glow">
              The 6-Domain AI Security Audit Framework
            </h2>
            <p className="font-body text-gray-400 text-lg max-w-2xl mx-auto mb-3">
              Every audit follows a structured 6-domain methodology aligned to the leading AI security frameworks.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs font-display font-bold">
              {["NIST AI RMF 1.0", "OWASP LLM Top 10", "ISO/IEC 42001", "NIST CSF 2.0"].map((f) => (
                <span key={f} className="px-3 py-1.5 rounded-full border border-teal/40 text-teal-lt">
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DOMAINS.map((d) => (
              <div key={d.num} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-teal/40 transition-colors">
                <div className="font-display text-teal-lt text-xs font-bold mb-2 opacity-60">{d.num}</div>
                <h3 className="font-display text-white text-sm font-bold mb-2">{d.title}</h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">// FAQ</p>
            <h2 className="font-display text-navy text-3xl font-bold">Common Questions</h2>
          </div>
          <div className="space-y-5">
            {FAQS.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-divider p-6">
                <h3 className="font-display text-navy text-sm font-bold mb-2">{faq.q}</h3>
                <p className="font-body text-mid-gray text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABanner
        headline="Book Your Free 20-Minute AI Risk Discovery Call"
        subhead="Find out exactly where your AI stack is exposed. No commitment required. Proposal delivered within 2 hours of the call."
        primaryCTA={{ label: "Book a Free Discovery Call", href: "https://calendly.com" }}
        secondaryCTA={{ label: "Download Free Risk Overview", href: "/free-risk-overview" }}
      />
    </>
  );
}
