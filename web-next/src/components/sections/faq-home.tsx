"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

import { FAQ_HOME } from "@/lib/faq-home-data";
import { ButtonLink } from "@/components/ui/button";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=553136621235&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+R2+Internet.&type=phone_number&app_absent=0";

export function FaqHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1fr_320px] md:px-8">
        <div>
          <SectionTag>FAQ</SectionTag>
          <SectionTitle
            light="Perguntas que respondem o que"
            bold="você precisa saber!"
            className="mt-3 text-2xl md:text-3xl"
          />
          <p className="mt-3 text-sm text-texto/70">
            Aqui você encontra as respostas para as dúvidas mais comuns. Se
            ainda restar alguma questão, nossa equipe está pronta para te
            ajudar!
          </p>

          <div className="mt-8 divide-y divide-cinza-claro border-t border-cinza-claro">
            {FAQ_HOME.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.pergunta}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-brand-1">
                      {faq.pergunta}
                    </span>
                    <Icon
                      icon="ph:caret-down-bold"
                      className={`h-4 w-4 shrink-0 text-brand-1 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
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

        {/* O mascote sobrepõe o topo do card: o card branco começa na altura
            da barriga do robô (home_06). O `pt` do wrapper reserva a metade
            que sobra pra fora; o `pt` do card, a metade que entra nele. */}
        <div className="relative h-fit pt-24">
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
            <ButtonLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full gap-2"
            >
              <Icon icon="basil:whatsapp-solid" className="h-4 w-4" />
              Fale com a equipe R2
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
