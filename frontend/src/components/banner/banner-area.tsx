import Image from "next/image";
import { UpArrow } from "../svg";
import banner_img from '@/assets/img/banner/01.png';
import Link from "next/link";


const bannerData = [
    {
        id: 1,
        image: "/assets/img/banner/02.png",
        titlePre: "Get Up To",
        title: "50% off",
        buttonText: "Learn More",
        buttonClass: "tp-btn-banner-white",
        delay: ".5s"
    },
    {
        id: 2,
        image: "/assets/img/banner/03.png",
        titlePre: "Up to 35% off",
        title: "Big Deals",
        buttonText: "View Deals",
        buttonClass: "",
        delay: ".6s"
    }
];

export default function BannerArea() {
    return (
        <div className="tp-banner-area pb-75">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-banner-thumb tp-banner-box p-relative mb-25  wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                            <div className="tp-banner-thumb-inner">
                                <Image className="w-100" src={banner_img} alt="banner" />
                            </div>
                            <div className="tp-banner-content">
                                <h5 className="tp-banner-title-pre">Time to Explore</h5>
                                <h2 className="tp-banner-title mb-25">The Best Travel</h2>
                                <h4 className="tp-banner-offer mb-45">Get up to <span className="p-relative">50%
                                    <svg width="52" height="7" viewBox="0 0 52 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M50.7129 6.69289C51.0956 6.85143 51.5343 6.66973 51.6929 6.28706C51.8514 5.90439 51.6697 5.46565 51.2871 5.30711L50.7129 6.69289ZM1.30577 6.16118C8.98516 2.73243 29.7128 -2.00744 50.7129 6.69289L51.2871 5.30711C29.818 -3.58748 8.6527 1.23814 0.694228 4.7915L1.30577 6.16118Z" fill="#B7124D" />
                                    </svg>
                                </span> off</h4>
                                <Link className="tp-btn-square tp-btn-banner" href="/offer">View Deals
                                    <span className="ml-5">
                                        <UpArrow />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            {bannerData.map((banner) => (
                                <div className="col-12" key={banner.id}>
                                    <div
                                        className={`tp-banner-thumb-${banner.id + 1} tp-banner-box mb-25 p-relative wow fadeInUp`}
                                        data-wow-delay={banner.delay}
                                        data-wow-duration="1s"
                                    >
                                        <div className="tp-banner-thumb-inner">
                                            <Image className="w-100" src={banner.image} alt="banner" width={588} height={237} />
                                        </div>
                                        <div className="tp-banner-content">
                                            <h5 className="tp-banner-title-pre tp-banner-title-pre-2">{banner.titlePre}</h5>
                                            <h2 className="tp-banner-title fs-40 mb-25">
                                                {banner.title}
                                            </h2>
                                            <a className={`tp-btn-square tp-btn-banner ${banner.buttonClass}`} href={`/offer`}>
                                                {banner.buttonText}
                                                <span className="ml-5">
                                                    <UpArrow />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

