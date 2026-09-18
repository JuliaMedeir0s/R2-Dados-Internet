export type BlogPost = {
  slug: string;
  titulo: string;
  autor: string;
  categoria: string;
  data: string;
  resumo: string;
  /**
   * Foto de capa do post. Obrigatória: todo post da listagem aparece com
   * foto no Figma. As 11 fotos são as do mockup (banco de imagens),
   * distribuídas pelo mapeamento título -> foto extraído do arquivo; os 2
   * posts que o Figma não mostra ficaram com as 2 fotos que sobraram.
   */
  imagem: string;
  /**
   * Corpo do artigo (parágrafos). Só preenchido para o post usado no print
   * de BLOG - POST.pdf ("como-saber-se-sua-internet..."), que no Figma
   * aparece com texto de recheio (Lorem ipsum) — escrevi um conteúdo real
   * no lugar, já que Lorem ipsum published no ar ficaria estranho. Os
   * demais 18 posts ainda não têm artigo completo (ver fallback em
   * `/blog/[slug]/page.tsx`) — pendente de redação real por post.
   */
  conteudo?: string[];
};

export type BlogAuthor = {
  nome: string;
  cargo: string;
  bio: string;
};

/**
 * PLACEHOLDER — confirmado com a Júlia (2026-09-10): títulos, autores,
 * categorias e datas abaixo vêm do preenchimento de exemplo do PDF exportado
 * do Figma (BLOG.pdf), não de conteúdo real da R2. Os títulos, nomes de
 * autor, categorias e datas são reproduzidos como aparecem no design (são
 * bons títulos, vale reaproveitar!) — mas os "Ricardo Valente", "Mariana
 * Albuquerque" e "Felipe Noronha" são personas de exemplo do Figma, não
 * necessariamente pessoas reais da equipe. Os resumos (campo `resumo`) são
 * texto meu, escrito a partir só do título (o PDF não mostra corpo/resumo
 * do artigo). Nada disso deve ir pro ar sem a Júlia decidir: quem escreve de
 * fato, se os nomes acima são reais ou trocam, e de onde vem o conteúdo
 * (CMS headless, MDX no repo, ou outra fonte).
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "internet-empresarial-diferencas-plano-residencial-corporativo",
    titulo: "Internet Empresarial: Diferenças Entre Plano Residencial e Corporativo",
    autor: "Ricardo Valente",
    categoria: "Dicas e Suporte",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-124431.jpg",
    resumo:
      "Entenda o que muda entre um plano residencial e um link empresarial e qual faz mais sentido para o seu negócio.",
  },
  {
    slug: "como-saber-se-sua-internet-esta-entregando-a-velocidade-contratada",
    titulo: "Como Saber se Sua Internet Está Entregando a Velocidade Contratada",
    autor: "Ricardo Valente",
    categoria: "Dicas e Suporte",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-125712.jpg",
    resumo:
      "Aprenda a testar sua conexão corretamente e entenda o que pode influenciar o resultado.",
    conteudo: [
      "Contratou um plano de internet e quer confirmar se a velocidade que chega até você é mesmo a combinada? Isso é mais simples do que parece, mas exige alguns cuidados para o teste não sair distorcido.",
      "O primeiro passo é escolher um bom medidor de velocidade. Ferramentas como o Speedtest e o próprio medidor da Anatel (Brasil Banda Larga) são boas referências, porque usam servidores próximos e um método de medição consistente. Evite tirar conclusões de um único teste: faça pelo menos três medições em horários diferentes do dia — de manhã, à tarde e à noite — para enxergar o comportamento real da sua conexão, não só um instante isolado.",
      "Antes de testar, feche aplicativos que consomem banda em segundo plano, como backups na nuvem, downloads e atualizações automáticas. Se possível, conecte o computador direto no roteador com um cabo de rede: isso elimina a variável do Wi-Fi e mostra a velocidade que está realmente chegando na sua casa. Se o teste via Wi-Fi tiver um resultado bem mais baixo que o cabeado, o gargalo provavelmente está no posicionamento do roteador ou em interferência, não no seu plano.",
      "Vale lembrar que a velocidade contratada é sempre a velocidade máxima teórica, e é normal que o resultado varie um pouco para cima ou para baixo dependendo do horário e do tráfego da rede. A Anatel considera dentro da normalidade uma entrega de pelo menos 40% da velocidade contratada no horário de pico e 80% fora dele — abaixo disso, já vale abrir um chamado com o suporte.",
      "Se depois desses testes a velocidade continuar muito abaixo do combinado, entre em contato com o suporte da R2: com o resultado dos testes em mãos (prints ajudam bastante), a equipe consegue identificar rapidamente se o problema está na rede interna da sua casa ou se precisa de uma verificação técnica na conexão.",
    ],
  },
  {
    slug: "como-melhorar-o-sinal-do-wifi-em-casas-grandes",
    titulo: "Como Melhorar o Sinal do Wi-Fi em Casas Grandes",
    autor: "Ricardo Valente",
    categoria: "Rede e Wi-Fi",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-124307.jpg",
    resumo:
      "Dicas de posicionamento de roteador e quando vale a pena investir em Mesh para cobrir a casa toda.",
  },
  {
    slug: "7-sinais-de-que-esta-na-hora-de-trocar-de-provedor",
    titulo: "7 Sinais de Que Está na Hora de Trocar de Provedor de Internet",
    autor: "Mariana Albuquerque",
    categoria: "Rede e Wi-Fi",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-124559.jpg",
    resumo: "Os sinais mais comuns de que sua operadora atual não está mais entregando o que promete.",
  },
  {
    slug: "10-dicas-para-proteger-sua-rede-wifi-contra-invasoes",
    titulo: "10 Dicas Para Proteger Sua Rede Wi-Fi Contra Invasões",
    autor: "Mariana Albuquerque",
    categoria: "Segurança Digital",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-124307.jpg",
    resumo: "Boas práticas de segurança que qualquer pessoa pode aplicar na rede de casa.",
  },
  {
    slug: "fibra-optica-ou-radio-qual-a-melhor-internet-para-sua-regiao",
    titulo: "Fibra Óptica ou Rádio: Qual a Melhor Internet Para Sua Região?",
    autor: "Felipe Noronha",
    categoria: "Rede e Wi-Fi",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-124051.jpg",
    resumo: "As diferenças de estabilidade e velocidade entre as duas tecnologias, e quando cada uma faz sentido.",
  },
  {
    slug: "wifi-lento-em-casa-veja-os-principais-motivos-e-como-resolver",
    titulo: "Wi-Fi Lento em Casa? Veja os Principais Motivos e Como Resolver",
    autor: "Felipe Noronha",
    categoria: "Rede e Wi-Fi",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-123950.jpg",
    resumo: "As causas mais comuns de instabilidade na conexão e como resolver cada uma delas.",
  },
  {
    slug: "quantos-mega-sao-ideais-para-sua-casa",
    titulo: "Quantos Mega São Ideais Para Sua Casa?",
    autor: "Ricardo Valente",
    categoria: "Dicas e Suporte",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-125034.jpg",
    resumo: "Um guia rápido pra escolher o plano ideal pra videochamadas, uploads e múltiplos dispositivos.",
  },
  {
    slug: "smart-tv-alexa-e-automacao-sua-internet-esta-preparada",
    titulo: "Smart TV, Alexa e Automação: Sua Internet Está Preparada?",
    autor: "Mariana Albuquerque",
    categoria: "Tecnologia",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-124559.jpg",
    resumo: "O que considerar de banda e estabilidade antes de encher a casa de dispositivos conectados.",
  },
  {
    slug: "5-erros-que-estao-deixando-sua-internet-mais-lenta",
    titulo: "5 Erros Que Estão Deixando Sua Internet Mais Lenta",
    autor: "Ricardo Valente",
    categoria: "Dicas e Suporte",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-124051.jpg",
    resumo: "Hábitos comuns que derrubam a velocidade da sua conexão sem você perceber.",
  },
  {
    slug: "como-funciona-a-fibra-optica-na-pratica",
    titulo: "Como Funciona a Fibra Óptica na Prática",
    autor: "Mariana Albuquerque",
    categoria: "Tecnologia",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-124840.jpg",
    resumo: "Uma explicação simples de como a luz vira internet até chegar na sua casa.",
  },
  {
    slug: "como-evitar-lentidao-na-internet-em-horarios-de-pico",
    titulo: "Como Evitar Lentidão na Internet em Horários de Pico",
    autor: "Ricardo Valente",
    categoria: "Dicas e Suporte",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-123755.jpg",
    resumo: "O que fazer quando todo mundo em casa está online ao mesmo tempo.",
  },
  {
    slug: "vale-a-pena-usar-repetidor-de-sinal",
    titulo: "Vale a Pena Usar Repetidor de Sinal?",
    autor: "Mariana Albuquerque",
    categoria: "Rede e Wi-Fi",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-124945.jpg",
    resumo: "Prós, contras e alternativas ao repetidor de sinal tradicional.",
  },
  {
    slug: "internet-caiu-toda-hora",
    titulo: "Internet Cai Toda Hora? Entenda o Que Pode Estar Acontecendo",
    autor: "Mariana Albuquerque",
    categoria: "Problemas de Conexão",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-125753.jpg",
    resumo: "As causas mais comuns de instabilidade na conexão e como resolver cada uma delas.",
  },
  {
    slug: "home-office-sem-travar",
    titulo: "Home Office Sem Travar: Qual Velocidade de Internet Você Precisa?",
    autor: "Ricardo Valente",
    categoria: "Produtividade",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-124559.jpg",
    resumo: "Um guia rápido pra escolher o plano ideal pra videochamadas, uploads e múltiplos dispositivos.",
  },
  {
    slug: "o-que-e-ping-e-como-ele-afeta-jogos-online",
    titulo: "O Que É Ping e Como Ele Afeta Jogos Online",
    autor: "Felipe Noronha",
    categoria: "Tecnologia",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-124840.jpg",
    resumo: "Entenda o papel da latência nos seus jogos online e como reduzi-la.",
  },
  {
    slug: "streaming-travando-veja-como-ter-mais-estabilidade-na-conexao",
    titulo: "Streaming Travando? Veja Como Ter Mais Estabilidade na Conexão",
    autor: "Mariana Albuquerque",
    categoria: "Entretenimento",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-123755.jpg",
    resumo: "Ajustes simples pra parar de ver a rodinha de carregamento no meio do episódio.",
  },
  {
    slug: "internet-funciona-no-celular-mas-nao-no-computador",
    titulo: "O Que Fazer Quando a Internet Funciona no Celular Mas Não no Computador",
    autor: "Ricardo Valente",
    categoria: "Central de Ajuda",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-124559.jpg",
    resumo: "Passo a passo pra diagnosticar se o problema é do roteador, do cabo ou do próprio computador.",
  },
  {
    slug: "tendencias-em-tecnologia-e-conectividade-para-pequenas-empresas",
    titulo: "Tendências em Tecnologia e Conectividade Para Pequenas Empresas",
    autor: "Felipe Noronha",
    categoria: "Dicas e Suporte",
    data: "22/02/2025",
    imagem: "/images/figma/blog/foto-124307.jpg",
    resumo: "O que observar em infraestrutura de rede para acompanhar o crescimento do seu negócio.",
  },
];

/**
 * Autores do blog. Só a bio de Mariana Albuquerque veio legível no PDF —
 * as de Ricardo Valente e Felipe Noronha são rascunho meu, no mesmo tom,
 * pra manter os 3 cards de autor consistentes. Placeholder, mesma ressalva
 * do BLOG_POSTS acima.
 */
