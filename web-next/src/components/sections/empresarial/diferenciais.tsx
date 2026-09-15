import { Icon } from "@iconify/react";
import { DIFERENCIAIS } from "@/lib/empresarial-data";

export function EmpresarialDiferenciais() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-corp-1">
            Por que a R2
          </p>
          <h2 className="mt-1 text-2xl font-bold text-texto md:text-3xl">
            Nossos Diferenciais
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DIFERENCIAIS.map((item) => (
            <div
              key={item.titulo}
              className="flex flex-col items-center gap-3 rounded-2xl bg-corp-2 p-6 text-center text-white shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                <Icon icon={item.icon} className="h-7 w-7 text-corp-7" />
              </span>
              <h3 className="text-lg font-bold">{item.titulo}</h3>
              <p className="text-sm text-white/70">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
