import Image from "next/image";
import { SectionTag } from "@/components/ui/section-tag";

// Texto 100% real e legível no PDF. Ilustração exportada do Figma (quem_00):
// já vem com o círculo cinza claro atrás da casa, sem fundo adicional aqui.
export function Essencia() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 md:flex-row md:px-8">
        <Image
          src="/images/figma/essencia-casa.webp"
          alt="Ilustração de uma casa laranja cercada por árvores e jardim"
          width={635}
          height={482}
          sizes="(min-width: 768px) 420px, 90vw"
          className="h-auto w-full max-w-[420px] shrink-0"
        />

        <div className="text-center md:text-left">
          <SectionTag>Nossa Essência</SectionTag>

          {/* Título com o trecho em negrito ANTES do leve (quem_00), ao
              contrário do `SectionTitle` (que é sempre leve + negrito) — por
              isso o `h2` na mão, mesmo padrão do `blackbox` e do
              `cta-banner`. */}
          <h2 className="mt-3 text-2xl leading-tight text-brand-1 md:text-3xl">
            <span className="font-bold">Conectando</span>{" "}
            <span className="font-light">pessoas, empresas e histórias todos os dias</span>
          </h2>

          <p className="mt-3 max-w-xl text-texto/70">
            A R2 nasceu com o propósito de levar internet de qualidade, estabilidade e atendimento
            de verdade para quem precisa estar conectado.
          </p>
        </div>
      </div>
    </section>
  );
}
