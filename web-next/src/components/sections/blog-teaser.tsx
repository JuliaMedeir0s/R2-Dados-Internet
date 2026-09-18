import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";

export function BlogTeaser() {
  // A coluna lateral do Figma mostra só os quatro posts seguintes ao
  // destaque — sem o corte, ela despejaria a listagem inteira.
  const [destaque, ...resto] = BLOG_POSTS;
  const secundarios = resto.slice(0, 4);

  return (
    <section className="bg-cinza-claro py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-10 flex flex-col items-center text-center">
          <SectionTag>Nossos Blog</SectionTag>
          <SectionTitle
            light="A sua janela para"
            bold="um mundo sem interrupções"
            className="mt-3 max-w-2xl text-2xl md:text-3xl"
          />
          <Icon
            icon="ph:caret-down-bold"
            className="mt-4 h-5 w-5 text-brand-1"
            aria-hidden="true"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <Link
            href={`/blog/${destaque.slug}`}
            className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow hover:shadow-lg"
          >
            {/* Decorativa: o título do post está logo abaixo, no mesmo link. */}
            <div className="relative h-56 bg-brand-8/30">
              <Image
                src={destaque.imagem}
                alt=""
                fill
                sizes="(min-width: 768px) 640px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-texto group-hover:text-brand-1">
                {destaque.titulo}
              </h3>
              <p className="mt-2 text-sm text-texto/70">{destaque.resumo}</p>
              <p className="mt-4 text-xs font-bold text-texto/50">
                {destaque.autor}
              </p>
            </div>
          </Link>

          <div className="flex flex-col gap-4">
            {secundarios.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-brand-8/30">
                  <Image src={post.imagem} alt="" fill sizes="56px" className="object-cover" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-texto group-hover:text-brand-1">
                    {post.titulo}
                  </h4>
                  <p className="mt-1 text-xs text-texto/50">{post.autor}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-sm font-bold text-brand-1 hover:underline"
          >
            Ver todos os posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
