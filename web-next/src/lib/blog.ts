import type { PortableTextBlock } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import { sanityImageUrl, type SanityImagem } from "@/sanity/image";
import { BLOG_SETTINGS_QUERY, POSTS_QUERY, POST_QUERY, SEARCH_QUERY } from "@/sanity/queries";

/*
 * Conteúdo do blog, vindo do Sanity (projeto em studio-teste/). Tudo que as
 * páginas e componentes precisam passa por aqui já no formato de exibição:
 * data formatada, URL de imagem pronta, autor resolvido.
 */

export type BlogImagem = {
  src: string;
  alt: string;
  /** `object-position` a partir do ponto de foco marcado no Studio. */
  posicao?: string;
};

export type BlogAuthor = {
  nome: string;
  cargo: string;
  bio?: string;
  foto?: BlogImagem;
};

export type BlogPost = {
  slug: string;
  titulo: string;
  categoria: string;
  /** dd/mm/aaaa, no fuso de Minas. */
  data: string;
  publishedAt: string;
  atualizadoEm?: string;
  resumo: string;
  /**
   * Obrigatória no Studio, mas um post importado por API pode chegar sem;
   * nesse caso os cards mostram só o fundo da marca.
   */
  imagem?: BlogImagem;
  autor: BlogAuthor;
};

export type BlogPostCompleto = BlogPost & {
  seo?: { seoTitle?: string; metaDescription?: string };
  body: PortableTextBlock[];
};

export type BlogCategoria = { nome: string; slug: string };

// Formato cru devolvido pelas queries (antes da conversão acima).
type ImagemCrua = SanityImagem;
type PostCru = Omit<BlogPost, "data" | "imagem" | "autor"> & {
  imagem?: ImagemCrua;
  autor: (Omit<BlogAuthor, "foto"> & { foto?: ImagemCrua }) | null;
};

/** Para post importado sem autor (o Studio exige um). */
const AUTOR_PADRAO: BlogAuthor = { nome: "Equipe R2 Internet", cargo: "Blog R2" };

const FORMATO_DATA = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export function formatarData(iso: string) {
  return FORMATO_DATA.format(new Date(iso));
}

function toImagem(imagem: ImagemCrua | undefined, largura?: number): BlogImagem | undefined {
  if (!imagem?.asset) return undefined;
  const { hotspot } = imagem;
  return {
    src: sanityImageUrl(imagem, largura),
    alt: imagem.alt ?? "",
    posicao: hotspot ? `${Math.round(hotspot.x * 100)}% ${Math.round(hotspot.y * 100)}%` : undefined,
  };
}

function toPost<T extends PostCru>(cru: T): Omit<T, "imagem" | "autor"> & BlogPost {
  return {
    ...cru,
    data: formatarData(cru.publishedAt),
    imagem: toImagem(cru.imagem),
    autor: cru.autor ? { ...cru.autor, foto: toImagem(cru.autor.foto, 400) } : AUTOR_PADRAO,
  };
}

/** Descarta referências para posts apagados, despublicados ou agendados. */
function visiveis(posts: (PostCru | null)[] | null | undefined): BlogPost[] {
  const agora = Date.now();
  return (posts ?? [])
    .filter((post): post is PostCru => Boolean(post?.slug && new Date(post.publishedAt).getTime() <= agora))
    .map(toPost);
}

/** Todos os posts publicados, do mais novo para o mais antigo. */
export async function getPosts(): Promise<BlogPost[]> {
  return visiveis(await sanityFetch<PostCru[]>(POSTS_QUERY));
}

export async function getPost(slug: string): Promise<BlogPostCompleto | null> {
  const cru = await sanityFetch<(PostCru & Omit<BlogPostCompleto, keyof BlogPost>) | null>(POST_QUERY, {
    slug,
  });
  return cru ? toPost(cru) : null;
}

export async function buscarPosts(termo: string): Promise<BlogPost[]> {
  // `match` do GROQ só acha palavras inteiras; o curinga no fim de cada uma
  // faz "roteador" achar também "roteadores".
  const busca = termo
    .split(/\s+/)
    .filter(Boolean)
    .map((palavra) => `${palavra.replace(/[*"]/g, "")}*`);
  if (busca.length === 0) return [];
  return visiveis(await sanityFetch<PostCru[]>(SEARCH_QUERY, { busca }));
}

export function slugCategoria(nome: string) {
  return nome
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Categorias que têm pelo menos um post publicado, em ordem alfabética. */
export function categoriasDe(posts: BlogPost[]): BlogCategoria[] {
  return [...new Set(posts.map((post) => post.categoria))]
    .sort((a, b) => a.localeCompare(b, "pt-BR"))
    .map((nome) => ({ nome, slug: slugCategoria(nome) }));
}

function semRepetir(listas: BlogPost[][], excluir: string[], limite: number) {
  const vistos = new Set(excluir);
  const resultado: BlogPost[] = [];
  for (const post of listas.flat()) {
    if (resultado.length === limite) break;
    if (vistos.has(post.slug)) continue;
    vistos.add(post.slug);
    resultado.push(post);
  }
  return resultado;
}

/**
 * Curadoria do documento "Configurações do blog" no Studio. Cada campo é
 * opcional: vazio, cai nos posts mais recentes — o blog nunca fica com um
 * buraco porque ninguém escolheu um destaque.
 */
export async function getCuradoria(posts: BlogPost[], slugAtual?: string) {
  type SettingsCru = { destaque: PostCru | null; maisLidos: PostCru[] | null; maisRelevantes: PostCru[] | null };
  const settings = await sanityFetch<SettingsCru | null>(BLOG_SETTINGS_QUERY);

  const excluir = slugAtual ? [slugAtual] : [];
  const destaque = visiveis([settings?.destaque ?? null])[0] ?? posts[0];

  return {
    destaque,
    maisLidos: semRepetir([visiveis(settings?.maisLidos), posts], excluir, 4),
    maisRelevantes: semRepetir([visiveis(settings?.maisRelevantes), posts.slice(4)], excluir, 4),
  };
}

/** Mesma categoria primeiro; completa com os mais recentes. */
export function getRelacionados(posts: BlogPost[], atual: BlogPost, limite = 3) {
  const mesmaCategoria = posts.filter((post) => post.categoria === atual.categoria);
  return semRepetir([mesmaCategoria, posts], [atual.slug], limite);
}
