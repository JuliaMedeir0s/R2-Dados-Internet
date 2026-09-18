import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Pill de contorno que abre TODAS as seções do Figma ("Internet em Minas
// Gerais", "FAQ", "Nossos Blog"...). `tone` acompanha o fundo da seção.
const TONE_CLASS = {
  brand: "border-brand-1 text-brand-1",
  corp: "border-corp-1 text-corp-1",
  white: "border-white/60 text-white",
} as const;

export type SectionTagTone = keyof typeof TONE_CLASS;

type SectionTagProps = {
  children: ReactNode;
  tone?: SectionTagTone;
  className?: string;
};

export function SectionTag({ children, tone = "brand", className }: SectionTagProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-md border px-2 py-0.5 text-[11px] font-medium",
        TONE_CLASS[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
