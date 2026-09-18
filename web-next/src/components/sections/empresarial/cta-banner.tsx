"use client";

import Image from "next/image";
import { SectionTag } from "@/components/ui/section-tag";
import { useUtm, getGenericWhatsappText, DEFAULT_WHATSAPP_PHONE } from "@/lib/whatsapp";

// Mesma estrutura do CTA residencial (card inteiro clicável, sem botão), em
// azul-marinho e com a foto do hero empresarial cortada à direita. O parágrafo
// é o empresarial — o Figma mostra o residencial por erro de copiar e colar.
export function EmpresarialCtaBanner() {
  const utm = useUtm();
  const href = `https://wa.me/${DEFAULT_WHATSAPP_PHONE}?text=${encodeURIComponent(
    getGenericWhatsappText(utm, "falar sobre infraestrutura de telecom para minha empresa")
  )}`;

  return (
    <section className="px-4 py-14 md:px-8">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com um especialista da R2 Empresarial no WhatsApp"
        className="relative mx-auto flex min-h-[320px] max-w-7xl overflow-hidden rounded-[32px] bg-corp-2"
      >
        <Image
          src="/images/figma/hero-empresarial.webp"
          alt=""
          fill
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="object-cover object-right"
        />

        <div className="relative z-10 flex max-w-lg flex-col justify-center p-8 text-white md:p-12">
          <SectionTag tone="white" className="self-start">
            Internet em Minas Gerais
          </SectionTag>

          <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
            <span className="font-light">Infraestrutura de</span>
            <br />
            <span className="font-bold">Telecom</span>{" "}
            <span className="font-light">com</span>{" "}
            <span className="font-bold">Gestão Completa!</span>
          </h2>

          <p className="mt-4 text-sm text-white/80 md:text-base">
            Internet dedicada, link de alta disponibilidade e monitoramento
            pró-ativo para sua empresa nunca ficar parada.
          </p>
        </div>
      </a>
    </section>
  );
}
