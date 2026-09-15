"use client";

// DEPRECATED: substituído por `home-hero.tsx` depois que a Júlia enviou o
// print real do topo da Home (header + hero) — o hero de verdade não é um
// carrossel de banners, é uma seção única com título/parágrafo/foto. Este
// arquivo não é mais importado em nenhuma página; mantido só porque não
// consigo apagar arquivos direto na sua máquina por aqui — pode apagar
// `hero-banner.tsx` manualmente se quiser.
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// NOTA: banners reaproveitados do site atual como placeholder. O Figma
// (arquivo "R2", página DESIGN FINAL) tem uma nova ilustração de hero em
// "DOBRA 01", mas a extração via MCP está bloqueada pelo limite de chamadas
// do plano Starter — trocar assim que o acesso for restabelecido.
const BANNERS = [
  {
    desktop: "/banners/mes_do_cliente_r2.webp",
    mobile: "/banners/mes_do_cliente_r2_mobile.webp",
    alt: "Promoção Mês do Cliente R2",
  },
  {
    desktop: "/banners/Banner3.png",
    mobile: "/banners/Banner3Mobile.png",
    alt: "R2 Internet",
  },
  {
    desktop: "/banners/Banner4.png",
    mobile: "/banners/Banner4Mobile.png",
    alt: "R2 Internet",
  },
];

export function HeroBanner() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        loop
      >
        {BANNERS.map((banner) => (
          <SwiperSlide key={banner.desktop}>
            <div className="relative w-full">
              <Image
                src={banner.desktop}
                alt={banner.alt}
                width={1920}
                height={640}
                className="hidden h-auto w-full object-cover md:block"
                priority
              />
              <Image
                src={banner.mobile}
                alt={banner.alt}
                width={768}
                height={640}
                className="block h-auto w-full object-cover md:hidden"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
