import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import type { BlogPost } from "@/lib/blog-data";

// Par de cards médios lado a lado ("Internet Cai Toda Hora?" / "Home Office
// Sem Travar", no PDF), cada um com sua própria imagem/categoria/autor/data.
function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-3">
      {/* Decorativa: o título do post está logo abaixo, dentro do mesmo link. */}
      <div className="relative h-40 overflow-hidden rounded-2xl bg-brand-8/20">
        <Image
          src={post.imagem}
          alt=""
          fill
          sizes="(min-width: 640px) 528px, 100vw"
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

export function TwoFeaturedRow({ posts }: { posts: [BlogPost, BlogPost] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {posts.map((post) => (
        <FeaturedCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
