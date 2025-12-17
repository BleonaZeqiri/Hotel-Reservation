'use client';
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { IDestination } from "@/types/destination-d-t";


const swiper_options: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: false,
    breakpoints: {
        '1200': {
            slidesPerView: 4,
        },
        '991': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    navigation: {
        nextEl: ".tp-destinations-next",
        prevEl: ".tp-destinations-prev",
    }
}

type IProps = {
    destinations: IDestination[]
}
export default function DestinationSlider({ destinations }: IProps) {
    return (
        <Swiper {...swiper_options} modules={[Navigation]} className="swiper-container tp-destinations-slide pb-60">
            {destinations.map((item) => (
                <SwiperSlide key={item.id} className="tp-destinations-box  pt-20">
                    <div className="tp-destinations-main shadows-2">
                        <div className="tp-destinations-wrap fix p-relative">
                            <div className="tp-destinations-thumb">
                                {item.image && <Image src={item.image} alt="destinations" width={282} height={200} />}
                            </div>
                            {item.avgPropertyCategory &&<div className="tp-destinations-rating">
                                <span><i className="fa-sharp fa-solid fa-star"></i></span>
                                <span>{item.avgPropertyCategory}</span>
                            </div>}
                            <div className="tp-destinations-content p-absolute">
                                <h3 className="tp-destinations-title">
                                    <Link href={`/destination-details/${item.id}`}>{item.name}</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
