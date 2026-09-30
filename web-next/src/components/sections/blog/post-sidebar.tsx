import type { BlogAuthor, BlogPost } from "@/lib/blog";
import { AuthorCard } from "./author-card";
import { ListaPosts, PromoCard } from "./sidebar";

// Sidebar do artigo individual. Mesmos blocos da sidebar da listagem, mas
// na ordem do print de BLOG - POST.pdf: bio do autor, Mais lidos, card
// promo, Mais relevantes.
export function PostSidebar({
  autor,
  maisLidos,
  maisRelevantes,
}: {
  autor: BlogAuthor;
  maisLidos: BlogPost[];
  maisRelevantes: BlogPost[];
}) {
  return (
    <aside className="flex flex-col gap-8">
      <AuthorCard autor={autor} />
      <ListaPosts titulo="Mais lidos" posts={maisLidos} />
      <PromoCard />
      <ListaPosts titulo="Mais relevantes" posts={maisRelevantes} />
    </aside>
  );
}
