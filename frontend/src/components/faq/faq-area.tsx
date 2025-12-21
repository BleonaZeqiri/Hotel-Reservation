import FaqItem from "./faq-item";
import faq_img from '@/assets/img/faq/01.png';
import Image from "next/image";
import {accordionData} from "@/data/faq-data";



export default function FaqArea() {
    return (
        <div className="tp-faq-area fix pt-140 pb-85">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-room-title-wra mb-20 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                            <h5 className="tp-section-three-title-pre">Frequently Asked Questions</h5>
                            <h2 className="tp-section-three-title mb-15">Beyond Lodging A Symphony<br /> Of Experiences</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 pb-30">
                        <div className="tp-faq-thumb pt-75 wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="1s">
                            <Image src={faq_img} alt="faq" style={{height:'auto'}} />
                        </div>
                    </div>
                    <div className="col-lg-7 pb-30">
                        <div className="tp-faq-wrapper wow fadeInRight" data-wow-delay=".3s" data-wow-duration="1s">
                            <div className="accordion" id="general_faqaccordion">
                                {accordionData.map((item) => (
                                    <FaqItem key={item.id} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
