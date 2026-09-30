import Image from "next/image";
import { SectionTag } from "@/components/ui/section-tag";
import type { BlogAuthor, BlogPost } from "@/lib/blog";
import { AuthorCard } from "./author-card";
import { PostRow } from "./post-row";

// Card promo compacto ("Muitas formas de te conectar!"): mesma arte do CTA
// "Conexão com Wi-fi na casa toda" ao fundo, com um gradiente por cima pro
// texto continuar legível.
export function PromoCard() {
  return (
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
        <h3 className="mt-3 text-xl font-bold">Muitas formas de te conectar!</h3>
        <p className="mt-2 text-sm text-white/85">
          Seja para assistir filmes, estudar, trabalhar, jogar online ou conectar toda a família,
          a R2 tem o plano ideal para sua rotina.
        </p>
      </div>
    </div>
  );
}

// Lista "Mais lidos" / "Mais relevantes". Some quando não há post.
export function ListaPosts({ titulo, posts }: { titulo: string; posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <div>
      <h3 className="border-b-2 border-brand-1 pb-2 text-lg font-bold text-brand-1">{titulo}</h3>
      <div className="mt-2 divide-y divide-cinza-claro">
        {posts.map((post) => (
          <PostRow key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

// Coluna lateral da listagem, na ordem do PDF: promo, Mais lidos, Mais
// relevantes e bio do autor do post em destaque.
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
      <PromoCard />
      <ListaPosts titulo="Mais lidos" posts={maisLidos} />
      <ListaPosts titulo="Mais relevantes" posts={maisRelevantes} />
      <AuthorCard autor={autor} />
    </aside>
  );
}
