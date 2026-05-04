"use client";

import Link from "next/link";

const pillarColors: Record<string, string> = {
  "AI Risk Education":   "#00ACC1",
  "Framework Guides":    "#00796B",
  "Practitioner How-Tos":"#E65100",
  "Compliance":          "#B71C1C",
  "SMB Spotlight":       "#1B5E20",
  "Industry News":       "#546E7A",
};

interface Props {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  hasTemplate?: boolean;
  slug: string;
}

export default function BlogCard({ title, excerpt, category, readTime, date, hasTemplate = false, slug }: Props) {
  const color = pillarColors[category] ?? "#00796B";
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block bg-white rounded-xl border border-divider overflow-hidden hover:border-teal transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
    >
      <div className="h-1" style={{ backgroundColor: color }} />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="font-display text-xs font-bold px-2.5 py-0.5 rounded-full"
            style={{ backgroundColor: `${color}1A`, color }}
          >
            {category}
          </span>
          {hasTemplate && (
            <span className="font-display text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal/10 text-teal border border-teal/30">
              + Template
            </span>
          )}
        </div>
        <h3 className="font-display text-navy text-base font-bold mb-2 leading-snug group-hover:text-teal transition-colors">
          {title}
        </h3>
        <p className="font-body text-mid-gray text-sm mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-xs font-body text-mid-gray/60">
          <span>Jamel Rainey</span>
          <div className="flex items-center gap-3">
            <span>{readTime}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
