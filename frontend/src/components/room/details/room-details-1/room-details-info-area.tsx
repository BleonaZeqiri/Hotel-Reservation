import { Bathroom, BedsFour, EarlyChecking, KidsPlay, MealsAndSneaks, PrivateParking, SqFtTwo, UserThree } from "@/components/svg";
import { formatPrice } from "@/lib/format-price";
import { IHotelRoom } from "@/types/hotel-d-t";
import { getHotelPrice } from "@/utils/get-hotel-price";

type IProps = {
    hotelInfo:IHotelRoom
}
export default function RoomDetailsInfoArea({hotelInfo}:IProps) {
    return (
        <div className="tp-room-details-info-wrap  box-bg mb-35">
            <div className="tp-room-type-attributes">
                <h3 className="tp-room-details-info-title mb-25">Information</h3>
                <div className="row row-cols-2 tp-gx-15 mb-5">
                    <div className="col">
                        <div className="tp-room-type-capacity mb-20">
                            <div className="tp-room-type-icon">
                                <span>
                                    <SqFtTwo/>
                                </span>
                            </div>
                            <h5 className="tp-room-type-title">{hotelInfo.sqFt} sq ft</h5>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tp-room-type-capacity mb-20">
                            <div className="tp-room-type-icon">
                                <span>
                                    <UserThree/>
                                </span>
                            </div>
                            <h5 className="tp-room-type-title">{hotelInfo.adults} People</h5>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tp-room-type-capacity mb-20">
                            <div className="tp-room-type-icon">
                                <span>
                                    <BedsFour/>
                                </span>
                            </div>
                            <h5 className="tp-room-type-title">{hotelInfo.beds} Beds</h5>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tp-room-type-capacity mb-20">
                            <div className="tp-room-type-icon">
                                <span>
                                    <Bathroom/>
                                </span>
                            </div>
                            <h5 className="tp-room-type-title">{hotelInfo.bathrooms} Bathrooms</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-room-regular-price-wrap mb-30 tp-room-regular-price-border d-flex justify-content-between">
                <span className="tp-room-regular-price-title">Per Night:</span>
                <span className="tp-room-regular-price">
                    {formatPrice(getHotelPrice(hotelInfo.highRate, hotelInfo.lowRate))}
                </span>
            </div>
            <div className="tp-room-extra-services mb-40">
                <h3 className="tp-room-details-info-title mb-30">Extra Services</h3>
                <ul>
                    <li>
                        <span>
                            <KidsPlay/>
                        </span>
                        Kids Play Area
                    </li>
                    <li>
                        <span>
                            <PrivateParking/>
                        </span>
                        Free Private Parking
                    </li>
                    <li>
                        <span>
                            <MealsAndSneaks/>
                        </span>
                        Delicious Meals & Snacks
                    </li>
                    <li>
                        <span>
                            <EarlyChecking/>
                        </span>
                        Free Early Check in
                    </li>
                </ul>
            </div>
        </div>
    )
}
