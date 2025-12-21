import Image from "next/image";
import { CSSProperties } from "react";
import SearchFour from "../search/search-four";
import hero_img_1 from '@/assets/img/hero/hero-4/img-1.jpg';
import hero_img_2 from '@/assets/img/hero/hero-4/img-2.jpg';
import hero_img_3 from '@/assets/img/hero/hero-4/img-3.jpg';
import shape from '@/assets/img/hero/hero-4/shape.png';
import vector from '@/assets/img/hero/hero-4/vector.png';

const imgStyle:CSSProperties = {
    height:'auto'
}
export default function HeroBannerFour() {
    return (
        <div className="tp-hero-area pt-110 mb-45">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-xl-9 col-lg-9">
                        <div className="tp-hero-four-content mb-55">
                            <h2 className="tp-hero-four-title mb-20 wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.4s">Find Your<br /> <span>Favorite</span> place<br /> here!</h2>
                            <p className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.4s">World-class art, ravishing food and pubs<br /> older than certain countries.</p>
                        </div>
                        <div className="tp-hero-four-date-form">
                            <div className="tp-hero-search-form tp-hero-four-search-form">
                                <SearchFour />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-3 col-lg-3">
                        <div className="tp-hero-four-right">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <div className="tp-hero-four-thumb-wrap mb-40">
                                        <div className="tp-hero-four-thumb-img mb-25 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                            <Image className="w-100" src={hero_img_1} alt="hero-img" style={imgStyle} />
                                        </div>
                                        <div className="tp-hero-four-thumb-img-2 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                            <Image className="w-100" src={hero_img_3} alt="hero-img" style={imgStyle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <div className="tp-hero-four-thumb-wrap-2 mb-40 text-center">
                                        <div className="tp-about-top-logo mb-30 p-relative">
                                            <Image className="rotate-infinite-2" src={shape} alt="shape" />
                                            <Image className="shape" src={vector} alt="vector" />
                                        </div>
                                        <div className="tp-hero-four-thumb-img-3 mb-25 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                            <Image className="w-100" src={hero_img_2} alt="hero-img" style={imgStyle} />
                                        </div>
                                        <div className="tp-hero-four-btn">
                                            <a href="#">Best Packages</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
