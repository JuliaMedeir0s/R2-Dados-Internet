import type { Metadata } from "next";
import { buscarPosts, categoriasDe, getPosts } from "@/lib/blog";
import { PostSearchBar } from "@/components/sections/blog/post-search-bar";
import { PostCard } from "@/components/sections/blog/post-card";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Busca — Blog R2 Internet",
  // Resultado de busca não é página para o Google indexar.
  robots: { index: false, follow: true },
};

export default async function BuscaPage({ searchParams }: PageProps<"/blog/busca">) {
  const { q } = await searchParams;
  const termo = (Array.isArray(q) ? q[0] : q)?.trim().slice(0, 100) ?? "";
  const [posts, resultados] = await Promise.all([getPosts(), termo ? buscarPosts(termo) : []]);

  return (
    <>
      <PostSearchBar categorias={categoriasDe(posts)} termo={termo} />

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h1 className="text-2xl font-bold text-texto md:text-3xl">
            {termo ? (
              <>
                {resultados.length === 1 ? "1 resultado" : `${resultados.length} resultados`} para{" "}
                <span className="text-brand-1">“{termo}”</span>
              </>
            ) : (
              "O que você procura?"
            )}
          </h1>

          {termo && resultados.length === 0 && (
            <p className="mt-4 text-texto/70">
              Nenhum post encontrado. Tente outra palavra ou navegue pelas categorias acima.
            </p>
          )}

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {resultados.map((post) => (
              <PostCard
                key={post.slug}
                post={post}
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner overlapFooter />
    </>
  );
}
