import { Icon } from "@iconify/react";
import type { BlogPost } from "@/lib/blog-data";

// Ícones de compartilhamento vistos à esquerda do corpo do artigo no PDF.
// Só visuais por enquanto (sem link de compartilhamento real / handles de
// rede confirmados) — mesmos ícones já usados no rodapé, pra manter
// consistência visual.
const SHARE_ICONS = [
  { id: "instagram", icon: "ant-design:instagram-filled", label: "Compartilhar no Instagram" },
  { id: "facebook", icon: "ic:baseline-facebook", label: "Compartilhar no Facebook" },
  { id: "whatsapp", icon: "basil:whatsapp-solid", label: "Compartilhar no WhatsApp" },
  { id: "tiktok", icon: "simple-icons:tiktok", label: "Compartilhar no TikTok" },
];

function ShareRail() {
  return (
    <div className="flex shrink-0 flex-col gap-4">
      {SHARE_ICONS.map((item) => (
        <span
          key={item.id}
          aria-label={item.label}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-1 text-white"
        >
          <Icon icon={item.icon} className="h-5 w-5" />
        </span>
      ))}
    </div>
  );
}

// Bloco de imagem no meio do texto — no print aparecem dois retângulos
// cinza sem conteúdo entre os parágrafos (provavelmente imagens do artigo
// ainda não exportadas do Figma). Mantive o espaço reservado no mesmo
// lugar, com o placeholder de imagem padrão já usado em outras seções.
function InlineImagePlaceholder() {
  return (
    <div className="flex h-56 items-center justify-center rounded-2xl bg-cinza-claro">
      <Icon icon="mdi:image-outline" className="h-10 w-10 text-brand-1/40" />
    </div>
  );
}

export function PostBody({ post }: { post: BlogPost }) {
  const paragrafos = post.conteudo;

  return (
    <div className="flex gap-6">
      <ShareRail />

      <div className="min-w-0 flex-1 space-y-6 text-[15px] leading-relaxed text-texto/80">
        {paragrafos ? (
          <>
            {/* Ordem igual ao print: 2 parágrafos, imagem, 1 parágrafo,
                imagem, e o restante do texto. */}
            <p>{paragrafos[0]}</p>
            {paragrafos[1] && <p>{paragrafos[1]}</p>}
            {paragrafos[2] && (
              <>
                <InlineImagePlaceholder />
                <p>{paragrafos[2]}</p>
              </>
            )}
            {paragrafos[3] && <InlineImagePlaceholder />}
            {paragrafos.slice(3).map((paragrafo, index) => (
              <p key={index}>{paragrafo}</p>
            ))}
          </>
        ) : (
          <>
            <p>{post.resumo}</p>
            <p className="rounded-2xl bg-cinza-claro p-4 text-sm text-texto/60">
              Este artigo ainda está em produção — o texto completo entra no
              ar em breve.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
