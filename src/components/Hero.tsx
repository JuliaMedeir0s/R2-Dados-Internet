import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Hero() {
    const banners = [
        {
            desktop: '/banners/BlackFriday25.png',
            mobile: '/banners/BlackFriday25Mobile.png',
            alt: 'Banner 1'
        },
        {
            desktop: '/banners/Banner3.png',
            mobile: '/banners/Banner3Mobile.png',
            alt: 'Banner 3'
        },
        {
            desktop: '/banners/Banner4.png',
            mobile: '/banners/Banner4Mobile.png',
            alt: 'Banner 4'
        }
    ];

    return (
        <section className="w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                loop={true}
                className="hero-swiper"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full">
                            {/* Banner Desktop */}
                            <img
                                src={banner.desktop}
                                alt={banner.alt}
                                className="hidden md:block w-full h-auto object-cover"
                            />
                            {/* Banner Mobile */}
                            <img
                                src={banner.mobile}
                                alt={banner.alt}
                                className="block md:hidden w-full h-auto object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
