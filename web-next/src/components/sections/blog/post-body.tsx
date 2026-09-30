import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { PortableText, type PortableTextComponents } from "next-sanity";
import type { BlogPostCompleto } from "@/lib/blog";
import { sanityImageUrl, type SanityImagem } from "@/sanity/image";

// Ícones à esquerda do corpo do artigo, como no PDF. Facebook e WhatsApp
// compartilham o post; Instagram e TikTok não têm link de compartilhamento
// pela web, então levam aos perfis da R2 (os mesmos do rodapé).
function ShareRail({ url, titulo }: { url: string; titulo: string }) {
  const itens = [
    {
      icon: "ant-design:instagram-filled",
      label: "R2 Internet no Instagram",
      href: "https://www.instagram.com/r2internet/",
    },
    {
      icon: "ic:baseline-facebook",
      label: "Compartilhar no Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      icon: "basil:whatsapp-solid",
      label: "Compartilhar no WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${titulo} ${url}`)}`,
    },
    {
      icon: "simple-icons:tiktok",
      label: "R2 Internet no TikTok",
      href: "https://www.tiktok.com/@r2internet",
    },
  ];

  return (
    <div className="flex shrink-0 flex-col gap-4">
      {itens.map((item) => (
        <a
          key={item.icon}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          title={item.label}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-1 text-white transition-colors hover:bg-brand-5"
        >
          <Icon icon={item.icon} className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}

type ImagemNoTexto = SanityImagem & {
  dimensions?: { width: number; height: number };
};

// Estilos do texto rico do Studio. O H1 é o título do post (PostHero), por
// isso o corpo começa no H2.
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => (
      <h2 className="pt-4 text-2xl font-bold leading-tight text-brand-1">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="pt-2 text-xl font-bold text-texto">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-1 pl-4 italic text-texto">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc space-y-2 pl-6 marker:text-brand-1">{children}</ul>,
    number: ({ children }) => (
      <ol className="list-decimal space-y-2 pl-6 marker:font-bold marker:text-brand-1">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-texto">{children}</strong>,
    link: ({ value, children }) => {
      const href: string = value?.href ?? "#";
      const classe = "font-bold text-brand-1 underline underline-offset-2 hover:text-brand-5";
      return href.startsWith("/") ? (
        <Link href={href} className={classe}>
          {children}
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classe}>
          {children}
        </a>
      );
    },
  },
  types: {
    imagemComAlt: ({ value }: { value: ImagemNoTexto }) => {
      if (!value?.asset || !value.dimensions) return null;
      const { width, height } = value.dimensions;
      return (
        <Image
          src={sanityImageUrl(value, 1600)}
          alt={value.alt ?? ""}
          width={width}
          height={height}
          sizes="(min-width: 1024px) 640px, 100vw"
          className="h-auto w-full rounded-2xl"
        />
      );
    },
  },
};

export function PostBody({ post, url }: { post: BlogPostCompleto; url: string }) {
  return (
    <div className="flex gap-6">
      <ShareRail url={url} titulo={post.titulo} />

      <div className="min-w-0 flex-1 space-y-6 text-[15px] leading-relaxed text-texto/80">
        <PortableText value={post.body} components={components} />
      </div>
    </div>
  );
}
