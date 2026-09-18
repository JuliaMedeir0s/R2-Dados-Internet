"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import { EMPRESARIAL_FAQS } from "@/lib/empresarial-data";

// Mesmo padrão do `FaqHome`, na paleta corp e com o mascote azul do Figma
// sobreposto ao topo do card "Precisa de ajuda?" (empresa_02 / empresa_03).
export function EmpresarialFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1fr_320px] md:px-8">
        <div>
          <SectionTag tone="corp">FAQ</SectionTag>
          <SectionTitle
            tone="corp"
            light="Perguntas que respondem o que"
            bold="você precisa saber!"
            className="mt-3 text-2xl md:text-3xl"
          />
          <p className="mt-3 text-sm text-texto/70">
            Aqui você encontra as respostas para as dúvidas mais comuns. Se
            ainda restar alguma questão, nossa equipe está pronta para te
            ajudar!
          </p>

          {/* Mesmo accordion acessível do `FaqHome`: heading + botão dentro,
              `aria-controls` ligado ao painel, que fica sempre no DOM. */}
          <div className="mt-8 divide-y divide-cinza-claro border-t border-cinza-claro">
            {EMPRESARIAL_FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              const perguntaId = `faq-empresarial-pergunta-${index}`;
              const respostaId = `faq-empresarial-resposta-${index}`;
              return (
                <div key={faq.pergunta}>
                  <h3>
                    <button
                      type="button"
                      id={perguntaId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left font-bold text-corp-1"
                      aria-expanded={isOpen}
                      aria-controls={respostaId}
                    >
                      <span>{faq.pergunta}</span>
                      <Icon
                        icon="ph:caret-down-bold"
                        className={`h-4 w-4 shrink-0 text-corp-1 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <p
                    id={respostaId}
                    role="region"
                    aria-labelledby={perguntaId}
                    hidden={!isOpen}
                    className="pb-4 text-sm text-texto/70"
                  >
                    {faq.resposta}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mesma geometria do card da Home: o `pt` do wrapper reserva a metade
            do mascote que sobra pra fora e o `pt` do card, a metade que entra
            nele — sem isso o robô cobre o "Precisa de ajuda?". */}
        <div className="relative h-fit pt-24">
          <Image
            src="/images/figma/mascote-azul.svg"
            alt=""
            width={264}
            height={278}
            className="pointer-events-none absolute -top-4 left-1/2 h-56 w-auto -translate-x-1/2"
          />

          <div className="rounded-2xl border border-corp-1/15 bg-white p-6 pt-36 shadow-lg">
            <p className="font-bold text-corp-1">Precisa de ajuda?</p>
            <p className="mt-2 text-sm text-texto/70">
              Qualquer dúvida ou problema estamos de prontidão para ajudar.
            </p>
            <WhatsappButton
              variant="corp"
              context="falar com um especialista em soluções empresariais"
              className="mt-4 flex w-full gap-2"
            >
              <Icon icon="basil:whatsapp-solid" className="h-4 w-4" aria-hidden="true" />
              Fale com a equipe R2
            </WhatsappButton>
          </div>
        </div>
      </div>
    </section>
  );
}
