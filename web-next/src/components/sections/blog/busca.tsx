import { Icon } from "@iconify/react";

// Campo de busca do blog: um formulário GET comum para /blog/busca, que
// funciona mesmo sem JavaScript.
export function Busca({ termo }: { termo?: string }) {
  return (
    <form action="/blog/busca" role="search" className="relative mx-auto max-w-xl">
      <label htmlFor="busca-blog" className="sr-only">
        Buscar no blog
      </label>
      <input
        id="busca-blog"
        type="search"
        name="q"
        defaultValue={termo}
        placeholder="Buscar por ...."
        className="w-full rounded-2xl bg-cinza-claro px-5 py-4 pr-14 text-sm text-texto placeholder:text-texto/50 focus:outline-none focus:ring-2 focus:ring-brand-1"
      />
      <button
        type="submit"
        aria-label="Buscar"
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-texto/50 hover:text-brand-1"
      >
        <Icon icon="ph:magnifying-glass-bold" className="h-5 w-5" />
      </button>
    </form>
  );
}
