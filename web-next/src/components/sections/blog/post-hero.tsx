import Image from "next/image";
import { Icon } from "@iconify/react";
import type { BlogPost } from "@/lib/blog-data";

// Cabeçalho do artigo: tag de categoria, título, imagem de capa e
// autor+data — igual ao card em destaque da listagem, só que em formato de
// artigo (sem link, já que estamos na própria página do post).
export function PostHero({ post }: { post: BlogPost }) {
  return (
    <div>
      <span className="inline-block rounded-full border border-brand-1 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-1">
        {post.categoria}
      </span>
      <h1 className="mt-3 text-3xl font-bold leading-tight text-brand-1 md:text-4xl">
        {post.titulo}
      </h1>

      {/* Decorativa: o título do artigo é o h1 logo acima. */}
      <div className="relative mt-8 h-72 overflow-hidden rounded-3xl bg-brand-8/20 md:h-96">
        <Image
          src={post.imagem}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 720px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-texto/70">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-8/20">
          <Icon icon="ph:user-bold" className="h-4 w-4 text-brand-1" />
        </span>
        <span className="font-bold text-texto">{post.autor}</span>
        <Icon icon="ph:clock-bold" className="ml-2 h-4 w-4" />
        <span>{post.data}</span>
      </div>
    </div>
  );
}
