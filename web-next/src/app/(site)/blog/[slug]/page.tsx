import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoriasDe, getCuradoria, getPost, getPosts, getRelacionados } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";
import { PostSearchBar } from "@/components/sections/blog/post-search-bar";
import { PostHero } from "@/components/sections/blog/post-hero";
import { PostBody } from "@/components/sections/blog/post-body";
import { PostSidebar } from "@/components/sections/blog/post-sidebar";
import { RelatedPosts } from "@/components/sections/blog/related-posts";
import { CtaBanner } from "@/components/sections/cta-banner";

// Os posts que já existem no build saem prontos; um post publicado depois
// é gerado na primeira visita (dynamicParams, padrão) e fica em cache.
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const description = post.seo?.metaDescription || post.resumo;
  return {
    // O "Título para o Google" do Studio já vem no tamanho certo; sem ele,
    // o título do post + a marca.
    title: post.seo?.seoTitle || `${post.titulo} — Blog R2 Internet`,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.titulo,
      description,
      publishedTime: post.publishedAt,
      modifiedTime: post.atualizadoEm,
      authors: [post.autor.nome],
      images: post.imagem ? [{ url: post.imagem.src, alt: post.imagem.alt }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const [post, posts] = await Promise.all([getPost(slug), getPosts()]);
  if (!post) notFound();

  const { maisLidos, maisRelevantes } = await getCuradoria(posts, post.slug);
  const categorias = categoriasDe(posts);
  const url = `${SITE_URL}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titulo,
    description: post.seo?.metaDescription || post.resumo,
    image: post.imagem?.src,
    datePublished: post.publishedAt,
    dateModified: post.atualizadoEm || post.publishedAt,
    author: { "@type": "Person", name: post.autor.nome, jobTitle: post.autor.cargo },
    publisher: { "@type": "Organization", name: "R2 Internet", url: SITE_URL },
    mainEntityOfPage: url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // `<` escapado: o JSON vem de texto digitado no Studio.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <PostSearchBar categorias={categorias} />

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <article>
              <PostHero post={post} />
              <div className="mt-8">
                <PostBody post={post} url={url} />
              </div>
            </article>

            <PostSidebar autor={post.autor} maisLidos={maisLidos} maisRelevantes={maisRelevantes} />
          </div>

          <div className="mt-16">
            <RelatedPosts posts={getRelacionados(posts, post)} categorias={categorias} />
          </div>
        </div>
      </section>

      <CtaBanner overlapFooter />
    </>
  );
}
