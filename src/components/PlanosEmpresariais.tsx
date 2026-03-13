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

type ItemIcon = { nome: string; icon?: string };
type Plano = {
  nome: string;
  preco: string;
  velocidade: string;
  wifi: string;
  beneficios: string[];
  assinaturas: ItemIcon[];
  streamings?: ItemIcon[];
  extras?: ItemIcon[];
  inclusos?: string[];
};

export default function PlanosEmpresariais() {
  const utm = useUtm();
  const planos: Plano[] = [
    {
      nome: "R2 Empresa Start 300MB",
      preco: "159,90",
      velocidade: "300MB",
      wifi: "Roteador AC",
      beneficios: [
        "Banda simétrica",
        "Proteção ciberataques",
      ],
      streamings: [],
      extras: [],
      assinaturas: [
        { nome: "SCM R$ 65,71" },
        { nome: "Proteção Ciberataques R$ 80,20" },
        { nome: "Aluguel Roteador AC R$ 13,99" },
      ],
      inclusos: [],
    },
    {
      nome: "R2 Empresa Plus 500MB",
      preco: "199,90",
      velocidade: "500MB",
      wifi: "Roteador AC",
      beneficios: [
        "Banda simétrica",
        "Proteção ciberataques",
      ],
      streamings: [],
      extras: [],
      assinaturas: [
        { nome: "SCM R$ 87,56" },
        { nome: "Proteção Ciberataques R$ 98,35" },
        { nome: "Aluguel Roteador AC R$ 13,99" },
      ],
      inclusos: [],
    },
    {
      nome: "R2 Empresa Plus 700MB",
      preco: "219,90",
      velocidade: "700MB",
      wifi: "Roteador AX",
      beneficios: [
        "Banda simétrica",
        "Proteção ciberataques",
        "IP Público Dinâmico",
      ],
      streamings: [],
      extras: [],
      assinaturas: [
        { nome: "SCM R$ 89,70" },
        { nome: "Proteção Ciberataques R$ 92,58" },
        { nome: "IP Público Dinâmico R$ 20,00" },
        { nome: "Aluguel Roteador AX R$ 17,62" },
      ],
      inclusos: ["IP Público Dinâmico"],
    },
    {
      nome: "R2 Empresa Ultra 1GB",
      preco: "249,90",
      velocidade: "1GB",
      wifi: "Roteador AX",
      beneficios: [
        "Banda simétrica",
        "Proteção ciberataques",
        "IP Público Dinâmico",
        "Telefone fixo",
      ],
      streamings: [],
      extras: [],
      assinaturas: [
        { nome: "SCM R$ 93,90" },
        { nome: "Proteção Ciberataques R$ 98,38" },
        { nome: "IP Público Dinâmico R$ 20,00" },
        { nome: "Telefone Fixo R$ 20,00" },
        { nome: "Aluguel Roteador AX R$ 17,62" },
      ],
      inclusos: ["Telefone Fixo", "IP Público Dinâmico"],
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

  const stripPriceFromResource = (label: string) =>
    label.replace(/\s*R\$\s*\d+(?:,\d{2})?$/i, "").trim();

  const getBeneficioIcon = (beneficio: string) => {
    const normalized = beneficio.toLowerCase();

    if (normalized.includes("simétrica") || normalized.includes("simetrica")) return "mdi:swap-horizontal-bold";
    if (normalized.includes("ciberataques")) return "mdi:shield-check";
    if (normalized.includes("ip público") || normalized.includes("ip publico")) return "mdi:ip-network";
    if (normalized.includes("telefone")) return "mdi:phone";

    return "mdi:check-circle";
  };

  const ModalNotas = ({ plano }: { plano: Plano }) => {
    const hasIp = plano.inclusos?.includes("IP Público Dinâmico");
    const hasPhone = plano.inclusos?.includes("Telefone Fixo");

    return (
      <div className="text-xs text-gray-600 space-y-1">
        <p>* Valores e composição sujeitos a disponibilidade e viabilidade técnica.</p>
        <p>* Serviço com banda simétrica: mesma velocidade de download e upload.</p>
        {hasIp && <p>* IP Público Dinâmico ideal para serviços em nuvem, câmeras e VPNs.</p>}
        {hasPhone && <p>* Telefone fixo pode exigir validação do suporte na ativação.</p>}
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-secondary mb-4">
            Planos empresariais
          </h2>
          <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto hidden max-lg:block">
            Passe para o lado e escolha o plano ideal para acelerar o seu negócio.
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

                    <div className="space-y-3 mb-5 px-6">
                      {plano.beneficios.map((beneficio) => (
                        <div
                          key={beneficio}
                          className="flex space-x-3 justify-center items-center font-montserrat"
                        >
                          <Icon
                            icon={getBeneficioIcon(beneficio)}
                            className="w-5 h-5 text-secondary shrink-0"
                          />
                          <span className="text-gray-700 text-sm text-center leading-snug">
                            {beneficio}
                          </span>
                        </div>
                      ))}

                      <div className="text-center">
                        <button
                          type="button"
                          onClick={() => setPlanoModal(plano)}
                          className="text-xs font-montserrat text-primary underline underline-offset-2 hover:text-secondary"
                        >
                          Ver mais detalhes
                        </button>
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

              {planoModal.extras?.length ? (
                <div>
                  <p className="text-xs text-gray-500 mb-2">
                    {planoModal.extras.length === 1 ? "Extra incluído" : "Escolha 1 extra"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {planoModal.extras.map((extra) => renderBadge(extra))}
                  </div>
                </div>
              ) : null}

              <div>
                <p className="text-xs text-gray-500 mb-2">
                  {planoModal.assinaturas.length === 1 ? "Recurso incluso" : "Recursos inclusos"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {planoModal.assinaturas.map((assinatura) =>
                    renderBadge({
                      ...assinatura,
                      nome: stripPriceFromResource(assinatura.nome),
                    })
                  )}
                </div>
              </div>

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