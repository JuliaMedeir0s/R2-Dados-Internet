import Link from "next/link";
import { Icon } from "@iconify/react";
import type { BlogPost } from "@/lib/blog-data";

// Item de lista reaproveitado no grid principal e nas duas listas da
// sidebar ("Mais lidos" / "Mais relevantes") — mesmo padrão visual do PDF
// nos três lugares: thumb pequena + título + autor + data.
export function PostRow({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex items-start gap-3 py-3"
    >
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-brand-8/20">
        <Icon icon="mdi:image-outline" className="h-6 w-6 text-brand-1/60" />
      </span>
      <div>
        <h4 className="text-sm font-bold leading-snug text-brand-1 group-hover:text-brand-5">
          {post.titulo}
        </h4>
        <p className="mt-1 flex items-center gap-1 text-xs text-texto/60">
          <span className="font-bold text-texto">{post.autor}</span>
          <Icon icon="ph:clock-bold" className="ml-1 h-3 w-3" />
          {post.data}
        </p>
      </div>
    </Link>
  );
}
