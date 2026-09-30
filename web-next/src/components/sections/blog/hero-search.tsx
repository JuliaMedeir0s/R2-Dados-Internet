import type { BlogCategoria } from "@/lib/blog";
import { Busca } from "./busca";
import { Categorias } from "./categorias";

// Topo da listagem: título do Figma, busca e pills de categoria.
export function BlogHeroSearch({ categorias }: { categorias: BlogCategoria[] }) {
  return (
    <section className="bg-white py-16 text-center">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <p className="text-lg text-texto/70">Bem-vindo a sua</p>
        <h1 className="mt-1 text-3xl font-bold text-texto md:text-5xl">
          Janela para um mundo sem interrupções
        </h1>

        <div className="mt-8">
          <Busca />
        </div>
        <Categorias categorias={categorias} className="mt-6" />
      </div>
    </section>
  );
}
