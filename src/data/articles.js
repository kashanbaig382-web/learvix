import { articleContent } from "./articleContent";

export const articles = [
  {
    slug: "turn-lecture-notes-into-flashcards-with-ai",
    category: "Notes & PDFs",
    title: "How to Turn Lecture Notes Into Flashcards With AI",
    description:
      "Learn how to turn lecture notes into flashcards with AI using a simple step-by-step workflow, ready-to-use prompt, examples, and study tips.",
    readTime: "10 min read",
  },
  {
    slug: "create-quizzes-from-notes-using-ai",
    category: "Exam Prep",
    title: "How to Create Quizzes From Notes Using AI",
    description:
      "Learn how to transform your notes into practice questions and self-tests using AI.",
    readTime: "7 min read",
  },
  {
    slug: "summarize-lecture-notes-with-ai",
    category: "Study Guides",
    title: "How to Summarize Lecture Notes With AI",
    description:
      "Use AI to organize long lecture notes into clear summaries while keeping the important ideas.",
    readTime: "6 min read",
  },
  {
    slug: "turn-a-pdf-into-flashcards-with-ai",
    category: "Notes & PDFs",
    title: "How to Turn a PDF Into Flashcards With AI",
    description:
      "Learn how to turn a PDF into accurate AI flashcards using a step-by-step workflow for generation, verification, active recall, and smarter revision.",
    readTime: "11 min read",
  },
  {
    slug: "make-a-study-guide-from-notes-with-ai",
    category: "Study Guides",
    title: "How to Make a Study Guide From Notes With AI",
    description:
      "Learn how to turn your notes into a structured AI study guide, verify the content, find weak areas, and build an active revision plan.",
    readTime: "12 min read",
  },
];

export const publishedArticles = articles.filter(
  (article) => articleContent[article.slug]
);