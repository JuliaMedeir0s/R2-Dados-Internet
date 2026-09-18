// Os 11 aplicativos que o Figma (home_02) mostra girando em volta do texto.
//
// `angulo` é a posição inicial em graus, com 0 no topo e crescendo no sentido
// horário; os valores foram medidos sobre o recorte ampliado do Figma, por
// isso o espaçamento é irregular de propósito — é o que dá o ar orgânico da
// composição. `orbita` e `tamanho` também seguem o desenho: os quatro logos
// grandes (Max, Disney+, Premiere e BITT) são as âncoras visuais e ficam
// espalhados pelos quatro quadrantes.
//
// Ícones: PNGs 200x200 exportados do Figma em `public/images/figma/apps/`.
// `formind.png` também foi exportado, mas NÃO aparece no círculo do Figma —
// o 11º logo de lá é o `bitbook.png` (quadrado roxo com o balão de conversa).

export type OrbitaApp = "interna" | "externa";
export type TamanhoApp = "pequeno" | "grande";

export type AppStreaming = {
  nome: string;
  icone: string;
  orbita: OrbitaApp;
  tamanho: TamanhoApp;
  /** graus, 0 = topo, sentido horário */
  angulo: number;
};

export const APPS_STREAMING: AppStreaming[] = [
  { nome: "Mestre Cursos", icone: "/images/figma/apps/mestre-cursos.png", orbita: "externa", tamanho: "pequeno", angulo: 12 },
  { nome: "Kaspersky", icone: "/images/figma/apps/kaspersky.png", orbita: "interna", tamanho: "pequeno", angulo: 26 },
  { nome: "Disney+", icone: "/images/figma/apps/disney.png", orbita: "externa", tamanho: "grande", angulo: 64 },
  { nome: "Globoplay", icone: "/images/figma/apps/globoplay.png", orbita: "externa", tamanho: "pequeno", angulo: 102 },
  { nome: "Sky+ Light", icone: "/images/figma/apps/sky-light.png", orbita: "interna", tamanho: "pequeno", angulo: 135 },
  { nome: "Premiere", icone: "/images/figma/apps/premiere.png", orbita: "externa", tamanho: "grande", angulo: 154 },
  { nome: "ExitLag", icone: "/images/figma/apps/exitlag.png", orbita: "interna", tamanho: "pequeno", angulo: 182 },
  { nome: "BITT Trainers", icone: "/images/figma/apps/bitt.png", orbita: "externa", tamanho: "grande", angulo: 222 },
  { nome: "Deezer", icone: "/images/figma/apps/deezer.png", orbita: "interna", tamanho: "pequeno", angulo: 260 },
  { nome: "Bitbook", icone: "/images/figma/apps/bitbook.png", orbita: "externa", tamanho: "pequeno", angulo: 286 },
  { nome: "Max", icone: "/images/figma/apps/max.png", orbita: "interna", tamanho: "grande", angulo: 329 },
];
