import { Icon } from "@iconify/react";
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
        {/* Ilustração do robô ainda não exportada do Figma — placeholder. */}
        <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-corp-6/40">
          <Icon icon="mdi:robot-outline" className="h-20 w-20 text-corp-1" />
        </div>
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
