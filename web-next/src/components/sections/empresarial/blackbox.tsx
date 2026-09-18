import Image from "next/image";
import { Icon } from "@iconify/react";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import { BLACKBOX_BENEFITS } from "@/lib/empresarial-data";

export function BlackBox() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:px-8">
        <div className="text-center md:text-left">
          <SectionTag tone="corp">R2 Para Empresas</SectionTag>

          {/* O Figma (empresa_01) abre o título em negrito. */}
          <SectionTitle
            tone="corp"
            segments={[
              { text: "Descubra problemas", weight: "bold" },
              { text: "antes que eles afetem sua empresa", weight: "light" },
            ]}
            className="mt-3"
          />

          <p className="mt-4 max-w-md text-sm text-texto/70">
            A Black Box é a solução exclusiva da R2 para monitoramento
            inteligente da sua infraestrutura de rede.
          </p>
          <p className="mt-3 max-w-md text-sm text-texto/70">
            Ela acompanha o desempenho dos equipamentos, identifica falhas,
            gargalos e instabilidades, permitindo ações preventivas antes que o
            problema impacte sua operação.
          </p>

          <p className="mt-6 text-sm font-bold text-texto">Benefícios</p>

          <ul className="mt-3 space-y-2 text-left text-sm text-texto/70">
            {BLACKBOX_BENEFITS.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Icon
                  icon="ph:check-circle-fill"
                  className="mt-0.5 h-5 w-5 shrink-0 text-corp-1"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <WhatsappButton
            variant="corp"
            context="conhecer a Black Box de monitoramento da R2"
            className="mt-6"
          >
            Quero conhecer a Black Box
          </WhatsappButton>
        </div>

        <Image
          src="/images/figma/empresa-blackbox.svg"
          alt="Ilustração de um painel de monitoramento de rede"
          width={746}
          height={480}
          className="h-auto w-full max-w-xl"
        />
      </div>
    </section>
  );
}
