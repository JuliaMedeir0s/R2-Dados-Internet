import { SERVICE_TAGS } from "@/lib/empresarial-data";

/**
 * Faixa azul de serviços que rola entre as seções (empresa_01).
 * CSS puro (keyframe `marquee` em globals.css) — sem dependência de JS de
 * cliente. A lista é duplicada para o loop ficar contínuo; a segunda cópia é
 * `aria-hidden` para o leitor de tela não ouvir tudo duas vezes.
 */
export function ServicesTicker() {
  const items = [...SERVICE_TAGS, ...SERVICE_TAGS];

  return (
    <section className="overflow-hidden bg-corp-1 py-5">
      <div className="flex w-max gap-16 motion-safe:animate-[marquee_25s_linear_infinite]">
        {items.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            aria-hidden={index >= SERVICE_TAGS.length ? true : undefined}
            className="whitespace-nowrap text-lg font-bold italic text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
