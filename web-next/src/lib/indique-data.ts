/**
 * Passos da seção "É simples:". Texto 100% real e legível no PDF
 * (INDIQUE_E_GANHE.pdf) — MAS o passo 3 no próprio Figma está com o mesmo
 * texto do passo 2 ("Seu indicado contrata a R2"), repetido. Reproduzi
 * literalmente como está no design em vez de inventar um texto diferente
 * pro passo 3 (é um programa com valor em dinheiro real — preferi não
 * arriscar um palpite errado). Vale avisar a Júlia pra corrigir isso no
 * Figma.
 */
export const STEPS = [
  "Você faz a indicação",
  "Seu indicado contrata a R2",
  "Seu indicado contrata a R2",
  "A instalação é realizada",
];

export type IndiqueFaq = { pergunta: string; resposta: string };

/**
 * FAQ da página Indique e Ganhe. Pergunta 1 (com resposta) é real e legível
 * no PDF. Perguntas 2 e 3 eu consegui responder com texto também real —
 * reaproveitado de outras partes legíveis do mesmo PDF (o valor de R$30,00
 * já confirmado na resposta 1 / hero, e a nota de rodapé "*o desconto será
 * aplicado no mês subsequente da instalação da internet." que responde
 * exatamente a pergunta 3). As perguntas 4 e 5 não tinham resposta visível
 * no PDF — as respostas abaixo são rascunho meu e precisam de revisão da
 * Júlia antes de publicar.
 */
export const INDIQUE_FAQS: IndiqueFaq[] = [
  {
    pergunta: "Como funciona o Indique e Ganhe da R2?",
    resposta:
      "É simples! Você indica amigos, familiares ou vizinhos para contratar a R2 Internet. Após a instalação ser concluída, você recebe um desconto de R$ 30,00 na sua mensalidade para cada indicação efetivada.",
  },
  {
    pergunta: "Quanto eu ganho por cada indicação?",
    resposta: "R$ 30,00 de desconto na sua mensalidade para cada indicação efetivada.",
  },
  {
    pergunta: "Quando o desconto é aplicado?",
    resposta: "O desconto será aplicado no mês subsequente da instalação da internet do seu indicado.",
  },
  {
    pergunta: "Posso indicar mais de uma pessoa?",
    resposta:
      "Sim! Não existe limite de indicações — você recebe R$ 30,00 de desconto para cada indicação efetivada.",
  },
  {
    pergunta: "O que acontece se eu indicar várias pessoas ao mesmo tempo?",
    resposta:
      "Os descontos são cumulativos: cada indicação que virar uma instalação concluída soma R$ 30,00 a mais na sua mensalidade seguinte.",
  },
];
