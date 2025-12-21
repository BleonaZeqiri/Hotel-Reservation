import { DotsSvg } from '@/components/svg';

export default function PostboxMoreNavigation() {
    return (
        <div className="tp-postbox-more-navigation mb-45">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-5">
                    <div className="tp-postbox-more-left tp-postbox-more-left-2">
                        <div className="tp-postbox-more-icon">
                            <a href="#"><i className="fa-regular fa-angle-left mr-5"></i>PREVIOUS</a>
                        </div>
                        <div className="tp-postbox-more-content">
                            <h4 className="tp-postbox-more-title"><a href="#">Make you love and hate Education.</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2">
                    <div className="tp-postbox-more-middle text-center">
                        <a href="#">
                            <DotsSvg />
                        </a>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5">
                    <div className="tp-postbox-more-right">
                        <div className="tp-postbox-more-icon">
                            <a href="#">NEXT <i className="fa-regular fa-angle-right"></i></a>
                        </div>
                        <div className="tp-postbox-more-content">
                            <h4 className="tp-postbox-more-title"><a href="#">The definition of synchronous Learning.</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
