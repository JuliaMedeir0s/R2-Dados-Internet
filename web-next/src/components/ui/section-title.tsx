import { Fragment, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Título de seção do Figma: trechos de peso alternado na mesma cor. O caso
// comum é "leve + negrito" (`light`/`bold`); quando o Figma abre em negrito ou
// alterna mais de duas vezes, passe `segments`. A cor vem do `tone` (fundo da
// seção).
const TONE_CLASS = {
  brand: "text-brand-1",
  corp: "text-corp-1",
  white: "text-white",
} as const;

const WEIGHT_CLASS = {
  light: "font-light",
  bold: "font-bold",
} as const;

export type SectionTitleTone = keyof typeof TONE_CLASS;

export type SectionTitleSegment = {
  text: ReactNode;
  weight: keyof typeof WEIGHT_CLASS;
  /** Quebra a linha logo depois deste trecho, sem espaço antes da quebra. */
  breakAfter?: boolean;
};

type SectionTitleProps = {
  tone?: SectionTitleTone;
  as?: "h1" | "h2" | "h3";
  className?: string;
} & (
  | { light: ReactNode; bold: ReactNode; segments?: never }
  | { segments: SectionTitleSegment[]; light?: never; bold?: never }
);

export function SectionTitle(props: SectionTitleProps) {
  const { tone = "brand", as: Tag = "h2", className } = props;
  const segments: SectionTitleSegment[] = props.segments ?? [
    { text: props.light, weight: "light" },
    { text: props.bold, weight: "bold" },
  ];

  return (
    <Tag className={cn("text-3xl leading-tight md:text-4xl", TONE_CLASS[tone], className)}>
      {segments.map((segment, index) => (
        <Fragment key={index}>
          {index > 0 && !segments[index - 1].breakAfter ? " " : null}
          <span className={WEIGHT_CLASS[segment.weight]}>{segment.text}</span>
          {segment.breakAfter ? <br /> : null}
        </Fragment>
      ))}
    </Tag>
  );
}
