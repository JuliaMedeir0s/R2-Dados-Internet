import type { Metadata } from "next";
import { categoriasDe, getCuradoria, getPosts } from "@/lib/blog";
import { BlogHeroSearch } from "@/components/sections/blog/hero-search";
import { FeaturedPost } from "@/components/sections/blog/featured-post";
import { MainList } from "@/components/sections/blog/main-list";
import { PostRow } from "@/components/sections/blog/post-row";
import { BlogSidebar } from "@/components/sections/blog/sidebar";
import { TwoFeaturedRow } from "@/components/sections/blog/two-featured-row";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Blog — R2 Internet",
  description:
    "Sua janela para um mundo sem interrupções: dicas de rede, fibra óptica, Wi-Fi, segurança e tecnologia da R2 Internet.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();
  const { destaque, maisLidos, maisRelevantes } = await getCuradoria(posts);

  // Distribuição do layout do Figma: o destaque (escolhido no Studio ou o
  // mais recente) no topo; os demais, do mais novo para o mais antigo,
  // preenchem o título principal, o grid de 6, o par final e, passando
  // disso, a lista "Mais posts" — assim nenhum post publicado fica sem
  // aparecer na listagem.
  const resto = posts.filter((post) => post.slug !== destaque?.slug);
  const principal = resto[0];
  const grid = resto.slice(1, 7);
  const par = resto.slice(7, 9);
  const maisPosts = resto.slice(9);

  return (
    <>
      <BlogHeroSearch categorias={categoriasDe(posts)} />

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          {destaque ? (
            <>
              <FeaturedPost post={destaque} />

              <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
                {principal ? <MainList destaque={principal} posts={grid} /> : <div />}
                <BlogSidebar
                  maisLidos={maisLidos}
                  maisRelevantes={maisRelevantes}
                  autor={destaque.autor}
                />
              </div>

              {par.length > 0 && (
                <div className="mt-16">
                  <TwoFeaturedRow posts={par} />
                </div>
              )}

              {maisPosts.length > 0 && (
                <div className="mt-16">
                  <h2 className="border-b-2 border-brand-1 pb-2 text-lg font-bold text-brand-1">
                    Mais posts
                  </h2>
                  <div className="mt-2 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                    {maisPosts.map((post) => (
                      <PostRow key={post.slug} post={post} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className="rounded-3xl bg-cinza-claro p-10 text-center text-texto/70">
              Os primeiros posts estão a caminho. Volte em breve!
            </p>
          )}
        </div>
      </section>

      <CtaBanner overlapFooter />
    </>
  );
}
