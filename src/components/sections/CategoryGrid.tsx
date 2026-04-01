import Link from "next/link";

const categories = [
  "Marvel",
  "DC",
  "Animes",
  "Games",
  "Filmes & Séries",
  "Outros",
];

export default function CategoryGrid() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-center text-2xl font-bold uppercase tracking-widest mb-10 neon-text"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Categorias
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((categorie) => (
            <Link
              key={categorie}
              href={`/catalogo?categoria=${encodeURIComponent(categorie)}`}
            >
              <div
                key={categorie}
                className="pixel-border px-6 py-8 text-center cursor-pointer"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "0.875rem",
                  transition: "all 0.2s",
                }}
              >
                <span className="neon-text text-2xl block mb-2">»</span>
                {categorie}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
