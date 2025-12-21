import Image from "next/image";
import shape from '@/assets/img/breadcrumb/shape.png';

type IProps = {
    title:string;
    subtitle:string;
}
export default function BreadcrumbThree({title,subtitle}:IProps) {
    return (
        <div className="tp-breadcrumb-area tp-breadcrumb-spacing-2 p-relative">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="tp-breadcrumb-title-wrap text-center">
                            <h2 className="tp-breadcrumb-title-blog">{title}</h2>
                            <p className="tp-breadcrumb-para-blog">{subtitle}</p>
                            <div className="tp-breadcrumb-shape">
                                <Image src={shape} alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
