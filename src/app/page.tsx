import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import CategoryGrid from "@/components/sections/CategoryGrid";
import Hero from "@/components/sections/Hero";
import ProductGrid from "@/components/sections/ProductGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CategoryGrid />
        <ProductGrid />
        <About />
      </main>
      <Footer />
    </div>
  );
}
