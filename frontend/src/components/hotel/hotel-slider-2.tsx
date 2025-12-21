'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { IHotelRoom } from "@/types/hotel-d-t";
import HotelCardTwo from "./single/hotel-card-2";

type IProps = {
    hotelData: IHotelRoom[]
};

const swiper_options: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: false,
    breakpoints: {
        '1200': {
            slidesPerView: 3,
        },
        '991': {
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
}
export default function HotelSliderTwo({ hotelData }: IProps) {
    return (
        <Swiper {...swiper_options} className="tp-room-slider-active swiper-container">
            {hotelData.map((item) => (
                <SwiperSlide key={item.id} >
                    <HotelCardTwo item={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
