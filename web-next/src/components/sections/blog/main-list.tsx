import Link from "next/link";
import { Icon } from "@iconify/react";
import type { BlogPost } from "@/lib/blog";
import { SectionTag } from "@/components/ui/section-tag";
import { PostRow } from "./post-row";

// Post principal só com título (sem foto) + grid de posts, como aparece no
// PDF. O título leva ao post.
export function MainList({
  destaque,
  posts,
}: {
  destaque: BlogPost;
  posts: BlogPost[];
}) {
  return (
    <div>
      <SectionTag>{destaque.categoria}</SectionTag>
      {/* O título do destaque é o do post (blog_01): laranja e num peso só,
          sem a divisão leve+negrito do `SectionTitle`. */}
      <h2 className="mt-3 text-2xl font-bold leading-tight text-brand-1 md:text-3xl">
        <Link href={`/blog/${destaque.slug}`} className="hover:text-brand-5">
          {destaque.titulo}
        </Link>
      </h2>
      <div className="mt-3 flex items-center gap-2 text-sm text-texto/70">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-8/20">
          <Icon icon="ph:user-bold" className="h-4 w-4 text-brand-1" />
        </span>
        <span className="font-bold text-texto">{destaque.autor.nome}</span>
        <Icon icon="ph:clock-bold" className="ml-2 h-4 w-4" />
        <span>{destaque.data}</span>
      </div>

      <div className="mt-6 grid gap-x-8 sm:grid-cols-2">
        {posts.map((post) => (
          <PostRow key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
