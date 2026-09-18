"use client";

import { Icon } from "@iconify/react";
import { ButtonLink } from "@/components/ui/button";
import { STEPS } from "@/lib/indique-data";
import { useUtm, getGenericWhatsappText, DEFAULT_WHATSAPP_PHONE } from "@/lib/whatsapp";

// Texto 100% real e legível no PDF (ver nota sobre o passo 3 duplicado em
// indique-data.ts).
export function ComoFunciona() {
  const utm = useUtm();
  const href = `https://wa.me/${DEFAULT_WHATSAPP_PHONE}?text=${encodeURIComponent(
    getGenericWhatsappText(utm, "indicar um amigo pro Indique e Ganhe da R2")
  )}`;

  return (
    <section className="bg-white py-16 text-center">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <span className="inline-block rounded-full border border-brand-1 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-1">
          Indique &amp; Ganhe
        </span>
        <h2 className="mt-2 text-2xl font-bold text-texto md:text-3xl">
          Já é cliente R2? Então sua conexão pode <span className="text-brand-1">render ainda
          mais vantagens</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-texto/70">
          Indique amigos, familiares ou vizinhos para conhecer a R2 Internet. Quando a instalação
          for concluída, você recebe R$30,00 de desconto na sua mensalidade* como forma de
          agradecimento pela indicação.
        </p>

        <p className="mt-8 font-bold text-texto">É simples:</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          {STEPS.map((step, index) => (
            <span
              key={`${step}-${index}`}
              className="inline-flex items-center gap-2 rounded-full border border-brand-1 px-5 py-2 text-sm font-medium text-texto"
            >
              <span className="font-bold text-brand-1">{index + 1}</span>
              {step}
            </span>
          ))}
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-1 px-5 py-2 text-sm font-bold text-white">
            <Icon icon="ph:check-circle-bold" className="h-4 w-4" />
            Você recebe sua recompensa
          </span>
        </div>

        <p className="mt-4 text-xs text-texto/50">
          *o desconto será aplicado no mês subsequente da instalação da internet.
        </p>

        <ButtonLink
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className="mt-6 gap-2"
        >
          <Icon icon="basil:whatsapp-solid" className="h-5 w-5" />
          Quero indicar
        </ButtonLink>
      </div>
    </section>
  );
}
