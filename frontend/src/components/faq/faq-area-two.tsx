import {accordionData} from "@/data/faq-data";
import FaqItem from "./faq-item";


export default function FaqAreaTwo() {
    return (
        <div className="tp-faq-area tp-bg-gray-4 pt-110 pb-115">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="tp-faq-title-box text-center mb-50">
                            <h2 className="tp-room-info-title">Have A Question ?</h2>
                        </div>
                        <div className="tp-faq-wrapper tp-faq-wrapper-2">
                            <div className="accordion" id="general_faqaccordion">
                                {accordionData.map((item) => (
                                    <FaqItem key={item.id} item={item} style_2={true} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
