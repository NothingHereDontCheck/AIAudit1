import type { Metadata } from "next";
import ModuleCard from "@/components/ModuleCard";
import CTABanner from "@/components/CTABanner";
import CircuitPattern from "@/components/CircuitPattern";

export const metadata: Metadata = {
  title: "AI Security Audit Fundamentals Course",
  description:
    "Learn to audit any AI deployment in 6.5 hours. 8 modules, 35 lessons, full template library included. Practitioner-built for security professionals and compliance teams.",
  openGraph: {
    title: "AI Security Audit Fundamentals Course | AITrustAudit.com",
    description:
      "Learn to audit any AI deployment in 6.5 hours. 8 modules, 35 lessons, full template library included.",
  },
};

const MODULES = [
  {
    number: 0,
    title: "Welcome & Orientation",
    duration: "20 min",
    lessons: [
      "How to use this course",
      "What you'll be able to do when you're done",
      "Downloading your template library",
    ],
    outcome: "You know exactly what's ahead and have all your resources downloaded.",
  },
  {
    number: 1,
    title: "The AI Risk Landscape",
    duration: "45 min",
    lessons: [
      "Why traditional security frameworks miss AI risk",
      "The 5 AI risk categories every auditor must know",
      "Shadow AI: scope, scale, and real-world examples",
      "Data leakage pathways in AI systems",
      "The AI threat actor landscape",
    ],
    outcome: "You can identify and articulate AI-specific risks to any stakeholder.",
  },
  {
    number: 2,
    title: "Frameworks & Standards",
    duration: "55 min",
    lessons: [
      "NIST AI RMF 1.0 — structure, core functions, and how to apply it",
      "OWASP LLM Top 10 — all 10 risks explained with examples",
      "ISO/IEC 42001 — what it covers and when it applies",
      "NIST CSF 2.0 — AI-relevant controls",
      "Mapping frameworks to each other for audit efficiency",
    ],
    outcome: "You can fluently reference and apply the four major AI security frameworks.",
  },
  {
    number: 3,
    title: "Pre-Audit Preparation",
    duration: "50 min",
    lessons: [
      "Scoping the engagement",
      "The AI Tool Intake Questionnaire — walkthrough",
      "Stakeholder interviews: who to talk to and what to ask",
      "Evidence collection checklist",
      "Setting client expectations",
    ],
    outcome: "You can run a professional intake process before a single audit hour begins.",
  },
  {
    number: 4,
    title: "The 6-Domain Audit Methodology",
    duration: "90 min",
    isCore: true,
    lessons: [
      "Domain 1: AI Tool Inventory — discovery techniques",
      "Domain 2: Data Classification — mapping data flows",
      "Domain 3: Access Controls — identity and least privilege",
      "Domain 4: Vendor Risk — reviewing AI vendor security posture",
      "Domain 5: Policy & Governance — what to look for",
      "Domain 6: Compliance Alignment — HIPAA, GDPR, SOC 2",
      "Running the 6-Domain Audit Workbook",
    ],
    outcome: "You can execute a structured AI security audit from start to finish.",
  },
  {
    number: 5,
    title: "Risk Scoring & Findings Documentation",
    duration: "45 min",
    lessons: [
      "Risk scoring methodology — how to rate Critical/High/Medium/Low",
      "Writing a finding: structure, evidence, impact, recommendation",
      "Using the Risk Matrix Template",
      "Common errors in findings documentation",
    ],
    outcome: "You can score and document audit findings in professional report-ready format.",
  },
  {
    number: 6,
    title: "Writing the Audit Report",
    duration: "60 min",
    lessons: [
      "Anatomy of a professional AI audit report",
      "The Executive Summary — how to write for non-technical leaders",
      "Risk matrix presentation",
      "Remediation recommendations — specific, not vague",
      "Using the Full Audit Report Template",
      "Report review and quality checklist",
    ],
    outcome: "You can produce a professional-grade AI security audit report from scratch.",
  },
  {
    number: 7,
    title: "Building the Ongoing Engagement",
    duration: "35 min",
    lessons: [
      "Turning a one-time audit into a recurring engagement",
      "Presenting findings to leadership",
      "Building a 30/60/90-Day Remediation Roadmap",
      "Positioning for policy implementation work",
    ],
    outcome: "You know how to convert an audit engagement into an ongoing client relationship.",
  },
  {
    number: 8,
    title: "Capstone & Certification",
    duration: "45 min",
    lessons: [
      "Capstone scenario — audit a simulated SMB environment",
      "Self-assessment against the 6-Domain framework",
      "Submit your capstone report for review",
      "Certificate of completion",
    ],
    outcome: "You have a completed audit report to use as a portfolio piece and a certificate to show for it.",
  },
];

