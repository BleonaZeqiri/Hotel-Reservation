import Image from "next/image";
import shape from '@/assets/img/breadcrumb/shape-2.png';


type IProps = {
    subtitle: string;
    title: string;
    text?: string;
}


export default function BreadcrumbSix({subtitle,title,text='Get interactive lessons and expert feedback in a supportive community.'}:IProps) {
    return (
        <div className="tp-breadcrumb-area pt-75 pb-20 bg-position" data-background="assets/img/breadcrumb/bg.png" style={{backgroundImage: 'url(/assets/img/breadcrumb/bg.png)'}}>
            <div className="container p-relative">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="tp-breadcrumb-title-wrap mb-40">
                            <h5 className="tp-breadcrumb-faq-title-pre">{title}</h5>
                            <h2 className="tp-breadcrumb-faq-title mb-20">{subtitle}</h2>
                            <p className="tp-breadcrumb-faq-text">{text}</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-breadcrumb-faq-thumb mb-40">
                            <Image src={shape} alt="shape" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
