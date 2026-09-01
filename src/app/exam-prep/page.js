import CategoryPage from "@/components/category/CategoryPage";

export const metadata = {
  title: "Exam Preparation",
  description:
    "AI-powered exam preparation guides, revision strategies, and practical study techniques for students.",
};

export default function ExamPrepPage() {
  return (
    <CategoryPage
      label="Exam Prep"
      title="Prepare Smarter for Your Next Exam"
      description="Explore practical revision strategies, AI-powered study workflows, practice techniques, and resources designed to help you prepare more effectively."
      articleCategory="Exam Prep"
    />
  );
}