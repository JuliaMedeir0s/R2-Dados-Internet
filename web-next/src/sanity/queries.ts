import { defineQuery } from "next-sanity";

/**
 * Só posts já publicados e com data de publicação no passado: um post com
 * "Publicado em" no futuro fica agendado e entra no ar sozinho (até 1 min
 * depois do horário, pela revalidação do cache).
 */
const VISIVEL = `_type == "post" && defined(slug.current) && publishedAt <= now()`;

const CARD = `
  "slug": slug.current,
  "titulo": title,
  categoria,
  publishedAt,
  atualizadoEm,
  resumo,
  imagem,
  "autor": autor->{nome, cargo, bio, foto}
`;

export const POSTS_QUERY = defineQuery(`
  *[${VISIVEL}] | order(publishedAt desc) [0...100] {${CARD}}
`);

export const POST_QUERY = defineQuery(`
  *[${VISIVEL} && slug.current == $slug][0] {
    ${CARD},
    seo{seoTitle, metaDescription},
    body[]{
      ...,
      _type == "imagemComAlt" => {..., "dimensions": asset->metadata.dimensions}
    }
  }
`);

export const BLOG_SETTINGS_QUERY = defineQuery(`
  *[_id == "blogSettings"][0] {
    "destaque": destaque->{${CARD}},
    "maisLidos": maisLidos[]->{${CARD}},
    "maisRelevantes": maisRelevantes[]->{${CARD}}
  }
`);

/** `$busca` já vem com curinga no fim de cada palavra (ver `buscarPosts`). */
export const SEARCH_QUERY = defineQuery(`
  *[${VISIVEL} && (title match $busca || resumo match $busca || pt::text(body) match $busca)]
  | score(boost(title match $busca, 3), resumo match $busca, pt::text(body) match $busca)
  | order(_score desc, publishedAt desc) [0...30] {${CARD}}
`);
