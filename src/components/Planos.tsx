import { Icon } from "@iconify/react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useUtm, getPlanWhatsappText } from "@/lib/whatsapp";

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
    },
    {
      nome: "Plano Super",
      preco: "119,90",
      velocidade: "800MB",
      wifi: "Wi-fi Pro AX",
      beneficios: [
        { icon: "/images/wifi.png", text: "Wi-fi Pro AX" },
        { icon: "/images/fibra.png", text: "100% Fibra Óptica" },
        { icon: "/images/suporte.png", text: "Suporte Premium" },
        { icon: "/images/instalacao.png", text: "Instalação Grátis" },
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
    },
  ];

  const PARAMOUNT_INCLUSO = new Set<string>(["Plano Turbo Pro", "Plano Super"]);

  const [toggleStates, setToggleStates] = useState({
    "Plano Pro": { max: false, paramount: false },
    "Plano Super": { max: false, paramount: true },
    "Plano Turbo Pro": { max: false, paramount: true },
  });

  const handleToggle = (planoNome: string, service: "max" | "paramount") => {
    setToggleStates((prev) => ({
      ...prev,
      [planoNome]: {
        ...prev[planoNome as keyof typeof prev],
        [service]: !prev[planoNome as keyof typeof prev][service],
      },
    }));
  };

  // Função para calcular o preço total com streamings
  const calcularPrecoTotal = (planoNome: string, precoBase: string) => {
    const precoBaseNum = parseFloat(precoBase.replace(",", "."));
    let adicional = 0;

    if (
      toggleStates[planoNome as keyof typeof toggleStates].paramount &&
      !PARAMOUNT_INCLUSO.has(planoNome)
    ) {
      adicional += 19.9;
    }
    if (toggleStates[planoNome as keyof typeof toggleStates].max) {
      adicional += 29.9;
    }

    const total = precoBaseNum + adicional;
    return total.toFixed(2).replace(".", ",");
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
            // calcula os extras desse plano específico
            const extrasLabelRaw = Object.entries(
              toggleStates[plano.nome as keyof typeof toggleStates]
            )
              .filter(([_, value]) => value)
              .map(([key]) =>
                key === "max" ? " com HBO Max" : " com Paramount+"
              )
              .join(" e");

            const extrasLabel = extrasLabelRaw ? ` ${extrasLabelRaw}` : "";

            // monta a mensagem de WhatsApp usando o helper centralizado
            const whatsappText = getPlanWhatsappText(utm, {
              planName: plano.nome,
              speed: plano.velocidade,
              extrasLabel,
            });

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
                        Turbine seu plano
                      </h4>
                      <div className="flex flex-col gap-4 px-8">
                        {/* MAX */}
                        <div className="flex items-center justify-between bg-gray-100 rounded-xl px-8 py-4 border-2 border-gray-300">
                          <img
                            src="/images/max.png"
                            alt="max"
                            className="h-4"
                          />
                          <Switch
                            checked={
                              toggleStates[
                                plano.nome as keyof typeof toggleStates
                              ].max
                            }
                            onCheckedChange={() =>
                              handleToggle(plano.nome, "max")
                            }
                          />
                        </div>

                        {/* PARAMOUNT */}
                        <div
                          className={`flex items-center justify-between rounded-xl px-8 py-4 border-2 ${
                            PARAMOUNT_INCLUSO.has(plano.nome)
                              ? "bg-green-50 border-green-300"
                              : "bg-gray-100 border-gray-300"
                          }`}
                        >
                          <div className="flex items-center gap-12">
                            <img
                              src="/images/paramount.png"
                              alt="Paramount"
                              className="h-7"
                            />
                            {PARAMOUNT_INCLUSO.has(plano.nome) && (
                              <span className="text-xs font-montserrat font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                Já incluso
                              </span>
                            )}
                          </div>

                          {!PARAMOUNT_INCLUSO.has(plano.nome) && (
                            <Switch
                              checked={
                                toggleStates[
                                  plano.nome as keyof typeof toggleStates
                                ].paramount
                              }
                              onCheckedChange={() =>
                                handleToggle(plano.nome, "paramount")
                              }
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mb-2">
                    <span className="text-xl font-montserrat text-primary font-bold">
                      R$
                      <span className="text-4xl">
                        {calcularPrecoTotal(plano.nome, plano.preco)}
                      </span>
                      /mês
                    </span>
                  </div>

                  {(plano.nome === "Plano Turbo Pro" ||
                    toggleStates[plano.nome as keyof typeof toggleStates].max ||
                    toggleStates[plano.nome as keyof typeof toggleStates]
                      .paramount) && (
                    <div className="text-center mb-2 px-4">
                      <p className="text-xs text-gray-600 font-montserrat">
                        Plano base: R$ {plano.preco}
                        {PARAMOUNT_INCLUSO.has(plano.nome) &&
                          " (Paramount+ incluso)"}
                        {!PARAMOUNT_INCLUSO.has(plano.nome) &&
                          toggleStates[plano.nome as keyof typeof toggleStates]
                            .paramount &&
                          " + Paramount+ R$ 19,90"}
                        {toggleStates[plano.nome as keyof typeof toggleStates]
                          .max && " + Max R$ 29,90"}
                      </p>
                    </div>
                  )}

                  <a
                    href={`https://wa.me/553136621235?text=${encodeURIComponent(
                      whatsappText
                    )}`}
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
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}