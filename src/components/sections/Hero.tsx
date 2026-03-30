import { WHATSAPP_URL } from "@/utils/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,240,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6 relative z-10">
        <span
          className="pixel-border px-4 py-1 text-xs uppercase tracking-widest"
          style={{
            color: "var(--accent-cyan)",
            fontFamily: "var(--font-orbitron)",
          }}
        >
          Bem vindo(a) a Geek3D Shop
        </span>

        <h1
          className="text-4xl md:text-6xl font-black uppercase leading-tight"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Seu personagem favorito{" "}
          <span className="neon-text">em suas mãos</span>
        </h1>

        <p
          className="max-w-xl text-lg leading-relaxed"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-exo2)",
          }}
        >
          Bonecos e colecionáveis geek impressos em 3D com alta precisão.
          Marvel, DC, Anime, Games e muito mais — feitos sob encomenda.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#catalogo"
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
            Ver Catálogo
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "2px solid var(--text-secondary)",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-orbitron)",
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.75rem 2rem",
            }}
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}
