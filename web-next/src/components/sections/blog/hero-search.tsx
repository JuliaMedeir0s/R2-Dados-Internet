import { Icon } from "@iconify/react";

// Título real e legível no PDF (mesma frase-base do teaser da Home). Barra
// de busca e pills de categoria são só visuais por enquanto — sem back-end
// de busca/filtro ainda.
export const CATEGORIAS = [
  "Tecnologia",
  "Entretenimento",
  "Dicas de Performance",
  "Segurança Digital",
  "Central de Ajuda",
];

export function BlogHeroSearch() {
  return (
    <section className="bg-white py-16 text-center">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <p className="text-lg text-texto/70">Bem-vindo a sua</p>
        <h1 className="mt-1 text-3xl font-bold text-texto md:text-5xl">
          Janela para um mundo sem interrupções
        </h1>

        <div className="relative mx-auto mt-8 max-w-xl">
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
