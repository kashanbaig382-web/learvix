import CategoryPage from "@/components/category/CategoryPage";

export const metadata = {
  title: "AI for Research & Writing",
  description:
    "Learn responsible ways to use AI for student research, brainstorming, writing, citations, and academic projects.",
};

export default function ResearchWritingPage() {
  return (
    <CategoryPage
      label="Research & Writing"
      title="Research and Write Smarter With AI"
      description="Learn responsible ways to use AI for research, brainstorming, writing, citations, and academic projects without replacing your own thinking."
      articleCategory="Research & Writing"
    />
  );
}