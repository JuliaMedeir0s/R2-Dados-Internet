import { Icon } from "@iconify/react";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";
import { StackedCard } from "@/components/ui/stacked-card";
import { DIFERENCIAIS } from "@/lib/quem-somos-data";

// Texto e ícones 100% reais e legíveis no PDF.
export function PorQueDiferente() {
  return (
    <section className="bg-cinza-claro py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <SectionTag>Nossos Diferenciais</SectionTag>

          <SectionTitle
            light="Por que a"
            bold="R2 é diferente?"
            className="mt-3 text-2xl md:text-3xl"
          />

          <p className="mx-auto mt-3 max-w-2xl text-texto/70">
            Tecnologia de ponta, estabilidade e atendimento ágil. Conheça os motivos que fazem da
            nossa internet a escolha certa para sua casa ou empresa.
          </p>
        </div>

        {/* Mesmo card de camada dupla dos diferenciais empresariais
            (quem_02): ícone, título em laranja e descrição. */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIAIS.map((item) => (
            <StackedCard key={item.titulo} className="flex flex-col gap-3 p-6">
              <Icon icon={item.icon} className="h-12 w-12 text-brand-1" aria-hidden="true" />
              <h3 className="text-xl font-bold text-brand-1">{item.titulo}</h3>
              <p className="text-sm text-texto/70">{item.descricao}</p>
            </StackedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
