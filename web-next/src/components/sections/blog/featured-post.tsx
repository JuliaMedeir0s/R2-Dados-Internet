import Link from "next/link";
import { Icon } from "@iconify/react";
import type { BlogPost } from "@/lib/blog-data";

// Card grande de post em destaque. A foto (mockup usa fotos de banco de
// imagens) ainda não existe no repo — bloco com ícone no lugar por ora.
export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-brand-1 to-brand-6 p-8 text-white shadow-sm transition-shadow hover:shadow-lg md:h-96"
    >
      <Icon
        icon="mdi:image-outline"
        className="absolute right-8 top-8 h-16 w-16 text-white/20"
      />
      <span className="mb-4 inline-block w-fit rounded-full border border-white/60 px-4 py-1 text-xs font-bold uppercase tracking-wide">
        {post.categoria}
      </span>
      <h2 className="max-w-2xl text-2xl font-bold md:text-4xl">{post.titulo}</h2>
      <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
          <Icon icon="ph:user-bold" className="h-4 w-4" />
        </span>
        <span className="font-bold">{post.autor}</span>
        <Icon icon="ph:clock-bold" className="ml-2 h-4 w-4" />
        <span>{post.data}</span>
      </div>
    </Link>
  );
}
