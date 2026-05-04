import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.aitrustaudit.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                        lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0  },
    { url: `${base}/course`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/free-risk-overview`,lastModified: new Date(), changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/blog`,              lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8  },
    { url: `${base}/about`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.6  },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url:             `${base}/blog/${post.slug}`,
    lastModified:    new Date(),
    changeFrequency: "monthly" as const,
    priority:        0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
