import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Sem a CDN da API: quem guarda cache é o Next (abaixo). Com a CDN, um
  // post recém-publicado poderia voltar desatualizado na revalidação.
  useCdn: false,
  perspective: "published",
});

/**
 * Tempo máximo até uma publicação no Studio aparecer no site quando o
 * webhook de revalidação não estiver configurado (ou falhar).
 */
const REVALIDATE_SECONDS = 60;

/**
 * Tag única de todo conteúdo vindo do Sanity. O volume é pequeno, então
 * qualquer publicação (post, autor ou configuração) invalida tudo de uma
 * vez pelo webhook em /api/revalidate — sem risco de uma página ficar
 * desatualizada por depender de um tipo que ninguém lembrou de marcar.
 */
export const SANITY_TAG = "sanity";

/** Busca no Sanity com o cache do Next (ver `REVALIDATE_SECONDS`). */
export function sanityFetch<T>(query: string, params: QueryParams = {}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: { revalidate: REVALIDATE_SECONDS, tags: [SANITY_TAG] },
  });
}
