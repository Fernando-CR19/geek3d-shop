import { products } from "@/data/Products";
import ProductCard from "../ui/ProductCard";
import Link from "next/link";

export default function ProductGrid() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-center text-2xl font-bold uppercase tracking-widest mb-10 neon-text"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Produtos em Destaque
        </h2>

        <div>
          {featuredProducts.length === 0 ? (
            <div className="flex flex-col items-center">
              <p
                className="text-lg uppercase tracking-widest"
                style={{
                  fontFamily: "var(--font-orbitron)",
                  color: "var(--accent-cyan)",
                }}
              >
                Em breve
              </p>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-exo2)",
                  lineHeight: "1.8",
                }}
              >
                Novos produtos chegando em breve. Fique de olho!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/catalogo"
            style={{
              border: "2px solid var(--accent-cyan)",
              color: "var(--accent-cyan)",
              fontFamily: "var(--font-orbitron)",
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.75rem 2rem",
              boxShadow: "var(--neon-glow)",
            }}
          >
            Ver Todos os Produtos
          </Link>
        </div>
      </div>
    </section>
  );
}
