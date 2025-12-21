import Link from "next/link";
import { formatPrice } from "@/lib/format-price";
import { UpArrow } from "../svg";
import { getHotelPackages } from "@/api/hotel";
import { getHotelPrice } from "@/utils/get-hotel-price";


export default async function HotelPackagesArea() {
    const hotelPackages = await getHotelPackages();
    return (
        <div className="tp-pricing-area pt-120 mb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-section-title-wrapper">
                            <h6 className="tp-section-title-pre-red tp-section-title-pre wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">Our Room Prices</h6>
                            <h2 className="tp-section-title tp-section-title-small mb-50 wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">Our Awesome Packages</h2>
                        </div>
                    </div>

                    {hotelPackages.map((item, index) => (
                        <div key={item.id} className="col-lg-12 mb-15">
                            <div className={`tp-pricing-wrapper wow fadeInUp`} data-wow-delay={`${0.3 + index * 0.1}s`} data-wow-duration="1s">
                                <div className="row align-items-center">
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 pb-20">
                                        <div className="tp-pricing-title p-relative">
                                            <h5>{item.name}</h5>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6 pb-20">
                                        <div className="tp-pricing-price">
                                            <h3 className="tp-pricing-price-title">
                                              {formatPrice(getHotelPrice(item.highRate, item.lowRate))}
                                            </h3>
                                            <span>/ Per Night</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 pb-20">
                                        <div className="tp-pricing-service-list">
                                            <ul>
                                                {item.amenities?.slice(0, 2).map((amenity, idx) => (
                                                    <li key={idx}>{amenity.name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6 pb-20">
                                        <div className="tp-pricing-service-list">
                                            <ul>
                                                 <li>{item.beds} Bed Room</li>
                                                 <li> {item.adults} People in Room</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 pb-20">
                                        <div className="tp-pricing-btn-wrap text-right">
                                            <Link className={`tp-btn-square ${index===1?'tp-btn-square-red':''}`} href="/contact">
                                                Book Rooms
                                                <span className="ml-5">
                                                    {" "}<UpArrow/>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
