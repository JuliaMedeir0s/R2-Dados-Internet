export type Beneficio = { text: string; destaque?: boolean };
export type ItemIcon = { nome: string; icon?: string };
export type Plano = {
  nome: string;
  preco: string;
  /**
   * Velocidade preservada 1:1 pro texto da mensagem de WhatsApp (ver
   * `src/lib/whatsapp.ts`, campo `speed`) — ex.: "600MB", "1GB". NÃO usar
   * pra exibir no card (ver `velocidadeMega`).
   */
  velocidade: string;
  /**
   * Número exibido no card ao lado do selo "MEGA" (print de referência:
   * planos_residenciais.png) — ex.: "600", "800", "1000". Mesma velocidade
   * real de `velocidade`, só que só o número, já que o card sempre usa a
   * palavra "MEGA" como unidade (inclusive nos planos de 1000MEGA/1GB).
   */
  velocidadeMega: string;
  wifi: string;
  beneficios: Beneficio[];
  assinaturas: ItemIcon[];
  streamings?: ItemIcon[];
  extras?: ItemIcon[];
};

/**
 * Benefícios base de todo plano. No print de referência aparecem com um
 * marcador "+" simples (sem ícone por item) — os ícones que existiam antes
 * (wifi.png, fibra.png, suporte.png, instalacao.png) não aparecem no design
 * real, então o card não usa mais imagem por benefício.
 * `wifiDestaque` deixa o item do wifi em negrito, igual ao "Wifi PRO" do
 * plano Família no print (os demais planos usam "Wifi 5"/"Wifi 6", sem
 * destaque).
 */
const BENEFICIOS_BASE = (wifi: string, wifiDestaque = false): Beneficio[] => [
  { text: wifi, destaque: wifiDestaque },
  { text: "100% Fibra Óptica" },
  { text: "Suporte Premium" },
  { text: "Instalação Grátis*" },
];

const ASSINATURAS_BASE: ItemIcon[] = [
  { nome: "BITT Trainers", icon: "/images/bitt_logo.png" },
  { nome: "BitBook", icon: "/images/bitbook_logo.png" },
  { nome: "Formind", icon: "/images/formind_logo.png" },
];

const ASSINATURAS_PLUS: ItemIcon[] = [
  ...ASSINATURAS_BASE,
  { nome: "Mestre Cursos", icon: "/images/mestre_cursos_logo.png" },
];

/**
 * Planos residenciais R2 Internet.
 * Fonte: catálogo comercial atual (src/components/Planos.tsx do site em produção).
 * Preservado 1:1 na migração — apenas a apresentação visual muda.
 *
 * Cada plano soma benefícios extras (Telefone Fixo, IP Público Dinâmico,
 * Mesh) direto na lista de `beneficios`, com `destaque: true` — no print
 * de referência esses itens aparecem em negrito na mesma lista com "+",
 * não numa seção separada.
 */
