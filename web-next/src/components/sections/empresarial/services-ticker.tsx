import { SERVICE_TAGS } from "@/lib/empresarial-data";

/**
 * Ticker horizontal de serviços (visto como uma faixa rolando no PDF).
 * Implementado em CSS puro (keyframe `marquee` em globals.css) — sem
 * dependência de Swiper/JS de cliente. A lista é duplicada para o loop
 * ficar contínuo.
 */
export function ServicesTicker() {
  const items = [...SERVICE_TAGS, ...SERVICE_TAGS];

  return (
    <section className="overflow-hidden bg-corp-1 py-4">
      <div className="flex w-max animate-[marquee_25s_linear_infinite] gap-4">
        {items.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="whitespace-nowrap rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
