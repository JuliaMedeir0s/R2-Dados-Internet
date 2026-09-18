import Image from "next/image";
import Link from "next/link";
import { SectionTag } from "@/components/ui/section-tag";

// Card único e clicável (sem botão): o Figma mostra a mesma foto do hero da
// Home cortada à direita, com o texto por cima à esquerda.
export function CtaBanner() {
  return (
    <section className="px-4 py-14 md:px-8">
      <Link
        href="/#planos"
        aria-label="Ver os planos de internet residencial da R2"
        className="relative mx-auto flex min-h-[320px] max-w-7xl overflow-hidden rounded-[32px] bg-brand-1"
      >
        <Image
          src="/images/home-hero.png"
          alt=""
          fill
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="object-cover object-right"
        />

        <div className="relative z-10 flex max-w-lg flex-col justify-center p-8 text-white md:p-12">
          <SectionTag tone="white" className="self-start">
            Internet em Minas Gerais
          </SectionTag>

          <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
            <span className="font-bold">Conexão</span>{" "}
            <span className="font-light">com</span>{" "}
            <span className="font-bold">Wi-fi</span>
            <br />
            <span className="font-light">na</span>{" "}
            <span className="font-bold">casa toda!</span>
          </h2>

          <p className="mt-4 text-sm text-white/90 md:text-base">
            Seja para assistir filmes, estudar, trabalhar ou jogar online, a R2
            tem o plano ideal para sua rotina.
          </p>
        </div>
      </Link>
    </section>
  );
}
