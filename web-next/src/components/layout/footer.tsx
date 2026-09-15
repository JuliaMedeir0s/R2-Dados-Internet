"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=553136621235&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+R2+Internet.&type=phone_number&app_absent=0";
const AREA_DO_CLIENTE_URL =
  "https://ixc.r2dados.com.br/central_assinante_web/login";

// "Central do Assinante" foi removido daqui — o print da página Quem Somos
// mostra só estes 5 links no rodapé (a 2ª via de boleto, na coluna ao lado,
// já aponta pra mesma área do cliente).
const MENU_LINKS = [
  { label: "Início", href: "/" },
  { label: "Para Empresas", href: "/para-empresas" },
  { label: "Nossa História", href: "/nossa-historia" },
  { label: "Indique e Ganhe", href: "/indique-e-ganhe" },
  { label: "Blog", href: "/blog" },
];

const SOCIAL_LINKS = [
  { id: "instagram", icon: "ant-design:instagram-filled", href: "https://www.instagram.com/r2internet/", label: "Instagram" },
  { id: "facebook", icon: "ic:baseline-facebook", href: "https://www.facebook.com/r2dados", label: "Facebook" },
  { id: "whatsapp", icon: "basil:whatsapp-solid", href: WHATSAPP_URL, label: "WhatsApp" },
  // Handle não confirmado — vi o ícone do TikTok no rodapé do print de "Quem
  // Somos", mas não tenho o @ real. Ajustar assim que a Júlia confirmar.
  { id: "tiktok", icon: "simple-icons:tiktok", href: "https://www.tiktok.com/@r2internet", label: "TikTok" },
  { id: "instagram-empresas", icon: "ant-design:instagram-filled", href: "https://www.instagram.com/r2.empresas/", label: "Instagram Empresas" },
];

export function Footer() {
  const [isContractsModalOpen, setIsContractsModalOpen] = useState(false);
  const pathname = usePathname();
  // O print de "Quem Somos" mostra um rodapé laranja (paleta residencial),
  // diferente do rodapé azul-marinho que já tínhamos (baseado no print da
  // Home). Aposta: a cor do rodapé segue o mesmo padrão do Header — laranja
  // nas páginas residenciais/institucionais, corp só em Empresarial. Vale
  // confirmar com a Júlia se a Home realmente é navy ou se era o mesmo
  // laranja e eu li errado da primeira vez.
  const isBusiness = pathname?.startsWith("/para-empresas") ?? false;
  const socialIconClass = isBusiness
    ? "flex h-8 w-8 items-center justify-center rounded-full bg-brand-1 transition-colors hover:bg-brand-5"
    : "flex h-8 w-8 items-center justify-center rounded-full bg-white transition-colors hover:bg-corp-6";
  const socialIconIconClass = isBusiness ? "h-5 w-5 text-white" : "h-5 w-5 text-brand-1";
  // `text-brand-1` (laranja) some no fundo laranja do rodapé residencial —
  // nesse caso os acentos (ícones, bullets ">>") viram branco; no fundo
  // navy do Empresarial continuam laranja, como antes.
  const accentClass = isBusiness ? "text-brand-1" : "text-white";
  const linkHoverClass = isBusiness ? "hover:text-brand-7" : "hover:text-corp-6";

  return (
    <footer className={isBusiness ? "bg-corp-2 text-white" : "bg-gradient-to-b from-brand-1 to-brand-6 text-white"}>
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="border-t border-white/20" />
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/footerLogo.png"
              alt="R2 Internet"
              width={140}
              height={140}
              className="h-28 w-28 md:h-32 md:w-32"
            />
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="https://play.google.com/store/search?q=minha%20r2&c=apps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 whitespace-nowrap transition-opacity hover:opacity-80"
              >
                <Icon icon="ic:outline-android" className={`h-5 w-5 ${accentClass}`} />
                <span>Baixe nosso app</span>
              </a>
              <a
                href="https://apps.apple.com/br/app/minha-r2/id6737197287"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 whitespace-nowrap transition-opacity hover:opacity-80"
              >
                <Icon icon="ic:outline-apple" className={`h-5 w-5 ${accentClass}`} />
                <span>Baixe nosso app</span>
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 text-xl font-bold">Menu</h3>
            <ul className="space-y-2">
              {MENU_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-center gap-2 transition-colors ${linkHoverClass} md:justify-start`}
                  >
                    <span className={accentClass}>{">>"}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 text-xl font-bold">Informações Institucionais</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={AREA_DO_CLIENTE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 transition-colors ${linkHoverClass} md:justify-start`}
                >
                  <span className={accentClass}>{">>"}</span>2ª Via de Boleto
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsContractsModalOpen(true)}
                  className={`flex w-full cursor-pointer items-center justify-center gap-2 transition-colors ${linkHoverClass} md:justify-start`}
                >
                  <span className={accentClass}>{">>"}</span>Contratos
                </button>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 text-xl font-bold">Fale Conosco</h3>
            <div className="space-y-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 transition-opacity hover:opacity-80 md:justify-start"
              >
                <Icon icon="basil:whatsapp-solid" className={`h-5 w-5 ${accentClass}`} />
                <span>(31) 3662-1235</span>
              </a>
              <a
                href="tel:+553136621235"
                className="flex items-center justify-center gap-2 transition-opacity hover:opacity-80 md:justify-start"
              >
                <Icon icon="basil:phone-solid" className={`h-5 w-5 ${accentClass}`} />
                <span>(31) 3662-1235</span>
              </a>
              <a
                href="mailto:contato@r2dados.com"
                className="flex items-center justify-center gap-2 transition-opacity hover:opacity-80 md:justify-start"
              >
                <Icon icon="material-symbols:mail" className={`h-5 w-5 ${accentClass}`} />
                <span>contato@r2dados.com</span>
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 text-xl font-bold">Nossas Redes</h3>
            <div className="flex justify-center gap-2 md:justify-start">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={socialIconClass}
                >
                  <Icon icon={social.icon} className={socialIconIconClass} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20" />
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm">
        Copyright © {new Date().getFullYear()} R2 Dados Internet | Todos os
        direitos reservados | Desenvolvido por{" "}
        <a
          href="https://delipe.com"
          target="_blank"
          rel="noopener noreferrer"
          className={accentClass}
        >
          Delipe
        </a>
      </div>

      {isContractsModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setIsContractsModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-8 text-texto shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Contratos</h3>
              <button
                onClick={() => setIsContractsModalOpen(false)}
                className="cursor-pointer rounded-full p-2 transition-colors hover:bg-cinza-claro"
                aria-label="Fechar"
              >
                <Icon icon="maki:cross" className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              {[
                { href: "/pdfs/link_dedicado.pdf", icon: "ph:file-pdf-bold", label: "Link Dedicado" },
                { href: "/pdfs/scm_e_sva.pdf", icon: "ph:file-pdf-bold", label: "SCM e SVA" },
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
