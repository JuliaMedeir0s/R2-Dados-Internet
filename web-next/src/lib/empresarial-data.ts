export type Diferencial = {
  icon: string;
  titulo: string;
  descricao: string;
};

/**
 * Cards "Nossos Diferenciais" da página Empresarial — títulos, descrições e
 * ícones conforme o Figma (empresa_02). Os ícones do Figma são ilustrações 3D
 * que não foram exportadas; ficam como Iconify na cor `corp-1`.
 */
export const DIFERENCIAIS: Diferencial[] = [
  {
    icon: "mdi:wifi",
    titulo: "Internet Empresarial",
    descricao:
      "Conexão estável e de alta performance para manter sua equipe produtiva e seus sistemas funcionando sem interrupções.",
  },
  {
    icon: "mdi:link-variant",
    titulo: "Link Dedicado",
    descricao:
      "Internet exclusiva para sua empresa, com maior estabilidade, baixa latência e desempenho garantido para operações críticas.",
  },
  {
    icon: "mdi:cloud",
    titulo: "PABX em Nuvem",
    descricao:
      "Gerencie chamadas, ramais e atendimentos de qualquer lugar com uma solução moderna e escalável.",
  },
  {
    icon: "mdi:phone-in-talk",
    titulo: "Telefonia Fixa",
    descricao:
      "Comunicação profissional com qualidade e economia para sua empresa.",
  },
];

/** Faixa azul de serviços que rola entre as seções (empresa_01). */
export const SERVICE_TAGS = [
  "Link Dedicado",
  "Telefonia Fixa",
  "PABX em Nuvem",
  "Black Box",
  "Redundância de Link",
  "Internet Empresarial",
];

/**
 * Benefícios da seção "Black Box" (empresa_01). O Figma repete
 * "Monitoramento em tempo real" duas vezes; aqui entra uma vez só.
 */
export const BLACKBOX_BENEFITS = [
  "Monitoramento em tempo real",
  "Identificação rápida de falhas",
  "Mais estabilidade para a operação",
  "Redução de paradas e indisponibilidade.",
];

export type EmpresarialFaq = { pergunta: string; resposta: string };

/**
 * FAQ da página Empresarial (empresa_02 / empresa_03). As perguntas e a
 * primeira resposta vieram legíveis do Figma; as demais respostas ficam com o
 * texto já existente no site ou com rascunho marcado abaixo.
 */
export const EMPRESARIAL_FAQS: EmpresarialFaq[] = [
  {
    pergunta: "Qual a diferença entre internet empresarial e link dedicado?",
    resposta:
      "A internet empresarial atende a maioria dos negócios com excelente desempenho. O link dedicado oferece uma conexão exclusiva para empresas que exigem máxima estabilidade e disponibilidade.",
  },
  {
    pergunta: "O que é a Black Box?",
    resposta:
      "É a nossa solução de monitoramento inteligente que acompanha a saúde da sua conexão 24h e aciona automaticamente nossa equipe técnica ao menor sinal de instabilidade.",
  },
  {
    pergunta: "A R2 atende empresas de qualquer porte?",
    resposta:
      "Sim, temos soluções para pequenas, médias e grandes empresas, com planos de internet empresarial e link dedicado sob medida para cada operação.",
  },
  {
    pergunta: "O PABX em nuvem substitui uma central telefônica tradicional?",
    // rascunho: validar com a Júlia
    resposta:
      "Sim. O PABX em nuvem faz tudo que a central tradicional faz, sem equipamento físico, com ramais e atendimentos gerenciados pela internet.",
  },
  {
    pergunta: "Como solicitar uma análise para minha empresa?",
    // rascunho: validar com a Júlia
    resposta:
      "Fale com a gente pelo WhatsApp. Nossa equipe levanta as necessidades da sua empresa e monta uma proposta sob medida.",
  },
];
