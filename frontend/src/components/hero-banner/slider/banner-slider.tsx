'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

const swiper_options: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 2000,
    effect: 'fade',
    navigation: {
        prevEl: '.tp-hero-prev',
        nextEl: '.tp-hero-next',
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
}

const slider_images = [
    '/assets/img/hero/01.jpg',
    '/assets/img/hero/02.jpg',
    '/assets/img/hero/03.jpg',
    '/assets/img/hero/04.jpg',
]

export default function HeroBannerSlider() {
    return (
        <div className="shop-slider-wrapper">
            <Swiper {...swiper_options} modules={[Navigation, EffectFade, Autoplay]} className="swiper-container tp-hero-slider-active">
                {slider_images.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="tp-hero-five-bg">
                            <div className="tp-hero-thumb" style={{ backgroundImage: `url(${item})` }} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
