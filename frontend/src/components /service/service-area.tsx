import Image from "next/image";
import Link from "next/link";


const serviceData = [
    {
        id: 1,
        title: "Meditation",
        description: "We are pleased to inform you that our hotel apartment features a luxurious spa,…",
        image: "/assets/img/service/service3/01.jpg",
    },
    {
        id: 2,
        title: "Spa & Wellness",
        description: "We are pleased to inform you that our hotel apartment features a luxurious spa,…",
        image: "/assets/img/service/service3/02.jpg",
    },
    {
        id: 3,
        title: "Summer Terrace",
        description: "We are pleased to inform you that our hotel apartment features a luxurious spa,…",
        image: "/assets/img/service/service3/03.jpg",
    }
];

export default function ServiceArea() {
    return (
        <div className="tp-service-area mb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-room-title-wra text-center mb-50 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                            <h5 className="tp-section-three-title-pre">Exceptional Services</h5>
                            <h2 className="tp-section-three-title mb-15">Amenities & Experiences</h2>
                        </div>
                    </div>

                    {serviceData.map((service, index) => (
                        <div className="col-lg-4 col-md-6 mb-30" key={index}>
                            <div className="tp-service-3-wrap p-relative">
                                <div className="tp-service-3-thumb">
                                    <Image className="w-100" src={service.image} alt="service" width={384} height={500} style={{height:'auto'}} />
                                </div>
                                <div className="tp-service-3-content text-center">
                                    <h3 className="tp-service-3-title">
                                        <Link href="/room-1">{service.title}</Link>
                                    </h3>
                                    <div className="tp-service-3-para pt-10">
                                        <p>{service.description}</p>
                                        <Link className="tp-btn-4" href="/room-1">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}
