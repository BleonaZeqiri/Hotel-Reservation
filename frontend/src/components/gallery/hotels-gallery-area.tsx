import Link from "next/link";
import { GalleryLogo } from "../svg";
import GallerySlider from "./gallery-slider";


export default function HotelsGalleryArea() {
    return (
        <div className="tp-gallery-area tp-bg-gray fix pb-100">
            <div className="container-fluid gx-0 mb-20">
                <div className="row">
                    <div className="col-lg-12">
                        {/* gallery slider */}
                        <GallerySlider />
                        {/* gallery slider */}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center mb-70">
                    <div className="col-lg-8">
                        <div className="tp-gallery-pagination-wrapper d-flex justify-content-between align-items-center">
                            <div className="tp-gallery-pagination"></div>
                            <div className="tp-gallery-btn d-flex align-items-center">
                                <div className="tp-gallery-button-prev pointer">
                                    <i className="fa-light fa-angle-left"></i>
                                </div>
                                <div className="tp-gallery-button-next pointer">
                                    <i className="fa-light fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-3">
                        <div className="tp-gallery-logo">
                            <span>
                                <GalleryLogo />
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-9 col-sm-9">
                        <div className="tp-gallery-content">
                            <h2 className="tp-gallery-title mb-25">Planning a Dream Vacation or a Spontaneous Weekend Getaway?</h2>
                            <p className="mb-40">In the era of endless possibilities, travel enthusiasts embark on journeys to explore new horizons. A crucial aspect of any travel plan is finding the perfect accommodation, and in this blog post, we will delve into the art of seamless hotel booking. Whether you are a seasoned traveler or a first-timer, these tips will ensure your hotel booking experience is smooth and rewarding.</p>
                            <Link className="tp-gallery-view" href="/pricing-plan"><span>View Prices</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
