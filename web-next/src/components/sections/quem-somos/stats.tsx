import { STATS } from "@/lib/quem-somos-data";

// Texto e números 100% reais e legíveis no PDF.
export function Stats() {
  return (
    <section className="bg-cinza-claro py-16 text-center">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <span className="inline-block rounded-full border border-brand-1 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-1">
          Crescendo Com Você
        </span>
        <h2 className="mt-2 text-2xl font-bold text-texto md:text-3xl">
          Uma história construída com <span className="text-brand-1">conexão, crescimento e
          confiança</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-texto/70">
          Ao longo dos anos, a R2 vem expandindo sua estrutura para levar internet fibra óptica com
          qualidade e estabilidade para milhares de clientes.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-brand-1 md:text-4xl">{stat.valor}</p>
              <p className="mt-1 text-sm font-medium text-texto/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
