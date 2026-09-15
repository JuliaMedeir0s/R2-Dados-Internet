import { Icon } from "@iconify/react";

// Título exato legível no PDF. A ilustração do prédio ainda não existe no
// repo (arte nova do Figma) — substituída por um bloco com ícone.
export function EmpresarialSolutions() {
  return (
    <section className="bg-cinza-claro py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 md:flex-row md:px-8">
        <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-3xl bg-corp-6/40 md:h-64 md:w-64">
          <Icon icon="mdi:office-building-outline" className="h-20 w-20 text-corp-1 md:h-28 md:w-28" />
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-wide text-corp-1">
            Soluções empresariais
          </p>
          <h2 className="mt-1 text-2xl font-bold text-texto md:text-3xl">
            Tudo o que sua empresa precisa para se manter conectada
          </h2>
          <p className="mt-2 max-w-xl text-texto/70">
            Internet dedicada, gestão de infraestrutura e monitoramento
            pró-ativo em um único parceiro, do projeto à manutenção.
          </p>
        </div>
      </div>
    </section>
  );
}
