import Image from "next/image";
import ab_thumb from '@/assets/img/about/hotel/thumb.jpg';

export default function AboutAreaFive() {
    return (
        <div className="tp-about-area pt-120 mb-120">
            <div className="container">
                <div className="tp-about-hotel-border">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="tp-about-hotel-thumb">
                                <Image className="w-100" src={ab_thumb} alt="thumb" style={{height:'auto'}} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-about-hotel-content">
                                <div className="tp-about-title-box mb-35">
                                    <span className="tp-about-hotel-subtitle">About Our Hotel</span>
                                    <h2 className="tp-about-hotel-title mb-15">See Life From A<br /> Different Perspective.</h2>
                                    <p>In the morning, you can take a walk in the<br />
                                        fresh air-filled forest or stroll through<br />
                                        the herb garden.</p>
                                </div>
                                <div className="tp-about-hotel-feature mb-35">
                                    <ul>
                                        <li>
                                            <i className="fa-sharp fa-solid fa-check"></i>
                                            <span>Dall-E, GPT or Ada</span>
                                        </li>
                                        <li>
                                            <i className="fa-sharp fa-solid fa-check"></i>
                                            <span>Unlimited Generation</span>
                                        </li>
                                        <li>
                                            <i className="fa-sharp fa-solid fa-check"></i>
                                            <span>Multilingual</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tp-about-hotel-btn">
                                    <a className="tp-btn-4" href="#">Why We are Different</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
