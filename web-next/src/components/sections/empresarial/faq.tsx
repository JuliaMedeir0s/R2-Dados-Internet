"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { EMPRESARIAL_FAQS } from "@/lib/empresarial-data";
import { useUtm, getGenericWhatsappText, DEFAULT_WHATSAPP_PHONE } from "@/lib/whatsapp";

// Mesmo padrão de accordion do FaqHome, com paleta corp. O PDF mostra uma
// ilustração real de um robô mascote (não um ícone genérico) — o mesmo
// mascote já sinalizado como pendente na FaqHome da Home; ícone genérico
// aqui até o asset real ser exportado do Figma.
export function EmpresarialFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const utm = useUtm();
  const href = `https://wa.me/${DEFAULT_WHATSAPP_PHONE}?text=${encodeURIComponent(
    getGenericWhatsappText(utm, "falar com um especialista em soluções empresariais")
  )}`;

  return (
    <section className="bg-cinza-claro py-16">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-[1fr_auto] md:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-corp-1">
            Dúvidas frequentes
          </p>
          <h2 className="mt-1 text-2xl font-bold text-texto md:text-3xl">
            Perguntas que respondem o que sua empresa precisa saber!
          </h2>

          <div className="mt-6 divide-y divide-white">
            {EMPRESARIAL_FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.pergunta}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-texto">{faq.pergunta}</span>
                    <Icon
                      icon={isOpen ? "ph:minus-bold" : "ph:plus-bold"}
                      className="h-5 w-5 shrink-0 text-corp-1"
                    />
                  </button>
                  {isOpen && (
                    <p className="pb-4 text-sm text-texto/70">{faq.resposta}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-white p-8 text-center">
          <Icon icon="noto:robot" className="h-16 w-16" />
          <p className="font-bold text-texto">Precisa de ajuda?</p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-corp-1 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-corp-4"
          >
            <Icon icon="basil:whatsapp-solid" className="h-4 w-4" />
            Fale com a gente
          </a>
        </div>
      </div>
    </section>
  );
}
