import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@iconify/react";

import { TUTORIAIS } from "@/lib/tutoriais-data";
import { ButtonLink } from "@/components/ui/button";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";
import { StackedCard } from "@/components/ui/stacked-card";

export const metadata: Metadata = {
  title: "Tutoriais — R2 Internet",
  description:
    "Central de acesso da R2 Internet: escolha a plataforma do seu benefício e abra o passo a passo de como logar.",
};

// Iniciais no lugar do logo pra quem não tem asset exportado (+Qnutri e
// Queima Diária), igual ao direcionador do site antigo.
function iniciais(nome: string) {
  return nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0]?.toUpperCase())
    .join("");
}

export default function TutoriaisPage() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 max-w-3xl">
          <SectionTag>Central de acesso</SectionTag>
          <SectionTitle
            light="Encontre o tutorial"
            bold="da sua ferramenta"
            as="h1"
            className="mt-3 text-2xl md:text-3xl"
          />
          <p className="mt-3 text-sm text-texto/70">
            Selecione abaixo a plataforma desejada e abra o documento com o
            passo a passo de como logar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TUTORIAIS.map((ferramenta) => (
            <StackedCard key={ferramenta.nome} className="flex flex-col p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cinza-claro">
                  {ferramenta.logo ? (
                    <Image
                      src={ferramenta.logo}
                      alt={ferramenta.logoAlt ?? ferramenta.nome}
                      width={48}
                      height={48}
                      className="h-10 w-10 object-contain"
                    />
                  ) : (
                    <span className="text-lg font-bold text-brand-1">
                      {iniciais(ferramenta.nome)}
                    </span>
                  )}
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-brand-1">
                    {ferramenta.nome}
                  </h2>
                  {ferramenta.categoria && (
                    <p className="text-xs text-texto/60">
                      {ferramenta.categoria}
                    </p>
                  )}
                </div>
              </div>

              <p className="mt-4 text-sm text-texto/70">
                {ferramenta.descricao}
              </p>

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {ferramenta.links.map((link) => (
                  <ButtonLink
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    // "App"/"PC"/"iOS" só fazem sentido junto do nome da
                    // ferramenta — fora do card o rótulo fica ambíguo.
                    aria-label={`${ferramenta.nome}: ${link.label} (PDF)`}
                    className="gap-2"
                  >
                    <Icon icon="ph:file-pdf-bold" className="h-4 w-4" />
                    {link.label}
                  </ButtonLink>
                ))}
              </div>
            </StackedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
