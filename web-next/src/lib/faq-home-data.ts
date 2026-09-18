export type FaqHomeItem = {
  pergunta: string;
  resposta: string;
};

/**
 * FAQ da Home — as 5 perguntas são as do Figma (home_06), palavra por palavra.
 * O Figma só mostra a primeira resposta aberta; as demais são rascunho curto
 * montado com fatos que já estão no site e precisam de validação antes de ir
 * pro ar.
 */
export const FAQ_HOME: FaqHomeItem[] = [
  {
    pergunta: "A instalação e taxa de adesão são grátis?",
    resposta: "Sim! A instalação e a taxa de adesão são gratuitas.",
  },
  {
    pergunta: "A internet da R2 é fibra óptica?",
    // rascunho: validar com a Júlia
    resposta: "Sim, todos os planos da R2 são 100% fibra óptica.",
  },
  {
    pergunta: "Como emitir a segunda via do boleto?",
    // rascunho: validar com a Júlia
    resposta:
      "Pela Área do Cliente aqui no site ou pelo aplicativo Minha R2, na opção 2ª via de boleto.",
  },
  {
    pergunta: "Os aplicativos já estão inclusos no plano?",
    // rascunho: validar com a Júlia
    resposta:
      "Sim, e quais aplicativos vêm inclusos varia conforme o plano escolhido.",
  },
  {
    pergunta: "Como faço para contratar?",
    // rascunho: validar com a Júlia
    resposta:
      "Fale com a equipe R2 pelo WhatsApp e a gente cuida de todo o processo.",
  },
];
