import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  useUtm,
  buildPlanWhatsappHref,
} from "@/lib/whatsapp";

type Beneficio = { icon: string; text: string };
type ItemIcon = { nome: string; icon?: string };
type Plano = {
  nome: string;
  preco: string;
  velocidade: string;
  wifi: string;
  beneficios: Beneficio[];
  assinaturas: ItemIcon[];
  streamings?: ItemIcon[];
  extras?: ItemIcon[];
  inclusos?: string[];
};

export default function Planos() {
  const utm = useUtm();
  const planos: Plano[] = [
    {
      nome: "R2 Start",
      preco: "99,90",
      velocidade: "600MB",
      wifi: "Wi-fi 5",
      beneficios: [
        { icon: "/images/wifi.png", text: "Wi-fi 5" },
        { icon: "/images/fibra.png", text: "100% Fibra Óptica" },
        { icon: "/images/suporte.png", text: "Suporte Premium" },
        { icon: "/images/instalacao.png", text: "Instalação Grátis*" },
      ],
      streamings: [],
      extras: [],
      assinaturas: [
        { nome: "BITT Trainers", icon: "/images/bitt_logo.png" },
        { nome: "BitBook", icon: "/images/bitbook_logo.png" },
        { nome: "Clipsy", icon: "/images/clipsy_logo.png" },
      ],
      inclusos: [],
    },
    {
      nome: "R2 Plus",
      preco: "119,90",
      velocidade: "800MB",
      wifi: "Wi-fi 6",
      beneficios: [
        { icon: "/images/wifi.png", text: "Wi-fi 6" },
        { icon: "/images/fibra.png", text: "100% Fibra Óptica" },
        { icon: "/images/suporte.png", text: "Suporte Premium" },
        { icon: "/images/instalacao.png", text: "Instalação Grátis*" },
      ],
      streamings: [],
      extras: [],
      assinaturas: [
        { nome: "BITT Trainers", icon: "/images/bitt_logo.png" },
        { nome: "BitBook", icon: "/images/bitbook_logo.png" },
        { nome: "Clipsy", icon: "/images/clipsy_logo.png" },
        { nome: "Mestre Cursos", icon: "/images/mestre_cursos_logo.png" },
      ],
      inclusos: [],
    },
    {
      nome: "R2 Start PRO",
      preco: "129,90",
      velocidade: "600MB",
      wifi: "Wi-fi 5",
      beneficios: [
        { icon: "/images/wifi.png", text: "Wi-fi 5" },
        { icon: "/images/fibra.png", text: "100% Fibra Óptica" },
        { icon: "/images/suporte.png", text: "Suporte Premium" },
        { icon: "/images/instalacao.png", text: "Instalação Grátis*" },
      ],
      streamings: [
        { nome: "Max", icon: "/images/max.png" },
        { nome: "Disney+", icon: "/images/disney_plus_logo.png" },
      ],
      extras: [],
      assinaturas: [
        { nome: "BITT Trainers", icon: "/images/bitt_logo.png" },
        { nome: "BitBook", icon: "/images/bitbook_logo.png" },
        { nome: "Clipsy", icon: "/images/clipsy_logo.png" },
      ],
      inclusos: [],
    },
    {
      nome: "R2 Plus PRO",
      preco: "139,90",
      velocidade: "800MB",
      wifi: "Wi-fi 6",
      beneficios: [
        { icon: "/images/wifi.png", text: "Wi-fi 6" },
        { icon: "/images/fibra.png", text: "100% Fibra Óptica" },
        { icon: "/images/suporte.png", text: "Suporte Premium" },
        { icon: "/images/instalacao.png", text: "Instalação Grátis*" },
      ],
      streamings: [
        { nome: "Globoplay", icon: "/images/globo_play_logo.png" },
        { nome: "Max", icon: "/images/max.png" },
        { nome: "Disney+", icon: "/images/disney_plus_logo.png" },
      ],
      extras: [
      ],
      assinaturas: [
        { nome: "BITT Trainers", icon: "/images/bitt_logo.png" },
        { nome: "BitBook", icon: "/images/bitbook_logo.png" },
        { nome: "Clipsy", icon: "/images/clipsy_logo.png" },
        { nome: "Mestre Cursos", icon: "/images/mestre_cursos_logo.png" },
      ],
      inclusos: [],
    },
    {
      nome: "R2 Ultra",
      preco: "149,90",
      velocidade: "1GB",
      wifi: "Wi-fi 6",
      beneficios: [
        { icon: "/images/wifi.png", text: "Wi-fi 6" },
        { icon: "/images/fibra.png", text: "100% Fibra Óptica" },
        { icon: "/images/suporte.png", text: "Suporte Premium" },
        { icon: "/images/instalacao.png", text: "Instalação Grátis*" },
      ],
      streamings: [
        { nome: "Globoplay", icon: "/images/globo_play_logo.png" },
        { nome: "Max", icon: "/images/max.png" },
        { nome: "Disney+", icon: "/images/disney_plus_logo.png" },
      ],
      extras: [
        { nome: "Deezer", icon: "/images/deezer_logo.png" },
        { nome: "ExitLag", icon: "/images/exitlag_logo.png" },
      ],
      assinaturas: [
        { nome: "BITT Trainers", icon: "/images/bitt_logo.png" },
        { nome: "BitBook", icon: "/images/bitbook_logo.png" },
        { nome: "Clipsy", icon: "/images/clipsy_logo.png" },
        { nome: "Mestre Cursos", icon: "/images/mestre_cursos_logo.png" },
      ],
      inclusos: ["Telefone Fixo"],
    },
    {
      nome: "R2 Gamer",
      preco: "159,90",
      velocidade: "1GB",
      wifi: "Wi-fi 6",
      beneficios: [
        { icon: "/images/wifi.png", text: "Wi-fi 6" },
        { icon: "/images/fibra.png", text: "100% Fibra Óptica" },
        { icon: "/images/suporte.png", text: "Suporte Premium" },
        { icon: "/images/instalacao.png", text: "Instalação Grátis*" },
      ],
      streamings: [
        { nome: "Globoplay", icon: "/images/globo_play_logo.png" },
        { nome: "Max", icon: "/images/max.png" },
        { nome: "Disney+", icon: "/images/disney_plus_logo.png" },
      ],
      extras: [
        { nome: "Deezer", icon: "/images/deezer_logo.png" },
        { nome: "ExitLag", icon: "/images/exitlag_logo.png" },
      ],
      assinaturas: [
        { nome: "BITT Trainers", icon: "/images/bitt_logo.png" },
        { nome: "BitBook", icon: "/images/bitbook_logo.png" },
        { nome: "Clipsy", icon: "/images/clipsy_logo.png" },
        { nome: "Mestre Cursos", icon: "/images/mestre_cursos_logo.png" },
      ],
      inclusos: ["Telefone Fixo", "IP Público Dinâmico"],
    },
    {
      nome: "R2 Futebol",
      preco: "169,90",
      velocidade: "1GB",
      wifi: "Wi-fi 6",
      beneficios: [
        { icon: "/images/wifi.png", text: "Wi-fi 6" },
        { icon: "/images/fibra.png", text: "100% Fibra Óptica" },
        { icon: "/images/suporte.png", text: "Suporte Premium" },
        { icon: "/images/instalacao.png", text: "Instalação Grátis*" },
      ],
      streamings: [{ nome: "Premiere", icon: "/images/premiere_logo.png" }],
      extras: [
      ],
      assinaturas: [
        { nome: "BITT Trainers", icon: "/images/bitt_logo.png" },
        { nome: "BitBook", icon: "/images/bitbook_logo.png" },
        { nome: "Clipsy", icon: "/images/clipsy_logo.png" },
        { nome: "Mestre Cursos", icon: "/images/mestre_cursos_logo.png" },
      ],
      inclusos: ["Telefone Fixo"],
    },
    {
      nome: "R2 Família",
      preco: "179,90",
      velocidade: "1GB",
      wifi: "Wi-fi PRO",
      beneficios: [
        { icon: "/images/wifi.png", text: "Wi-fi PRO" },
        { icon: "/images/fibra.png", text: "100% Fibra Óptica" },
        { icon: "/images/suporte.png", text: "Suporte Premium" },
        { icon: "/images/instalacao.png", text: "Instalação Grátis*" },
      ],
      streamings: [
        { nome: "Globoplay", icon: "/images/globo_play_logo.png" },
        { nome: "Max", icon: "/images/max.png" },
        { nome: "Disney+", icon: "/images/disney_plus_logo.png" },
      ],
      extras: [
        { nome: "Deezer", icon: "/images/deezer_logo.png" },
        { nome: "ExitLag", icon: "/images/exitlag_logo.png" },
      ],
      assinaturas: [
        { nome: "BITT Trainers", icon: "/images/bitt_logo.png" },
        { nome: "BitBook", icon: "/images/bitbook_logo.png" },
        { nome: "Clipsy", icon: "/images/clipsy_logo.png" },
        { nome: "Mestre Cursos", icon: "/images/mestre_cursos_logo.png" },
      ],
      inclusos: ["Telefone Fixo", "Mesh"],
    },
  ];

  const [planoModal, setPlanoModal] = useState<(typeof planos)[number] | null>(null);

  useEffect(() => {
    if (!planoModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPlanoModal(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [planoModal]);

  const renderBadge = (item: { nome: string; icon?: string }) => (
    <span
      key={item.nome}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-montserrat"
      title={item.nome}
    >
      <span className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
        {item.icon ? (
          <img src={item.icon} alt={item.nome} className="w-6 h-6 object-contain" />
        ) : (
          <span className="text-[10px] font-bold text-gray-700">{item.nome.slice(0, 3).toUpperCase()}</span>
        )}
      </span>
      {item.nome}
    </span>
  );

  const renderMiniRow = (label: string, items?: ItemIcon[], plan?: Plano) => {
    if (!items?.length) return null;
    const preview = items.slice(0, 2);
    const remaining = items.length - preview.length;

    return (
      <div className="px-6 mb-3">
        <p className="text-xs text-gray-500 mb-1 text-center">{label}</p>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {preview.map((item) => (
            <span
              key={item.nome}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full border border-gray-200 bg-gray-50 text-[11px] font-montserrat"
              title={item.nome}
            >
              <span className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                {item.icon ? (
                  <img src={item.icon} alt={item.nome} className="w-5 h-5 object-contain" />
                ) : (
                  <span className="text-[10px] font-bold text-gray-700">{item.nome.slice(0, 3).toUpperCase()}</span>
                )}
              </span>
              {item.nome}
            </span>
          ))}

          {remaining > 0 && (
            <button
              type="button"
              onClick={() => plan && setPlanoModal(plan)}
              className="w-7 h-7 rounded-full bg-gray-100 border border-gray-200 text-xs font-montserrat text-primary cursor-pointer"
              aria-label={`Ver mais ${label.toLowerCase()}`}
            >
              +{remaining}
            </button>
          )}

          <button
            type="button"
            onClick={() => plan && setPlanoModal(plan)}
            className="w-7 h-7 rounded-full bg-gray-100 border border-gray-200 text-[11px] font-bold text-primary cursor-pointer"
            aria-label={`Detalhes de ${label.toLowerCase()}`}
          >
            i
          </button>
        </div>
      </div>
    );
  };

  const renderStreamRow = (label: string, items?: ItemIcon[], plan?: Plano) => {
    if (!items?.length) return null;
    return (
      <div className="px-6 mb-3">
        <p className="text-xs text-gray-500 mb-1 text-center">{label}</p>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {items.map((item) => (
            <span
              key={item.nome}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden"
              title={item.nome}
            >
              {item.icon ? (
                <img src={item.icon} alt={item.nome} className="w-8 h-8 object-contain" />
              ) : (
                <span className="text-[11px] font-bold text-gray-700">{item.nome.slice(0, 3).toUpperCase()}</span>
              )}
            </span>
          ))}

          <button
            type="button"
            onClick={() => plan && setPlanoModal(plan)}
            className="w-7 h-7 rounded-full bg-gray-100 border border-gray-200 text-[11px] font-bold text-primary cursor-pointer"
            aria-label={`Detalhes de ${label.toLowerCase()}`}
          >
            i
          </button>
        </div>
      </div>
    );
  };

  const ModalNotas = ({ plano }: { plano: Plano }) => {
    const hasOptions = (plano.streamings?.length || 0) > 0 || (plano.extras?.length || 0) > 0;
    const hasPhone = plano.inclusos?.includes("Telefone Fixo");
    const hasIp = plano.inclusos?.includes("IP Público Dinâmico");
    const hasMesh = plano.inclusos?.includes("Mesh");

    return (
      <div className="text-xs text-gray-600 space-y-1">
        <p>* Combos são ativados automaticamente ao contratar.</p>
        {hasOptions && <p>* Escolha de streaming/extra é feita com a equipe de suporte durante a ativação.</p>}
        {hasPhone && <p>* Telefone fixo é ativado pela equipe de suporte durante a ativação.</p>}
        {hasIp && <p>* IP público dinâmico exige abertura de chamado.</p>}
        {hasMesh && <p>* Mesh exige abertura de chamado para ativação.</p>}
      </div>
    );
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
            const temMais = (plano.assinaturas?.length || 0) > 4;
            const assinaturasVisiveis = plano.assinaturas?.slice(0, 4);
            const assinaturasOcultasCount = temMais
              ? (plano.assinaturas?.length || 0) - 4
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
                      {plano.beneficios.map((beneficio, index) => {
                        const items = [];
                        
                        // Adiciona o benefício atual
                        items.push(
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
                        );
                        
                        // Se for o primeiro benefício (wifi) e tiver telefone fixo, adiciona logo depois
                        if (index === 0 && plano.inclusos?.includes("Telefone Fixo")) {
                          items.push(
                            <div
                              key="telefone-fixo"
                              className="flex space-x-3 justify-center items-center font-montserrat"
                            >
                              <Icon
                                icon="mdi:phone"
                                className="w-6 h-6 text-secondary"
                              />
                              <span className="text-gray-700">
                                Telefone Fixo
                              </span>
                            </div>
                          );
                        }
                        
                        return items;
                      })}
                      {plano.inclusos?.filter(item => !item.includes("Telefone")).map((item, index) => {
                        let iconName = "mdi:check-circle";
                        if (item.includes("IP")) iconName = "mdi:ip-network";
                        if (item.includes("Mesh")) iconName = "mdi:wifi-marker";
                        
                        return (
                          <div
                            key={`incluso-${index}`}
                            className="flex space-x-3 justify-center items-center font-montserrat"
                          >
                            <Icon
                              icon={iconName}
                              className="w-6 h-6 text-secondary"
                            />
                            <span className="text-gray-700">
                              {item}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {plano.streamings && plano.streamings.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-xl font-montserrat text-gray-700 mb-3 text-center">
                          {plano.streamings.length === 1 ? "Streaming incluído" : "Escolha 1 streaming"}
                        </h4>
                        <div className="flex flex-col gap-3 px-6">
                          <div className="flex flex-wrap justify-center gap-3">
                            {plano.streamings.map((streaming, index) => (
                              <div
                                key={`${streaming.nome}-${index}`}
                                className="flex flex-col items-center"
                              >
                                <div
                                  className="w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center overflow-hidden"
                                  title={streaming.nome}
                                >
                                  <img
                                    src={streaming.icon}
                                    alt={streaming.nome}
                                    className="w-10 h-10 object-contain"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {renderMiniRow("Escolha 1 extra", plano.extras, plano)}

                    <div className="px-6 mb-3">
                      <p className="text-xs text-gray-500 mb-1 text-center">Assinaturas Inclusas</p>
                      <div className="flex items-center justify-center gap-2 flex-wrap">
                        {assinaturasVisiveis?.map((assinatura, index) => (
                          <span
                            key={`${assinatura.nome}-${index}`}
                            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden"
                            title={assinatura.nome}
                          >
                            <img
                              src={assinatura.icon}
                              alt={assinatura.nome}
                              className="w-8 h-8 object-contain"
                            />
                          </span>
                        ))}

                        {temMais && (
                          <button
                            type="button"
                            className="w-7 h-7 rounded-full bg-gray-100 border border-gray-200 text-xs font-montserrat text-primary cursor-pointer"
                            onClick={() => setPlanoModal(plano)}
                            aria-label="Ver todas as assinaturas"
                          >
                            +{assinaturasOcultasCount}
                          </button>
                        )}
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
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-60 bg-white border-2 border-primary text-primary py-2 rounded-full font-semibold hover:bg-primary transition-colors flex items-center justify-center space-x-1 mb-6 mx-auto group"
                  >
                    <Icon
                      icon="mdi:whatsapp"
                      className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors"
                    />
                    <span className="text-2sm text-blue-600 font-montserrat group-hover:text-white transition-colors">
                      Contratar Agora
                    </span>
                  </a>

                  <div className="text-center mb-4">
                    <button
                      type="button"
                      onClick={() => setPlanoModal(plano)}
                      className="text-sm font-montserrat text-primary underline underline-offset-2 hover:text-secondary"
                    >
                      Consulte condições dessa oferta
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {planoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setPlanoModal(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <h3 className="text-xl font-montserrat font-bold text-primary">{planoModal.nome}</h3>
              <button
                type="button"
                onClick={() => setPlanoModal(null)}
                className="text-gray-500 hover:text-primary"
                aria-label="Fechar"
              >
                X
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">{planoModal.velocidade} · {planoModal.wifi}</p>
                <span className="text-base font-montserrat font-bold text-secondary">R$ {planoModal.preco}/mês</span>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2">Combos inclusos</p>
                <div className="flex flex-wrap gap-2">
                    {planoModal.assinaturas.map((assinatura) => renderBadge(assinatura))}
                </div>
              </div>

                {planoModal.streamings?.length ? (
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Escolha 1 streaming</p>
                    <div className="flex flex-wrap gap-2">
                      {planoModal.streamings.map((stream) => renderBadge(stream))}
                    </div>
                  </div>
                ) : null}

                {planoModal.extras?.length ? (
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Escolha 1 extra</p>
                    <div className="flex flex-wrap gap-2">
                      {planoModal.extras.map((extra) => renderBadge(extra))}
                    </div>
                  </div>
                ) : null}

              {planoModal.inclusos?.length ? (
                <div>
                  <p className="text-xs text-gray-500 mb-1">Incluso</p>
                  <div className="flex flex-wrap gap-2">
                    {planoModal.inclusos.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-montserrat border border-blue-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

                <div className="pt-2 flex justify-end">
                  <a
                    href={buildPlanWhatsappHref(undefined, utm, {
                      planName: planoModal.nome,
                      speed: planoModal.velocidade,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary text-primary font-montserrat font-semibold hover:bg-primary hover:text-white transition-colors"
                  >
                    Falar no WhatsApp
                    <Icon icon="ph:arrow-right-bold" className="w-5 h-5" />
                  </a>
                </div>

                <ModalNotas plano={planoModal} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}