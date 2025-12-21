import { getAmenities } from "@/api/amenities";
import Image from "next/image";
import Link from "next/link";


export default async function AmenitiesArea() {
    const amenities = await getAmenities();
    return (
        <div className="tp-feature-area pt-90 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-feature-title-wrap mb-60 text-center">
                            <h2 className="tp-section-title m-0 animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s', animationDuration: '1s' }}>
                                Facilities
                            </h2>
                            <p className="tp-section-title-para animate__animated animate__fadeInUp" style={{ animationDelay: '0.5s', animationDuration: '1s' }}>
                                Enjoy the luxury of time and convenience!
                            </p>
                        </div>
                    </div>
                    {amenities.map((amenity,i) => (
                        <div key={amenity.id} className="col-lg-3 col-md-6 col-sm-6 mb-30 tp-feature-border">
                            <div className="tp-feature-wrapper text-center animate__animated animate__fadeInUp" style={{ animationDelay: `0.${i+1}s`, animationDuration: '1s' }}>
                                {amenity.image && <div className="tp-feature-thumb mb-15">
                                    <Image src={amenity.image} alt={amenity.name} width={174} height={174} />
                                </div>}
                                <div className="tp-feature-content">
                                    <h3 className="tp-feature-title">
                                        <Link href="/room-1">{amenity.name}</Link>
                                    </h3>
                                    <p>{amenity.instructions}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
