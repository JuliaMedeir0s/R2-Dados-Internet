import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Servicos() {
    const services = [
        {
            imageSrc: '/images/internetDedicada.png',
            title: 'Internet Dedicada',
            description: 'Conexão de internet de alta disponibilidade, simétrica e com IP fixo para sua empresa.',
            scale: 'scale-95'
        },
        {
            imageSrc: '/images/lanToLan.png',
            title: 'Lan to Lan',
            description: 'Conecte sua matriz e filial com um link de baixa latência para garantir agilidade e eficiência operacional.',
            scale: 'scale-100'
        },
        {
            imageSrc: '/images/gestao.png',
            title: 'Gestão de Infraestrutura',
            description: 'Gestão e manutenção completa de infraestrutura de telecomunicações, energia, redes, fibra óptica e cabeamento.',
            scale: 'scale-105'
        },
        {
            imageSrc: '/images/monitoramento.png',
            title: 'Monitoramento Pro-Ativo',
            description: 'Monitoramento remoto contínuo do link com acionamento automático e rápido da equipe de manutenção.',
            scale: 'scale-100'
        },
        {
            imageSrc: '/images/pabx.png',
            title: 'Soluções de Voz',
            description: 'A solução completa que abrange PABX em nuvem, telefone fixo e Tronco E1 com 30 canais.',
            scale: 'scale-95'
        }
    ];

    return (
        <section className="bg-[#00246b] py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-white text-4xl md:text-5xl font-bold md:mb-2 font-montserrat">
                    Nossos Serviços
                </h2>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    centeredSlides={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                            centeredSlides: false
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                            centeredSlides: false
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 0,
                            centeredSlides: false
                        }
                    }}
                    className="px-1"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className={`rounded-xl py-10 px-5  flex flex-col ${service.scale}`}>
                                <div className="h-full flex justify-center items-center">
                                    <img
                                        src={service.imageSrc}
                                        alt={service.title}
                                        className="w-[90%] h-full object-cover"
                                    />
                                </div>
                                

                                {/* Informações do serviço */}
                                <div className="w-[85%] mx-auto mt-4 p-4 rounded-xl border-3 border-[#003fbd] bg-black/50 backdrop-blur-sm">
                                    <h3 className="text-white text-xl text-center font-montserrat leading-relaxed font-semibold drop-shadow-lg mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-white text-sm text-center font-montserrat leading-relaxed drop-shadow-lg">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
