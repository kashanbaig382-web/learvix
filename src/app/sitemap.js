import { articles } from "@/data/articles";
import { articleContent } from "@/data/articleContent";

export default function sitemap() {
  const baseUrl = "https://learvix-ai.vercel.app";

  const staticPages = [
    "",
    "/blog",
    "/ai-tools",
    "/study-guides",
    "/exam-prep",
    "/notes-pdfs",
    "/productivity",
    "/research-writing",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Only include articles that have actual published content
  const publishedArticles = articles.filter(
    (article) => articleContent[article.slug]
  );

  const articleRoutes = publishedArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...articleRoutes];
}