import Image from "next/image";
import { UpArrow } from "../svg";
import plain from "@/assets/img/cta/plain.png";
import Link from "next/link";


export default function CtaArea() {
    return (
        <div className="tp-cta-area pt-120 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pb-30">
                        <div className="tp-cta-title-wrap p-relative  wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                            <Image className="tp-cta-plane p-absolute d-none d-lg-block" src={plain} alt="plain"/>
                                <h5 className="tp-section-title-cta-pre mb-20">EXPLOR YOUR NEXT</h5>
                                <h2 className="tp-section-title-cta">Journey.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 pb-30">
                        <div className="tp-cta-content  wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
                            <p className="mb-30">Travel plans are Not Really an Instrument Themselves but a Delivery
                                Mechanism or Strategy for Other Mostly.</p>
                            <Link className="tp-btn-sm fs-15" href="/contact">Where to Next?
                                <UpArrow/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
