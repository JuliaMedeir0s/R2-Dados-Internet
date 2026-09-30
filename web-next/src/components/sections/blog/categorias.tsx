import Link from "next/link";
import type { BlogCategoria } from "@/lib/blog";
import { cn } from "@/lib/utils";

// Fileira de pills de categoria. Só aparecem categorias com post publicado,
// então nenhuma pill leva a uma página vazia.
export function Categorias({
  categorias,
  ativa,
  className,
}: {
  categorias: BlogCategoria[];
  ativa?: string;
  className?: string;
}) {
  if (categorias.length === 0) return null;

  return (
    <nav aria-label="Categorias do blog" className={cn("flex flex-wrap justify-center gap-3", className)}>
      {categorias.map((categoria) => {
        const atual = categoria.slug === ativa;
        return (
          <Link
            key={categoria.slug}
            href={`/blog/categoria/${categoria.slug}`}
            aria-current={atual ? "page" : undefined}
            className={cn(
              "rounded-full border border-brand-1 px-4 py-1.5 text-sm font-bold transition-colors",
              atual ? "bg-brand-1 text-white" : "text-brand-1 hover:bg-brand-1 hover:text-white"
            )}
          >
            {categoria.nome}
          </Link>
        );
      })}
    </nav>
  );
}
