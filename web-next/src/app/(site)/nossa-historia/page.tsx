import type { Metadata } from "next";
import { QuemSomosHero } from "@/components/sections/quem-somos/hero";
import { Essencia } from "@/components/sections/quem-somos/essencia";
import { Stats } from "@/components/sections/quem-somos/stats";
import { CtaBanner } from "@/components/sections/cta-banner";
import { DiferenciaisTicker } from "@/components/sections/quem-somos/diferenciais-ticker";
import { Historia } from "@/components/sections/quem-somos/historia";
import { PorQueDiferente } from "@/components/sections/quem-somos/por-que-diferente";

export const metadata: Metadata = {
  title: "Quem Somos — R2 Internet",
  description:
    "Conectando pessoas, empresas e histórias todos os dias. Conheça a R2 Internet e por que somos a escolha certa para sua casa ou empresa.",
};

export default function NossaHistoriaPage() {
  return (
    <>
      <QuemSomosHero />
      <Essencia />
      <Stats />
      <CtaBanner />
      <DiferenciaisTicker />
      <Historia />
      <PorQueDiferente />
      <CtaBanner overlapFooter />
    </>
  );
}
