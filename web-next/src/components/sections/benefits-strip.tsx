import Image from "next/image";
import { StackedCard } from "@/components/ui/stacked-card";

// Ícones reais enviados pela Júlia (PNG com transparência, já vêm com a cor
// laranja e o glifo prontos — inclusive "Instalação Grátis", que já é um
// ícone único de engrenagem+check, sem precisar mais sobrepor dois ícones
// como na aproximação anterior via Iconify). Substituem as aproximações
// `mdi:*` que estavam aqui (mantidas só até esses assets chegarem).
// Os PNGs bem antigos (wifi/fibra/suporte/instalacao.png, ainda em
// `public/images/`) são outra aproximação — ícones azuis em baixa
// resolução que nunca bateram com o print — não usados.
const BENEFITS = [
  { icon: "/images/beneficio-instalacao.png", label: "Instalação Grátis" },
  { icon: "/images/beneficio-suporte.png", label: "Suporte Premium" },
  { icon: "/images/beneficio-fibra.png", label: "100% Fibra Óptica" },
  { icon: "/images/beneficio-velocidade.png", label: "Navegue em ultravelocidade" },
];

export function BenefitsStrip() {
  // `relative z-10` na seção inteira (não só no grid interno): o hero agora
  // é um carrossel (Swiper), que cria seu próprio contexto de empilhamento
  // interno — pra garantir por contrato de CSS que esta seção sempre pinta
  // por cima do hero (não só o grid, a seção toda), independente de
  // detalhe de implementação do carrossel. Ver nota espelhada em
  // `home-hero.tsx` (`z-0` no hero). A Júlia reforçou esse mesmo requisito
  // ao mandar os ícones reais desta seção ("o index delas precisa ser
  // superior a do banner, para ficar sobre ele") — já coberto por esse
  // `z-10`/`z-0` espelhado, sem precisar de nada adicional nos ícones em
  // si (eles só herdam o empilhamento da seção que já está por cima).
  return (
    <section className="relative z-10 pb-10">
      {/* Margem negativa MAIOR que o `pb` do hero (ver `home-hero.tsx`): não é
          só cancelar o respiro reservado embaixo do banner (isso deixaria os
          cards apenas encostados na borda, sem sobrepor nada — foi o que a
          Júlia apontou que estava errado, "eles não estão sobre o banner").
          O excedente (48px) é o quanto os cards realmente sobem por cima do
          banner, "furando" a faixa laranja de verdade, como no print de
          referência. */}
      <div className="relative z-10 mx-auto -mt-12 grid max-w-5xl grid-cols-2 gap-4 px-4 md:-mt-16 md:grid-cols-4 md:gap-6 md:px-8">
        {BENEFITS.map((benefit) => (
          <StackedCard
            key={benefit.label}
            className="flex flex-col items-center gap-3 p-5 text-center shadow-lg"
          >
            <Image
              src={benefit.icon}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <p className="text-sm font-bold text-brand-1">{benefit.label}</p>
          </StackedCard>
        ))}
      </div>
    </section>
  );
}
