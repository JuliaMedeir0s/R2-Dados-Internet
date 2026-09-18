"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { ButtonLink } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Nossa História", href: "/nossa-historia" },
  { label: "Indique e Ganhe", href: "/indique-e-ganhe" },
  { label: "Blog", href: "/blog" },
];

const AREA_DO_CLIENTE_URL =
  "https://ixc.r2dados.com.br/central_assinante_web/login";

// Páginas com hero colorido: o header é `fixed` e fica transparente por cima
// do hero até 40px de rolagem; nas demais é `sticky` e sempre sólido.
const COLORED_HERO_ROUTES = [
  "/",
  "/nossa-historia",
  "/indique-e-ganhe",
  "/para-empresas",
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() ?? "/";
  const isBusiness = pathname.startsWith("/para-empresas");
  const hasColoredHero = COLORED_HERO_ROUTES.includes(pathname);

  useEffect(() => {
    if (!hasColoredHero) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasColoredHero]);

  const transparent = hasColoredHero && !scrolled;
  // Sólido = barra laranja (residencial) ou azul-marinho (empresarial); em
  // todos os estados o texto do header é branco.
  const surfaceClass = transparent
    ? "border-white/60 bg-transparent"
    : isBusiness
    ? "border-corp-2 bg-corp-2"
    : "border-brand-1 bg-brand-1";
  const outlineButtonClass =
    "border border-white bg-transparent text-white hover:bg-white/10";

  // O cartão "balão" (borda de 0.5px, cantos de 15px, largura do conteúdo) só
  // existe a partir do `xl:`; abaixo disso vira barra de 100% sem borda.
  return (
    <header
      className={`z-50 pt-4 md:pt-6 xl:px-6 ${
        hasColoredHero ? "fixed inset-x-0 top-0" : "sticky top-0"
      }`}
    >
      <div
        className={`relative mx-auto w-full rounded-[15px] border-0 transition-colors duration-300 xl:max-w-7xl xl:border-[0.5px] ${surfaceClass}`}
      >
        <div className="flex h-20 items-center justify-between px-4 md:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/images/Logo.png"
              alt="R2 Internet"
              width={64}
              height={64}
              className="h-12 w-12 md:h-16 md:w-16"
              priority
            />
            {isBusiness && (
              <span className="hidden flex-col leading-none text-white sm:flex">
                <span className="text-sm font-bold">R2 INTERNET</span>
                <span className="text-xs font-bold tracking-wide">
                  EMPRESARIAL
                </span>
              </span>
            )}
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap border-b-2 border-transparent text-sm font-bold text-white transition-colors hover:border-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            {isBusiness ? (
              <ButtonLink href="/" size="sm" className={outlineButtonClass}>
                Para sua Família
              </ButtonLink>
            ) : (
              <ButtonLink
                href="/para-empresas"
                size="sm"
                className={outlineButtonClass}
              >
                Para Empresas
              </ButtonLink>
            )}
            <ButtonLink
              href={AREA_DO_CLIENTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              variant={isBusiness ? "corp" : "default"}
              className={
                isBusiness ? "gap-2" : "gap-2 bg-white text-brand-1 hover:bg-cinza-claro"
              }
            >
              <Icon icon="basil:user-solid" className="h-4 w-4" />
              Área do Cliente
            </ButtonLink>
          </div>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            className="cursor-pointer rounded-lg p-2 text-white transition-colors hover:bg-white/10 xl:hidden"
          >
            <Icon icon={isMenuOpen ? "maki:cross" : "ci:hamburger-md"} className="h-6 w-6" />
          </button>
        </div>

        {/* Menu mobile sempre branco (contraste garantido pro texto escuro),
            com os cantos de baixo acompanhando o balão. */}
        {isMenuOpen && (
          <nav className="absolute left-0 right-0 z-50 flex flex-col gap-1 rounded-b-[15px] bg-white px-4 py-3 shadow-lg xl:hidden">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-bold text-texto hover:bg-cinza-claro"
              >
                {item.label}
              </Link>
            ))}
            {isBusiness ? (
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-bold text-brand-1 hover:bg-cinza-claro"
              >
                Para sua Família
              </Link>
            ) : (
              <Link
                href="/para-empresas"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-bold text-corp-1 hover:bg-cinza-claro"
              >
                Para Empresas
              </Link>
            )}
            <a
              href={AREA_DO_CLIENTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 text-sm font-bold text-brand-1 hover:bg-cinza-claro"
            >
              Área do Cliente
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
