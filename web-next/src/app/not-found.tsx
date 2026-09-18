import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { ButtonLink } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Página Não Encontrada — R2 Internet",
  description: "Ops! Esta página saiu do radar.",
};

// Página 404 — a mais simples do site, como a própria Júlia avisou. Uma
// seção só: mascote + "404" + mensagem, como aparece no PDF (erro_404.pdf).
// O mascote real do robô da R2 apareceu com clareza pela primeira vez nesse
// print (laranja, tela preta arredondada, aceno) — ainda uso o ícone
// "estilo emoji" (`noto:robot`) como aproximação, mesma escolha já feita no
// FAQ da Home/Empresarial/Indique e Ganhe, até a ilustração real ser
// exportada do Figma.
//
// O PDF não mostra nenhum botão/link de volta — só mascote + texto. Achei
// que deixar uma página de erro sem nenhum caminho de volta é ruim pro
// usuário, então adicionei o botão "Voltar para o Início" abaixo (o menu do
// Header já permite navegar, mas um atalho direto aqui ajuda). É uma
// adição minha, não está no Figma — fácil de remover se a Júlia preferir
// seguir o design à risca.
export default function NotFound() {
  return (
    <>
      <section className="flex items-center justify-center bg-white px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center md:flex-row md:items-center md:text-left">
          <Icon icon="noto:robot" className="h-40 w-40 shrink-0 md:h-56 md:w-56" />

          <div>
            <p className="text-8xl font-bold text-brand-1 md:text-9xl">404</p>
            <p className="mt-4 text-lg text-texto">
              <span className="font-bold">Ops! Esta página saiu do radar.</span>{" "}
              O endereço pode ter mudado, sido removido ou talvez nunca tenha
              existido.
            </p>

            <ButtonLink href="/" size="lg" className="mt-8 gap-2">
              <Icon icon="ph:arrow-left-bold" className="h-4 w-4" />
              Voltar para o Início
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
