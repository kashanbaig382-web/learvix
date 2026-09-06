"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function BlogSearch({ articles }) {
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return articles;

    return articles.filter((article) => {
      return (
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
      );
    });
  }, [search, articles]);

  return (
    <div className="blog-search-wrapper">
      <div className="blog-search-box">
        <span className="blog-search-icon">⌕</span>

        <input
          type="search"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search LEARVIX articles"
        />
      </div>

      {search && (
        <p className="blog-search-count">
          {filteredArticles.length}{" "}
          {filteredArticles.length === 1 ? "article" : "articles"} found
        </p>
      )}

      {filteredArticles.length > 0 ? (
        <div className="blog-search-results">
          {filteredArticles.map((article) => (
            <Link
              href={`/blog/${article.slug}`}
              key={article.slug}
              className="blog-search-card"
            >
              <span className="blog-search-category">
                {article.category}
              </span>

              <h2>{article.title}</h2>

              <p>{article.description}</p>

              <div className="blog-search-meta">
                <span>{article.readTime}</span>
                <span>Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="blog-no-results">
          <h2>No articles found</h2>
          <p>
            Try searching for topics like AI tools, PDFs, exams,
            productivity, or research.
          </p>
        </div>
      )}
    </div>
  );
}