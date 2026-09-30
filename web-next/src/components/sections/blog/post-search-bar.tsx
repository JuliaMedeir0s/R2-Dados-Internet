import type { BlogCategoria } from "@/lib/blog";
import { Busca } from "./busca";
import { Categorias } from "./categorias";

// Versão compacta da busca+pills da listagem (sem o título "Bem-vindo a
// sua..."), no topo do artigo e das páginas de categoria e busca — é como
// aparece no print de BLOG - POST.pdf.
export function PostSearchBar({
  categorias,
  termo,
  categoriaAtiva,
}: {
  categorias: BlogCategoria[];
  termo?: string;
  categoriaAtiva?: string;
}) {
  return (
    <section className="bg-white pb-10 pt-8">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <Busca termo={termo} />
        <Categorias categorias={categorias} ativa={categoriaAtiva} className="mt-6" />
      </div>
    </section>
  );
}
