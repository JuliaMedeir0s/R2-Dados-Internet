import { Icon } from "@iconify/react";
import type { BlogAuthor } from "@/lib/blog";
import { Capa } from "./capa";

// Card de bio do autor, nas sidebars da listagem e do artigo. Sem foto
// cadastrada no Studio, fica o ícone do Figma.
export function AuthorCard({ autor }: { autor: BlogAuthor }) {
  return (
    <div className="rounded-3xl bg-cinza-claro p-6 text-center">
      <div className="relative mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-brand-8/30">
        {autor.foto ? (
          <Capa imagem={autor.foto} sizes="96px" decorativa={false} />
        ) : (
          <Icon icon="ph:user-bold" className="h-10 w-10 text-brand-1" />
        )}
      </div>
      <p className="mt-3 font-bold italic text-texto">{autor.nome}</p>
      <p className="text-xs text-texto/60">{autor.cargo}</p>
      {autor.bio && <p className="mt-3 text-sm text-texto/70">{autor.bio}</p>}
    </div>
  );
}
