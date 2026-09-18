import Image from "next/image";
import { Icon } from "@iconify/react";
import { SectionTag } from "@/components/ui/section-tag";
import type { BlogPost, BlogAuthor } from "@/lib/blog-data";
import { PostRow } from "./post-row";

// Card promo compacto ("Muitas formas de se conectar!") + listas "Mais
// lidos" / "Mais relevantes" + card de bio do autor, tudo como aparece na
// coluna lateral do PDF.
export function BlogSidebar({
  maisLidos,
  maisRelevantes,
  autor,
}: {
  maisLidos: BlogPost[];
  maisRelevantes: BlogPost[];
  autor: BlogAuthor;
}) {
  return (
    <aside className="flex flex-col gap-8">
      {/* Card promocional: mesma arte do CTA "Conexão com Wi-fi na casa toda"
          ao fundo, com um gradiente por cima pro texto continuar legível. */}
      <div className="relative overflow-hidden rounded-3xl bg-brand-1 p-6 text-white">
        <Image
          src="/images/figma/cta-conexao.webp"
          alt=""
          fill
          sizes="(min-width: 1024px) 400px, 100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-1 via-brand-1/70 to-brand-1/20"
          aria-hidden="true"
        />
        <div className="relative">
          <SectionTag tone="white">Internet em Minas Gerais</SectionTag>
          <h3 className="mt-3 text-xl font-bold">Muitas formas de se conectar!</h3>
          <p className="mt-2 text-sm text-white/85">
            Seja para assistir filmes, estudar, trabalhar, jogar online ou conectar toda a família,
            a R2 tem o plano ideal para sua rotina.
          </p>
        </div>
      </div>

      <div>
        <h3 className="border-b-2 border-brand-1 pb-2 text-lg font-bold text-brand-1">
          Mais lidos
        </h3>
        <div className="mt-2 divide-y divide-cinza-claro">
          {maisLidos.map((post) => (
            <PostRow key={post.slug} post={post} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="border-b-2 border-brand-1 pb-2 text-lg font-bold text-brand-1">
          Mais relevantes
        </h3>
        <div className="mt-2 divide-y divide-cinza-claro">
          {maisRelevantes.map((post) => (
            <PostRow key={post.slug} post={post} />
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-cinza-claro p-6 text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-8/30">
          <Icon icon="ph:user-bold" className="h-10 w-10 text-brand-1" />
        </div>
        <p className="mt-3 font-bold italic text-texto">{autor.nome}</p>
        <p className="text-xs text-texto/60">{autor.cargo}</p>
        <p className="mt-3 text-sm text-texto/70">{autor.bio}</p>
      </div>
    </aside>
  );
}
