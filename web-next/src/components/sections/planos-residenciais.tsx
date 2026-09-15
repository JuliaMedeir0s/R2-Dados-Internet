"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Icon } from "@iconify/react";
import "swiper/css";
import "swiper/css/navigation";

import { PLANOS_RESIDENCIAIS, type Plano, type ItemIcon } from "@/lib/planos-data";
import { useUtm, buildPlanWhatsappHref } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

// Ícone quadrado (streaming/assinatura/extra) — os PNGs já vêm com o fundo
// colorido embutido na própria imagem (não é preciso nenhum wrapper circular
// por cima, como no print de referência dos planos).
function IconBadge({ item }: { item: ItemIcon }) {
  if (!item.icon) return null;
  return (
    <span
      title={item.nome}
      className="block h-10 w-10 shrink-0 overflow-hidden rounded-xl"
    >
      <Image
        src={item.icon}
        alt={item.nome}
        width={40}
        height={40}
        className="h-full w-full object-cover"
      />
    </span>
  );
}

// Exportado pra ser reaproveitado fora da Home também (ex.: seções de planos
// em destaque na página Indique e Ganhe, que mostra o mesmo catálogo real,
// só que curado em 2 grupos em vez do carrossel completo).
//
// Layout revisado a partir do print enviado pela Júlia com os 8 planos reais
// lado a lado (o card anterior não batia com o design de verdade): faixa do
// nome do plano, velocidade + selo "MEGA", seção de streaming/extra (rótulo
// muda conforme o plano tem 1 opção incluída ou várias pra escolher — ou "UP
// GRADE disponível no PLANO PRO" nos planos sem streaming), lista de
// benefícios com marcador "+" (itens extras tipo Telefone Fixo/IP Público
// Dinâmico/Mesh entram na mesma lista, em negrito), assinaturas inclusas e
// preço.
export function PlanoCard({
  plano,
  ctaLabel = "Contrate agora",
}: {
  plano: Plano;
  ctaLabel?: string;
}) {
  const utm = useUtm();
  const href = buildPlanWhatsappHref(null, utm, {
    planName: plano.nome,
    speed: plano.velocidade,
  });

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-1/25 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="inline-flex w-fit items-center rounded-br-2xl bg-brand-1 px-6 py-2">
        <span className="font-bold italic text-white">{plano.nome}</span>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6">
        <div className="mt-5 flex items-end">
          <span className="text-6xl font-bold leading-none text-texto">
            {plano.velocidadeMega}
          </span>
          <span className="-ml-3 mb-2 rounded-md bg-brand-1 px-2 py-1 text-xs font-bold uppercase text-white">
            Mega
          </span>
        </div>

        {plano.streamings?.length ? (
          <div className="mt-3 flex items-center gap-3">
            <p className="text-sm font-bold leading-tight text-brand-1">
              {plano.streamings.length > 1 ? (
                <>
                  Escolha 1
                  <br />
                  Streaming
                </>
              ) : (
                <>
                  Streaming
                  <br />
                  Incluído
                </>
              )}
            </p>
            <div className="flex gap-2">
              {plano.streamings.map((item) => (
                <IconBadge key={item.nome} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <p className="mt-3 text-sm leading-snug text-brand-1">
            <span className="font-bold">UP GRADE</span> disponível
            <br />
            no <span className="font-bold">PLANO PRO</span>
          </p>
        )}

        <ul className="mt-4 space-y-2 border-y border-cinza-claro py-4">
          {plano.beneficios.map((beneficio) => (
            <li
              key={beneficio.text}
              className={`flex items-start gap-2 text-sm ${
                beneficio.destaque ? "font-bold text-texto" : "text-texto/80"
              }`}
            >
              <span className="mt-0.5 text-brand-1">+</span>
              {beneficio.text}
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-1">
            Assinaturas Inclusas
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {plano.assinaturas.map((item) => (
              <IconBadge key={item.nome} item={item} />
            ))}
          </div>
        </div>

        {plano.extras?.length ? (
          <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-1">
              {plano.extras.length > 1 ? "Escolha um Extra" : "Extra Incluído"}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {plano.extras.map((item) => (
                <IconBadge key={item.nome} item={item} />
              ))}
            </div>
          </div>
        ) : null}

        <p className="mt-6 flex items-baseline gap-1 text-texto">
          <span className="text-sm">R$</span>
          <span className="text-4xl font-bold">{plano.preco}</span>
          <span className="text-sm">/mês</span>
        </p>
      </div>

      <a href={href} target="_blank" rel="noopener noreferrer">
        <Button className="w-full gap-2 rounded-none rounded-b-3xl">
          <Icon icon="basil:whatsapp-solid" className="h-4 w-4" />
          {ctaLabel}
        </Button>
      </a>
    </div>
  );
}

export function PlanosResidenciais() {
  return (
    <section id="planos" className="scroll-mt-24 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-texto md:text-5xl">
            Muitas formas de te conectar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-texto/70">
            Os melhores planos de fibra óptica para deixar sua casa toda
            conectada.
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides
          breakpoints={{
            768: { slidesPerView: 2, centeredSlides: false },
            1280: { slidesPerView: 3, centeredSlides: false },
          }}
          className="!px-2 !pb-2"
        >
          {PLANOS_RESIDENCIAIS.map((plano) => (
            <SwiperSlide key={plano.nome} className="h-auto py-4">
              <PlanoCard plano={plano} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
