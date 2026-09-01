import CategoryPage from "@/components/category/CategoryPage";

export const metadata = {
  title: "AI Tools for Students",
  description:
    "Discover practical AI tools and guides that help students study, research, write, organize notes, and improve productivity.",
};

export default function AIToolsPage() {
  return (
    <CategoryPage
      label="AI Tools"
      title="Useful AI Tools for Smarter Studying"
      description="Discover practical AI tools that can help you understand difficult concepts, organize your work, research more efficiently, and build better study workflows."
      articleCategory="AI Tools"
    />
  );
}