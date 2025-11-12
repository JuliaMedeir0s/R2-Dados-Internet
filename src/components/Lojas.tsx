import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
export default function Lojas() {
  const lojas = [
    {
      nome: "Loja Pedro Leopoldo",
      unidade: "Unidade Centro",
      endereco: "Rua Francisco de Azevedo n° 27 – Centro",
      imagem: "/images/Pedro Leopoldo.png",
    },
    {
      nome: "Loja Pedro Leopoldo",
      unidade: "Unidade Felipe Cláudio Sales",
      endereco: "Avenida Gil Antônio Pereira n° 1016 - Felipe Cláudio Sales",
      imagem: "/images/Pedro Leopoldo (1).png",
    },
    {
      nome: "Loja Matozinhos",
      endereco: "Avenida Caio Martins n° 84 – Centro",
      referencia: "Ponto de Referencia: Em frente a Escola do Rio das Velhas",
      imagem: "/images/Matozinhos.png",
    },
    {
      nome: "Loja Prudente de Morais",
      endereco: "Avenida Brasília n° 1031 – Centro",
      imagem: "/images/Prudente de Morais.png",
    },
    {
      nome: "Loja Cordisburgo",
      endereco: "Rua Governador Valadares n° 88 A – Centro",
      referencia: "Ponto de referência: Próximo ao correio",
      imagem: "/images/Cordisburgo.png",
    },
    {
      nome: "Loja Paraopeba",
      endereco: "Rua Américo Barbosa, 68 centro",
      referencia: "Referencia: Rua do Açaí de tanga",
      imagem: "/images/Paraopeba.png",
    },
    {
      nome: "Loja Contagem",
      endereco: "Avenida Durval Alves de Faria, 2330 - Tropical - Contagem - MG",
      imagem: "/images/Contagem.png",
    },
    {
      nome: "Loja Confins",
      endereco: "Rua Maria Rodrigues, Nº 114 - Centro - Confins - MG.",
      imagem: "/images/Confins.png",
    },
  ];

  return (
    <section className="py-16">
      <div className=" px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-secondary mb-4">
            Conheça nossas lojas
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="py-8 px-10"
        >
          {lojas.map((loja, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <div className="bg-secondary rounded-4xl w-72 h-110 hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={loja.imagem}
                      alt={`Loja ${loja.nome}`}
                      className="w-full h-70 object-cover rounded-2xl"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-montserrat text-white mb-2">
                      {loja.nome}
                    </h3>
                    {loja.unidade && (
                      <p className="text-white text-sm font-semibold mb-1">
                        {loja.unidade}
                      </p>
                    )}
                    <p className="text-white text-sm mb-2">{loja.endereco}</p>
                    {loja.referencia && (
                      <p className="text-white text-sm italic">{loja.referencia}</p>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
