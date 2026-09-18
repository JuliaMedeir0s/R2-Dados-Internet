import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Efeito de duas camadas do Figma: o card branco na frente e um segundo card
// deslocado 8px pra baixo/direita atrás dele. O card de trás é o `before:` do
// wrapper (pintado antes do filho posicionado), pra não depender de `-z-10`
// — que iria parar atrás do fundo da seção.
type StackedCardProps = {
  children: ReactNode;
  tone?: "brand" | "corp";
  className?: string;
};

export function StackedCard({ children, tone = "brand", className }: StackedCardProps) {
  const isCorp = tone === "corp";

  return (
    <div
      className={cn(
        "relative before:absolute before:inset-0 before:translate-x-2 before:translate-y-2 before:rounded-2xl before:border before:bg-white before:content-['']",
        isCorp ? "before:border-corp-1/10" : "before:border-brand-1/10"
      )}
    >
      <div
        className={cn(
          "relative h-full rounded-2xl border bg-white",
          isCorp
            ? "border-corp-1/20 shadow-[0_18px_40px_-20px_rgba(0,55,255,.45)]"
            : "border-brand-1/20 shadow-[0_18px_40px_-20px_rgba(255,85,0,.45)]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
