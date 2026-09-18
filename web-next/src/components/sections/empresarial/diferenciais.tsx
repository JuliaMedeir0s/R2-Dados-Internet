import { Icon } from "@iconify/react";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";
import { StackedCard } from "@/components/ui/stacked-card";
import { DIFERENCIAIS } from "@/lib/empresarial-data";

export function EmpresarialDiferenciais() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center">
          <SectionTag tone="corp">Nossos Diferenciais</SectionTag>

          <SectionTitle
            tone="corp"
            light="Soluções empresariais"
            bold="sob medida para o seu negócio"
            className="mt-3"
          />

          <p className="mx-auto mt-3 max-w-3xl text-sm text-texto/70">
            Cada empresa possui necessidades diferentes. Por isso, oferecemos
            soluções personalizadas para garantir máxima performance e
            segurança.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DIFERENCIAIS.map((item) => (
            <StackedCard
              key={item.titulo}
              tone="corp"
              className="flex flex-col gap-3 border-corp-1 p-6"
            >
              <Icon icon={item.icon} className="h-14 w-14 text-corp-1" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-corp-1">{item.titulo}</h3>
              <p className="text-sm text-texto/70">{item.descricao}</p>
            </StackedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
