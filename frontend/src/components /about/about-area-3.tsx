import Image from "next/image"
import ab_img_1 from '@/assets/img/about/home3/01.jpg';
import ab_img_2 from '@/assets/img/about/home3/02.jpg';
import Link from "next/link";

export default function AboutAreaThree() {
    return (
        <div className="tp-about-area pt-140">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pb-40">
                        <div className="tp-about-3-content wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                            <h5 className="tp-section-three-title-pre">About Our Hotel</h5>
                            <h2 className="tp-section-three-title mb-15">See Life From A<br /> Different Perspective.</h2>
                            <p className="tp-about-3-para mb-40">In the morning, you can take a walk in the<br /> fresh air-filled forest or stroll through<br /> the herb garden.</p>
                            <div className="tp-about-3-btn">
                                <Link className="tp-btn-4" href="/about">Explore More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 pb-40">
                        <div className="tp-about-3-thumb-wrap p-relative">
                            <Image className="tp-about-3-thumb" data-parallax='{"y": -60, "smoothness": 20}' src={ab_img_1} alt="about" style={{height:'auto'}} />
                            <Image className="tp-about-3-thumb-2 d-none d-sm-block" data-parallax='{"y": 20, "smoothness": 20}' src={ab_img_2} alt="about" style={{height:'auto'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
