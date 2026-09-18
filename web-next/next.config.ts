import type { NextConfig } from "next";

/**
 * Rotas do site antigo (o app Astro que está no ar) que não existem mais no
 * app novo. Sem estes 308 toda URL já indexada e todo anúncio apontando pra
 * elas cai no 404 no dia da virada.
 *
 * `redirects()` é checado ANTES do filesystem (páginas e `public/`), então
 * vale também pros caminhos de PDF abaixo.
 */
const ROTAS_ANTIGAS = [
  { source: "/planos-residenciais", destination: "/#planos" },
  { source: "/planos-empresariais", destination: "/para-empresas" },
  { source: "/quem", destination: "/nossa-historia" },
  { source: "/indique", destination: "/indique-e-ganhe" },
  { source: "/fale-conosco", destination: "/#faq" },
  { source: "/politica-privacidade", destination: "/politica-de-privacidade" },
  { source: "/direcionador_folder", destination: "/tutoriais" },
];

const nextConfig: NextConfig = {
  images: {
    // As fotos exportadas do Figma são PNGs grandes: servir AVIF/WebP quando
    // o navegador aceita corta a maior parte do peso.
    formats: ["image/avif", "image/webp"],
  },
  redirects() {
    return ROTAS_ANTIGAS.map((rota) => ({ ...rota, permanent: true }));
  },
};

export default nextConfig;
