import Image from "next/image";
import shape from '@/assets/img/about/about-4/shape.png';
import brand from '@/assets/img/about/about-4/brand.png';
import ab_img from '@/assets/img/about/about-4/bg.jpg';
import ab_img_2 from '@/assets/img/about/about-4/thumb.jpg';
import rotate_shape from '@/assets/img/about/about-4/yers.png';
import shape_2 from '@/assets/img/about/about-4/shape-2.png';
import user_img from '@/assets/img/about/about-4/user.png';

export default function AboutAreaFour() {
    return (
        <>
            <div className="tp-about-top-area fix pt-125">
                <div className="container">
                    <div className="tp-about-top-inner pb-60">
                        <div className="row align-items-end">
                            <div className="col-lg-8">
                                <div className="tp-about-top-content mb-50">
                                    <h6 className="tp-about-top-subtitle"><span></span> About us</h6>
                                    <h2 className="tp-about-top-title">Where nature, comfort, and tradition meet  <span>in harmony.</span></h2>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="tp-about-top-logo-content">
                                    <div className="tp-about-top-logo mb-30 p-relative">
                                        <Image className="rotate-infinite-2" src={shape} alt="shape" />
                                        <Image className="shape" src={brand} alt="brand" />
                                    </div>
                                    <p>
                
                                         Prevalla Hotel welcomes you with comfort inspired by nature.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="tp-about-big-thumb jarallax fix p-relative">
                <Image className="w-100 jarallax-img" src={ab_img} alt="thumb" style={{ height: 'auto' }} />
            </div>
           
            <div className="tp-about-area pt-115 fix pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-10">
                            <div className="tp-about-top-content mb-70">
                                <h6 className="tp-about-top-subtitle"><span></span> About us</h6>
                                <h2 className="tp-about-top-title tp-about-top-title-2">A mountain escape where <span>serenity <br /> feels</span> like home.</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 d-none d-lg-block">
                            <div className="tp-about-4-shape mb-70 text-right">
                                <Image src={shape_2} alt="shape" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="tp-about-4-thumb p-relative mb-40">
                                <Image className="w-100" src={ab_img_2} alt="thumb" style={{ height: 'auto' }} />
                                <div className="tp-about-4-expreance">
                                    <div className="p-relative">
                                        <Image className="rotate-infinite" src={rotate_shape} alt="year" />
                                        <div className="tp-about-4-expreance-content text-center">
                                            <span className="year d-block mb-10">
                                                25
                                            </span>
                                            <span className="tp-about-4-expreance-year">Years of<br />  Experience</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-about-4-content mb-40">
                                <p className="mb-90">Prevalla Hotel is designed for those who appreciate simplicity, authenticity, and comfort. From cozy interiors to panoramic views, every detail reflects the natural beauty and peaceful rhythm of life in Prevalla.<br /></p>
                                <div className="tp-about-4-client-wrap">
                                    <div className="tp-about-4-client-img mb-10">
                                        <Image src={user_img} alt="user" />
                                    </div>
                                    <div className="tp-about-4-client-review mb-10">
                                        <p><span>3256+</span><br /> Client-Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
