import CategoryPage from "@/components/category/CategoryPage";

export const metadata = {
  title: "AI for Notes & PDFs",
  description:
    "Learn how to use AI to summarize PDFs, improve notes, create flashcards, and understand study material.",
};

export default function NotesPDFsPage() {
  return (
    <CategoryPage
      label="Notes & PDFs"
      title="Turn Your Notes Into Better Study Material"
      description="Learn practical ways to summarize PDFs, organize lecture notes, create flashcards, and understand study material using AI."
      articleCategory="Notes & PDFs"
    />
  );
}