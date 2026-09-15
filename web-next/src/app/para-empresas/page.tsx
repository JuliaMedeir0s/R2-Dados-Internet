import type { Metadata } from "next";
import { EmpresarialHero } from "@/components/sections/empresarial/hero";
import { EmpresarialBenefitsStrip } from "@/components/sections/empresarial/benefits-strip";
import { EmpresarialSolutions } from "@/components/sections/empresarial/solutions";
import { ServicesTicker } from "@/components/sections/empresarial/services-ticker";
import { BlackBox } from "@/components/sections/empresarial/blackbox";
import { EmpresarialDiferenciais } from "@/components/sections/empresarial/diferenciais";
import { EmpresarialCtaBanner } from "@/components/sections/empresarial/cta-banner";
import { EmpresarialFaq } from "@/components/sections/empresarial/faq";

export const metadata: Metadata = {
  title: "R2 Internet Empresarial",
  description:
    "Internet dedicada, link de alta disponibilidade e monitoramento inteligente para o seu negócio ficar sempre conectado.",
};

export default function EmpresarialPage() {
  return (
    <>
      <EmpresarialHero />
      <EmpresarialBenefitsStrip />
      <EmpresarialSolutions />
      <ServicesTicker />
      <EmpresarialCtaBanner />
      <BlackBox />
      <EmpresarialDiferenciais />
      <EmpresarialFaq />
      <EmpresarialCtaBanner />
    </>
  );
}
