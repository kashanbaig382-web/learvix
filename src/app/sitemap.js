import { articles } from "@/data/articles";
import { articleContent } from "@/data/articleContent";

export default function sitemap() {
  const baseUrl = "https://learvix-ai.vercel.app";

  const staticPages = [
    {
      route: "",
      lastModified: "2026-09-02",
    },
    {
      route: "/blog",
      lastModified: "2026-09-02",
    },
    {
      route: "/ai-tools",
      lastModified: "2026-09-02",
    },
    {
      route: "/study-guides",
      lastModified: "2026-09-02",
    },
    {
      route: "/exam-prep",
      lastModified: "2026-09-02",
    },
    {
      route: "/notes-pdfs",
      lastModified: "2026-09-02",
    },
    {
      route: "/productivity",
      lastModified: "2026-09-02",
    },
    {
      route: "/research-writing",
      lastModified: "2026-09-02",
    },
    {
      route: "/about",
      lastModified: "2026-09-02",
    },
    {
      route: "/contact",
      lastModified: "2026-09-03",
    },
    {
      route: "/privacy-policy",
      lastModified: "2026-09-02",
    },
    {
      route: "/terms",
      lastModified: "2026-09-02",
    },
    {
      route: "/disclaimer",
      lastModified: "2026-09-02",
    },
  ];

  const staticRoutes = staticPages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: page.lastModified,
  }));

  // Only include articles that have actual published content
  const publishedArticles = articles.filter(
    (article) => articleContent[article.slug]
  );

  const articleRoutes = publishedArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.updatedAt,
  }));

  return [...staticRoutes, ...articleRoutes];
}