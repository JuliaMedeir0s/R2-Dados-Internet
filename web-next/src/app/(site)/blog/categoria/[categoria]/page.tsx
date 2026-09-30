import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoriasDe, getPosts, slugCategoria } from "@/lib/blog";
import { PostSearchBar } from "@/components/sections/blog/post-search-bar";
import { PostCard } from "@/components/sections/blog/post-card";
import { CtaBanner } from "@/components/sections/cta-banner";

async function getCategoria(slug: string) {
  const posts = await getPosts();
  const categorias = categoriasDe(posts);
  return {
    categoria: categorias.find((c) => c.slug === slug),
    categorias,
    posts: posts.filter((post) => slugCategoria(post.categoria) === slug),
  };
}

export async function generateStaticParams() {
  return categoriasDe(await getPosts()).map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/categoria/[categoria]">): Promise<Metadata> {
  const { categoria } = await getCategoria((await params).categoria);
  if (!categoria) return {};
  return {
    title: `${categoria.nome} — Blog R2 Internet`,
    description: `Posts sobre ${categoria.nome} no blog da R2 Internet.`,
    alternates: { canonical: `/blog/categoria/${categoria.slug}` },
  };
}

export default async function CategoriaPage({ params }: PageProps<"/blog/categoria/[categoria]">) {
  const { categoria, categorias, posts } = await getCategoria((await params).categoria);
  if (!categoria) notFound();

  return (
    <>
      <PostSearchBar categorias={categorias} categoriaAtiva={categoria.slug} />

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h1 className="text-3xl font-bold text-brand-1 md:text-4xl">{categoria.nome}</h1>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
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
