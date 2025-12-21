'use client'
import Image from "next/image";
import hero_and_img from '@/assets/img/hero/home3/and.png';
import { DownArrow } from "../svg";




export default function HeroBannerThree() {
    return (
        <div>
            <div className="tp-hero-area tp-hero-3-spacing tp-hero-video-overly p-relative">
                <div className="tp-hero-video-wrap">
                    <div style={{ backgroundImage: `url(/assets/img/hero/home3/bg.jpg)` }} className="tp-hero-five-video youtube-bg" data-property="{videoURL:'hNN9Q3GuWEM',}">
                        {/* <YouTube
                            videoId="hNN9Q3GuWEM"
                            opts={videoOptions}
                        /> */}
                    </div>
                </div>
                <div className="container p-relative">
                    <div className="row">
                        <div className="col-lg-9 mb-35">
                            <div className="tp-hero-3-title-wrap">
                                <h5 className="tp-hero-3-title-pre wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.1s">Unique Historical Charm</h5>
                                <h2 className="tp-hero-3-title wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">The Exclusive Hotel <br /> <Image src={hero_and_img} alt="and" /> <span>Apartments!</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="tp-hero-mouse-scrool d-none d-sm-block text-right">
                        <a id="booking" className="tp-hero-mouse-btn" href="#booking-2">
                            <DownArrow />
                        </a>
                    </div>
                </div>
            </div>
            <div className="tp-hero-discount-wrap tp-yellow-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-hero-discount-content text-center">
                                <p>Book your summer stay with us on our website and <a href="#">Get 20% Off</a> if you book 2 nights or more! Valid from 1st May to 1st August.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
