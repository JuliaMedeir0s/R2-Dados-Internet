export type Stat = { valor: string; label: string };

/**
 * Estatísticas da seção "Uma história construída com conexão, crescimento e
 * confiança". Números reais e legíveis no PDF (QUEM_SOMOS.pdf) — atualizados
 * em relação ao antigo `Diferenciais.astro` (que tinha +10.000 clientes e
 * +10 cidades).
 */
export const STATS: Stat[] = [
  { valor: "+15.000", label: "Clientes Satisfeitos" },
  { valor: "+13", label: "Cidades atendidas" },
  { valor: "+440.000", label: "Km de cabo lançados" },
];

export type Diferencial = {
  icon: string;
  titulo: string;
  descricao: string;
};

/**
 * Cards "Nossos Diferenciais" / ticker de serviços da página Quem Somos.
 * Título e descrição 100% reais e legíveis no PDF.
 */
export const DIFERENCIAIS: Diferencial[] = [
  {
    icon: "mdi:speedometer",
    titulo: "Ultra velocidade",
    descricao:
      "A transmissão de dados via fibra óptica é muito mais rápida, garantindo navegação fluida em qualquer dispositivo.",
  },
  {
    icon: "mdi:wifi",
    titulo: "Sem perdas de sinal",
    descricao:
      "A fibra não sofre quedas de conexão, oferecendo uma navegação constante e estável o dia todo.",
  },
  {
    icon: "mdi:database-outline",
    titulo: "Alto tráfego de dados",
    descricao:
      "Maior capacidade para transmitir informações simultâneas, ideal para múltiplos usuários e dispositivos.",
  },
  {
    icon: "mdi:access-point-off",
    titulo: "Sem interferência",
    descricao:
      "A fibra não sofre com fatores externos como chuvas, ventos ou interferências eletromagnéticas.",
  },
  {
    icon: "mdi:shield-lock-outline",
    titulo: "Mais segurança",
    descricao:
      "Alta resistência a agentes químicos e variações de temperatura, garantindo durabilidade e confiabilidade.",
  },
  {
    icon: "mdi:tools",
    titulo: "Fácil instalação",
    descricao:
      "Cabos menores e flexíveis tornam a instalação rápida, limpa e sem transtornos para o cliente.",
  },
];
