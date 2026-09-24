import type { Metadata } from "next";
import { IndiqueHero } from "@/components/sections/indique/hero";
import { ComoFunciona } from "@/components/sections/indique/como-funciona";
import { PlanosGroup } from "@/components/sections/planos-residenciais";
import { PLANOS_GRUPOS } from "@/lib/planos-data";
import { CtaBanner } from "@/components/sections/cta-banner";
import { IndiqueFaq } from "@/components/sections/indique/faq";

export const metadata: Metadata = {
  title: "Indique e Ganhe — R2 Internet",
  description:
    "Indique um amigo para a R2 Internet e ganhe R$30,00 de desconto na sua mensalidade a cada indicação efetivada.",
};

export default function IndiqueEGanhePage() {
  return (
    <>
      <IndiqueHero />
      <ComoFunciona />
      <section className="space-y-14 bg-white py-16">
        {PLANOS_GRUPOS.map((grupo) => (
          <PlanosGroup key={grupo.tag} {...grupo} />
        ))}
      </section>
      <CtaBanner />
      <IndiqueFaq />
      <CtaBanner overlapFooter />
    </>
  );
}
