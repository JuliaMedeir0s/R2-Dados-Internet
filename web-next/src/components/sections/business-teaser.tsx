import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

export function BusinessTeaser() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 md:flex-row md:px-8">
        <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-corp-6/40">
          <Icon icon="mdi:robot-outline" className="h-20 w-20 text-corp-1" />
        </div>
        <div className="text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-wide text-corp-1">
            Para empresas
          </p>
          <h2 className="mt-1 text-2xl font-bold text-texto md:text-3xl">
            Soluções inteligentes para empresas
          </h2>
          <p className="mt-2 max-w-xl text-texto/70">
            Internet dedicada, Lan to Lan, gestão de infraestrutura e
            monitoramento pro-ativo para manter o seu negócio sempre
            conectado.
          </p>
          <Link href="/para-empresas" className="mt-4 inline-block">
            <Button variant="corp">Conheça os planos empresariais</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
