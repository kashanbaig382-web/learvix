import CategoryPage from "@/components/category/CategoryPage";

export const metadata = {
  title: "Student Productivity",
  description:
    "Practical AI productivity guides and smarter workflows for students.",
};

export default function ProductivityPage() {
  return (
    <CategoryPage
      label="Productivity"
      title="Build a Smarter Student Workflow"
      description="Discover practical ways to use AI for planning, organization, presentations, time management, and everyday student productivity."
      articleCategory="Productivity"
    />
  );
}