import { HomeHero } from "@/components/sections/home-hero";
import { BenefitsStrip } from "@/components/sections/benefits-strip";
import { PlanosResidenciais } from "@/components/sections/planos-residenciais";
import { SpeedTestBanner } from "@/components/sections/speed-test-banner";
import { StreamingCircle } from "@/components/sections/streaming-circle";
import { CtaBanner } from "@/components/sections/cta-banner";
import { QuoteBanner } from "@/components/sections/quote-banner";
import { Lojas } from "@/components/sections/lojas";
import { BusinessTeaser } from "@/components/sections/business-teaser";
import { FaqHome } from "@/components/sections/faq-home";

// `BlogTeaser` saiu da Home a pedido do Roger; o componente e a rota /blog
// continuam no repositório, só não entram mais nesta página.
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BenefitsStrip />
      <PlanosResidenciais />
      <SpeedTestBanner />
      <StreamingCircle />
      <CtaBanner />
      <QuoteBanner />
      <Lojas />
      <BusinessTeaser />
      <FaqHome />
      <CtaBanner />
    </>
  );
}
