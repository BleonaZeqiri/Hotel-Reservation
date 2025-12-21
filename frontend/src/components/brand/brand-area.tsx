'use client';
import Image from "next/image";
import Marquee from "react-fast-marquee";
import brand_1 from '@/assets/img/brands/01.png';
import brand_2 from '@/assets/img/brands/02.png';
import brand_3 from '@/assets/img/brands/03.png';
import brand_4 from '@/assets/img/brands/04.png';
import brand_5 from '@/assets/img/brands/05.png';

const brand_images = [
    brand_1, brand_2, brand_3, brand_4, brand_5,
    brand_1, brand_2, brand_3, brand_4, brand_5
];

type IProps = {
    cls?: string;
}
export default function BrandArea({cls='tp-brand-border'}: IProps) {
    return (
        <div className={`tp-brand-area ${cls}`}>
            <div className="swiper-container tp-brand-active">
                <Marquee className="swiper-wrapper slide-transtion">
                    {brand_images.map((brand, index) => (
                        <div key={index} className="swiper-slide">
                            <div className="tp-brand-item">
                                <a href="#"><Image src={brand} alt="brands" /></a>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}
