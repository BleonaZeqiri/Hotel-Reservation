import { Bathroom, BedsFour, SqFtTwo, UserThree } from "@/components/svg";
import { IHotelRoom } from "@/types/hotel-d-t";

type IProps = {
    hotelRoom: IHotelRoom
};
export default function RoomDetailsThreeBreadcrumb({hotelRoom}:IProps) {
    return (
        <div className="tp-room-details-area pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-room-info-wrap mb-50">
                            <span className="tp-room-info-subtitle-2">
                                <i className="fa-sharp fa-solid fa-star-sharp"></i> 
                                Minimalist Room
                            </span>
                            <h2 className="tp-room-info-title-2 mb-15">Forn Gully Bungalow</h2>
                            <div className="tp-room-info tp-room-info-2">
                                <ul>
                                    <li>
                                        <span className="tp-room-info-icon tp-room-info-border">
                                            <SqFtTwo />
                                        </span>
                                        <span className="tp-room-info-text">{hotelRoom.sqFt} sq ft</span>
                                    </li>
                                    <li>
                                        <span className="tp-room-info-icon tp-room-info-border">
                                            <UserThree />
                                        </span>
                                        <span className="tp-room-info-text">4 People</span>
                                    </li>
                                    <li>
                                        <span className="tp-room-info-icon tp-room-info-border">
                                            <BedsFour />
                                        </span>
                                        <span className="tp-room-info-text">2 Beds</span>
                                    </li>
                                    <li>
                                        <span className="tp-room-info-icon tp-room-info-border">
                                            <Bathroom />
                                        </span>
                                        <span className="tp-room-info-text">2 Bathrooms</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
