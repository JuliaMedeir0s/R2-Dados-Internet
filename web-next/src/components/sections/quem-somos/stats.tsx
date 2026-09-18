import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";
import { StackedCard } from "@/components/ui/stacked-card";
import { STATS } from "@/lib/quem-somos-data";

// Texto e números 100% reais e legíveis no PDF.
export function Stats() {
  return (
    <section className="bg-cinza-claro py-16 text-center">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <SectionTag>Crescendo Com Você</SectionTag>

        <SectionTitle
          light="Uma história construída com"
          bold="conexão, crescimento e confiança"
          className="mt-3 text-2xl md:text-3xl"
        />

        <p className="mx-auto mt-3 max-w-2xl text-texto/70">
          Ao longo dos anos, a R2 vem expandindo sua estrutura para levar internet fibra óptica com
          qualidade e estabilidade para milhares de clientes.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STATS.map((stat) => (
            <StackedCard key={stat.label} className="p-6">
              <p className="text-3xl font-bold text-brand-1 md:text-4xl">{stat.valor}</p>
              <p className="mt-1 text-sm font-medium text-texto/70">{stat.label}</p>
            </StackedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
