import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-brand-1 to-brand-6 py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:px-8 md:text-left">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white/80">
            Internet sem limites
          </p>
          <h3 className="mt-1 text-3xl font-bold md:text-4xl">
            Conexão com Wi-fi na casa toda!
          </h3>
          <p className="mt-2 max-w-xl text-white/90">
            Seja para assistir filmes, estudar, trabalhar ou jogar online, a
            R2 tem o plano ideal para sua rotina.
          </p>
        </div>
        {/* Link absoluto (não só #planos) pra funcionar também quando o
            banner é reaproveitado em páginas fora da Home, como Quem Somos. */}
        <Link href="/#planos" className="shrink-0">
          <Button
            size="lg"
            className="bg-white text-brand-1 hover:bg-cinza-claro"
          >
            Ver planos
          </Button>
        </Link>
      </div>
    </section>
  );
}