export const PLANOS_RESIDENCIAIS: Plano[] = [
  {
    nome: "R2 Start",
    preco: "99,90",
    velocidade: "600MB",
    velocidadeMega: "600",
    wifi: "Wi-fi 5",
    beneficios: BENEFICIOS_BASE("Wi-fi 5"),
    assinaturas: ASSINATURAS_BASE,
  },
  {
    nome: "R2 Plus",
    preco: "119,90",
    velocidade: "800MB",
    velocidadeMega: "800",
    wifi: "Wi-fi 6",
    beneficios: BENEFICIOS_BASE("Wi-fi 6"),
    assinaturas: ASSINATURAS_PLUS,
  },
  {
    nome: "R2 Start PRO",
    preco: "129,90",
    velocidade: "600MB",
    velocidadeMega: "600",
    wifi: "Wi-fi 5",
    beneficios: BENEFICIOS_BASE("Wi-fi 5"),
    streamings: [
      { nome: "Max", icon: "/images/max.png" },
      { nome: "Disney+", icon: "/images/disney_plus_logo.png" },
    ],
    assinaturas: ASSINATURAS_BASE,
  },
  {
    nome: "R2 Plus PRO",
    preco: "139,90",
    velocidade: "800MB",
    velocidadeMega: "800",
    wifi: "Wi-fi 6",
    beneficios: BENEFICIOS_BASE("Wi-fi 6"),
    streamings: [
      { nome: "Max", icon: "/images/max.png" },
      { nome: "Disney+", icon: "/images/disney_plus_logo.png" },
      { nome: "Globoplay", icon: "/images/globo_play_logo.png" },
    ],
    assinaturas: ASSINATURAS_PLUS,
  },
  {
    nome: "R2 Ultra",
    preco: "149,90",
    velocidade: "1GB",
    velocidadeMega: "1000",
    wifi: "Wi-fi 6",
    beneficios: [
      ...BENEFICIOS_BASE("Wi-fi 6"),
      { text: "Telefone Fixo", destaque: true },
    ],
    streamings: [
      { nome: "Max", icon: "/images/max.png" },
      { nome: "Disney+", icon: "/images/disney_plus_logo.png" },
      { nome: "Globoplay", icon: "/images/globo_play_logo.png" },
    ],
    extras: [
      { nome: "Deezer", icon: "/images/deezer_logo.png" },
      { nome: "Sky+ Light", icon: "/images/SKY_light_logo.png" },
    ],
    assinaturas: ASSINATURAS_PLUS,
  },
  {
    nome: "R2 Gamer",
    preco: "159,90",
    velocidade: "1GB",
    velocidadeMega: "1000",
    wifi: "Wi-fi 6",
    beneficios: [
      ...BENEFICIOS_BASE("Wi-fi 6"),
      { text: "Telefone Fixo", destaque: true },
      { text: "IP Público Dinâmico", destaque: true },
    ],
    streamings: [
      { nome: "Max", icon: "/images/max.png" },
      { nome: "Disney+", icon: "/images/disney_plus_logo.png" },
      { nome: "Globoplay", icon: "/images/globo_play_logo.png" },
    ],
    extras: [
      { nome: "ExitLag", icon: "/images/exitlag_logo.png" },
      { nome: "Kaspersky", icon: "/images/kaspersky_logo.png" },
    ],
    assinaturas: ASSINATURAS_PLUS,
  },
  {
    nome: "R2 Futebol",
    preco: "169,90",
    velocidade: "1GB",
    velocidadeMega: "1000",
    wifi: "Wi-fi 6",
    beneficios: [
      ...BENEFICIOS_BASE("Wi-fi 6"),
      { text: "Telefone Fixo", destaque: true },
    ],
    streamings: [{ nome: "Premiere", icon: "/images/premiere_logo.png" }],
    extras: [{ nome: "Deezer", icon: "/images/deezer_logo.png" }],
    assinaturas: ASSINATURAS_PLUS,
  },
  {
    nome: "R2 Família",
    preco: "179,90",
    velocidade: "1GB",
    velocidadeMega: "1000",
    wifi: "Wi-fi PRO",
    beneficios: [
      ...BENEFICIOS_BASE("Wi-fi PRO", true),
      { text: "Telefone Fixo", destaque: true },
      { text: "IP Público Dinâmico", destaque: true },
      { text: "Mesh", destaque: true },
    ],
    streamings: [
      { nome: "Max", icon: "/images/max.png" },
      { nome: "Disney+", icon: "/images/disney_plus_logo.png" },
      { nome: "Globoplay", icon: "/images/globo_play_logo.png" },
    ],
    extras: [
      { nome: "Deezer", icon: "/images/deezer_logo.png" },
      { nome: "ExitLag", icon: "/images/exitlag_logo.png" },
    ],
    assinaturas: ASSINATURAS_PLUS,
  },
];
