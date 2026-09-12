import { articles } from "@/data/articles";
import { articleContent } from "@/data/articleContent";

export default function sitemap() {
  const baseUrl = "https://learvix-ai.vercel.app";

  // Only include articles that have actual published content
  const publishedArticles = articles.filter(
    (article) => articleContent[article.slug]
  );

  // Get the latest modified date from a group of articles
  const getLatestModified = (articleList, fallback = "2026-09-02") => {
    if (!articleList.length) return fallback;

    return articleList.reduce((latest, article) => {
      const date = article.updatedAt || article.publishedAt;
      return date > latest ? date : latest;
    }, fallback);
  };

  const latestArticleDate = getLatestModified(publishedArticles);

  const getCategoryLastModified = (category) => {
    const categoryArticles = publishedArticles.filter(
      (article) => article.category === category
    );

    return getLatestModified(categoryArticles);
  };

  const staticPages = [
    {
      route: "",
      lastModified: latestArticleDate,
    },
    {
      route: "/blog",
      lastModified: latestArticleDate,
    },
    {
      route: "/ai-tools",
      lastModified: getCategoryLastModified("AI Tools"),
    },
    {
      route: "/study-guides",
      lastModified: getCategoryLastModified("Study Guides"),
    },
    {
      route: "/exam-prep",
      lastModified: getCategoryLastModified("Exam Prep"),
    },
    {
      route: "/notes-pdfs",
      lastModified: getCategoryLastModified("Notes & PDFs"),
    },
    {
      route: "/productivity",
      lastModified: getCategoryLastModified("Productivity"),
    },
    {
      route: "/research-writing",
      lastModified: getCategoryLastModified("Research & Writing"),
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

  const articleRoutes = publishedArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.updatedAt || article.publishedAt,
  }));

  return [...staticRoutes, ...articleRoutes];
}