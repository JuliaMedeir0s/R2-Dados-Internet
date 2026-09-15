import { PLANOS_RESIDENCIAIS } from "@/lib/planos-data";
import { PlanoCard } from "@/components/sections/planos-residenciais";

/**
 * O PDF mostra os planos residenciais reais (mesmo catálogo de
 * `planos-data.ts`) curados em 2 grupos de 2 cards nesta página, em vez do
 * carrossel único de 8 planos da Home — cada grupo com sua própria
 * tag/título/texto, layout alternando texto à esquerda/direita. Simplificado
 * aqui como grid estático (sem swiper/setas de navegação como no Figma) já
 * que são só 2 cards por grupo.
 */
export function FeaturedPlans({
  tag,
  heading,
  description,
  planNames,
  reverse = false,
}: {
  tag: string;
  heading: string;
  description: string;
  planNames: string[];
  reverse?: boolean;
}) {
  const planos = planNames
    .map((nome) => PLANOS_RESIDENCIAIS.find((p) => p.nome === nome))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="bg-cinza-claro py-16">
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:px-8 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="shrink-0 text-center md:w-80 md:text-left">
          <span className="inline-block rounded-full border border-brand-1 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-1">
            {tag}
          </span>
          <h2 className="mt-2 text-2xl font-bold text-texto md:text-3xl">{heading}</h2>
          <p className="mt-3 text-texto/70">{description}</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {planos.map((plano) => (
            <PlanoCard key={plano.nome} plano={plano} ctaLabel="Contrate agora" />
          ))}
        </div>
      </div>
    </section>
  );
}
