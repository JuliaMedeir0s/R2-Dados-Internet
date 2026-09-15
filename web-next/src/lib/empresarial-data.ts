export type Diferencial = {
  icon: string;
  titulo: string;
  descricao: string;
};

/**
 * Cards "Nossos Diferenciais" da página Empresarial.
 * Títulos vieram legíveis do PDF exportado pela Júlia (O_MELHOR_PARA_SUA_EMPRESA.pdf).
 * Descrições de "Link Dedicado" e "Telefonia Fixa" reaproveitam o texto real
 * do antigo componente Astro `Servicos.tsx` ("Internet Dedicada" e "Soluções
 * de Voz"). As descrições de "Internet Empresarial" e "PABX em Nuvem" são
 * rascunho — o PDF não deixava esse texto legível — e precisam da revisão
 * da Júlia / conferência com o texto exato do Figma.
 */
export const DIFERENCIAIS: Diferencial[] = [
  {
    icon: "mdi:domain",
    titulo: "Internet Empresarial",
    descricao:
      "Conexão de fibra óptica dedicada ao seu negócio, com estabilidade e suporte prioritário para o dia a dia da empresa.",
  },
  {
    icon: "mdi:lan-connect",
    titulo: "Link Dedicado",
    descricao:
      "Conexão de internet de alta disponibilidade, simétrica e com IP fixo para sua empresa.",
  },
  {
    icon: "mdi:phone-in-talk-outline",
    titulo: "PABX em Nuvem",
    descricao:
      "Central telefônica em nuvem para sua empresa, sem custo de equipamentos e com gestão simplificada.",
  },
  {
    icon: "mdi:phone-classic",
    titulo: "Telefonia Fixa",
    descricao:
      "Solução completa que abrange PABX em nuvem, telefone fixo e Tronco E1 com 30 canais.",
  },
];

/**
 * Tags do ticker/marquee de serviços. Nomes reais de serviços que já existiam
 * no site antigo (Servicos.tsx), completados com rótulos estruturais vistos
 * no PDF (ex. "Suporte 24h", "IP Fixo").
 */
export const SERVICE_TAGS = [
  "Internet Dedicada",
  "Lan to Lan",
  "Gestão de Infraestrutura",
  "Monitoramento Pró-Ativo",
  "PABX em Nuvem",
  "Telefonia Fixa",
  "IP Fixo",
  "Suporte 24h",
];

/**
 * Benefícios da seção "Black Box" (monitoramento inteligente). O PDF mostra
 * uma lista de benefícios real ao lado do botão "Quero conhecer a Black Box",
 * mas o texto de cada item não ficou totalmente legível na exportação — os
 * itens abaixo são rascunho, escritos a partir do tema da seção (monitoramento
 * pró-ativo, já presente no site antigo) e precisam da revisão da Júlia.
 */
export const BLACKBOX_BENEFITS = [
  "Monitoramento 24h da sua conexão em tempo real",
  "Alertas automáticos ao menor sinal de instabilidade",
  "Acionamento imediato da equipe técnica",
  "Relatórios de desempenho da sua rede",
];

export type EmpresarialFaq = { pergunta: string; resposta: string };

/**
 * Perguntas do FAQ da página Empresarial. A primeira resposta veio legível
 * no PDF (texto real); a pergunta correspondente foi inferida a partir do
 * assunto da resposta e precisa de conferência com o texto exato do Figma.
 * As demais perguntas/respostas são rascunho, no mesmo espírito do FAQ da
 * Home, e precisam da revisão da Júlia antes de publicar.
 */
export const EMPRESARIAL_FAQS: EmpresarialFaq[] = [
  {
    pergunta: "Qual a diferença entre internet empresarial e link dedicado?",
    resposta:
      "A internet empresarial atende a maioria dos negócios com excelente desempenho. O link dedicado oferece uma conexão exclusiva para empresas que exigem máxima estabilidade e disponibilidade.",
  },
  {
    pergunta: "A instalação tem algum custo?",
    resposta:
      "Fale com a gente pelo WhatsApp para confirmar a disponibilidade e as condições de instalação no endereço da sua empresa.",
  },
  {
    pergunta: "O que é a Black Box de monitoramento?",
    resposta:
      "É a nossa solução de monitoramento inteligente que acompanha a saúde da sua conexão 24h e aciona automaticamente nossa equipe técnica ao menor sinal de instabilidade.",
  },
  {
    pergunta: "Atendem empresas de qualquer porte?",
    resposta:
      "Sim, temos soluções para pequenas, médias e grandes empresas, com planos de internet empresarial e link dedicado sob medida para cada operação.",
  },
  {
    pergunta: "Como funciona o suporte técnico?",
    resposta:
      "Contamos com equipe de suporte especializada 24h e monitoramento pró-ativo do link, com acionamento automático da equipe de manutenção sempre que necessário.",
  },
];
