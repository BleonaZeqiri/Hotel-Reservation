import Link from "next/link";
import { formatPrice } from "@/lib/format-price";
import Ratings from "../common/ratings";
import { Bookmark } from "../svg";
import { getLuxuryHotel } from "@/api/hotel";
import { getHotelPrice } from "@/utils/get-hotel-price";


export default async function HotelOfferRoom() {
    const offerHotel = await getLuxuryHotel();
    return (
        <div className="tp-offer-room-area tp-offer-room-space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-offer-bg bg-position jarallax p-relative" data-background="/assets/img/room/bg-2.jpg" style={{backgroundImage: 'url(/assets/img/room/bg-2.jpg)'}}>
                            <div className="row justify-content-end">
                                <div className="col-xl-5 col-lg-6 col-md-7 col-sm-10 col-12">
                                    <div className="tp-offer-info-wrapper">
                                        <div className="tp-offer-title-wrap">
                                            <span className="tp-offer-title-pre">Exclusive Offer</span>
                                            <h2 className="tp-offer-title mb-20">When to Book for the Best Deals</h2>
                                        </div>
                                        <div className="tp-offer-rating-quantity mb-40 d-flex align-items-center">
                                            <div className="tp-offer-rating-wrap">
                                                <div className="tp-offer-rating-days">
                                                    <span>{offerHotel?.beds} Beds</span>
                                                    <span className="space">|</span>
                                                    <span>{offerHotel?.adults} Guest</span>
                                                </div>
                                                <div className="tp-offer-rating">
                                                    <Ratings initialRating={offerHotel?.propertyCategory} readonly={true} />
                                                </div>
                                            </div>
                                            <div className="tp-offer-price">
                                                <span>Only</span>
                                                <h6>{formatPrice(getHotelPrice(offerHotel?.highRate, offerHotel?.lowRate))}</h6>
                                            </div>
                                        </div>
                                        <span className="tp-offer-border mb-15"></span>
                                        <p className="tp-offer-para mb-35">{offerHotel?.shortDescription}</p>
                                        <div className="tp-offer-btn">
                                            <Link className="tp-btn-2 tp-btn-3" href="/contact">
                                                <span>
                                                    <Bookmark/>
                                                </span>
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
