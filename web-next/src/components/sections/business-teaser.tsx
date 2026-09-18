import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { SectionNotch } from "@/components/ui/section-notch";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";

export function BusinessTeaser() {
  return (
    <section className="bg-white pb-16">
      {/* junção com a seção de Lojas, que é laranja (home_04) */}
      <SectionNotch color="bg-brand-1" iconClass="text-white" />

      <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-8 px-4 md:flex-row md:px-8">
        {/* Ilustração exportada do Figma: já vem com o cenário (monitor,
            nuvem, pasta) e fundo transparente — sem círculo atrás. */}
        <Image
          src="/images/figma/robo-empresas.webp"
          alt="Mascote robô azul da R2 Empresas ao lado de um monitor, uma nuvem e uma pasta de arquivos"
          width={571}
          height={402}
          sizes="(min-width: 768px) 480px, 90vw"
          className="h-auto w-full max-w-[480px] shrink-0"
        />
        <div className="text-center md:text-left">
          <SectionTag tone="corp">R2 Para Empresas</SectionTag>
          <SectionTitle
            light="Soluções inteligentes"
            bold="para empresas"
            tone="corp"
            className="mt-3 text-2xl md:text-3xl"
          />
          <p className="mt-3 max-w-xl text-sm text-texto/70">
            Internet empresarial, link dedicado, telefonia fixa e soluções
            completas para manter sua empresa conectada com estabilidade,
            segurança e alta performance.
          </p>
          <ButtonLink href="/para-empresas" variant="corp" className="mt-5">
            Acesse aqui
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
