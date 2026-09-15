"use client";

import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { useUtm, getGenericWhatsappText, DEFAULT_WHATSAPP_PHONE } from "@/lib/whatsapp";

/**
 * Hero da página Empresarial: fundo azul-marinho escuro, igual ao mockup do
 * PDF. A ilustração (homem com notebook) ainda não existe no repo — o PDF
 * mostra uma arte nova que precisa ser exportada do Figma; por ora um bloco
 * com ícone substitui a imagem real. O título/subtítulo abaixo são rascunho:
 * o texto exato do Figma não ficou legível na exportação em PDF e precisa da
 * revisão da Júlia.
 */
export function EmpresarialHero() {
  const utm = useUtm();
  const href = `https://wa.me/${DEFAULT_WHATSAPP_PHONE}?text=${encodeURIComponent(
    getGenericWhatsappText(utm, "saber mais sobre os planos empresariais da R2")
  )}`;

  return (
    <section className="bg-gradient-to-br from-corp-2 to-corp-3 py-16 text-white md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:px-8">
        <div className="text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-wide text-corp-7">
            R2 Empresarial
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-5xl">
            Infraestrutura de internet para sua empresa nunca parar
          </h1>
          <p className="mt-4 max-w-lg text-white/80 md:text-lg">
            Internet dedicada, link de alta disponibilidade e monitoramento
            inteligente para o seu negócio ficar sempre conectado.
          </p>
          <a href={href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
            <Button size="lg" className="gap-2 bg-corp-1 hover:bg-corp-4">
              <Icon icon="basil:whatsapp-solid" className="h-5 w-5" />
              Falar com um especialista
            </Button>
          </a>
        </div>

        <div className="flex h-56 w-56 shrink-0 items-center justify-center rounded-3xl bg-white/10 md:h-72 md:w-72">
          <Icon icon="mdi:laptop-account" className="h-24 w-24 text-corp-7 md:h-32 md:w-32" />
        </div>
      </div>
    </section>
  );
}
