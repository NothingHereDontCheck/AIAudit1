import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AITrustAudit.com privacy policy — how we collect, use, and protect your data.",
  robots: { index: false, follow: false },
};

const EFFECTIVE = "May 1, 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="section-label mb-3">// LEGAL</p>
        <h1 className="font-display text-navy text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="font-body text-mid-gray text-sm mb-10">Effective: {EFFECTIVE}</p>

        <div className="prose-article space-y-8 font-body text-mid-gray text-base leading-relaxed">
          <section>
            <h2 className="font-display text-navy text-xl font-bold mb-3">Who We Are</h2>
            <p>
              AITrustAudit.com is an independent education and consulting brand operated by Jamel Rainey. We provide AI security education resources, online courses, and professional AI security audit services for small and medium businesses.
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-xl font-bold mb-3">What Data We Collect</h2>
            <p className="mb-3">We collect the following data when you interact with our site:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-navy">Email address and first name</strong> — when you subscribe to our newsletter or download a free resource</li>
              <li><strong className="text-navy">Name and contact information</strong> — when you book a discovery call or request an audit engagement</li>
              <li><strong className="text-navy">Payment information</strong> — processed by Stripe (we never see or store raw card data)</li>
              <li><strong className="text-navy">Website analytics</strong> — aggregated, anonymized traffic data via Plausible Analytics (no IP tracking, no cookies)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-navy text-xl font-bold mb-3">How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To deliver requested resources (free PDF, course access, audit report)</li>
              <li>To send The AI Trust Briefing newsletter (only if you opted in)</li>
              <li>To communicate about your audit engagement</li>
              <li>To process course or service payments via Stripe</li>
              <li>To improve our content and services using aggregated analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-navy text-xl font-bold mb-3">Email & Newsletter</h2>
            <p>
              Email list management is handled by ConvertKit. By subscribing, you agree to ConvertKit&rsquo;s privacy policy. We do not sell, rent, or share email addresses with any third party. You can unsubscribe from any email using the unsubscribe link in the footer of every message.
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-xl font-bold mb-3">Third-Party Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-navy">Stripe</strong> — payment processing</li>
              <li><strong className="text-navy">ConvertKit</strong> — email list management and newsletter delivery</li>
              <li><strong className="text-navy">Calendly</strong> — discovery call scheduling</li>
              <li><strong className="text-navy">Plausible Analytics</strong> — privacy-first website analytics (no cookies, no IP tracking, GDPR-compliant by default)</li>
              <li><strong className="text-navy">Vercel</strong> — website hosting</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-navy text-xl font-bold mb-3">Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email subscribers: retained until unsubscribed</li>
              <li>Audit engagement data: 90 days post-engagement, then securely deleted</li>
              <li>Payment records: retained per Stripe&rsquo;s standard retention policy (typically 7 years for tax/legal purposes)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-navy text-xl font-bold mb-3">Your Rights</h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at privacy@aitrustaudit.com.
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-xl font-bold mb-3">Cookies</h2>
            <p>
              We use Plausible Analytics, which is cookieless and does not use browser fingerprinting. We do not place advertising, tracking, or analytics cookies on your device. Functionality cookies may be set by embedded third-party services (Calendly, Stripe checkout).
            </p>
          </section>

          <section>
            <h2 className="font-display text-navy text-xl font-bold mb-3">Contact</h2>
            <p>
              Questions about this policy: privacy@aitrustaudit.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
