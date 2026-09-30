import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "./env";

const builder = createImageUrlBuilder({ projectId, dataset });

/** Campo de imagem como vem das queries (tipo `imagemComAlt` do Studio). */
export type SanityImagem = {
  asset?: { _ref: string };
  crop?: { top: number; bottom: number; left: number; right: number };
  hotspot?: { x: number; y: number; height: number; width: number };
  alt?: string;
};

/**
 * URL da imagem no CDN do Sanity, já limitada em largura: o `next/image`
 * ainda gera os tamanhos menores, mas não baixa o original (fotos de
 * celular passam fácil de 5 MB).
 */
export function sanityImageUrl(imagem: SanityImagem, width = 2000) {
  return builder
    .image(imagem as Parameters<typeof builder.image>[0]).width(width).fit("max").auto("format").url();
}
