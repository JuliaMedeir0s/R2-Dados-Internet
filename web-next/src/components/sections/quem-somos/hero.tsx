import { Icon } from "@iconify/react";

/**
 * Hero da página Quem Somos. Título e subtítulo são texto real — a mesma
 * frase já existe hoje no banner `Banner4.png` do site atual ("Atendimento
 * de Qualidade e suporte premium e humanizado! Você merece mais do que
 * somente internet!"), só que com a foto/arte trocada no novo design.
 *
 * NOTA: o print do Figma mostra a tag/selo acima do título como "Indique &
 * Ganhe", que não bate com o assunto da seção (deve ser um componente
 * reaproveitado no Figma sem trocar o texto do selo). Troquei aqui para
 * "Quem Somos" — vale confirmar com a Júlia qual o texto certo.
 *
 * A ilustração (mulher com fone de ouvido/celular) ainda não existe no
 * repo — bloco com ícone no lugar até a arte ser exportada do Figma.
 */
export function QuemSomosHero() {
  return (
    <section className="bg-gradient-to-br from-brand-1 to-brand-6 py-16 text-white md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:px-8">
        <div className="text-center md:text-left">
          <span className="inline-block rounded-full border border-white/60 px-4 py-1 text-xs font-bold uppercase tracking-wide">
            Quem Somos
          </span>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl">
            Atendimento de <span className="text-brand-9">Qualidade e suporte premium</span> e
            humanizado!
          </h1>
          <p className="mt-4 max-w-lg text-white/90 md:text-lg">
            Você merece mais do que somente internet!
          </p>
        </div>

        <div className="flex h-56 w-56 shrink-0 items-center justify-center rounded-3xl bg-white/10 md:h-72 md:w-72">
          <Icon icon="mdi:headset" className="h-24 w-24 text-white md:h-32 md:w-32" />
        </div>
      </div>
    </section>
  );
}
