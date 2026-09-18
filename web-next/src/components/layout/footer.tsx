"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=553136621235&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+R2+Internet.&type=phone_number&app_absent=0";
const AREA_DO_CLIENTE_URL =
  "https://ixc.r2dados.com.br/central_assinante_web/login";

const MENU_LINKS = [
  { label: "Início", href: "/" },
  { label: "Para Empresas", href: "/para-empresas" },
  { label: "Nossa História", href: "/nossa-historia" },
  { label: "Indique e Ganhe", href: "/indique-e-ganhe" },
  { label: "Blog", href: "/blog" },
];

// Badges oficiais exportados do Figma (PNG com alfa, conferidos sobre o
// laranja do rodapé) — substituem a versão montada em CSS.
const STORE_BADGES = [
  {
    id: "app-store",
    src: "/images/figma/badge-app-store.png",
    alt: "Baixar o app Minha R2 na App Store",
    href: "https://apps.apple.com/br/app/minha-r2/id6737197287",
  },
  {
    id: "google-play",
    src: "/images/figma/badge-google-play.png",
    alt: "Baixar o app Minha R2 no Google Play",
    href: "https://play.google.com/store/search?q=minha%20r2&c=apps",
  },
];

const SOCIAL_LINKS = [
  {
    id: "instagram",
    icon: "ant-design:instagram-filled",
    href: "https://www.instagram.com/r2internet/",
    label: "Instagram",
  },
  {
    id: "facebook",
    icon: "ic:baseline-facebook",
    href: "https://www.facebook.com/r2dados",
    label: "Facebook",
  },
  { id: "whatsapp", icon: "basil:whatsapp-solid", href: WHATSAPP_URL, label: "WhatsApp" },
  // Handle não confirmado — ajustar assim que a Júlia confirmar o @.
  {
    id: "tiktok",
    icon: "simple-icons:tiktok",
    href: "https://www.tiktok.com/@r2internet",
    label: "TikTok",
  },
];

