import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

// Aba curva com chevron que marca a junção entre duas seções (home_03 /
// home_04): fica no topo da seção de baixo, pintada com a cor da seção de
// cima; o ícone usa a cor da seção de baixo.
type SectionNotchProps = {
  color?: string;
  iconClass?: string;
  className?: string;
};

export function SectionNotch({
  color = "bg-white",
  iconClass = "text-brand-1",
  className,
}: SectionNotchProps) {
  return (
    <div className={cn("flex justify-center", className)} aria-hidden="true">
      <div className={cn("flex h-10 w-[120px] items-end justify-center pb-1.5 rounded-b-full", color)}>
        <Icon icon="ph:caret-down-bold" className={cn("h-5 w-5", iconClass)} />
      </div>
    </div>
  );
}
