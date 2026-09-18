import type { MetadataRoute } from "next";

import { BLOG_POSTS } from "@/lib/blog-data";

const BASE_URL = "https://r2dados.com";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const estaticas = ROTAS_ESTATICAS.map((rota) => ({
    url: `${BASE_URL}${rota.path}`,
    changeFrequency: rota.changeFrequency,
    priority: rota.priority,
  }));

  const posts = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...estaticas, ...posts];
}
