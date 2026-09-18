"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { APPS_STREAMING, type AppStreaming } from "@/lib/streaming-apps-data";
import { SectionTag } from "@/components/ui/section-tag";
import { SectionTitle } from "@/components/ui/section-title";

const GRAU = Math.PI / 180;

// Parallax do mouse: inclinação máxima do conjunto, deslocamento de cada
// camada por profundidade (a externa é a que mais anda) e o fator de lerp
// que suaviza a perseguição do cursor a cada quadro.
const INCLINACAO = 6; // graus de rotateX/rotateY
const DESLOCAMENTO = { externa: 24, interna: 12, nucleo: -4 }; // px
const SUAVIZACAO = 0.08;
const REPOUSO = 0.0006; // abaixo disso encosta no alvo e desliga o rAF
const PASSO_ENTRADA = 60; // ms entre um logo e o próximo

// Pontinhos laranja soltos sobre os anéis (raio em % do lado do palco).
// Ficam dentro da camada que gira para acompanharem o anel, como no Figma.
const PONTOS_EXTERNOS = [
  { raio: 48, angulo: 30 },
  { raio: 45, angulo: 128 },
  { raio: 48, angulo: 250 },
];
const PONTOS_INTERNOS = [
  { raio: 39, angulo: 85 },
  { raio: 38, angulo: 205 },
  { raio: 36, angulo: 310 },
];

const APPS_INTERNOS = APPS_STREAMING.filter((app) => app.orbita === "interna");
const APPS_EXTERNOS = APPS_STREAMING.filter((app) => app.orbita === "externa");

// Monta um eixo como `calc(50% ± raio * fator)`. O raio chega como texto
// (`var(--raio-ext)` ou `48%`) para que o breakpoint viva no CSS e a
// trigonometria viva aqui.
function eixo(raio: string, fator: number) {
  const valor = Number(fator.toFixed(4));
  if (valor === 0) return "50%";
  return `calc(50% ${valor < 0 ? "-" : "+"} ${raio} * ${Math.abs(valor)})`;
}

// 0 grau no topo, crescendo no sentido horário.
function coordenadas(raio: string, angulo: number) {
  return {
    left: eixo(raio, Math.sin(angulo * GRAU)),
    top: eixo(raio, -Math.cos(angulo * GRAU)),
  };
}

type LogoAppProps = {
  app: AppStreaming;
  raio: string;
  contragiro: string;
  atraso: number;
};

// Larguras reais de renderização em cada degrau (ver `.r2-palco` no
// globals.css); sem isso o Next monta um srcset largo demais para um ícone
// que nunca passa de 80px.
const SIZES_GRANDE = "(min-width: 1024px) 80px, (min-width: 768px) 68px, 44px";
const SIZES_PEQUENO = "(min-width: 1024px) 56px, (min-width: 768px) 48px, 32px";

