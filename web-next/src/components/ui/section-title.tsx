import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Título de seção do Figma: sempre dois pesos na mesma cor — trecho leve
// seguido do trecho em negrito. A cor vem do `tone` (fundo da seção).
const TONE_CLASS = {
  brand: "text-brand-1",
  corp: "text-corp-1",
  white: "text-white",
} as const;

export type SectionTitleTone = keyof typeof TONE_CLASS;

type SectionTitleProps = {
  light: ReactNode;
  bold: ReactNode;
  tone?: SectionTitleTone;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionTitle({
  light,
  bold,
  tone = "brand",
  as: Tag = "h2",
  className,
}: SectionTitleProps) {
  return (
    <Tag className={cn("text-3xl leading-tight md:text-4xl", TONE_CLASS[tone], className)}>
      <span className="font-light">{light}</span>{" "}
      <span className="font-bold">{bold}</span>
    </Tag>
  );
}
