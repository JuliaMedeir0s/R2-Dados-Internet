import Image from "next/image";

const PARTNERS = [
  { nome: "Max", icon: "/images/max.png" },
  { nome: "Disney+", icon: "/images/disney_plus_logo.png" },
  { nome: "Kaspersky", icon: "/images/kaspersky_logo.png" },
  { nome: "Premiere", icon: "/images/premiere_logo.png" },
  { nome: "Sky+ Light", icon: "/images/SKY_light_logo.png" },
  { nome: "Deezer", icon: "/images/deezer_logo.png" },
  { nome: "BITT Trainers", icon: "/images/bitt_logo.png" },
  { nome: "ExitLag", icon: "/images/exitlag_logo.png" },
];

export function StreamingCircle() {
  const radius = 42; // % do raio do container
  return (
    <section className="bg-white py-20">
      <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center md:max-w-lg">
        {/* anéis decorativos */}
        <div className="absolute inset-0 rounded-full border border-brand-8/40" />
        <div className="absolute inset-6 rounded-full border border-brand-8/30" />

        <div className="max-w-[220px] text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-1">
            Aplicativos inclusos
          </p>
          <h2 className="mt-1 text-2xl font-bold text-texto md:text-3xl">
            Um mundo de entretenimento para você
          </h2>
        </div>

        {PARTNERS.map((partner, i) => {
          const angle = (i / PARTNERS.length) * 2 * Math.PI - Math.PI / 2;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          return (
            <span
              key={partner.nome}
              title={partner.nome}
              className="absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cinza-claro bg-white p-2 shadow-md"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <Image
                src={partner.icon}
                alt={partner.nome}
                width={36}
                height={36}
                className="h-full w-full object-contain"
              />
            </span>
          );
        })}
      </div>
    </section>
  );
}
