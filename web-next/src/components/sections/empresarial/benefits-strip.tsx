import { Icon } from "@iconify/react";
import { StackedCard } from "@/components/ui/stacked-card";

// Rótulos exatos da tira de cards do Figma (empresa_00). Os ícones do Figma
// são ilustrações 3D que não foram exportadas — ficam como Iconify em
// `corp-1`, com o glifo mais próximo de cada um.
const BENEFITS = [
  { icon: "mdi:face-agent", label: "Suporte Premium" },
  { icon: "mdi:cable-data", label: "100% Fibra Óptica" },
  { icon: "mdi:lightning-bolt", label: "Navegue em ultravelocidade" },
  { icon: "mdi:magnify", label: "Monitoramento Inteligente" },
];

export function EmpresarialBenefitsStrip() {
  // Mesmo empilhamento da tira da Home (`sections/benefits-strip.tsx`):
  // `relative z-10` na seção inteira garante que ela pinte por cima do hero.
  return (
    <section className="relative z-10 bg-white pb-10">
      {/* Margem negativa MAIOR que o `pb` reservado pelo hero
          (`overlapBelow` no `PageHero`): o excedente é o quanto os cards
          realmente sobem por cima da borda arredondada do banner. */}
      <div className="relative z-10 mx-auto -mt-28 grid max-w-5xl grid-cols-2 gap-4 px-4 md:-mt-32 md:grid-cols-4 md:gap-6 md:px-8">
        {BENEFITS.map((benefit) => (
          <StackedCard
            key={benefit.label}
            tone="corp"
            className="flex flex-col items-center gap-3 p-5 text-center shadow-lg"
          >
            <Icon icon={benefit.icon} className="h-12 w-12 text-corp-1" aria-hidden="true" />
            <p className="text-sm font-bold text-corp-1">{benefit.label}</p>
          </StackedCard>
        ))}
      </div>
    </section>
  );
}
