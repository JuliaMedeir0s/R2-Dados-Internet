"use client";

import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { useUtm, getGenericWhatsappText, DEFAULT_WHATSAPP_PHONE } from "@/lib/whatsapp";

// Faixa escura repetida duas vezes na página (início e perto do fim), igual
// ao PDF. Título exato legível na exportação.
export function EmpresarialCtaBanner() {
  const utm = useUtm();
  const href = `https://wa.me/${DEFAULT_WHATSAPP_PHONE}?text=${encodeURIComponent(
    getGenericWhatsappText(utm, "falar sobre infraestrutura de telecom para minha empresa")
  )}`;

  return (
    <section className="bg-corp-3 py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:px-8 md:text-left">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-corp-7">
            Gestão completa
          </p>
          <h3 className="mt-1 text-3xl font-bold md:text-4xl">
            Infraestrutura de Telecom com Gestão Completa!
          </h3>
          <p className="mt-2 max-w-xl text-white/80">
            Internet dedicada, link de alta disponibilidade e monitoramento
            pró-ativo para sua empresa nunca ficar parada.
          </p>
        </div>
        <a href={href} target="_blank" rel="noopener noreferrer" className="shrink-0">
          <Button size="lg" className="gap-2 bg-white text-corp-1 hover:bg-corp-6">
            <Icon icon="basil:whatsapp-solid" className="h-5 w-5" />
            Falar com um especialista
          </Button>
        </a>
      </div>
    </section>
  );
}
