import Link from "next/link";
import { Icon } from "@iconify/react";
import { SectionTag } from "@/components/ui/section-tag";
import type { BlogPost } from "@/lib/blog";
import { Capa } from "./capa";

// Card médio com foto, categoria, título, autor e data. Usado no par de
// destaques do fim da listagem, nas postagens relacionadas e nas páginas de
// categoria e busca.
export function PostCard({ post, sizes }: { post: BlogPost; sizes: string }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-3">
      <div className="relative h-40 overflow-hidden rounded-2xl bg-brand-8/20">
        <Capa imagem={post.imagem} sizes={sizes} />
      </div>
      {/* `w-fit` porque o card é um flex column: sem isso a pill estica. */}
      <SectionTag className="w-fit">{post.categoria}</SectionTag>
      <h3 className="text-lg font-bold text-brand-1 group-hover:text-brand-5">{post.titulo}</h3>
      <div className="flex items-center gap-2 text-sm text-texto/70">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-8/20">
          <Icon icon="ph:user-bold" className="h-3.5 w-3.5 text-brand-1" />
        </span>
        <span className="font-bold text-texto">{post.autor.nome}</span>
        <Icon icon="ph:clock-bold" className="ml-1 h-4 w-4" />
        <span>{post.data}</span>
      </div>
    </Link>
  );
}
