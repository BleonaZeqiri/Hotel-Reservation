'use client'
import { SunLight, SunLightSm } from "../svg";
import Marquee from "react-fast-marquee";


const slider_text = [
    "Elegan",
    "Relaxing",
    "Comfort",
    "Experiences",
    "Beautiful",
    "Modern",
    "Classic",
    "Elegan",
    "Relaxing",
    "Comfort",
    "Experiences",
    "Beautiful",
    "Modern",
    "Classic",
]
type Props = {
    cls?: string;
    content_2?:boolean;
}
export default function TextSliderArea({cls='',content_2}: Props) {
    return (
        <div className={`tp-text-slider tp-falured-bg ${cls}`}>
            <div className="swiper-container tp-brand-active-2">
                <Marquee className="swiper-wrapper slide-transtion">
                    {slider_text.map((text, index) => (
                        <div key={index} className="swiper-slide">
                            <div className={`tp-text-slider-content ${content_2 ? 'tp-text-slider-content-2' : ''}`}>
                                <h4 className="tp-text-slider-title">{text}
                                    {content_2 ? <SunLightSm /> : <SunLight />} {" "}
                                </h4>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}
