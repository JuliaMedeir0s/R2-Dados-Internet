import type { MetadataRoute } from "next";

import { categoriasDe, getPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const ROTAS_ESTATICAS = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/para-empresas", changeFrequency: "monthly", priority: 0.8 },
  { path: "/nossa-historia", changeFrequency: "monthly", priority: 0.6 },
  { path: "/indique-e-ganhe", changeFrequency: "monthly", priority: 0.6 },
  { path: "/tutoriais", changeFrequency: "monthly", priority: 0.5 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/politica-de-privacidade", changeFrequency: "yearly", priority: 0.3 },
] satisfies Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}>;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const estaticas = ROTAS_ESTATICAS.map((rota) => ({
    url: `${SITE_URL}${rota.path}`,
    changeFrequency: rota.changeFrequency,
    priority: rota.priority,
  }));

  const blog = await getPosts();

  const categorias = categoriasDe(blog).map((categoria) => ({
    url: `${SITE_URL}/blog/categoria/${categoria.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.4,
  }));

  const posts = blog.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.atualizadoEm ?? post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...estaticas, ...categorias, ...posts];
}
