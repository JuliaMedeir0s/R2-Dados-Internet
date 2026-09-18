import { SectionNotch } from "@/components/ui/section-notch";

// Faixa manuscrita entre o CTA e as Lojas (home_03). As duas abas curvas são
// as junções com as seções vizinhas: a de cima vem do branco do CTA, a de
// baixo é a própria faixa avançando sobre o laranja das Lojas — por isso o
// segundo bloco já pinta o fundo da seção seguinte.
export function QuoteBanner() {
  return (
    <>
      <section className="bg-texto pb-16 pt-0">
        <SectionNotch color="bg-white" iconClass="text-texto" />
        {/* flow-debt: fonte aproximada, trocar quando a Júlia informar a fonte do Figma */}
        <p className="mx-auto mt-10 max-w-3xl px-4 text-center font-script text-5xl leading-tight text-white/80 md:text-7xl">
          Muitas formas de te conectar
        </p>
      </section>

      <div className="bg-brand-1">
        <SectionNotch color="bg-texto" iconClass="text-brand-1" />
      </div>
    </>
  );
}
