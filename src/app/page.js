import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import LatestArticles from "@/components/home/LatestArticles"
import WhyLearvix from "@/components/home/WhyLearvix";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Categories />
        <LatestArticles />
        <WhyLearvix />
        <CTA />
        <Footer />
      </main>
    </>
  );
}