import Link from "next/link";
import { getHotelPackages } from "@/api/hotel";
import { formatPrice } from "@/lib/format-price";
import { getHotelPrice } from "@/utils/get-hotel-price";
import { UpArrow } from "../svg";


export default async function PricingPackageArea() {
    const hotelPackages = await getHotelPackages();
    return (
        <div className="tp-pricing-area pt-120 pb-140">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-pricing-title-box mb-40">
                            <span className="tp-room-info-subtitle mb-10">Pricing plan</span>
                            <h2 className="tp-room-info-title">Our Awesome Packages</h2>
                        </div>
                    </div>
                    {hotelPackages.map((item) => (
                        <div key={item.id} className="col-lg-12">
                            <div className="tp-pricing-wrapper tp-pricing-wrapper-2  mb-15 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                                <div className="row align-items-center">
                                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 pb-20">
                                        <div className="tp-pricing-title p-relative">
                                            <h5>{item.name}</h5>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6 pb-20">
                                        <div className="tp-pricing-price">
                                            <h3 className="tp-pricing-price-title">{formatPrice(getHotelPrice(item.highRate, item.lowRate))}</h3>
                                            <span>/ Per Night.</span>
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
                                            <Link className="tp-btn-square" href="/contact">Book Rooms
                                                <span className="ml-5">
                                                    {" "}<UpArrow />
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
    )
}
