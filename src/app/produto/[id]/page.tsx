import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { products } from "@/data/Products";
import { WHATSAPP_URL } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 py-16 px-6">
        <div className="max-w-4xl mx-auto mb-8">
          <Link
            href="/"
            style={{
              color: "var(--accent-cyan)",
              fontFamily: "var(--font-orbitron)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Voltar
          </Link>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="flex flex-col gap-4 md:w-1/2">
            <div
              className="w-full aspect-square flex items-center justify-center pixel-border relative"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <span
                  style={{
                    color: "var(--accent-cyan)",
                    opacity: 0.3,
                    fontSize: "5rem",
                  }}
                >
                  ▣
                </span>
              )}
            </div>

            {product.images.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className="aspect-square pixel-border overflow-hidden relative"
                    style={{ backgroundColor: "var(--bg-secondary)" }}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6 md:w-1/2">
            <span
              className="text-xs uppercase tracking-wider"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-orbitron)",
              }}
            >
              {product.category}
            </span>

            <h1
              className="text-3xl font-black uppercase"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              {product.name}
            </h1>

            <span
              className="neon-text text-2xl font-bold"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              R$ {product.price.toFixed(2).replace(".", ",")}
            </span>

            <div className="pixel-divider" />

            <p
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-exo2)",
                lineHeight: "1.8",
              }}
            >
              {product.description}
            </p>

            <div>
              <span
                className="text-xs uppercase tracking-wider block mb-1"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-orbitron)",
                }}
              >
                Dimensões
              </span>
              <span
                style={{
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-exo2)",
                }}
              >
                {product.dimensions}
              </span>
            </div>

            {product.modelAuthor && (
              <div>
                <span
                  className="text-xs uppercase tracking-wider block mb-1"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-orbitron)",
                  }}
                >
                  Modelo por
                </span>
                <span
                  style={{
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-exo2)",
                  }}
                >
                  {product.modelAuthor}
                </span>
              </div>
            )}

            <div className="pixel-divider" />

            <a
              href={`${WHATSAPP_URL}?text=Olá! Tenho interesse no ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center w-full block"
              style={{
                border: "2px solid var(--accent-cyan)",
                color: "var(--accent-cyan)",
                fontFamily: "var(--font-orbitron)",
                fontSize: "0.875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.75rem",
                boxShadow: "var(--neon-glow)",
              }}
            >
              Pedir via WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
