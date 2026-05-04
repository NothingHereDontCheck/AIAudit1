import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/privacy"],
      },
    ],
    sitemap: "https://www.aitrustaudit.com/sitemap.xml",
    host:    "https://www.aitrustaudit.com",
  };
}
