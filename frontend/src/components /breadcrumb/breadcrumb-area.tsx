
type IProps = {
    title?:string;
    subtitle?:string;
};
export default function BreadcrumbArea({subtitle='Our Luxurious Resort & Accommodations',title='Explore our Rooms'}:IProps) {
    return (
        <div className="tp-breadcrumb-area tp-breadcrumb-spacing bg-position" style={{ backgroundImage: 'url(/assets/img/breadcrumb/02.jpg)' }}>
            <div className="container p-relative">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-breadcrumb-title-wrap text-center">
                            <h5 className="tp-breadcrumb-title-pre wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.4s">{subtitle}</h5>
                            <h2 className="tp-breadcrumb-title wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.4s">{title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
