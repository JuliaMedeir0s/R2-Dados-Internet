import type { Metadata } from "next";
import { IndiqueHero } from "@/components/sections/indique/hero";
import { ComoFunciona } from "@/components/sections/indique/como-funciona";
import { FeaturedPlans } from "@/components/sections/indique/featured-plans";
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
      <FeaturedPlans
        tag="Essencial de Alta Qualidade"
        heading="Internet rápida para toda sua casa"
        description="Seja para assistir filmes, estudar, trabalhar, jogar online ou conectar toda a família, a R2 tem o plano ideal para sua rotina."
        planNames={["R2 Start", "R2 Plus"]}
      />
      <FeaturedPlans
        tag="Experiência Premium"
        heading="Performance máxima para quem quer o melhor da conexão"
        description="Os planos de internet 1000 Mega da R2 entregam ultra velocidade, estabilidade e benefícios exclusivos para quem busca a melhor experiência em streaming, games online e múltiplos dispositivos conectados."
        planNames={["R2 Gamer", "R2 Ultra"]}
        reverse
      />
      <CtaBanner />
      <IndiqueFaq />
      <CtaBanner />
    </>
  );
}
