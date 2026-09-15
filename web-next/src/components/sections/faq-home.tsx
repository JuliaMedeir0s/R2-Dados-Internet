"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=553136621235&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+R2+Internet.&type=phone_number&app_absent=0";

// NOTA: perguntas vieram do print do Figma; as respostas abaixo são um
// rascunho e precisam de revisão da Júlia antes de publicar (ver ressalva
// no chat / doc do projeto).
const FAQS = [
  {
    pergunta: "A instalação tem algum custo?",
    resposta:
      "Não, a instalação é gratuita* nas áreas com cobertura R2. Fale com a gente pelo WhatsApp pra confirmar a disponibilidade no seu endereço.",
  },
  {
    pergunta: "O contrato é fidelidade?",
    resposta:
      "As condições de fidelidade variam conforme o plano e a promoção vigente. Consulte um de nossos atendentes antes de contratar pra saber exatamente o que se aplica ao seu caso.",
  },
  {
    pergunta: "Quais aplicativos já vêm inclusos?",
    resposta:
      "Depende do plano escolhido — alguns incluem Max, Disney+, Globoplay, Deezer, Premiere e outros parceiros. Veja os detalhes na seção de planos acima ou fale com o suporte.",
  },
  {
    pergunta: "Meu endereço já possui cobertura?",
    resposta:
      "Atendemos Belo Horizonte e várias cidades da região metropolitana e do interior de Minas Gerais. Fale com a gente pelo WhatsApp informando seu endereço pra confirmar.",
  },
];

export function FaqHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-[1fr_auto] md:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-brand-1">
            Dúvidas frequentes
          </p>
          <h2 className="mt-1 text-2xl font-bold text-texto md:text-3xl">
            Perguntas que respondem o que você precisa saber!
          </h2>

          <div className="mt-6 divide-y divide-cinza-claro">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.pergunta}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-texto">
                      {faq.pergunta}
                    </span>
                    <Icon
                      icon={isOpen ? "ph:minus-bold" : "ph:plus-bold"}
                      className="h-5 w-5 shrink-0 text-brand-1"
                    />
                  </button>
                  {isOpen && (
                    <p className="pb-4 text-sm text-texto/70">
                      {faq.resposta}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-cinza-claro p-8 text-center">
          <Icon icon="noto:robot" className="h-16 w-16" />
          <p className="font-bold text-texto">Precisa de ajuda?</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-1 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-5"
          >
            <Icon icon="basil:whatsapp-solid" className="h-4 w-4" />
            Fale com a gente
          </a>
        </div>
      </div>
    </section>
  );
}
