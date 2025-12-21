'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";

export const gallery_swiper_options: SwiperOptions = {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 40,
    loop: false,
    centeredSlides: true,
    breakpoints: {
        '1200': {
            slidesPerView: 2,
        },
        '991': {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '576': {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        '0': {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".tp-gallery-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".tp-gallery-button-next",
        prevEl: ".tp-gallery-button-prev",
    },
}

const slider_images = [
    '/assets/img/gellary/01.jpg',
    '/assets/img/gellary/02.jpg',
    '/assets/img/gellary/03.jpg',
    '/assets/img/gellary/04.jpg',
]

export default function GallerySlider() {
    return (
        <Swiper {...gallery_swiper_options} modules={[Pagination, Autoplay,Navigation]} className="swiper-container tp-gallery-slide">

            {slider_images.map((img, i) => (
                <SwiperSlide key={i}>
                    <div className="tp-gallery-item">
                        <Image className="w-100" src={img} alt="gallery" width={1032} height={578} style={{height:'auto'}} />
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    )
}
