import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aitrustaudit.com"),
  title: {
    default: "AI Security Audit for SMBs | AITrustAudit.com",
    template: "%s | AITrustAudit.com",
  },
  description:
    "Professional AI security audit reports for small and medium businesses. Get a clear picture of your AI risk in 5 business days. Starting at $499.",
  keywords: ["AI security audit", "AI risk assessment", "SMB AI security", "shadow AI", "AI compliance"],
  authors: [{ name: "Jamel Rainey", url: "https://www.aitrustaudit.com/about" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aitrustaudit.com",
    siteName: "AITrustAudit.com",
    title: "AI Security Audit for SMBs | AITrustAudit.com",
    description:
      "Professional AI security audit reports for small and medium businesses. Get a clear picture of your AI risk in 5 business days. Starting at $499.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "AITrustAudit.com — Securing the Intelligent Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Security Audit for SMBs | AITrustAudit.com",
    description:
      "Professional AI security audit reports for small and medium businesses. Starting at $499.",
    images: ["/og-default.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-body">
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
