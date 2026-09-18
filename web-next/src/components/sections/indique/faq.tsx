"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { INDIQUE_FAQS } from "@/lib/indique-data";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

// Mesmo padrão de accordion das outras páginas. Tag "FAQ" e heading/subtítulo
// reais e legíveis no PDF (ver indique-data.ts pra origem de cada resposta).
export function IndiqueFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-[1fr_auto] md:px-8">
        <div>
          <span className="inline-block rounded-full border border-brand-1 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-1">
            FAQ
          </span>
          <h2 className="mt-2 text-2xl font-bold text-texto md:text-3xl">
            Perguntas que respondem o que você precisa saber!
          </h2>
          <p className="mt-2 text-texto/70">
            Aqui você encontra as respostas para as dúvidas mais comuns. Se ainda restar alguma
            questão, nossa equipe está pronta para te ajudar!
          </p>

          {/* Mesmo accordion acessível do `FaqHome`: heading + botão dentro,
              `aria-controls` ligado ao painel, que fica sempre no DOM. */}
          <div className="mt-6 divide-y divide-cinza-claro">
            {INDIQUE_FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              const perguntaId = `faq-indique-pergunta-${index}`;
              const respostaId = `faq-indique-resposta-${index}`;
              return (
                <div key={faq.pergunta}>
                  <h3>
                    <button
                      type="button"
                      id={perguntaId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left font-bold text-texto"
                      aria-expanded={isOpen}
                      aria-controls={respostaId}
                    >
                      <span>{faq.pergunta}</span>
                      <Icon
                        icon={isOpen ? "ph:minus-bold" : "ph:plus-bold"}
                        className="h-5 w-5 shrink-0 text-brand-1"
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

        {/* Mesmo card do FAQ da Home (home_06): card branco com borda tênue, o
            mascote sobrepondo o topo e o texto começando na altura da barriga
            do robô. */}
        <div className="relative h-fit pt-24 md:w-80">
          <Image
            src="/images/figma/mascote-laranja.svg"
            alt="Mascote robô da R2 acenando"
            width={269}
            height={284}
            className="pointer-events-none absolute -top-4 left-1/2 h-56 w-auto -translate-x-1/2"
          />
          <div className="rounded-2xl border border-brand-1/15 bg-white p-6 pt-36 shadow-lg">
            <p className="font-bold text-brand-1">Precisa de ajuda?</p>
            <p className="mt-2 text-sm text-texto/70">
              Qualquer dúvida ou problema estamos de prontidão para ajudar.
            </p>
            <WhatsappButton
              context="falar com a equipe R2 sobre o Indique e Ganhe"
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
