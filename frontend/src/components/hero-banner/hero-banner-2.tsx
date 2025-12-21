import Image from "next/image";
import SearchTwo from "../search/search-two";
import bg_img from '@/assets/img/hero/home2/bg.png';
import man_img from '@/assets/img/hero/home2/man.png';
import woman_img from '@/assets/img/hero/home2/woman.png';


export default function HeroBannerTwo() {
    return (
        <div className="tp-hero-area p-relative z-index-1 pb-110">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-relative z-index-1">
                        <div className="tp-hero-two-wrap fix">
                            <div className="tp-hero-two-img p-relative">
                                <Image src={bg_img} alt="home2" style={{ height: 'auto' }} />
                                <div className="tp-hero-two-shap d-flex justify-content-between">
                                    <div className="tp-hero-two-shap-man">
                                        <Image src={man_img} alt="man" style={{ height: 'auto' }} />
                                    </div>
                                    <div className="tp-hero-two-shap-woman">
                                        <Image src={woman_img} alt="woman" style={{ height: 'auto' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tp-hero-birds-animetion">
                                <svg className="tp-hero-birds">
                                    <g className="svg-width">
                                        <path className="wings" d="M 5 10 Q 25 5 50 15 L 50 25 Q 25 10 5 10 M 95 10 Q 75 5 50 15 L 50 25 Q 75 10 95 10" />
                                    </g>
                                </svg>
                                <svg className="tp-hero-birds-2">
                                    <g>
                                        <path className="wings" d="M 5 10 Q 25 5 50 15 L 50 25 Q 25 10 5 10 M 95 10 Q 75 5 50 15 L 50 25 Q 75 10 95 10" />
                                    </g>
                                </svg>
                                <svg className="tp-hero-birds-3">
                                    <g>
                                        <path className="wings" d="M 5 10 Q 25 5 50 15 L 50 25 Q 25 10 5 10 M 95 10 Q 75 5 50 15 L 50 25 Q 75 10 95 10" />
                                    </g>
                                </svg>
                            </div>
                            <div className="tp-hero-two-title-wrap mb-30 text-center">
                                <h2 className="tp-hero-two-title">Travel Booking</h2>
                            </div>
                        </div>

                        {/* search area */}
                        <SearchTwo />
                        {/* search area */}

                    </div>
                </div>
            </div>
        </div>
    )
}
