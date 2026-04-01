import type { Metadata } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Geek3D Shop | Bonecos Geek Impressos em 3D",
  description:
    "Bonecos e colecionáveis geek impressos em 3D. Marvel, DC, Anime, Games e muito mais. Feitos sob encomenda.",
  openGraph: {
    title: "Geek3D Shop",
    description:
      "Bonecos geek impressos em 3D — colecionáveis únicos feitos sob encomenda.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${orbitron.variable} ${exo2.variable} h-full`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
