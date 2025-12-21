import { BenefitOneSvg, BenefitTwoSvg, BenefitThreeSvg } from "../svg";

export const benefitData = [
    {
        id: 1,
        icon: <BenefitOneSvg />,
        title: "Luxury<br> Retail Precinct",
        delay: ".3s",
    },
    {
        id: 2,
        icon: <BenefitTwoSvg />,
        title: "Rich Diversity of<br> Flora and Fauna",
        delay: ".4s",
    },
    {
        id: 3,
        icon: <BenefitThreeSvg />,
        title: "Focused on<br> Guest Comfort",
        delay: ".5s",
    },
];


export default function BenefitArea() {
    return (
        <div className="tp-banefit-area pt-110 pb-90">
            <div className="container">
                <div className="row">
                    {benefitData.map((benefit) => (
                        <div key={benefit.id} className="col-lg-4 col-md-6 pb-30">
                            <div
                                className="tp-banefit-content d-flex wow fadeInUp"
                                data-wow-delay={benefit.delay}
                                data-wow-duration="1s"
                            >
                                <div className="tp-banefit-icon">
                                    <span>{benefit.icon}</span>
                                </div>
                                <h4 className="tp-banefit-title" dangerouslySetInnerHTML={{__html: benefit.title}}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
