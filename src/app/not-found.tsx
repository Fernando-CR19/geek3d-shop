import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center px-6 text-center"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <span
        className="neon-text text-8xl font-black mb-4"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        404
      </span>

      <span
        className="neon-text text-2xl font-bold uppercase tracking-widest mb-4"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        Página não encontrada
      </span>

      <p
        className="mb-10 max-w-md"
        style={{
          color: "var(--text-secondary)",
          fontFamily: "var(--font-exo2)",
          lineHeight: "1.8",
        }}
      >
        Parece que essa página não existe ou foi removida. Volte para a home e
        continue explorando!
      </p>

      <Link
        href="/"
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
        Voltar para a Home
      </Link>
    </div>
  );
}
