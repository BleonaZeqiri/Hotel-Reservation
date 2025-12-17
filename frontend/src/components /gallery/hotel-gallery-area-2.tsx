'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import gallery_img_1 from "@/assets/img/gellary/05.jpg";
import gallery_img_2 from "@/assets/img/gellary/06.jpg";
import gallery_img_3 from "@/assets/img/gellary/08.jpg";
import gallery_img_4 from "@/assets/img/gellary/07.jpg";
import { gallery_swiper_options } from "./gallery-slider";


const gallery_images = [gallery_img_1, gallery_img_2, gallery_img_3, gallery_img_4,gallery_img_3];

export default function HotelGalleryAreaTwo() {
    return (
        <div className="tp-gallery-area fix pb-60">
            <div className="container-fluid gx-0 mb-20">
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper {...gallery_swiper_options} modules={[Pagination, Autoplay,Navigation]} className="swiper-container tp-gallery-slide">
                                {gallery_images.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <div className="tp-gallery-item">
                                        <Image className="w-100" src={img} alt="gallery" />
                                    </div>
                                </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center tp-gallery-row-spacing mb-70">
                    <div className="col-lg-8">
                        <div className="tp-gallery-pagination-wrapper d-flex justify-content-between align-items-center">
                            <div className="tp-gallery-pagination"></div>
                            <div className="tp-gallery-btn tp-gallery-btn-3 d-flex align-items-center">
                                <div className="tp-gallery-button-prev pointer">
                                    <i className="fa-regular fa-arrow-left"></i>
                                </div>
                                <div className="tp-gallery-button-next pointer">
                                    <i className="fa-regular fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
