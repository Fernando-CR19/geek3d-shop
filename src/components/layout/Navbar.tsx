import { WHATSAPP_URL } from "@/utils/constants";
import Link from "next/link";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: WHATSAPP_URL },
];

export default function Navbar() {
  return (
    <header
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-color)",
      }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href={"/"}>
          <span
            className="neon-text text-xl font-black tracking-widest uppercase"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Geek3D<span style={{ color: "var(--text-secondary)" }}>Shop</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 px-6 py-4">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "Contato" ? "_blank" : undefined}
              rel={item.label === "Contato" ? "noopener noreferrer" : undefined}
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-exo2)",
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap"
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
