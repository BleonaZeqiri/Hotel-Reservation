import Image from 'next/image';
import BirdAnimation from '../common/bird-animation';
import { AppleSvg, PlayStoreSvg } from '../svg';
import shape_img from '@/assets/img/connected/shape.png';
import rainbox from '@/assets/img/adventures/rainbox.png';

export default function ConnectedArea() {
    return (
        <div className="tp-connected-area fix p-relative pt-90 pb-60 bg-position" style={{ backgroundImage: 'url(/assets/img/connected/bg.jpg)'}}>
            <div className="tp-about-svg-animetion">
                <BirdAnimation />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-7 mb-30">
                        <div className="tp-connected-thumb text-right mr-15  wow fadeInLeft" data-wow-delay=".4s" data-wow-duration="1s">
                            <Image src={shape_img} alt="shape" style={{height:"auto"}} />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5 mb-30">
                        <div className="tp-connected-content-wrap ml-40 pt-30  wow fadeInRight" data-wow-delay=".4s" data-wow-duration="1s">
                            <div className="tp-connected-title-wrap mb-40 mr-145">
                                <h5 className="tp-section-title-two-pre mb-10">Get Connected</h5>
                                <h2 className="tp-section-title-two fs-40 lh-115 mb-20">Everything you<br /> need  is just a tap<br /> away <Image src={rainbox} alt="rainbox" /></h2>
                                <p className="tp-adventures-para">From fresh towels to late checkout,<br /> our app puts you in control. Your stay,<br /> your way.</p>
                            </div>
                            <div className="tp-connected-app-store d-flex align-items-center">
                                <div className="tp-connected-app-border mb-15 mr-15">
                                    <a href="#">
                                        <div className="tp-connected-app-item d-flex align-items-center">
                                            <span>
                                                <AppleSvg />
                                            </span>
                                            <div className="tp-connected-content pl-10">
                                                <p>Download on the</p>
                                                <h6 className="tp-connected-app-title">App Store</h6>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="tp-connected-app-border mb-15">
                                    <a href="#">
                                        <div className="tp-connected-app-item tp-connected-app-white d-flex align-items-center">
                                            <span>
                                                <PlayStoreSvg />
                                            </span>
                                            <div className="tp-connected-content pl-10">
                                                <p>Download on the</p>
                                                <h6 className="tp-connected-app-title">App Store</h6>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
