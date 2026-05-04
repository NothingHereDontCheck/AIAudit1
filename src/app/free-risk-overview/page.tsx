import type { Metadata } from "next";
import LeadMagnetFull from "./LeadMagnetFull";

export const metadata: Metadata = {
  title: "Free AI Security Risk Overview | AITrustAudit.com",
  description:
    "Download the free 1-page AI Security Risk Overview — the 5 AI risks threatening your business right now. Used by security consultants to brief SMB leadership.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Free AI Security Risk Overview",
    description:
      "Download the free 1-page AI Security Risk Overview — used by security consultants to brief SMB leadership.",
  },
};

export default function FreeRiskOverviewPage() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center py-16 px-4">
      <LeadMagnetFull />
    </div>
  );
}
