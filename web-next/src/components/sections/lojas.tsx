"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay } from "swiper/modules";
import { Icon } from "@iconify/react";
import "swiper/css";

import { LOJAS, type Loja } from "@/lib/lojas-data";
import { ButtonLink } from "@/components/ui/button";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";
import { StackedCard } from "@/components/ui/stacked-card";
import { cn } from "@/lib/utils";

const mapsHref = (loja: Loja) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${loja.endereco}, ${loja.cidade}`
  )}`;

// Setas brancas nas laterais do carrossel (home_03).
function NavArrow({
  side,
  onClick,
}: {
  side: "prev" | "next";
  onClick: () => void;
}) {
  const isPrev = side === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? "Ver lojas anteriores" : "Ver mais lojas"}
      className={cn(
        "absolute top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-brand-1 shadow-md transition-colors hover:bg-white/90",
        isPrev ? "left-0 lg:-left-4" : "right-0 lg:-right-4"
      )}
    >
      <Icon
        icon={isPrev ? "ph:caret-left-bold" : "ph:caret-right-bold"}
        className="h-4 w-4"
      />
    </button>
  );
}

export function Lojas() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="bg-brand-1 pb-16 pt-6">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10">
          <SectionTag tone="white">Conheça Nossas Lojas</SectionTag>
          <SectionTitle
            light="Tem sempre uma"
            bold="R2 perto de você"
            tone="white"
            className="mt-3 text-2xl md:text-3xl"
          />
          <p className="mt-3 max-w-4xl text-sm text-white/90">
            A R2 está presente em Belo Horizonte, Contagem, Vetor Norte e
            região, oferecendo atendimento rápido e suporte próximo dos nossos
            clientes.
          </p>
        </div>

        <div className="relative">
          <Swiper
            // `onSwiper` só roda no cliente, depois do init: é onde dá pra
            // consultar o `prefers-reduced-motion` sem risco de divergência
            // entre o HTML do servidor e a hidratação.
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                swiper.autoplay?.stop();
              }
            }}
            modules={[Autoplay]}
            spaceBetween={20}
            // `auto` + largura em CSS no slide, em vez de `breakpoints`: a
            // quantidade de cards visiveis passa a ser uma regra de estilo
            // que da pra ler no proprio slide, e continua valendo mesmo se o
            // JS do carrossel demorar a assumir.
            slidesPerView="auto"
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="!px-1 !py-3"
          >
            {LOJAS.map((loja) => (
              <SwiperSlide
                key={`${loja.nome}-${loja.unidade ?? ""}`}
                className="h-auto w-[85%] sm:w-[47%] lg:w-[31.5%]"
              >
                <StackedCard className="flex flex-col p-2">
                  <div className="relative h-44 w-full overflow-hidden rounded-xl">
                    <Image
                      src={loja.imagem}
                      alt={loja.nome}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-1 p-4">
                    <h3 className="font-bold text-brand-1">{loja.nome}</h3>
                    {loja.unidade && (
                      <p className="text-xs text-texto/60">{loja.unidade}</p>
                    )}
                    <p className="text-sm text-texto/80">{loja.endereco}</p>
                    {loja.referencia && (
                      <p className="text-xs italic text-texto/60">
                        {loja.referencia}
                      </p>
                    )}

                    <div className="mt-auto pt-4">
                      <ButtonLink
                        href={mapsHref(loja)}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        className="flex w-full gap-2 border-brand-1 text-brand-1 hover:bg-brand-1 hover:text-white"
                      >
                        <Icon icon="ph:map-pin-fill" className="h-4 w-4" />
                        Como Chegar
                      </ButtonLink>
                    </div>
                  </div>
                </StackedCard>
              </SwiperSlide>
            ))}
          </Swiper>

          <NavArrow side="prev" onClick={() => swiperRef.current?.slidePrev()} />
          <NavArrow side="next" onClick={() => swiperRef.current?.slideNext()} />
        </div>
      </div>
    </section>
  );
}
