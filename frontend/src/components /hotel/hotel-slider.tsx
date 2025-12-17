'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { IHotelRoom } from "@/types/hotel-d-t";
import HotelCardFour from "./single/hotel-card-4";

const swiper_options: SwiperOptions = {
    slidesPerView: 1,
    speed: 700,
    spaceBetween: 30,
    loop: false,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: ".tp-service-pagination",
        clickable: true,
    },
    breakpoints: {
        '1600': {
            slidesPerView: 3,
        },
        '1200': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
};

type IProps = {
    hotels: IHotelRoom[]
}
export default function HotelSlider({ hotels }: IProps) {
    return (
        <Swiper {...swiper_options} modules={[Pagination, Autoplay]} className="swiper-container tp-service-active">
            {hotels.slice(0, 6).map((item) => (
                <SwiperSlide key={item.id}>
                    <HotelCardFour item={item} />
                </SwiperSlide>
            ))}
            <div className="tp-service-pagination"></div>
        </Swiper>
    )
}