export const BLOG_AUTHORS: BlogAuthor[] = [
  {
    nome: "Mariana Albuquerque",
    cargo: "Escritor do Blog R2",
    bio: "Especialista em infraestrutura de redes e soluções de conectividade, dedico meu trabalho a acompanhar as transformações do setor de telecomunicações e compartilhar conhecimento de forma simples e objetiva. Neste blog, escrevo sobre internet banda larga, fibra óptica, redes Wi-Fi, segurança digital, equipamentos e as tecnologias que moldam o futuro da comunicação.",
  },
  {
    nome: "Ricardo Valente",
    cargo: "Escritor do Blog R2",
    bio: "Escrevo sobre o dia a dia da internet em casa e no trabalho: velocidade, estabilidade, equipamentos e os pequenos ajustes que fazem grande diferença na experiência de quem está sempre conectado.",
  },
  {
    nome: "Felipe Noronha",
    cargo: "Escritor do Blog R2",
    bio: "Acompanho de perto as novas tecnologias de conectividade e como elas chegam até o interior de Minas Gerais, traduzindo tendências do setor em conteúdo prático pra quem quer aproveitar melhor a internet.",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAuthorByName(nome: string): BlogAuthor | undefined {
  return BLOG_AUTHORS.find((author) => author.nome === nome);
}

function postsBySlugs(slugs: string[]): BlogPost[] {
  return slugs.map((slug) => getPostBySlug(slug)).filter((post): post is BlogPost => Boolean(post));
}

// Curadoria fixa vista no print de BLOG - POST.pdf pra sidebar do artigo
// individual — mesmos 4 "Mais lidos" da listagem, mas "Mais relevantes" é
// uma seleção diferente (2 posts em comum com a listagem + os 2 novos:
// "internet no celular mas não no pc" e "tendências pra pequenas empresas").
const POST_SIDEBAR_MAIS_LIDOS_SLUGS = [
  "smart-tv-alexa-e-automacao-sua-internet-esta-preparada",
  "5-erros-que-estao-deixando-sua-internet-mais-lenta",
  "como-funciona-a-fibra-optica-na-pratica",
  "internet-empresarial-diferencas-plano-residencial-corporativo",
];

const POST_SIDEBAR_MAIS_RELEVANTES_SLUGS = [
  "como-evitar-lentidao-na-internet-em-horarios-de-pico",
  "vale-a-pena-usar-repetidor-de-sinal",
  "internet-funciona-no-celular-mas-nao-no-computador",
  "tendencias-em-tecnologia-e-conectividade-para-pequenas-empresas",
];

// Grid de "postagens relacionadas" no fim do artigo — mesmos 3 cards do
// print, em qualquer post (a curadoria não parece variar por categoria do
// artigo aberto). Se o post atual estiver nessa lista, ele é removido e
// substituído por outro da base pra nunca recomendar o próprio artigo.
const RELATED_POSTS_SLUGS = [
  "internet-caiu-toda-hora",
  "como-evitar-lentidao-na-internet-em-horarios-de-pico",
  "home-office-sem-travar",
];

export function getPostSidebarMaisLidos(currentSlug: string): BlogPost[] {
  return postsBySlugs(POST_SIDEBAR_MAIS_LIDOS_SLUGS.filter((slug) => slug !== currentSlug)).slice(0, 4);
}

export function getPostSidebarMaisRelevantes(currentSlug: string): BlogPost[] {
  return postsBySlugs(POST_SIDEBAR_MAIS_RELEVANTES_SLUGS.filter((slug) => slug !== currentSlug)).slice(0, 4);
}

export function getRelatedPosts(currentSlug: string): BlogPost[] {
  const base = RELATED_POSTS_SLUGS.filter((slug) => slug !== currentSlug);
  const posts = postsBySlugs(base);
  if (posts.length >= 3) return posts.slice(0, 3);

  // Post atual é um dos 3 relacionados fixos — completa com outro post
  // qualquer da base (que não seja ele mesmo nem repetido).
  const usedSlugs = new Set([currentSlug, ...base]);
  const filler = BLOG_POSTS.find((post) => !usedSlugs.has(post.slug));
  return filler ? [...posts, filler] : posts;
}