export function Footer() {
  const [isContractsModalOpen, setIsContractsModalOpen] = useState(false);
  const contractsTriggerRef = useRef<HTMLButtonElement>(null);
  const contractsPanelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() ?? "/";

  // Rodapé segue a paleta da página: laranja no residencial, azul-marinho em
  // Empresarial. Os círculos das redes são brancos nos dois; muda só o ícone.
  const isBusiness = pathname.startsWith("/para-empresas");
  const socialIconClass = isBusiness ? "h-5 w-5 text-corp-1" : "h-5 w-5 text-brand-1";
  const linkHoverClass = isBusiness ? "hover:text-corp-6" : "hover:text-brand-8";

  // Gestão de foco do único modal do site: ao abrir, o foco entra no painel;
  // enquanto aberto o Tab circula só dentro dele (é o que `aria-modal` promete
  // ao leitor de tela) e Escape fecha; ao fechar, o foco volta pro botão que
  // abriu, pra quem navega por teclado não ser jogado pro topo da página.
  useEffect(() => {
    if (!isContractsModalOpen) return;

    const trigger = contractsTriggerRef.current;
    const focaveis = () =>
      Array.from(
        contractsPanelRef.current?.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])"
        ) ?? []
      );

    focaveis()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsContractsModalOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      const itens = focaveis();
      if (itens.length === 0) return;

      const primeiro = itens[0];
      const ultimo = itens[itens.length - 1];
      const ativo = document.activeElement;
      const dentro = contractsPanelRef.current?.contains(ativo) ?? false;

      if (event.shiftKey && (ativo === primeiro || !dentro)) {
        event.preventDefault();
        ultimo.focus();
      } else if (!event.shiftKey && (ativo === ultimo || !dentro)) {
        event.preventDefault();
        primeiro.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [isContractsModalOpen]);

  return (
    <footer className={isBusiness ? "bg-corp-2 text-white" : "bg-brand-1 text-white"}>
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/images/footerLogo.png"
              alt="R2 Internet"
              width={140}
              height={140}
              className="h-24 w-24"
            />
            <div className="mt-4 flex flex-col gap-3">
              {STORE_BADGES.map((badge) => (
                <a
                  key={badge.id}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={828}
                    height={245}
                    className="h-10 w-auto"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="mb-4 font-bold">Menu</h3>
            <ul className="space-y-2 text-sm">
              {MENU_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={`transition-colors ${linkHoverClass}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="mb-4 font-bold">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={AREA_DO_CLIENTE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${linkHoverClass}`}
                >
                  2 Via de Boleto
                </a>
              </li>
              <li>
                <button
                  type="button"
                  ref={contractsTriggerRef}
                  onClick={() => setIsContractsModalOpen(true)}
                  aria-haspopup="dialog"
                  aria-expanded={isContractsModalOpen}
                  className={`w-full cursor-pointer transition-colors lg:text-left ${linkHoverClass}`}
                >
                  Contratos
                </button>
              </li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="mb-4 font-bold">Fale Conosco</h3>
            <div className="space-y-2 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 transition-opacity hover:opacity-80 lg:justify-start"
              >
                <Icon icon="basil:whatsapp-solid" className="h-5 w-5" />
                <span>(31) 3662-1235</span>
              </a>
              <a
                href="tel:+553136621235"
                className="flex items-center justify-center gap-2 transition-opacity hover:opacity-80 lg:justify-start"
              >
                <Icon icon="basil:phone-solid" className="h-5 w-5" />
                <span>(31) 3662-1235</span>
              </a>
              <a
                href="mailto:contato@r2dados.com"
                className="flex items-center justify-center gap-2 transition-opacity hover:opacity-80 lg:justify-start"
              >
                <Icon icon="material-symbols:mail" className="h-5 w-5" />
                <span>contato@r2dados.com</span>
              </a>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="mb-4 font-bold">Nossas Redes</h3>
            <div className="flex justify-center gap-3 lg:justify-start">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-80"
                >
                  <Icon icon={social.icon} className={socialIconClass} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={isBusiness ? "bg-black/30" : "bg-brand-6"}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs md:flex-row md:px-8">
          <p>
            R2 INTERNET © {new Date().getFullYear()}. Todos os direitos reservados |{" "}
            <Link href="/politica-de-privacidade" className="underline">
              Políticas de Privacidade
            </Link>
          </p>
          <p>Desenvolvido por: Flow iD</p>
        </div>
      </div>

      {isContractsModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setIsContractsModalOpen(false)}
        >
          {/* `role="dialog"`/`aria-modal` vão no PAINEL, não no backdrop: é o
              painel que é o diálogo, e o rótulo dele é o próprio título. */}
          <div
            ref={contractsPanelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="footer-contratos-titulo"
            className="w-full max-w-md rounded-2xl bg-white p-8 text-texto shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 id="footer-contratos-titulo" className="text-2xl font-bold">
                Contratos
              </h3>
              <button
                type="button"
                onClick={() => setIsContractsModalOpen(false)}
                className="cursor-pointer rounded-full p-2 transition-colors hover:bg-cinza-claro"
                aria-label="Fechar"
              >
                <Icon icon="maki:cross" className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              {[
                { href: "/pdfs/link-dedicado.pdf", icon: "ph:file-pdf-bold", label: "Link Dedicado" },
                { href: "/pdfs/scm-e-sva.pdf", icon: "ph:file-pdf-bold", label: "SCM e SVA" },
              ].map((doc) => (
                <a
                  key={doc.href}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl bg-cinza-claro p-4 transition-colors hover:bg-brand-8/20"
                >
                  <div className="flex items-center gap-3">
                    <Icon icon={doc.icon} className="h-8 w-8 text-brand-1" />
                    <span className="font-medium">{doc.label}</span>
                  </div>
                  <Icon
                    icon="ph:arrow-right-bold"
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  />
                </a>
              ))}
              <Link
                href="/politica-de-privacidade"
                onClick={() => setIsContractsModalOpen(false)}
                className="group flex items-center justify-between rounded-xl bg-cinza-claro p-4 transition-colors hover:bg-brand-8/20"
              >
                <div className="flex items-center gap-3">
                  <Icon icon="ph:shield-check-bold" className="h-8 w-8 text-brand-1" />
                  <span className="font-medium">Política de Privacidade</span>
                </div>
                <Icon
                  icon="ph:arrow-right-bold"
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
