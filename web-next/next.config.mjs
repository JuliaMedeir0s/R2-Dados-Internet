/*
 * Em .mjs (e não .ts) de propósito: o servidor da Hostinger tem glibc antiga
 * demais para o SWC nativo do Next, e com o SWC em WebAssembly o build não
 * consegue transpilar um next.config.ts. Pelo mesmo motivo o `build` do
 * package.json usa `--webpack` (o Turbopack exige o SWC nativo).
 */

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

/** @type {import("next").NextConfig} */
const nextConfig = {
  // Libera o `next dev` para outros aparelhos da mesma rede Wi-Fi (o Next
  // bloqueia recursos de desenvolvimento vindos de outra origem por padrão,
  // e sem isso o HMR não conecta em quem abre pelo IP da máquina).
  // Não afeta produção.
  allowedDevOrigins: ["192.168.1.5", "192.168.1.*"],
  images: {
    // As fotos exportadas do Figma são PNGs grandes: servir AVIF/WebP quando
    // o navegador aceita corta a maior parte do peso.
    formats: ["image/avif", "image/webp"],
    // Fotos dos posts, enviadas pelo Studio do Sanity.
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" }],
  },
  redirects() {
    return ROTAS_ANTIGAS.map((rota) => ({ ...rota, permanent: true }));
  },
};

export default nextConfig;
