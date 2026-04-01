import { WHATSAPP_URL } from "@/utils/constants";

export default function About() {
  return (
    <section id="sobre" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
        <h2
          className="text-2xl font-bold uppercase tracking-widest neon-text"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Sobre a Loja
        </h2>

        <p
          className="text-justify"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-exo2)",
            lineHeight: "1.8",
          }}
        >
          Olá! Me chamo Fernando e sou apaixonado por cultura geek e impressão
          3D. Aqui você encontra bonecos e colecionáveis geek impressos em 3D
          com alta precisão, usando filamentos de qualidade e muito carinho.
          Aceitamos encomendas personalizadas, seja do seu herói favorito,
          personagem de anime, game ou filme. Se tiver algum projeto em mente,
          manda mensagem, vamos transformar sua ideia em realidade juntos!
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: "2px solid var(--accent-cyan)",
            color: "var(--accent-cyan)",
            fontFamily: "var(--font-orbitron)",
            fontSize: "0.875rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.75rem 2.5rem",
            boxShadow: "var(--neon-glow)",
            display: "inline-block",
            margin: "0 auto",
          }}
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
