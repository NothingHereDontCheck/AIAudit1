import type { Metadata } from "next";
import LeadMagnetFull from "./LeadMagnetFull";

export const metadata: Metadata = {
  title: "Free AI Security Risk Overview | AITrustAudit.com",
  description:
    "Download the free 1-page AI Security Risk Overview — the 5 critical AI risks every practitioner needs to understand. Free PDF, no credit card required.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Free AI Security Risk Overview",
    description:
      "Download the free 1-page AI Security Risk Overview — the 5 critical AI risks every practitioner needs to understand.",
  },
};

export default function FreeRiskOverviewPage() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center py-16 px-4">
      <LeadMagnetFull />
    </div>
  );
}
