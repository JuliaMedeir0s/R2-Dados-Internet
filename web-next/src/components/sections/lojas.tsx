"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { LOJAS } from "@/lib/lojas-data";

export function Lojas() {
  return (
    <section className="bg-brand-1 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-white/80">
            Nossas unidades
          </p>
          <h2 className="mt-1 text-3xl font-bold text-white md:text-4xl">
            Tem sempre uma R2 perto de você
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-2"
        >
          {LOJAS.map((loja) => (
            <SwiperSlide key={`${loja.nome}-${loja.unidade ?? ""}`} className="h-auto py-2">
              <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg">
                <div className="relative h-40 w-full">
                  <Image
                    src={loja.imagem}
                    alt={loja.nome}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1 p-5">
                  <h3 className="font-bold text-texto">{loja.nome}</h3>
                  {loja.unidade && (
                    <p className="text-xs font-semibold text-brand-1">
                      {loja.unidade}
                    </p>
                  )}
                  <p className="text-sm text-texto/70">{loja.endereco}</p>
                  {loja.referencia && (
                    <p className="text-xs italic text-texto/50">
                      {loja.referencia}
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
