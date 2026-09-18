import type { ReactNode } from "react";
import Image from "next/image";
import { SectionTag } from "@/components/ui/section-tag";
import { cn } from "@/lib/utils";

// Hero das páginas internas: mesmo visual do slide da Home (cantos de baixo
// arredondados, foto à direita). O `pt-*` reserva o espaço do header fixo,
// que flutua transparente por cima dele. As fotos exportadas do Figma já vêm
// com o fundo colorido e as linhas — cobrem a seção inteira, e o `bg-*` da
// seção só aparece enquanto a imagem carrega.
type PageHeroProps = {
  tag: string;
  title: ReactNode;
  description: ReactNode;
  tone?: "brand" | "corp";
  image?: { src: string; alt: string };
  /**
   * Reserva respiro extra embaixo (mesmo `pb` do `home-hero.tsx`) pra tira de
   * cards da seção seguinte subir por cima da borda arredondada do hero.
   */
  overlapBelow?: boolean;
};

export function PageHero({
  tag,
  title,
  description,
  tone = "brand",
  image,
  overlapBelow = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-b-[60px] lg:rounded-b-[150px]",
        tone === "corp" ? "bg-gradient-to-br from-corp-2 to-corp-3" : "bg-brand-1",
        overlapBelow && "pb-16 md:pb-20"
      )}
    >
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      )}

      <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-14 md:px-8 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28">
        <div className={image ? "max-w-[60%] sm:max-w-md md:max-w-xl" : "max-w-2xl"}>
          <SectionTag tone="white">{tag}</SectionTag>

          <h1 className="mt-3 text-xl leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mt-4 text-[0.7rem] text-white/90 sm:text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
