import { Icon } from "@iconify/react";

// Título e subtítulo 100% reais e legíveis no PDF. A ilustração (mulher com
// fone/celular) ainda não existe no repo — bloco com ícone no lugar por ora.
export function IndiqueHero() {
  return (
    <section className="bg-gradient-to-br from-brand-1 to-brand-6 py-16 text-white md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:px-8">
        <div className="text-center md:text-left">
          <span className="inline-block rounded-full border border-white/60 px-4 py-1 text-xs font-bold uppercase tracking-wide">
            Indique &amp; Ganhe
          </span>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl">
            Indique um amigo e <span className="font-extrabold">ganhe benefícios</span>
          </h1>
          <p className="mt-4 max-w-lg text-white/90 md:text-lg">
            Indique amigos, familiares ou vizinhos para conhecer a R2 Internet. Quando a instalação
            for concluída, você recebe R$30,00 de desconto na sua mensalidade* como forma de
            agradecimento pela indicação.
          </p>
        </div>

        <div className="flex h-56 w-56 shrink-0 items-center justify-center rounded-3xl bg-white/10 md:h-72 md:w-72">
          <Icon icon="mdi:account-heart-outline" className="h-24 w-24 text-white md:h-32 md:w-32" />
        </div>
      </div>
    </section>
  );
}
