import Image from "next/image";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";

// Os 11 aplicativos que o Figma (home_02) mostra girando em volta do texto,
// na mesma ordem do desenho (sentido horário a partir do topo). Quem cai em
// índice par fica na órbita externa e num quadrado maior; ímpar, na interna e
// menor — é o ritmo alternado do Figma.
const APPS = [
  { nome: "Mestre Cursos", icon: "/images/mestre_cursos_logo.png" },
  { nome: "Max", icon: "/images/max.png" },
  { nome: "Kaspersky", icon: "/images/kaspersky_logo.png" },
  { nome: "Disney+", icon: "/images/disney_plus_logo.png" },
  { nome: "Globoplay", icon: "/images/globo_play_logo.png" },
  { nome: "Sky+ Light", icon: "/images/SKY_light_logo.png" },
  { nome: "Premiere", icon: "/images/premiere_logo.png" },
  { nome: "ExitLag", icon: "/images/exitlag_logo.png" },
  { nome: "BITT Trainers", icon: "/images/bitt_logo.png" },
  { nome: "Deezer", icon: "/images/deezer_logo.png" },
  { nome: "Formind", icon: "/images/formind_logo.png" },
];

const ORBITA_EXTERNA = 44; // % do lado do container
const ORBITA_INTERNA = 30;

// Pontinhos laranja soltos sobre os anéis (raio em %, ângulo em graus).
const PONTOS = [
  { raio: 48, angulo: -60 },
  { raio: 48, angulo: 35 },
  { raio: 48, angulo: 160 },
  { raio: 38, angulo: -15 },
  { raio: 38, angulo: 110 },
  { raio: 38, angulo: 215 },
];

function posicao(raio: number, anguloGraus: number) {
  const rad = (anguloGraus * Math.PI) / 180;
  return {
    left: `${50 + raio * Math.cos(rad)}%`,
    top: `${50 + raio * Math.sin(rad)}%`,
  };
}

export function StreamingCircle() {
  return (
    <section className="overflow-hidden bg-white py-16">
      <div className="relative mx-auto flex aspect-square w-full max-w-lg items-center justify-center lg:max-w-3xl">
        {/* três anéis finos */}
        <div className="absolute inset-0 rounded-full border border-brand-1/30" />
        <div className="absolute inset-[10%] rounded-full border border-brand-1/30" />
        <div className="absolute inset-[22%] rounded-full border border-brand-1/30" />

        {PONTOS.map((ponto) => (
          <span
            key={`${ponto.raio}-${ponto.angulo}`}
            aria-hidden="true"
            className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-1"
            style={posicao(ponto.raio, ponto.angulo)}
          />
        ))}

        <div className="relative max-w-[260px] text-center md:max-w-xs">
          <SectionTag>Aplicativos</SectionTag>
          <SectionTitle
            light="Um mundo de"
            bold="entretenimento para você"
            className="mt-3 text-2xl md:text-3xl"
          />
          <p className="mt-3 text-xs text-texto/70 md:text-sm">
            Assista a séries, acompanhe os jogos, escute suas músicas favoritas
            e aproveite benefícios exclusivos em uma conexão preparada para toda
            a família.
          </p>
        </div>

        {APPS.map((app, index) => {
          const externa = index % 2 === 0;
          const raio = externa ? ORBITA_EXTERNA : ORBITA_INTERNA;
          const angulo = (index / APPS.length) * 360 - 90;
          return (
            <span
              key={app.nome}
              title={app.nome}
              className={`absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl shadow-md ${
                externa ? "h-20 w-20" : "h-14 w-14"
              }`}
              style={posicao(raio, angulo)}
            >
              <Image
                src={app.icon}
                alt={app.nome}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </span>
          );
        })}
      </div>
    </section>
  );
}
