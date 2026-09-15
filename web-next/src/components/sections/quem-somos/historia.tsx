import { Icon } from "@iconify/react";

// Texto 100% real e legível no PDF. A ilustração do mapa de Minas Gerais
// com as cidades conectadas ainda não existe no repo — bloco com ícone no
// lugar até a arte ser exportada do Figma.
export function Historia() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 md:flex-row md:px-8">
        <div className="text-center md:text-left">
          <span className="inline-block rounded-full border border-brand-1 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-1">
            Nossa História
          </span>
          <h2 className="mt-2 text-2xl font-bold text-texto md:text-3xl">
            Levando ultra <span className="text-brand-1">velocidade</span> ao interior de Minas
            Gerais
          </h2>
          <p className="mt-3 max-w-xl text-texto/70">
            A R2 Internet foi fundada com o objetivo de levar o melhor em internet ao interior de
            cidades pequenas. Hoje estamos em constante expansão e já estamos conectando mais de 12
            cidades em Minas Gerais à ultra velocidade. Nossa sede física está situada em prédio
            próprio, onde temos a dedicação de um time de suporte especializado 24h.
          </p>
          <p className="mt-3 max-w-xl text-texto/70">
            Comprometidos em oferecer internet de fibra óptica de qualidade, investimos em
            tecnologia e atendimento para garantir a estabilidade máxima, seja para nossos clientes
            residenciais ou comerciais.
          </p>
        </div>

        <div className="flex h-56 w-56 shrink-0 items-center justify-center rounded-3xl bg-brand-8/20 md:h-72 md:w-72">
          <Icon icon="mdi:map-marker-radius-outline" className="h-24 w-24 text-brand-1 md:h-32 md:w-32" />
        </div>
      </div>
    </section>
  );
}
