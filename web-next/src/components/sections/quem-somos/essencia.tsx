import { Icon } from "@iconify/react";

// Texto 100% real e legível no PDF. A ilustração da casa ainda não existe
// no repo (arte nova do Figma) — bloco com ícone no lugar por ora.
export function Essencia() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 md:flex-row md:px-8">
        <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-full bg-cinza-claro md:h-64 md:w-64">
          <Icon icon="mdi:home-city-outline" className="h-20 w-20 text-brand-1 md:h-28 md:w-28" />
        </div>

        <div className="text-center md:text-left">
          <span className="inline-block rounded-full border border-brand-1 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-1">
            Nossa Essência
          </span>
          <h2 className="mt-2 text-2xl font-bold text-texto md:text-3xl">
            <span className="text-brand-1">Conectando</span> pessoas, empresas e histórias todos os
            dias
          </h2>
          <p className="mt-3 max-w-xl text-texto/70">
            A R2 nasceu com o propósito de levar internet de qualidade, estabilidade e atendimento
            de verdade para quem precisa estar conectado.
          </p>
        </div>
      </div>
    </section>
  );
}
