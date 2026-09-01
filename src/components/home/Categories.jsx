import Link from "next/link";

const categories = [
    {
        title: "AI Tools",
        description:
            "Discover useful AI tools that help students study, write, research, and stay productive.",
        href: "/ai-tools",
    },
    {
        title: "Study Guides",
        description:
            "Practical guides to help you learn faster, organize your study routine, and work smarter.",
        href: "/study-guides",
    },
    {
        title: "Exam Prep",
        description:
            "Use AI and proven study techniques to prepare better for quizzes, tests, and exams.",
        href: "/exam-prep",
    },
    {
        title: "Notes & PDFs",
        description:
            "Learn how to summarize PDFs, improve notes, create flashcards, and understand study material.",
        href: "/notes-pdfs",
    },
    {
        title: "Productivity",
        description:
            "Build smarter student workflows for planning, presentations, research, and everyday learning.",
        href: "/productivity",
    },
    {
        title: "Research & Writing",
        description:
            "Use AI responsibly for research, brainstorming, citations, writing, and academic projects.",
        href: "/research-writing",
    },
];

export default function Categories() {
    return (
        <section className="categories-section">
            <div className="container">
                <div className="section-heading">
                    <span>Explore LEARVIX</span>
                    <h2>Everything You Need to Study Smarter</h2>
                    <p>
                        Explore practical resources built around the problems students face
                        every day.
                    </p>
                </div>

                <div className="category-grid">
                    {categories.map((category, index) => (
                        <Link
                            href={category.href}
                            className="category-card"
                            key={category.title}
                        >
                            <div className="category-number">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <h3>{category.title}</h3>
                            <p>{category.description}</p>

                            <span className="category-link">Explore →</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}