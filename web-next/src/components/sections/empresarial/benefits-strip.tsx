import { Icon } from "@iconify/react";

// Rótulos exatos vistos na tira de ícones azuis do PDF (O_MELHOR_PARA_SUA_EMPRESA.pdf).
const BENEFITS = [
  { icon: "mdi:account-tie-outline", label: "Suporte Premium" },
  { icon: "mdi:flash-outline", label: "100% Fibra Óptica" },
  { icon: "mdi:speedometer", label: "Navegue em ultravelocidade" },
  { icon: "mdi:shield-check-outline", label: "Monitoramento Inteligente" },
];

export function EmpresarialBenefitsStrip() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 md:grid-cols-4 md:px-8">
        {BENEFITS.map((benefit) => (
          <div
            key={benefit.label}
            className="flex flex-col items-center gap-3 rounded-2xl border border-cinza-claro p-5 text-center shadow-sm"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-corp-6/50 text-corp-1">
              <Icon icon={benefit.icon} className="h-7 w-7" />
            </span>
            <p className="text-sm font-bold text-texto">{benefit.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
