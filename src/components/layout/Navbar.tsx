import { WHATSAPP_URL } from "@/utils/constantes";

export default function Navbar() {
  return (
    <header
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-color)",
      }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="max-w-6x1 mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className="neon-text text-xl font-black tracking-widest uppercase"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Geek3D<span style={{ color: "var(--text-secondary)" }}>Shop</span>
        </span>

        <nav className="hidden md:flex items-center gap-8 px-6 py-4">
          {["Início", "Catálogo", "Sobre", "Contato"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-exo2)",
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: "2px solid var(--accent-cyan)",
            color: "var(--accent-cyan)",
            fontFamily: "var(--font-orbitron)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.5rem 1rem",
            boxShadow: "var(--neon-glow)",
          }}
        >
          Fazer Pedido
        </a>
      </div>
    </header>
  );
}
