"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { SectionTag } from "@/components/ui/section-tag";
import "swiper/css";
import "swiper/css/pagination";

// O hero da Home é um banner ROTATIVO (carrossel) — não uma seção estática.
// Isso já tinha sido a primeira aproximação (o antigo `hero-banner.tsx`,
// hoje marcado DEPRECATED), mas foi trocado por uma seção única quando a
// Júlia mandou o print+foto real do primeiro banner, o que passou a
// impressão de que o hero tinha virado estático. A Júlia confirmou depois
// que não: "o hero, ele vai seguir sendo um banner rotativo" — o carrossel
// continua fazendo parte do design, só que por enquanto só existe UM banner
// de verdade (a foto que ela já mandou). Por isso: implementamos o
// mecanismo de carrossel de verdade (Swiper — mesma lib já usada no
// carrossel de planos residenciais, pra não introduzir uma segunda
// dependência de carrossel no projeto), mas com um `HERO_SLIDES` de um item
// só — pronto pra crescer assim que ela mandar os próximos banners, sem
// precisar mexer na estrutura de novo. Autoplay/paginação (bolinhas) só
// ficam ativos quando existir mais de um slide — com um slide só, mostrar
// esses controles seria só ruído visual sem função nenhuma.
//
// Cada slide reaproveita a mesma estrutura visual já validada com a Júlia:
// foto de fundo (edge-to-edge, `object-cover`) + texto sobreposto por cima,
// com o mesmo respiro fixo em relação ao header flutuante
// (`pt-24`…`lg:pt-40`, ver nota abaixo) e a mesma faixa de proporções
// responsivas (ver nota abaixo). O conteúdo de texto de cada slide fica
// livre (`ReactNode`) em vez de forçar todo banner futuro a ter o mesmo
// título de duas linhas com peso misto — um banner promocional diferente
// pode ter uma composição de texto totalmente diferente.
type HeroSlide = {
  id: string;
  image: string;
  alt: string;
  content: ReactNode;
};

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "muitas-formas-de-conectar",
    // Recorte completo do hero exportado do Figma (fundo laranja + círculos
    // decorativos + foto, com os dois cantos de baixo já cortados via canal
    // alfa, reproduzindo o arredondado de 150px que a Júlia pediu) — ver
    // nota detalhada na seção "Header vira balão..." do doc do projeto.
    image: "/images/home-hero.png",
    alt: "Mulher sorrindo, usando fone de ouvido e segurando o celular, representando a experiência de internet R2",
    content: (
      <div className="max-w-[70%] sm:max-w-sm md:max-w-md">
        <SectionTag tone="white">Internet em Minas Gerais</SectionTag>

        <h1 className="mt-2 text-white sm:mt-4">
          <span className="text-xl font-bold leading-none sm:text-3xl md:text-5xl lg:text-6xl">
            Muitas formas
          </span>{" "}
          <span className="text-xs font-normal sm:text-lg md:text-xl lg:text-2xl">
            de
          </span>
          <br />
          <span className="text-xs font-normal sm:text-lg md:text-xl lg:text-2xl">
            se
          </span>{" "}
          <span className="text-xl font-bold leading-none sm:text-3xl md:text-5xl lg:text-6xl">
            conectar!
          </span>
        </h1>

        <p className="mt-2 text-[0.7rem] text-white/90 sm:mt-4 sm:text-sm md:text-base">
          Seja para assistir filmes, estudar, trabalhar, jogar online ou
          conectar toda a família, a R2 tem o plano ideal para sua
          rotina.
        </p>
      </div>
    ),
  },
];

export function HomeHero() {
  const isCarousel = HERO_SLIDES.length > 1;

  // `pb-16 md:pb-20` na seção (fora do carrossel): a `BenefitsStrip` logo
  // abaixo puxa os cards pra cima com essa mesma medida (`-mt-16`/`-mt-20`)
  // de propósito, pra eles "furarem" a borda arredondada do banner. A
  // imagem real (com o arredondado já embutido no arquivo) preenche a
  // section inteira até o pixel final — sem esse respiro extra, os cards
  // entrariam por cima da própria foto/círculos em vez de só tocar a borda.
  //
  // `relative z-0` aqui (em vez de deixar `z-index: auto`): a Júlia pediu
  // explicitamente pra garantir que o hero não "corte"/atrapalhe o
  // arredondado de baixo por causa da próxima seção — ou seja, que a
  // camada de empilhamento (z-index) do banner rotativo nunca fique por
  // cima da `BenefitsStrip`. Sem isso, tecnicamente a ordem no DOM já
  // resolveria sozinha (a seção seguinte pinta por cima por padrão), mas o
  // Swiper cria por baixo dos panos um contexto de empilhamento próprio
  // (`.swiper { z-index: 1 }` interno, usado pros slides/paginação) — pra
  // não depender de detalhe de implementação de uma lib externa, isolamos
  // essa seção inteira num `z-0` explícito e damos um `z-10` explícito pra
  // seção da `BenefitsStrip` (ver `benefits-strip.tsx`), garantindo por
  // contrato de CSS que ela sempre pinta acima do hero, com ou sem
  // carrossel.
  return (
    <section className="relative z-0 w-full pb-16 md:pb-20">
      <Swiper
        modules={[Autoplay, Pagination]}
        // Mesmo padrão de `lojas.tsx`: `onSwiper` só roda no cliente, depois
        // do init — é onde dá pra consultar o `prefers-reduced-motion` sem
        // risco de divergência entre o HTML do servidor e a hidratação.
        onSwiper={(swiper) => {
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            swiper.autoplay?.stop();
          }
        }}
        autoplay={isCarousel ? { delay: 6000, disableOnInteraction: false } : false}
        pagination={isCarousel ? { clickable: true } : false}
        loop={isCarousel}
        className="hero-swiper"
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {/* `aspect-[1920/954]` (a proporção exata do arquivo) só é usada
                a partir do `lg:` — daí pra cima a imagem cabe inteira, sem
                cortar nada (`object-cover` vira idêntico a "contain" quando
                o container já tem a proporção exata da imagem). Do mobile
                até o `md:` essa proporção nativa (2:1, bem larga e baixa)
                deixaria a faixa da foto curta demais pra caber o texto sem
                colidir com a `BenefitsStrip` logo abaixo — por isso essas
                larguras usam proporções mais altas (`aspect-[4/3]` no
                mobile, `aspect-[16/9]` a partir do `sm:`) com
                `object-right-top`. */}
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[1920/954]">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                // Só o primeiro slide carrega com prioridade (LCP) — quando
                // existir mais de um banner, os demais continuam sendo
                // carregados normalmente (lazy), já que só o primeiro
                // aparece imediatamente ao carregar a página.
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-right-top"
              />

              {/* Respiro no topo (`pt-24`…`lg:pt-40`) em px fixo, não em %,
                  de propósito: a altura do header flutuante não muda com a
                  altura do banner (ela depende só do conteúdo dele — logo,
                  nav, botões), então usar um valor fixo garante que o texto
                  nunca fica escondido atrás do header em nenhuma largura de
                  tela (ver `header.tsx`). */}
              <div className="absolute inset-0">
                <div className="mx-auto h-full max-w-7xl px-4 pt-24 sm:pt-28 md:px-8 md:pt-32 lg:pt-40">
                  {slide.content}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
