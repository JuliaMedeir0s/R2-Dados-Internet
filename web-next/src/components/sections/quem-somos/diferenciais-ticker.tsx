import { DIFERENCIAIS } from "@/lib/quem-somos-data";

/**
 * Ticker horizontal com os 6 diferenciais (mesmo padrão CSS-only do ticker
 * da página Empresarial, `@keyframes marquee` em globals.css). O PDF mostra
 * o texto "Sem perdasd e sinal" no ticker (com erro de digitação no próprio
 * Figma) — uso aqui o texto correto "Sem perdas de sinal", igual ao card
 * abaixo. Vale avisar a Júlia pra corrigir esse typo no arquivo do Figma.
 */
export function DiferenciaisTicker() {
  const labels = DIFERENCIAIS.map((item) => item.titulo);
  const items = [...labels, ...labels];

  return (
    <section className="overflow-hidden bg-brand-1 py-4">
      <div className="flex w-max gap-4 motion-safe:animate-[marquee_25s_linear_infinite]">
        {items.map((label, index) => (
          <span
            key={`${label}-${index}`}
            className="whitespace-nowrap rounded-full bg-white/15 px-5 py-2 text-sm font-bold text-white"
          >
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
