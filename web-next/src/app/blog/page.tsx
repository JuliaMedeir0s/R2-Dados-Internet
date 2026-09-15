import type { Metadata } from "next";
import { BLOG_POSTS, BLOG_AUTHORS } from "@/lib/blog-data";
import { BlogHeroSearch } from "@/components/sections/blog/hero-search";
import { FeaturedPost } from "@/components/sections/blog/featured-post";
import { MainList } from "@/components/sections/blog/main-list";
import { BlogSidebar } from "@/components/sections/blog/sidebar";
import { TwoFeaturedRow } from "@/components/sections/blog/two-featured-row";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Blog — R2 Internet",
  description:
    "Sua janela para um mundo sem interrupções: dicas de rede, fibra óptica, Wi-Fi, segurança e tecnologia da R2 Internet.",
};

function findPost(slug: string) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post não encontrado em blog-data.ts: ${slug}`);
  return post;
}

export default function BlogPage() {
  const destaque = findPost("internet-empresarial-diferencas-plano-residencial-corporativo");
  const principal = findPost("como-saber-se-sua-internet-esta-entregando-a-velocidade-contratada");

  const grid = [
    "como-melhorar-o-sinal-do-wifi-em-casas-grandes",
    "fibra-optica-ou-radio-qual-a-melhor-internet-para-sua-regiao",
    "7-sinais-de-que-esta-na-hora-de-trocar-de-provedor",
    "wifi-lento-em-casa-veja-os-principais-motivos-e-como-resolver",
    "10-dicas-para-proteger-sua-rede-wifi-contra-invasoes",
    "quantos-mega-sao-ideais-para-sua-casa",
  ].map(findPost);

  const maisLidos = [
    "smart-tv-alexa-e-automacao-sua-internet-esta-preparada",
    "5-erros-que-estao-deixando-sua-internet-mais-lenta",
    "como-funciona-a-fibra-optica-na-pratica",
    "internet-empresarial-diferencas-plano-residencial-corporativo",
  ].map(findPost);

  const maisRelevantes = [
    "como-evitar-lentidao-na-internet-em-horarios-de-pico",
    "vale-a-pena-usar-repetidor-de-sinal",
    "o-que-e-ping-e-como-ele-afeta-jogos-online",
    "streaming-travando-veja-como-ter-mais-estabilidade-na-conexao",
  ].map(findPost);

  const destaquesFinais: [ReturnType<typeof findPost>, ReturnType<typeof findPost>] = [
    findPost("internet-caiu-toda-hora"),
    findPost("home-office-sem-travar"),
  ];

  const autor = BLOG_AUTHORS.find((a) => a.nome === "Mariana Albuquerque")!;

  return (
    <>
      <BlogHeroSearch />

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <FeaturedPost post={destaque} />

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <MainList destaque={principal} posts={grid} />
            <BlogSidebar maisLidos={maisLidos} maisRelevantes={maisRelevantes} autor={autor} />
          </div>

          <div className="mt-16">
            <TwoFeaturedRow posts={destaquesFinais} />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
