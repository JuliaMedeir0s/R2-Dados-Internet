import Image from "next/image";
import Link from "next/link";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";

// Card único e clicável (sem botão): a arte do CTA exportada do Figma
// (home_06) já vem com o fundo laranja e as linhas, cortada à direita, com o
// texto por cima à esquerda.
export function CtaBanner({ overlapFooter = false }: { overlapFooter?: boolean }) {
  return (
    <section
      className={`px-4 py-14 md:px-8 ${
        overlapFooter ? "relative z-10 -mb-20" : ""
      }`}
    >
      <Link
        href="/#planos"
        aria-label="Ver os planos de internet residencial da R2"
        className="relative mx-auto flex min-h-[320px] max-w-7xl overflow-hidden rounded-[32px] bg-brand-1"
      >
        <Image
          src="/images/figma/cta-conexao.webp"
          alt="Mulher sorrindo com fone de ouvido segurando o celular"
          fill
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="object-cover object-right"
        />

        <div className="relative z-10 flex max-w-lg flex-col justify-center p-8 text-white md:p-12">
          <SectionTag tone="white" className="self-start">
            Internet em Minas Gerais
          </SectionTag>

          {/* home_06/post_03: alterna negrito e leve e quebra depois de
              "Wi-fi". */}
          <SectionTitle
            tone="white"
            segments={[
              { text: "Conexão", weight: "bold" },
              { text: "com", weight: "light" },
              { text: "Wi-fi", weight: "bold", breakAfter: true },
              { text: "na", weight: "light" },
              { text: "casa toda!", weight: "bold" },
            ]}
            className="mt-4 md:text-5xl"
          />

          <p className="mt-4 text-sm text-white/90 md:text-base">
            Seja para assistir filmes, estudar, trabalhar ou jogar online, a R2
            tem o plano ideal para sua rotina.
          </p>
        </div>
      </Link>
    </section>
  );
}