function LogoApp({ app, raio, contragiro, atraso }: LogoAppProps) {
  const grande = app.tamanho === "grande";
  return (
    <div
      className="r2-app group/app absolute -translate-x-1/2 -translate-y-1/2"
      style={{ ...coordenadas(raio, app.angulo), animationDelay: `${atraso}ms` }}
    >
      {/* contrarrotação: cancela o giro da órbita e mantém o logo em pé */}
      <div
        className={`r2-contragira relative ${contragiro} ${
          grande ? "r2-app-grande" : "r2-app-pequeno"
        }`}
      >
        <div
          className={`r2-app-caixa absolute inset-0 overflow-hidden bg-white ${
            grande ? "rounded-2xl" : "rounded-xl"
          }`}
        >
          <Image
            src={app.icone}
            alt={app.nome}
            width={200}
            height={200}
            sizes={grande ? SIZES_GRANDE : SIZES_PEQUENO}
            className="h-full w-full object-cover"
          />
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-texto px-2.5 py-1 text-[11px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover/app:opacity-100"
        >
          {app.nome}
        </span>
      </div>
    </div>
  );
}

export function StreamingCircle() {
  const secao = useRef<HTMLElement>(null);
  const palco = useRef<HTMLDivElement>(null);
  const campo = useRef<HTMLDivElement>(null);
  const camadaExterna = useRef<HTMLDivElement>(null);
  const camadaInterna = useRef<HTMLDivElement>(null);
  const nucleo = useRef<HTMLDivElement>(null);

  const [entrou, setEntrou] = useState(false);
  const [ativo, setAtivo] = useState(false);

  // Entrada escalonada + desliga as órbitas fora do viewport (o loop não
  // precisa rodar, nem promover camada, com a seção fora da tela).
  useEffect(() => {
    const alvo = palco.current;
    if (!alvo) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        const visivel = entradas[entradas.length - 1].isIntersecting;
        setAtivo(visivel);
        if (visivel) setEntrou(true);
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    observador.observe(alvo);
    return () => observador.disconnect();
  }, []);

  // Parallax pelo mouse. Só com ponteiro fino e sem `prefers-reduced-motion`;
  // zero estado React por quadro — o rAF escreve direto em `style.transform`.
  useEffect(() => {
    const area = secao.current;
    const quadro = palco.current;
    const elCampo = campo.current;
    const elExterna = camadaExterna.current;
    const elInterna = camadaInterna.current;
    const elNucleo = nucleo.current;
    if (!area || !quadro || !elCampo || !elExterna || !elInterna || !elNucleo) {
      return;
    }
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const alvo = { x: 0, y: 0 };
    const atual = { x: 0, y: 0 };
    let caixa: DOMRect | null = null;
    let pedido: number | null = null;

    const aplicar = (x: number, y: number) => {
      elCampo.style.transform = `perspective(1200px) rotateX(${(
        -y * INCLINACAO
      ).toFixed(3)}deg) rotateY(${(x * INCLINACAO).toFixed(3)}deg)`;
      elExterna.style.transform = `translate3d(${(
        x * DESLOCAMENTO.externa
      ).toFixed(2)}px, ${(y * DESLOCAMENTO.externa).toFixed(2)}px, 0)`;
      elInterna.style.transform = `translate3d(${(
        x * DESLOCAMENTO.interna
      ).toFixed(2)}px, ${(y * DESLOCAMENTO.interna).toFixed(2)}px, 0)`;
      elNucleo.style.transform = `translate3d(${(
        x * DESLOCAMENTO.nucleo
      ).toFixed(2)}px, ${(y * DESLOCAMENTO.nucleo).toFixed(2)}px, 0)`;
    };

    const passo = () => {
      const dx = alvo.x - atual.x;
      const dy = alvo.y - atual.y;
      if (Math.abs(dx) < REPOUSO && Math.abs(dy) < REPOUSO) {
        atual.x = alvo.x;
        atual.y = alvo.y;
        aplicar(atual.x, atual.y);
        pedido = null;
        return;
      }
      atual.x += dx * SUAVIZACAO;
      atual.y += dy * SUAVIZACAO;
      aplicar(atual.x, atual.y);
      pedido = requestAnimationFrame(passo);
    };

    const acordar = () => {
      if (pedido === null) pedido = requestAnimationFrame(passo);
    };

    const limitar = (valor: number) => Math.max(-1, Math.min(1, valor));

    const aoMover = (evento: PointerEvent) => {
      if (evento.pointerType !== "mouse") return;
      // uma única leitura de layout por pointerenter, resize ou scroll
      if (!caixa) caixa = quadro.getBoundingClientRect();
      if (!caixa.width || !caixa.height) return;
      alvo.x = limitar(
        (evento.clientX - caixa.left - caixa.width / 2) / (caixa.width / 2)
      );
      alvo.y = limitar(
        (evento.clientY - caixa.top - caixa.height / 2) / (caixa.height / 2)
      );
      acordar();
    };

    const aoSair = () => {
      alvo.x = 0;
      alvo.y = 0;
      acordar();
    };

    const invalidar = () => {
      caixa = null;
    };

    area.addEventListener("pointerenter", invalidar, { passive: true });
    area.addEventListener("pointermove", aoMover, { passive: true });
    area.addEventListener("pointerleave", aoSair, { passive: true });
    window.addEventListener("resize", invalidar, { passive: true });
    window.addEventListener("scroll", invalidar, { passive: true });

    return () => {
      area.removeEventListener("pointerenter", invalidar);
      area.removeEventListener("pointermove", aoMover);
      area.removeEventListener("pointerleave", aoSair);
      window.removeEventListener("resize", invalidar);
      window.removeEventListener("scroll", invalidar);
      if (pedido !== null) cancelAnimationFrame(pedido);
      elCampo.style.transform = "";
      elExterna.style.transform = "";
      elInterna.style.transform = "";
      elNucleo.style.transform = "";
    };
  }, []);

  return (
    <section
      ref={secao}
      className="relative overflow-hidden bg-white px-4 py-16 lg:py-24"
    >
      <div
        ref={palco}
        data-entrada={entrou ? "visivel" : "aguardando"}
        data-ativo={ativo ? "sim" : "nao"}
        className="r2-palco relative mx-auto aspect-square w-full max-w-lg md:max-w-2xl lg:max-w-3xl"
      >
        <div
          ref={campo}
          className="r2-campo absolute inset-0 flex items-center justify-center"
        >
          {/* órbita interna — sentido horário, 90s */}
          <div ref={camadaInterna} className="r2-camada absolute inset-0">
            <div className="r2-gira r2-orbita-int absolute inset-0">
              <div
                aria-hidden="true"
                className="r2-anel absolute inset-[22%] rounded-full border border-brand-1/25"
              />
              <div
                aria-hidden="true"
                className="r2-anel r2-arco r2-arco-defasado absolute inset-[22%] rounded-full"
              />
              {PONTOS_INTERNOS.map((ponto) => (
                <span
                  key={`int-${ponto.angulo}`}
                  aria-hidden="true"
                  className="r2-ponto r2-anel absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full lg:h-2.5 lg:w-2.5"
                  style={coordenadas(`${ponto.raio}%`, ponto.angulo)}
                />
              ))}
              {APPS_INTERNOS.map((app, indice) => (
                <LogoApp
                  key={app.nome}
                  app={app}
                  raio="var(--raio-int)"
                  contragiro="r2-contra-int"
                  atraso={indice * PASSO_ENTRADA}
                />
              ))}
            </div>
          </div>

          {/* órbita externa — sentido anti-horário, 140s */}
          <div ref={camadaExterna} className="r2-camada absolute inset-0">
            <div className="r2-gira r2-orbita-ext absolute inset-0">
              <div
                aria-hidden="true"
                className="r2-anel absolute inset-0 rounded-full border border-brand-1/25"
              />
              <div
                aria-hidden="true"
                className="r2-anel absolute inset-[10%] rounded-full border border-brand-1/25"
              />
              <div
                aria-hidden="true"
                className="r2-anel r2-arco absolute inset-[10%] rounded-full"
              />
              {PONTOS_EXTERNOS.map((ponto) => (
                <span
                  key={`ext-${ponto.angulo}`}
                  aria-hidden="true"
                  className="r2-ponto r2-anel absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full lg:h-2.5 lg:w-2.5"
                  style={coordenadas(`${ponto.raio}%`, ponto.angulo)}
                />
              ))}
              {APPS_EXTERNOS.map((app, indice) => (
                <LogoApp
                  key={app.nome}
                  app={app}
                  raio="var(--raio-ext)"
                  contragiro="r2-contra-ext"
                  atraso={(APPS_INTERNOS.length + indice) * PASSO_ENTRADA}
                />
              ))}
            </div>
          </div>

          <div
            ref={nucleo}
            className="r2-nucleo relative z-10 max-w-[140px] px-1 text-center md:max-w-[260px] lg:max-w-xs"
          >
            <SectionTag>Aplicativos</SectionTag>
            {/* 14px no degrau base porque "entretenimento" (a palavra mais
                longa, que não quebra) mede ~118px e a caixa útil tem 132px */}
            <SectionTitle
              light="Um mundo de"
              bold="entretenimento para você"
              className="mt-2 text-sm md:mt-3 md:text-2xl lg:text-3xl"
            />
            <p className="mt-2 text-[11px] leading-snug text-texto/70 md:mt-3 md:text-xs md:leading-relaxed lg:text-sm">
              Assista a séries, acompanhe os jogos, escute suas músicas
              favoritas e aproveite benefícios exclusivos em uma conexão
              preparada para toda a família.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
