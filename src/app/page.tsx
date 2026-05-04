import type { Metadata } from "next";
import Link from "next/link";
import RiskCard from "@/components/RiskCard";
import StatBand from "@/components/StatBand";
import LeadMagnet from "@/components/LeadMagnet";
import CTABanner from "@/components/CTABanner";
import CircuitPattern from "@/components/CircuitPattern";
import ShieldIcon from "@/components/ShieldIcon";

export const metadata: Metadata = {
  title: "AI Security Engineering Learning Platform | AITrustAudit.com",
  description:
    "Master AI security auditing with practitioner-level courses, frameworks, and tools. Built for security professionals, GRC teams, and engineers who have to do the actual work.",
  openGraph: {
    title: "AI Security Engineering Learning Platform | AITrustAudit.com",
    description:
      "Master AI security auditing with practitioner-level courses, frameworks, and tools. Built for security professionals, GRC teams, and engineers who have to do the actual work.",
  },
};

const RISKS = [
  {
    severity: "critical" as const,
    number: 1,
    title: "Shadow AI: The Invisible Attack Surface",
    description:
      "Employees are using ChatGPT, Claude, and dozens of other AI tools that were never approved. Each one is a potential data exfiltration channel you can't see, can't audit, and can't remediate without the right methodology.",
    question: "How many AI tools is your team using right now — and how many do you actually know about?",
  },
  {
    severity: "high" as const,
    number: 2,
    title: "Client Data in AI Training Pipelines",
    description:
      "When teams paste client files, contracts, or PII into AI tools, that data may be used to train the model. You need to know how to identify this exposure, assess the contractual risk, and build controls that prevent it.",
    question: "Are employees inadvertently training AI models on sensitive data without consent?",
  },
  {
    severity: "high" as const,
    number: 3,
    title: "No AI Acceptable Use Policy",
    description:
      "73% of organizations have no written policy governing AI use. No policy means no accountability and no legal defense when something goes wrong. A practitioner-level course teaches you to build one from scratch.",
    question: "What happens legally if an employee's AI use causes a data breach and there's no policy?",
  },
  {
    severity: "high" as const,
    number: 4,
    title: "Compliance Exposure (HIPAA, GDPR, SOC 2)",
    description:
      "AI tools break existing compliance frameworks in ways current controls don't catch. Knowing how to map AI tool usage against HIPAA, GDPR, and SOC 2 obligations is a core practitioner skill.",
    question: "Have you mapped your AI tool stack against your specific compliance obligations?",
  },
  {
    severity: "medium" as const,
    number: 5,
    title: "Unchecked AI Vendor & Third-Party Risk",
    description:
      "Every AI vendor in your stack is a potential supply chain risk. Most organizations have never reviewed an AI vendor's security posture, data retention policy, or incident response plan. That's a gap this course closes.",
    question: "Who reviewed the security posture of the last AI tool your team adopted?",
  },
];

const STATS = [
  { stat: "8",     label: "Core Modules" },
  { stat: "35",    label: "Practitioner Lessons" },
  { stat: "6.5h",  label: "Total Runtime" },
  { stat: "80%",   label: "of AI data leaks come from inside the organization" },
];

