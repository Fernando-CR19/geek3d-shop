import { Product } from "@/data/Products";
import { WHATSAPP_URL } from "@/utils/constants";

interface ProductProps {
  product: Product;
}

export default function ProductCard({ product }: ProductProps) {
  return (
    <div
      className="pixel-border overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)", transition: "all 0.2s" }}
    >
      <div
        className="w-full aspect-square flex items-center justify-center"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span
            style={{
              color: "var(--accent-cyan)",
              opacity: 0.3,
              fontSize: "3rem",
            }}
          >
            ▣
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2">
        <span
          className="text-xs uppercase tracking-wider"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-orbitron)",
          }}
        >
          {product.category}
        </span>
        <h3
          className="font-semibold text-sm"
          style={{
            color: "var(--text-primary)",
            fontFamily: "var(--font-exo2)",
          }}
        >
          {product.name}
        </h3>

        <span
          className="neon-text font-bold"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          R$ {product.price.toFixed(2).replace(".", ",")}
        </span>

        <a
          href={`${WHATSAPP_URL}?text=Olá! Tenho interesse no ${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap text-center"
          style={{
            border: "2px solid var(--accent-cyan)",
            color: "var(--accent-cyan)",
            fontFamily: "var(--font-orbitron)",
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "0.4rem",
            marginTop: "0.5rem",
            display: "block",
            boxShadow: "var(--neon-glow)",
          }}
        >
          Pedir via WhatsApp
        </a>
      </div>
    </div>
  );
}
