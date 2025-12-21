'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";


const swiper_options: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    breakpoints: {
        '1200': {
            slidesPerView: 6,
        },
        '991': {
            slidesPerView: 5,
        },
        '768': {
            slidesPerView: 4,
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

const instagramData = [
    { id: 1, imgSrc: "/assets/img/instagram/01.jpg", link: 'https://www.instagram.com/' },
    { id: 2, imgSrc: "/assets/img/instagram/02.jpg", link: 'https://www.instagram.com/' },
    { id: 3, imgSrc: "/assets/img/instagram/03.jpg", link: 'https://www.instagram.com/' },
    { id: 4, imgSrc: "/assets/img/instagram/04.jpg", link: 'https://www.instagram.com/' },
    { id: 5, imgSrc: "/assets/img/instagram/05.jpg", link: 'https://www.instagram.com/' },
    { id: 6, imgSrc: "/assets/img/instagram/06.jpg", link: 'https://www.instagram.com/' },
];

export default function InstagramArea() {
    return (
        <div className="tp-instagram-area pb-10">
            <div className="container-fluid fix">
                <div className="row">
                    <Swiper {...swiper_options} className="swiper-container tp-instagram-slide">

                        {instagramData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="tp-instagram-thumb p-relative">
                                    <a className="popup-image" href={item.link} target="_blank">
                                        <Image className="w-100" src={item.imgSrc} alt="instagram" width={308} height={260} />
                                        <div className="tp-instagram-icon p-absolute">
                                            <span><i className="fa-brands fa-instagram"></i></span>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </div>
    )
}
