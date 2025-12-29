import { Icon } from "@iconify/react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  useUtm,
  buildPlanWhatsappHref,
} from "@/lib/whatsapp";

export default function Planos() {
  const utm = useUtm();

  const planos = [
    {
      nome: "Plano Pro",
      preco: "99,90",
      velocidade: "600MB",
      wifi: "Wi-fi Pro AC",
      beneficios: [
        { icon: "/images/wifi.png", text: "Wi-fi Pro AC" },
        { icon: "/images/fibra.png", text: "100% Fibra Óptica" },
        { icon: "/images/suporte.png", text: "Suporte Premium" },
        { icon: "/images/instalacao.png", text: "Instalação Grátis" },
      ],
      assinaturas: [
        { nome: "BITT Trainers", icon: "/images/bitt_logo.png" },
        { nome: "BitBook", icon: "/images/bitbook_logo.png" },
        { nome: "Clipsy", icon: "/images/clipsy_logo.png" },
      ],
    },
    {
      nome: "Plano Super",
      preco: "129,90",
      velocidade: "800MB",
      wifi: "Wi-fi Pro AX",
      beneficios: [
        { icon: "/images/wifi.png", text: "Wi-fi Pro AX" },
        { icon: "/images/fibra.png", text: "100% Fibra Óptica" },
        { icon: "/images/suporte.png", text: "Suporte Premium" },
        { icon: "/images/instalacao.png", text: "Instalação Grátis" },
      ],
      assinaturas: [
        { nome: "Deezer", icon: "/images/deezer_logo.png" },
        { nome: "BITT Trainers", icon: "/images/bitt_logo.png" },
        { nome: "BitBook", icon: "/images/bitbook_logo.png" },
        { nome: "Clipsy", icon: "/images/clipsy_logo.png" },
      ],
    },
    {
      nome: "Plano Turbo Pro",
      preco: "149,90",
      velocidade: "1GB",
      wifi: "Wi-fi Pro AX",
      beneficios: [
        { icon: "/images/wifi.png", text: "Wi-fi Pro AX" },
        { icon: "/images/fibra.png", text: "100% Fibra Óptica" },
        { icon: "/images/suporte.png", text: "Suporte Premium" },
        { icon: "/images/instalacao.png", text: "Instalação Grátis" },
      ],
      assinaturas: [
        { nome: "Deezer", icon: "/images/deezer_logo.png" },
        { nome: "Mestre Cursos", icon: "/images/mestre_cursos_logo.png" },
        { nome: "BITT Trainers", icon: "/images/bitt_logo.png" },
        { nome: "BitBook", icon: "/images/bitbook_logo.png" },
        { nome: "Clipsy", icon: "/images/clipsy_logo.png" },
      ],
    },
  ];

  const [assinaturasAbertas, setAssinaturasAbertas] = useState(() =>
    planos.reduce(
      (acc, plano) => ({ ...acc, [plano.nome]: false }),
      {} as Record<string, boolean>
    )
  );

  const alternarAssinaturas = (planoNome: string) => {
    setAssinaturasAbertas((prev) => ({
      ...prev,
      [planoNome]: !prev[planoNome],
    }));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-secondary mb-4">
            Muitas formas de te conectar
          </h2>
          <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto hidden max-lg:block">
            Temos os melhores planos, passe para o lado e selecione o plano
            ideal para você!
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          centeredSlides={true}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 0,
              centeredSlides: false,
            },
          }}
          className="px-10"
        >
          {planos.map((plano) => {
            const extrasLabel = plano.assinaturas?.length
              ? ` com assinaturas: ${plano.assinaturas
                .map((assinatura) => assinatura.nome)
                .join(", ")}`
              : "";

            const mostrarTodas = assinaturasAbertas[plano.nome];
            const temMais = (plano.assinaturas?.length || 0) > 3;
            const assinaturasVisiveis = temMais && !mostrarTodas
              ? plano.assinaturas?.slice(0, 2)
              : plano.assinaturas;
            const assinaturasOcultasCount = temMais
              ? (plano.assinaturas?.length || 0) - 2
              : 0;

            return (
              <SwiperSlide
                key={plano.nome}
                className="flex justify-center items-center py-5"
              >
                <div className="bg-white rounded-2xl shadow-xl border-3 border-primary w-80 mx-auto">
                  <div className="bg-primary text-white w-3/5 mx-auto rounded-full text-center -mt-4 ">
                    <h3 className="text-sm font-montserrat w-full py-1 font-bold">
                      {plano.nome}
                    </h3>
                  </div>

                  <div className="pt-6">
                    <div className="text-center mb-2">
                      <span className="text-6xl font-montserrat font-bold text-[#003fbd]">
                        {plano.velocidade}
                      </span>
                    </div>

                    <hr className="border-b-2 border-primary mb-4 w-4/5 mx-auto" />

                    <div className="space-y-4 mb-6">
                      {plano.beneficios.map((beneficio, index) => (
                        <div
                          key={index}
                          className="flex space-x-3 justify-center items-center font-montserrat"
                        >
                          <img
                            src={beneficio.icon}
                            alt={beneficio.text}
                            className="w-6 h-6 text-secondary"
                          />
                          <span className="text-gray-700">
                            {beneficio.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-montserrat text-gray-700 mb-3 text-center">
                        Assinaturas Inclusas
                      </h4>
                      <div className="flex flex-col gap-3 px-6">
                        <div className="flex flex-wrap justify-center gap-3">
                          {assinaturasVisiveis?.map((assinatura, index) => (
                            <div
                              key={`${assinatura.nome}-${index}`}
                              className="flex flex-col items-center"
                            >
                              <div
                                className="w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center overflow-hidden"
                                title={assinatura.nome}
                              >
                                <img
                                  src={assinatura.icon}
                                  alt={assinatura.nome}
                                  className="w-10 h-10 object-contain"
                                />
                              </div>
                            </div>
                          ))}

                          {temMais && !mostrarTodas && (
                            <button
                              type="button"
                              className="w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-primary font-montserrat font-bold text-lg"
                              onClick={() => alternarAssinaturas(plano.nome)}
                              aria-label="Ver mais assinaturas"
                            >
                              +{assinaturasOcultasCount}
                            </button>
                          )}

                          {temMais && mostrarTodas && (
                            <button
                              type="button"
                              className="w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-primary font-montserrat font-bold text-lg"
                              onClick={() => alternarAssinaturas(plano.nome)}
                              aria-label="Ocultar assinaturas extras"
                            >
                              -
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mb-2">
                    <span className="text-xl font-montserrat text-primary font-bold">
                      R$
                      <span className="text-4xl">{plano.preco}</span>
                      /mês
                    </span>
                  </div>

                  <a
                    href={buildPlanWhatsappHref(undefined, utm, {
                      planName: plano.nome,
                      speed: plano.velocidade,
                      extrasLabel,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-60 bg-white border-2 border-primary text-primary py-2 rounded-full font-semibold hover:bg-primary transition-colors flex items-center justify-center space-x-1 mb-6 mx-auto group"
                  >
                    <span className="text-2sm text-blue-600 font-montserrat group-hover:text-white transition-colors">
                      Saiba Mais
                    </span>
                    <Icon
                      icon="ph:arrow-right-bold"
                      className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors"
                    />
                  </a>

                  <p className="text-sm font-montserrat text-primary text-center mb-4">
                    *Consulte condições dessa oferta
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}