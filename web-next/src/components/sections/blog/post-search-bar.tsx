import { Icon } from "@iconify/react";
import { CATEGORIAS } from "./hero-search";

// Versão compacta da busca+pills da listagem (sem o título "Bem-vindo a
// sua..."), reaproveitada no topo do artigo individual — é como aparece no
// print de BLOG - POST.pdf. Mesma ressalva: só visual, sem busca/filtro
// funcional ainda.
export function PostSearchBar() {
  return (
    <section className="bg-white pb-10 pt-8">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <div className="relative mx-auto max-w-xl">
          <input
            type="search"
            placeholder="Buscar por ...."
            disabled
            className="w-full rounded-2xl bg-cinza-claro px-5 py-4 text-sm text-texto placeholder:text-texto/50 focus:outline-none"
          />
          <Icon
            icon="ph:magnifying-glass-bold"
            className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-texto/50"
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {CATEGORIAS.map((categoria) => (
            <span
              key={categoria}
              className="rounded-full border border-brand-1 px-4 py-1.5 text-sm font-bold text-brand-1"
            >
              {categoria}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
