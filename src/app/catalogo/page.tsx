"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/Products";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const categories = [
  "Todos",
  "Marvel",
  "DC",
  "Animes",
  "Games",
  "Filmes & Séries",
  "Outros",
];

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const categoria = searchParams.get("categoria");
    if (categoria && categories.includes(categoria)) {
      setActiveCategory(categoria);
    } else {
      setActiveCategory("Todos");
    }
  }, [searchParams]);

  const handleCategoryChange = (categorie: string) => {
    if (categorie === "Todos") {
      router.push("/catalogo");
    } else {
      router.push(`/catalogo?categoria=${encodeURIComponent(categorie)}`);
    }
  };

  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-center text-3xl font-black uppercase tracking-widest mb-10 neon-text"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Catálogo
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((categorie) => (
              <button
                key={categorie}
                onClick={() => handleCategoryChange(categorie)}
                className="whitespace-nowrap"
                style={{
                  border: `2px solid ${activeCategory === categorie ? "var(--accent-cyan)" : "var(--border-color)"}`,
                  color:
                    activeCategory === categorie
                      ? "var(--accent-cyan)"
                      : "var(--text-secondary)",
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0.4rem 1rem",
                  boxShadow:
                    activeCategory === categorie ? "var(--neon-glow)" : "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {categorie}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p
              className="text-center mt-12"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-exo2)",
              }}
            >
              Nenhum produto encontrado nessa categoria ainda.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
