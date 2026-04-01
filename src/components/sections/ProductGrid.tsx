import { products } from "@/data/Products";
import ProductCard from "../ui/ProductCard";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
