import { DIFERENCIAIS } from "@/lib/quem-somos-data";

/**
 * Ticker horizontal com os 6 diferenciais (quem_01) — mesmo tratamento do
 * gêmeo azul da página Empresarial (`services-ticker`), só mudando a
 * paleta: texto branco em negrito itálico direto sobre o laranja, sem pill,
 * com espaço generoso entre os rótulos. CSS puro (keyframe `marquee` em
 * globals.css), sem JS de cliente; a lista é duplicada pro loop ficar
 * contínuo e a segunda cópia é `aria-hidden` pro leitor de tela não ouvir
 * tudo duas vezes.
 *
 * O PDF mostra o texto "Sem perdasd e sinal" no ticker (com erro de
 * digitação no próprio Figma) — uso aqui o texto correto "Sem perdas de
 * sinal", igual ao card abaixo. Vale avisar a Júlia pra corrigir esse typo
 * no arquivo do Figma.
 */
export function DiferenciaisTicker() {
  const labels = DIFERENCIAIS.map((item) => item.titulo);
  const items = [...labels, ...labels];

  return (
    <section className="overflow-hidden bg-brand-1 py-5">
      <div className="flex w-max gap-16 motion-safe:animate-[marquee_25s_linear_infinite]">
        {items.map((label, index) => (
          <span
            key={`${label}-${index}`}
            aria-hidden={index >= labels.length ? true : undefined}
            className="whitespace-nowrap text-lg font-bold italic text-white"
          >
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
