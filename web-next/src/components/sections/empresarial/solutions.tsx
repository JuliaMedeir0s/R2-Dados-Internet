import Image from "next/image";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export function EmpresarialSolutions() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:px-8">
        <Image
          src="/images/figma/empresa-predio.svg"
          alt="Ilustração de um prédio comercial"
          width={575}
          height={328}
          className="h-auto w-full max-w-md md:max-w-lg"
        />

        <div className="text-center md:text-left">
          <SectionTag tone="corp">R2 Para Empresas</SectionTag>

          <SectionTitle
            tone="corp"
            light="Tudo o que sua empresa precisa"
            bold="para se manter conectada"
            className="mt-3"
          />

          <p className="mt-4 max-w-xl text-sm text-texto/70">
            A R2 Empresas oferece soluções completas de conectividade e
            comunicação para negócios de todos os portes. Da internet
            empresarial ao monitoramento da rede, entregamos estabilidade,
            suporte especializado e tecnologia para impulsionar seus resultados.
          </p>

          <WhatsappButton
            variant="corp"
            context="contratar internet para minha empresa"
            className="mt-6"
          >
            Contrate agora
          </WhatsappButton>
        </div>
      </div>
    </section>
  );
}
