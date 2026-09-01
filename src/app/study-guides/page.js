import CategoryPage from "@/components/category/CategoryPage";

export const metadata = {
  title: "Study Guides",
  description:
    "Practical study guides to help students learn faster, organize better, and use AI more effectively.",
};

export default function StudyGuidesPage() {
  return (
    <CategoryPage
      label="Study Guides"
      title="Practical Guides for Smarter Learning"
      description="Explore clear and practical study guides designed to help you learn more effectively, build better study habits, and use AI responsibly."
      articleCategory="Study Guides"
    />
  );
}