const BONUSES = [
  { name: "AI Security Risk Overview PDF",      value: "$29",  status: "included" },
  { name: "AI Tool Intake Questionnaire",        value: "$49",  status: "included" },
  { name: "AI Acceptable Use Policy Template",   value: "$79",  status: "included" },
  { name: "AI Vendor Risk Questionnaire",        value: "$49",  status: "included" },
  { name: "6-Domain Audit Workbook (Excel)",     value: "$99",  status: "included" },
  { name: "Risk Matrix Template (Excel)",        value: "$49",  status: "included" },
  { name: "Full Audit Report Template (Word)",   value: "$99",  status: "included" },
  { name: "90-Day Remediation Roadmap Template", value: "$29",  status: "included" },
];

const WHO = [
  "Security professionals who need to add AI-specific skills before their next engagement",
  "GRC and compliance teams whose frameworks don't yet cover AI systems",
  "IT managers at SMBs who are suddenly responsible for AI governance",
  "Consultants who want to offer AI security auditing as a service",
  "Career changers entering the cybersecurity field and want a specialized niche",
];

export default function CoursePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy py-24 px-4 overflow-hidden scanlines">
        <CircuitPattern opacity={0.12} />
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="section-label mb-4">// ONLINE COURSE</p>
          <h1 className="font-display text-white text-4xl md:text-5xl font-black leading-tight mb-6 text-glow">
            Learn to Audit Any AI Deployment in 6.5 Hours
          </h1>
          <p className="font-body text-gray-300 text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
            The only practitioner-level AI security audit course built for the professional who has to actually produce a report — not just pass a test.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-body text-gray-400 mb-10">
            <span>📚 8 Modules · 35 Lessons</span>
            <span>⏱️ 6.5 Hours Self-Paced</span>
            <span>📦 8 Bonus Templates</span>
            <span>🎓 Certificate of Completion</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-display text-teal-lt text-4xl font-black text-glow">$297</span>
                <div className="text-left">
                  <p className="font-body text-gray-500 text-xs line-through">$497</p>
                  <p className="font-display text-amber text-xs font-bold">FOUNDING RATE</p>
                </div>
              </div>
              <p className="font-body text-gray-600 text-xs text-center">30-day money-back guarantee</p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://checkout.stripe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-teal hover:bg-teal-lt text-white font-display font-bold text-sm px-8 py-4 rounded-lg tracking-wide transition-all duration-200 shadow-lg shadow-teal/30 focus:outline-none focus:ring-2 focus:ring-teal-lt focus:ring-offset-2 focus:ring-offset-navy"
              >
                Join the Waitlist — Get Notified First
              </a>
              <p className="font-body text-gray-600 text-xs text-center">Launching soon · Founding rate locked in</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-3">// IS THIS COURSE FOR YOU?</p>
            <h2 className="font-display text-navy text-3xl font-bold">You Should Enroll If You…</h2>
          </div>
          <ul className="space-y-4">
            {WHO.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-light-bg rounded-lg px-5 py-4">
                <span className="text-teal text-lg shrink-0 mt-0.5" aria-hidden="true">✓</span>
                <span className="font-body text-navy text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="bg-light-bg py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-3">// CURRICULUM</p>
            <h2 className="font-display text-navy text-3xl font-bold mb-2">
              Full Course Curriculum
            </h2>
            <p className="font-body text-mid-gray">Click any module to see the lessons inside.</p>
          </div>
          <div className="space-y-3">
            {MODULES.map((mod) => (
              <ModuleCard
                key={mod.number}
                number={mod.number}
                title={mod.title}
                duration={mod.duration}
                lessons={mod.lessons}
                outcome={mod.outcome}
                isCore={mod.isCore ?? false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BONUS LIBRARY */}
      <section className="relative bg-navy py-20 px-4 overflow-hidden">
        <CircuitPattern opacity={0.08} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-3">// BONUS LIBRARY</p>
            <h2 className="font-display text-white text-3xl font-bold mb-2 text-glow">
              8 Ready-to-Use Templates Included
            </h2>
            <p className="font-body text-gray-400">
              Every template you need to run a real engagement — included in the course at no extra cost.
            </p>
          </div>
          <div className="space-y-3 mb-8">
            {BONUSES.map((b) => (
              <div key={b.name} className="flex items-center justify-between bg-white/5 rounded-lg px-5 py-3.5 border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-teal-lt text-sm" aria-hidden="true">✓</span>
                  <span className="font-body text-gray-300 text-sm">{b.name}</span>
                </div>
                <span className="font-display text-gray-500 text-xs font-bold">{b.value} value</span>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-5 flex justify-between items-center">
            <span className="font-body text-gray-400">Total standalone value</span>
            <span className="font-display text-teal-lt font-black text-xl text-glow">$483</span>
          </div>
          <p className="font-body text-gray-600 text-xs text-center mt-2">
            All included with your $297 course enrollment.
          </p>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-3">// YOUR INSTRUCTOR</p>
          </div>
          <div className="bg-light-bg rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center shrink-0 mx-auto md:mx-0">
                <span className="font-display text-teal-lt text-2xl font-black">JR</span>
              </div>
              <div>
                <h3 className="font-display text-navy text-xl font-bold mb-1">Jamel Rainey</h3>
                <p className="font-body text-teal text-sm font-semibold mb-4">AI Security Leader · AITrustAudit.com</p>
                <p className="font-body text-mid-gray text-base leading-relaxed mb-4">
                  I built this course because the resources I needed when I started auditing AI systems didn&rsquo;t exist. Everything out there was either too academic, too enterprise, or too theoretical for someone who has to sit across from a client and actually produce a report.
                </p>
                <p className="font-body text-mid-gray text-base leading-relaxed">
                  This is the course I wish someone had handed me. Frameworks explained in plain English. Methodology you can actually run. Templates ready to use on day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING + GUARANTEE */}
      <section className="bg-light-bg py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label mb-3">// ENROLLMENT</p>
          <h2 className="font-display text-navy text-3xl font-bold mb-8">Secure Your Founding Rate</h2>
          <div className="bg-white rounded-2xl border-2 border-teal p-8 shadow-xl shadow-teal/10">
            <h3 className="font-display text-navy text-xl font-bold mb-1">AI Security Audit Fundamentals</h3>
            <p className="font-body text-mid-gray mb-6">Complete course + all 8 templates + certificate</p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="font-display text-teal text-5xl font-black">$297</span>
              <div className="text-left">
                <p className="font-body text-mid-gray text-sm line-through">$497</p>
                <p className="font-display text-amber text-sm font-bold">FOUNDING RATE</p>
              </div>
            </div>
            <a
              href="https://checkout.stripe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-teal hover:bg-teal-lt text-white font-display font-bold text-sm py-4 rounded-lg tracking-wide transition-colors mb-4 focus:outline-none focus:ring-2 focus:ring-teal-lt"
            >
              Join the Waitlist — Get Notified First
            </a>
            <div className="flex items-center justify-center gap-2 text-sm font-body text-mid-gray">
              <span aria-hidden="true">🛡️</span>
              <span>30-day money-back guarantee. No questions asked.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Don't Wait for Your Next Client to Ask About AI Security"
        subhead="Get the skills, frameworks, and templates to audit AI systems professionally — in one weekend."
        primaryCTA={{ label: "Join the Waitlist", href: "/course" }}
        secondaryCTA={{ label: "See Full Curriculum Above", href: "#curriculum" }}
      />
    </>
  );
}
