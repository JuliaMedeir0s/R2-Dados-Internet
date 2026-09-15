"use client";

import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { BLACKBOX_BENEFITS } from "@/lib/empresarial-data";
import { useUtm, getGenericWhatsappText, DEFAULT_WHATSAPP_PHONE } from "@/lib/whatsapp";

// Seção "Black Box" (monitoramento inteligente). Botão com o texto exato
// visto no PDF ("Quero conhecer a Black Box"); lista de benefícios e a
// ilustração do dashboard são rascunho/placeholder — ver nota em
// empresarial-data.ts.
export function BlackBox() {
  const utm = useUtm();
  const href = `https://wa.me/${DEFAULT_WHATSAPP_PHONE}?text=${encodeURIComponent(
    getGenericWhatsappText(utm, "conhecer a Black Box de monitoramento da R2")
  )}`;

  return (
    <section className="bg-corp-2 py-16 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 md:flex-row md:px-8">
        <div className="text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-wide text-corp-7">
            Monitoramento inteligente
          </p>
          <h2 className="mt-1 text-2xl font-bold md:text-3xl">Black Box</h2>
          <ul className="mt-4 space-y-2 text-left text-white/80">
            {BLACKBOX_BENEFITS.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Icon icon="ph:check-circle-bold" className="mt-0.5 h-5 w-5 shrink-0 text-corp-7" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href={href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
            <Button size="lg" className="bg-corp-7 text-corp-2 hover:bg-corp-7/80">
              Quero conhecer a Black Box
            </Button>
          </a>
        </div>

        <div className="flex h-52 w-52 shrink-0 items-center justify-center rounded-3xl bg-white/10 md:h-64 md:w-64">
          <Icon icon="mdi:monitor-dashboard" className="h-20 w-20 text-corp-7 md:h-28 md:w-28" />
        </div>
      </div>
    </section>
  );
}
