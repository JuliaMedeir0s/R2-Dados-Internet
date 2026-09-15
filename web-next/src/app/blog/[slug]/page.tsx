import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BLOG_POSTS,
  getPostBySlug,
  getAuthorByName,
  getPostSidebarMaisLidos,
  getPostSidebarMaisRelevantes,
  getRelatedPosts,
} from "@/lib/blog-data";
import { PostSearchBar } from "@/components/sections/blog/post-search-bar";
import { PostHero } from "@/components/sections/blog/post-hero";
import { PostBody } from "@/components/sections/blog/post-body";
import { PostSidebar } from "@/components/sections/blog/post-sidebar";
import { RelatedPosts } from "@/components/sections/blog/related-posts";
import { CtaBanner } from "@/components/sections/cta-banner";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.titulo} — Blog R2 Internet`,
    description: post.resumo,
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Autor padrão de segurança: todo post do catálogo hoje tem `autor`
  // batendo com um nome em BLOG_AUTHORS, mas caso um post novo não tenha
  // (ainda) um card de autor cadastrado, cai no da Mariana pra sidebar não
  // quebrar.
  const autor = getAuthorByName(post.autor) ?? getAuthorByName("Mariana Albuquerque")!;

  return (
    <>
      <PostSearchBar />

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <article>
              <PostHero post={post} />
              <div className="mt-8">
                <PostBody post={post} />
              </div>
            </article>

            <PostSidebar
              autor={autor}
              maisLidos={getPostSidebarMaisLidos(post.slug)}
              maisRelevantes={getPostSidebarMaisRelevantes(post.slug)}
            />
          </div>

          <div className="mt-16">
            <RelatedPosts posts={getRelatedPosts(post.slug)} />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
