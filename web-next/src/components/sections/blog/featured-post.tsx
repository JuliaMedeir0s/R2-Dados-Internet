import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { SectionTag } from "@/components/ui/section-tag";
import type { BlogPost } from "@/lib/blog-data";

// Card grande de post em destaque: foto sangrando no card inteiro, com um
// gradiente laranja por cima pro texto continuar legível (blog_00).
export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-brand-1 to-brand-6 p-8 text-white shadow-sm transition-shadow hover:shadow-lg md:h-96"
    >
      {/* Decorativa: o título do post está logo abaixo, dentro do mesmo link. */}
      <Image
        src={post.imagem}
        alt=""
        fill
        sizes="(min-width: 1024px) 1024px, 100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-1 via-brand-1/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative">
        <SectionTag tone="white" className="mb-4">
          {post.categoria}
        </SectionTag>
        <h2 className="max-w-2xl text-2xl font-bold md:text-4xl">{post.titulo}</h2>
        <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            <Icon icon="ph:user-bold" className="h-4 w-4" />
          </span>
          <span className="font-bold">{post.autor}</span>
          <Icon icon="ph:clock-bold" className="ml-2 h-4 w-4" />
          <span>{post.data}</span>
        </div>
      </div>
    </Link>
  );
}
