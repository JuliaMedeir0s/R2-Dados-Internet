import { Icon } from "@iconify/react";
import { DIFERENCIAIS } from "@/lib/quem-somos-data";

// Texto e ícones 100% reais e legíveis no PDF.
export function PorQueDiferente() {
  return (
    <section className="bg-cinza-claro py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full border border-brand-1 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-1">
            Nossos Diferenciais
          </span>
          <h2 className="mt-2 text-2xl font-bold text-texto md:text-3xl">
            Por que a <span className="text-brand-1">R2</span> é diferente?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-texto/70">
            Tecnologia de ponta, estabilidade e atendimento ágil. Conheça os motivos que fazem da
            nossa internet a escolha certa para sua casa ou empresa.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIAIS.map((item) => (
            <div
              key={item.titulo}
              className="rounded-2xl border border-cinza-claro bg-white p-6 shadow-sm"
            >
              <Icon icon={item.icon} className="h-10 w-10 text-brand-1" />
              <h3 className="mt-4 text-lg font-bold text-texto">{item.titulo}</h3>
              <p className="mt-2 text-sm text-texto/70">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
