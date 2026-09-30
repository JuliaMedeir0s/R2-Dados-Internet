import Image from "next/image";
import type { BlogImagem } from "@/lib/blog";

/**
 * Foto que preenche o contêiner (que precisa ser `relative`), respeitando o
 * ponto de foco marcado no Studio. Decorativa por padrão: em todo card o
 * título do post está logo ao lado, dentro do mesmo link. Sem imagem, não
 * desenha nada e fica o fundo do contêiner.
 */
export function Capa({
  imagem,
  sizes,
  priority,
  decorativa = true,
}: {
  imagem?: BlogImagem;
  sizes: string;
  priority?: boolean;
  decorativa?: boolean;
}) {
  if (!imagem) return null;

  return (
    <Image
      src={imagem.src}
      alt={decorativa ? "" : imagem.alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover"
      style={imagem.posicao ? { objectPosition: imagem.posicao } : undefined}
    />
  );
}
