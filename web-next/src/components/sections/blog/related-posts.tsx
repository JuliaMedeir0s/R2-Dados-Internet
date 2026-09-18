import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import type { BlogPost } from "@/lib/blog-data";
import { CATEGORIAS } from "./hero-search";

// "Postagens Relacionadas": mesma fileira de pills de categoria reaproveitada
// da listagem (não é um filtro de fato ligado ao artigo aberto — reaparece
// idêntica em qualquer post no print) + grid de 3 cards.
function RelatedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-3">
      {/* Decorativa: o título do post está logo abaixo, dentro do mesmo link. */}
      <div className="relative h-40 overflow-hidden rounded-2xl bg-brand-8/20">
        <Image
          src={post.imagem}
          alt=""
          fill
          sizes="(min-width: 640px) 360px, 100vw"
          className="object-cover"
        />
      </div>
      <span className="inline-block w-fit rounded-full border border-brand-1 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-1">
        {post.categoria}
      </span>
      <h3 className="text-lg font-bold text-brand-1 group-hover:text-brand-5">{post.titulo}</h3>
      <div className="flex items-center gap-2 text-sm text-texto/70">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-8/20">
          <Icon icon="ph:user-bold" className="h-3.5 w-3.5 text-brand-1" />
        </span>
        <span className="font-bold text-texto">{post.autor}</span>
        <Icon icon="ph:clock-bold" className="ml-1 h-4 w-4" />
        <span>{post.data}</span>
      </div>
    </Link>
  );
}

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {CATEGORIAS.map((categoria) => (
          <span
            key={categoria}
            className="rounded-full border border-brand-1 px-4 py-1.5 text-sm font-bold text-brand-1"
          >
            {categoria}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        {posts.map((post) => (
          <RelatedCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
