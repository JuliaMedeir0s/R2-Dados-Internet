"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Nossa História", href: "/nossa-historia" },
  { label: "Indique e Ganhe", href: "/indique-e-ganhe" },
  { label: "Blog", href: "/blog" },
];

const AREA_DO_CLIENTE_URL =
  "https://ixc.r2dados.com.br/central_assinante_web/login";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // A página Empresarial (PDF enviado pela Júlia) mostra uma variante do
  // header: selo "Empresarial" ao lado da logo, borda azul (corp) em vez de
  // laranja, e o botão da direita trocado por "Para sua Família" apontando
  // de volta pro site residencial. Detectado pela rota em vez de prop, pra
  // não precisar duplicar <Header /> em cada layout.
  const isBusiness = pathname?.startsWith("/para-empresas") ?? false;

  // Print da Home (header + topo, enviado pela Júlia) mostra o header sem
  // nenhum fundo/borda, "flutuando" sobre o hero laranja — logo, menu e
  // botões em branco. Isso confirma (pela primeira vez com um print nítido)
  // a dúvida que já vinha aparecendo em Quem Somos/Indique e Ganhe/Blog:
  // o header parece flutuar sobre o hero em várias páginas. Como a Júlia
  // pediu pra ajustar "seção por seção" começando pela Home, por enquanto
  // só a Home usa esse modo transparente — quando as outras páginas forem
  // revisadas, é só somar suas rotas em `isHome` (ou generalizar pra um
  // `hasColoredHero`).
  const isHome = pathname === "/";

  // Sem scroll, o header fica transparente sobre o hero; depois de rolar um
  // pouco a página, assume o visual sólido de sempre (branco + borda). Só
  // roda na Home — nas outras páginas o header já é sempre sólido/sticky.
  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const transparent = isHome && !scrolled;

  // Header "balão": a Júlia confirmou que a borda ao redor do header nos
  // prints não é artefato — é o design mesmo. É um cartão flutuante (não
  // mais uma barra "full-bleed" com borda só embaixo), com borda de 0.5px,
  // cantos de 15px, ficando fixo no topo em TODAS as páginas (antes só a
  // Home saía do fluxo normal). Valores exatos que ela passou:
  // `border-[0.5px]` (grossura) + `rounded-[15px]` (cantos).
  //
  // Correção depois da primeira versão: a Júlia avisou que o balão **não é
  // largura total** — na primeira tentativa eu tinha feito ele quase
  // esticar de ponta a ponta da tela (só com uma margem fixa de 16/24px).
  // Agora o cartão em si (`<div>` interno, com a borda/fundo/cantos) usa o
  // mesmo container de conteúdo do resto do site (`mx-auto max-w-7xl`,
  // igual todo `<section>` das páginas) — ou seja, ele fica do mesmo
  // tamanho/alinhamento que o conteúdo abaixo dele, não da largura da
  // janela. O `<header>` de fora continua ocupando a largura toda (só pra
  // servir de área de posicionamento — `fixed`/`sticky` + padding — sem
  // nenhum visual próprio); quem tem borda/fundo/cantos é só o `<div>` de
  // dentro.
  //
  // O respiro em relação às bordas da tela agora vem do `padding` do
  // `<header>` externo (`pt-4`/`md:pt-6`, e `xl:px-6` — ver nota abaixo
  // sobre a largura), não de margem — é um valor convencional, ainda não
  // confirmado com um número exato do Figma (os prints enviados não
  // deixavam medir esse espaçamento em pixels); ajustar se a Júlia passar
  // um valor específico.
  //
  // Balão só no header "completo": a Júlia foi específica — o visual de
  // balão (borda + largura menor que 100%) é só pra quando o menu
  // completo aparece (nav com os links, a partir do `xl:`); na largura em
  // que o menu vira hambúrguer (abaixo de `xl:`), o header volta a ser uma
  // barra sólida sem borda e com largura 100%, sem o respiro lateral.
  // Por isso a borda (`border-[0.5px]`) e o limite de largura
  // (`max-w-7xl`) só entram a partir do `xl:` (`xl:border-[0.5px]
  // xl:max-w-7xl`) — abaixo disso o cartão fica `border-0` (sem contorno
  // nenhum) e `w-full` (100% do espaço disponível), e o padding lateral do
  // `<header>` externo (que cria o respiro dos lados) também só existe a
  // partir do `xl:`. O respiro vertical (`pt-4`/`md:pt-6`, o gap em
  // relação ao topo da tela) continua em toda largura — só a borda e a
  // largura mudam.
  //
  // Fixed (Home) vs. sticky (demais páginas): continuam diferentes por
  // baixo dos panos, mas agora os dois têm o mesmo visual de balão. A Home
  // precisa de `fixed` pra o header conseguir ficar transparente por cima
  // do hero sem empurrá-lo pra baixo (o hero já reserva esse espaço no
  // padding-top dele, ver `home-hero.tsx`). Nas outras páginas, `sticky`
  // já basta — reserva o próprio espaço no fluxo normal automaticamente
  // (sem precisar somar padding-top em cada página) e continua "grudado"
  // no topo durante toda a rolagem, exatamente como `fixed`.
  return (
    <header
      className={`z-50 pt-4 md:pt-6 xl:px-6 ${
        isHome ? "fixed inset-x-0 top-0" : "sticky top-0"
      }`}
    >
      <div
        className={`relative mx-auto w-full rounded-[15px] border-0 transition-colors duration-300 xl:max-w-7xl xl:border-[0.5px] ${
          isHome
            ? transparent
              ? "border-white/60 bg-transparent"
              : "border-brand-1 bg-white"
            : `bg-white ${isBusiness ? "border-corp-1" : "border-brand-1"}`
        }`}
      >
        <div className="flex h-20 items-center justify-between px-4 md:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            {/*
              O print da Home mostra uma versão simplificada/branca da logo
              (traço fino, sem o fundo circular colorido) — esse arquivo ainda
              não existe em public/images, só a versão colorida atual. Mantive
              a logo colorida também sobre o hero por ora; sinalizando aqui
              pra exportar a variante branca do Figma quando possível.
            */}
            <Image
              src="/images/Logo.png"
              alt="R2 Internet"
              width={64}
              height={64}
              className="h-12 w-12 md:h-16 md:w-16"
              priority
            />
            {isBusiness && (
              <span className="hidden flex-col leading-none sm:flex">
                <span className="text-sm font-bold text-texto">R2 INTERNET</span>
                <span className="text-xs font-bold tracking-wide text-corp-1">
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
                className={`whitespace-nowrap border-b-2 border-transparent text-sm font-bold transition-colors ${
                  transparent
                    ? "text-white hover:border-white"
                    : isBusiness
                    ? "text-texto hover:border-corp-1 hover:text-corp-1"
                    : "text-texto hover:border-brand-1 hover:text-brand-1"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            {isBusiness ? (
              <Link href="/">
                <Button size="sm">Para sua Família</Button>
              </Link>
            ) : (
              <Link href="/para-empresas">
                <Button
                  variant="corp"
                  size="sm"
                  className={
                    transparent
                      ? "border border-white/70 bg-white/10 text-white hover:bg-white/20"
                      : undefined
                  }
                >
                  Para Empresas
                </Button>
              </Link>
            )}
            <a href={AREA_DO_CLIENTE_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className={`gap-2 ${
                  transparent ? "bg-white text-brand-1 hover:bg-cinza-claro" : ""
                }`}
              >
                <Icon icon="basil:user-solid" className="h-4 w-4" />
                Área do Cliente
              </Button>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            className={`cursor-pointer rounded-lg p-2 transition-colors xl:hidden ${
              transparent ? "hover:bg-white/10" : "hover:bg-cinza-claro"
            }`}
          >
            <Icon
              icon={isMenuOpen ? "maki:cross" : "ci:hamburger-md"}
              className={`h-6 w-6 ${transparent ? "text-white" : ""}`}
            />
          </button>
        </div>

        {/* Menu mobile sempre sólido (branco), mesmo com o header transparente
            por cima do hero — precisa de contraste garantido pro texto preto.
            Posicionado relativo ao cartão (não mais à largura toda da tela),
            com cantos de baixo arredondados (mesmo 15px do header) pra
            continuar o contorno do "balão" em vez de cortar reto por
            baixo dele. */}
        {isMenuOpen && (
          <nav className="absolute left-0 right-0 z-50 flex flex-col gap-1 rounded-b-[15px] border-t border-cinza-claro bg-white px-4 py-3 shadow-lg xl:hidden">
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
