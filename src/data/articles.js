import { articleContent } from "./articleContent";

export const articles = [
  {
    slug: "turn-lecture-notes-into-flashcards-with-ai",
    category: "Notes & PDFs",
    title: "How to Turn Lecture Notes Into Flashcards With AI",
    description:
      "Learn how to turn lecture notes into flashcards with AI using a simple step-by-step workflow, ready-to-use prompt, examples, and study tips.",
    readTime: "10 min read",
    author: "Mirza Kashan",
    publishedAt: "2026-09-01",
    updatedAt: "2026-09-01",
  },
  {
    slug: "create-quizzes-from-notes-using-ai",
    category: "Exam Prep",
    title: "How to Create Quizzes From Notes Using AI",
    description:
      "Learn how to transform your notes into practice questions and self-tests using AI.",
    readTime: "7 min read",
    author: "Mirza Kashan",
    publishedAt: "2026-09-02",
    updatedAt: "2026-09-02",
  },
  {
    slug: "summarize-lecture-notes-with-ai",
    category: "Study Guides",
    title: "How to Summarize Lecture Notes With AI",
    description:
      "Use AI to organize long lecture notes into clear summaries while keeping the important ideas.",
    readTime: "6 min read",
    author: "Mirza Kashan",
    publishedAt: "2026-09-02",
    updatedAt: "2026-09-02",
  },
  {
    slug: "turn-a-pdf-into-flashcards-with-ai",
    category: "Notes & PDFs",
    title: "How to Turn a PDF Into Flashcards With AI",
    description:
      "Learn how to turn a PDF into accurate AI flashcards using a step-by-step workflow for generation, verification, active recall, and smarter revision.",
    readTime: "11 min read",
    author: "Mirza Kashan",
    publishedAt: "2026-09-02",
    updatedAt: "2026-09-02",
  },
  {
    slug: "make-a-study-guide-from-notes-with-ai",
    category: "Study Guides",
    title: "How to Make a Study Guide From Notes With AI",
    description:
      "Learn how to turn your notes into a structured AI study guide, verify the content, find weak areas, and build an active revision plan.",
    readTime: "12 min read",
    author: "Mirza Kashan",
    publishedAt: "2026-09-02",
    updatedAt: "2026-09-02",
  },
  {
    slug: "use-ai-to-study-for-exams",
    category: "Exam Prep",
    title: "How to Use AI to Study for Exams",
    description:
      "Learn how to use AI for exam preparation with diagnostic quizzes, weak-area analysis, active recall, revision planning, and mock exams.",
    readTime: "14 min read",
    author: "Mirza Kashan",
    publishedAt: "2026-09-02",
    updatedAt: "2026-09-02",
  },
  {
    slug: "turn-a-pdf-into-study-notes-with-ai",
    category: "Notes & PDFs",
    title: "How to Turn a PDF Into Study Notes With AI",
    description:
      "Learn how to turn a PDF into structured study notes with AI, verify the output against the source, simplify difficult concepts, and create revision-ready notes.",
    readTime: "12 min read",
    author: "Mirza Kashan",
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
  },
  {
    slug: "use-ai-for-active-recall",
    category: "Productivity",
    title: "How to Use AI for Active Recall: A Smarter Study Workflow",
    description:
      "Learn how to use AI for active recall by generating questions, testing yourself from memory, finding weak areas, and building a smarter revision loop.",
    readTime: "12 min read",
    author: "Mirza Kashan",
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
  },
  {
    slug: "make-a-study-schedule-with-ai",
    category: "Productivity",
    title: "How to Make a Study Schedule With AI That You Can Actually Follow",
    description:
      "Learn how to make a realistic study schedule with AI using your deadlines, available time, weak subjects, revision needs, and weekly progress.",
    readTime: "13 min read",
    author: "Mirza Kashan",
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
  },
  {
    slug: "best-free-ai-note-taking-tools-for-students",
    category: "AI Tools",
    title: "Best Free AI Note-Taking Tools for Students in 2026",
    description:
      "Compare the best free AI note-taking tools for students in 2026 for PDFs, lectures, flashcards, organization, revision, and source-grounded studying.",
    readTime: "14 min read",
    author: "Mirza Kashan",
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
  },
  {
    slug: "use-ai-for-academic-research-without-cheating",
    category: "Research & Writing",
    title: "How to Use AI for Academic Research Without Cheating",
    description:
      "Learn how to use AI for academic research responsibly to find research directions, understand papers, verify sources, organize evidence, and protect academic integrity.",
    readTime: "14 min read",
    author: "Mirza Kashan",
    publishedAt: "2026-09-05",
    updatedAt: "2026-09-05",
  },
  {
    slug: "use-ai-to-explain-difficult-concepts",
    category: "Study Guides",
    title: "How to Use AI to Explain Difficult Concepts You Don't Understand",
    description:
      "Learn how to use AI to understand difficult concepts through simpler explanations, examples, analogies, questions, teach-back, practice, and verification.",
    readTime: "13 min read",
    author: "Mirza Kashan",
    publishedAt: "2026-09-05",
    updatedAt: "2026-09-05",
  },
];

export const publishedArticles = articles.filter(
  (article) => articleContent[article.slug]
);