const WHO = [
  {
    icon: "🔒",
    title: "Security Practitioners",
    body: "AI just rewrote the threat model. If you can't speak fluently to AI risk — shadow AI, LLM prompt injection, model poisoning — you're behind. This course gives you the frameworks and practitioner vocabulary to close that gap fast.",
  },
  {
    icon: "📋",
    title: "Compliance & GRC Teams",
    body: "AI broke your existing frameworks before you had time to adapt. NIST CSF doesn't cover LLMs. ISO 27001 doesn't address training data. This is where you get AI-specific compliance mapping built for the work you actually have to do.",
  },
  {
    icon: "🛠️",
    title: "Security Engineers",
    body: "You're building or securing systems that run on AI. Prompt injection, model poisoning, and insecure output handling are real attack vectors — and they require hands-on, engineering-level understanding to address. That's exactly what this teaches.",
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
              The Learning Platform for AI Security Engineering
            </h1>
            <p className="font-body text-teal-lt text-xl mb-8 leading-relaxed">
              Practitioner-level courses, frameworks, and tools for the security professional who has to actually do the work — not just pass a test.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/course"
                className="inline-flex items-center justify-center bg-teal hover:bg-teal-lt text-white font-display font-bold text-sm px-7 py-4 rounded-lg tracking-wide transition-all duration-200 shadow-lg shadow-teal/30 focus:outline-none focus:ring-2 focus:ring-teal-lt focus:ring-offset-2 focus:ring-offset-navy"
              >
                Enroll in the Course
              </Link>
              <Link
                href="/free-risk-overview"
                className="inline-flex items-center justify-center border border-teal-lt/50 hover:border-teal-lt text-teal-lt hover:text-white font-display font-bold text-sm px-7 py-4 rounded-lg tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-lt focus:ring-offset-2 focus:ring-offset-navy"
              >
                Download Free Risk Overview
              </Link>
            </div>
          </div>

          {/* Shield visual */}
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
            <p className="section-label mb-3">// WHAT YOU&apos;LL LEARN TO FIND</p>
            <h2 className="font-display text-navy text-3xl md:text-4xl font-bold mb-4">
              The 5 AI Security Risks Every Practitioner Must Know
            </h2>
            <p className="font-body text-mid-gray text-lg max-w-2xl mx-auto">
              80% of unauthorized AI activity comes from inside the organization. The course teaches you to find, score, and remediate every one of these risks in a real engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RISKS.map((risk) => (
              <RiskCard key={risk.number} {...risk} />
            ))}
            <div className="md:col-span-2 lg:col-span-3 bg-navy rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-teal/30">
              <div>
                <p className="font-display text-teal-lt text-sm font-bold mb-1">READY TO BUILD THESE SKILLS?</p>
                <p className="font-body text-gray-300">
                  The course walks you through finding and remediating every one of these risks — with real templates and a methodology you can use on day one.
                </p>
              </div>
              <Link
                href="/course"
                className="shrink-0 bg-teal hover:bg-teal-lt text-white font-display font-bold text-sm px-6 py-3 rounded-lg tracking-wide transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-teal-lt"
              >
                See the Curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">// WHO THIS COURSE IS FOR</p>
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
        subhead="Know exactly where the risks are. Zero cost. Used by 500+ security professionals to understand their AI exposure."
        source="risk-overview"
      />

      {/* COURSE */}
      <section className="relative bg-navy py-24 px-4 overflow-hidden">
        <CircuitPattern opacity={0.08} />
        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-3">// ONLINE COURSE</p>
            <h2 className="font-display text-white text-3xl font-bold mb-4 text-glow">
              AI Security Audit Fundamentals
            </h2>
            <p className="font-body text-gray-400 text-lg mb-2">
              The only practitioner-level course built for the professional who has to produce an actual report — not just pass a test.
            </p>
            <p className="font-body text-teal-lt font-semibold mb-6">
              Founding rate: $297
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Master the 6-Domain AI Audit Methodology",
                "Apply NIST AI RMF, OWASP LLM Top 10, and ISO 42001",
                "Write a professional-grade audit report",
                "Build a complete AI tool risk inventory",
                "Conduct vendor risk reviews for AI suppliers",
                "Earn a certificate of completion",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm font-body text-gray-300">
                  <span className="text-teal-lt mt-0.5 shrink-0">✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Link
                href="/course"
                className="bg-teal hover:bg-teal-lt text-white font-display font-bold text-sm px-6 py-3 rounded-lg tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-teal-lt"
              >
                Enroll Now — $297
              </Link>
              <Link
                href="/course"
                className="border border-white/20 hover:border-teal-lt text-gray-300 hover:text-teal-lt font-display font-bold text-sm px-6 py-3 rounded-lg tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-teal-lt"
              >
                See Full Curriculum
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { num: "8",    label: "Core Modules" },
              { num: "35",   label: "Practitioner Lessons" },
              { num: "6.5h", label: "Total Runtime" },
              { num: "8+",   label: "Included Templates" },
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
        headline="Start Your AI Security Engineering Journey Today"
        subhead="8 modules. 35 lessons. 6.5 hours of practitioner-level content and a certificate you can put to work."
        primaryCTA={{ label: "Enroll in the Course", href: "/course" }}
        secondaryCTA={{ label: "Download Free Risk Overview", href: "/free-risk-overview" }}
      />
    </>
  );
}
