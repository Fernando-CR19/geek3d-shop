import { WHATSAPP_URL } from "@/utils/constants";

export default function About() {
  return (
    <section className="py-20 px-6">
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
          Olá! Me chamo Fernando, sou desenvolvedor fullstack e sou apaixonado
          pela cultura geek. Este site foi criado como parte do meu portfólio de
          desenvolvimento e também para marcar minha entrada no mercado de
          impressão 3D.
        </p>

        <p
          className="text-justify"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-exo2)",
            lineHeight: "1.8",
          }}
        >
          A Geek3D Shop nasceu da união de duas paixões: tecnologia e cultura
          pop. Aqui você encontra bonecos e colecionáveis geek impressos em 3D
          com alta precisão, usando filamentos de qualidade e muito carinho.
          Aceitamos encomendas personalizadas, seja do seu herói favorito,
          personagem de anime, game ou filme. Se tiver alguma ideia em mente,
          manda mensagem, vamos criar junto!
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
