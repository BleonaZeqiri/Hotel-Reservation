import { IHotelRoom } from "@/types/hotel-d-t";
import { formatPrice } from "@/lib/format-price";
import { getHotelPrice } from "@/utils/get-hotel-price";
import { Bathroom, BedsFour, SqFtTwo, UserThree } from "@/components/svg";
import RoomDetailsAmenities from "../room-details-1/room-details-amenities";
import RoomDetailsReviewLists from "./room-details-review-lists";
import RoomDetailsWriteReviewArea from "./room-details-write-review-area";
import RoomDetailsTwoBookingArea from "./room-details-2-booking-area";

type IProps = {
    hotelRoom: IHotelRoom
};
export default function RoomDetailsTwoArea({ hotelRoom }: IProps) {
  return (
    <div id="booking" className="tp-room-details-area pb-70">
    <div className="container">
       <div className="row">
          <div className="col-lg-8 order-1 order-lg-0">
             <div className="tp-room-details-left">
                <div className="tp-room-info-wrap tp-room-info-space">
                   <span className="tp-room-info-subtitle mb-10">{hotelRoom?.category}</span>
                   <h2 className="tp-room-info-title mb-15">{hotelRoom?.name}</h2>
                   <p className="mb-30">Describe the different types of rooms available, such as standard rooms, suites, and villas.</p>
                   <div className="tp-room-info">
                      <ul>
                         <li>
                            <span className="tp-room-info-icon tp-room-info-border">
                               <SqFtTwo/>
                            </span>
                            <span className="tp-room-info-text">{hotelRoom?.sqFt} sq ft</span>
                         </li>
                         <li>
                            <span className="tp-room-info-icon tp-room-info-border">
                               <UserThree/>
                            </span>
                            <span className="tp-room-info-text">{hotelRoom?.adults} People</span>
                         </li>
                         <li>
                            <span className="tp-room-info-icon tp-room-info-border">
                               <BedsFour/>
                            </span>
                            <span className="tp-room-info-text">{hotelRoom?.beds} Beds</span>
                         </li>
                         <li>
                            <span className="tp-room-info-icon tp-room-info-border">
                               <Bathroom/>
                            </span>
                            <span className="tp-room-info-text">{hotelRoom?.bathrooms} Bathrooms</span>
                         </li>
                      </ul>
                   </div>
                </div>
                <div className="tp-room-about-content mb-25">
                   <h2 className="tp-room-details-title mb-20">About This Room</h2>
                   <p className="mb-30">A good resort description should be clear, concise, and engaging, capturing the attention of potential guests and giving them a sense of what it would be like to stay at the resort. It should also be informative, providing guests with the information they need to make an informed decision
                      about booking their stay suites, and villas.</p>
                   <div className="tp-room-details-toggle-btn">
                      <div id="show-more-content" className="tp-room-details-toggle">
                         <div className="tp-room-about-feature mb-45">
                            <h2 className="tp-room-details-title mb-20">Check In:</h2>
                            <ul>
                               <li><span></span>The minimum age requirement for check-in is 18 years old.</li>
                               <li><span></span>Check-in time starts from 9:00 AM and is open anytime for guests.</li>
                               <li><span></span>Early check-in is subject to availability and can be requested by guests.</li>
                            </ul>
                         </div>
                         <div className="tp-room-about-feature mb-45">
                            <h2 className="tp-room-details-title mb-20">Check Out:</h2>
                            <ul>
                               <li><span></span>Check-out before noon.</li>
                               <li><span></span>Express check-out.</li>
                            </ul>
                         </div>
                         <div className="tp-room-about-feature mb-45">
                            <h2 className="tp-room-details-title mb-20">Children and Extra Beds:</h2>
                            <ul>
                               <li><span></span>Children are welcome to stay at the resort.</li>
                               <li><span></span>Kids stay for free when using existing bedding, but may not receive a complimentary breakfast.</li>
                               <li><span></span>Rollaway/extra beds are available for $40 per day.</li>
                            </ul>
                         </div>
                      </div>
                      <button id="show-more" className="tp-btn-square mb-40">Read More</button>
                   </div>
                </div>

                {/* amenities area start */}
                <RoomDetailsAmenities amenities={hotelRoom?.amenities} />
                {/* amenities area end */}

                <div className="tp-room-about-feature mb-35">
                   <h2 className="tp-room-details-title mb-20">House Rules</h2>
                   <ul>
                      <li><span></span> Check-in time is 3:00 PM; check-out time is 11:00 AM.</li>
                      <li><span></span>No smoking allowed inside the room. Designated smoking areas are available outside.</li>
                      <li><span></span>Please conserve water and electricity by turning off lights and appliances when not in use.</li>
                      <li><span></span>Guests are responsible for locking the doors and securing their belongings.</li>
                      <li><span></span>Room keys must be returned at check-out. Lost keys incur a replacement fee.</li>
                   </ul>
                </div>

                {/* room review area start */}
                {/* room review area end */}

                {/* review list area start */}
                <RoomDetailsReviewLists hotelId={hotelRoom?.id}/>
                {/* review list area end */}

                {/* review form area start */}
                <RoomDetailsWriteReviewArea hotelId={hotelRoom?.id}/>
                {/* review form area end */}

             </div>
          </div>

          <div className="col-lg-4 order-0 order-lg-1">
             {/* booking area start */}
             <RoomDetailsTwoBookingArea price={formatPrice(getHotelPrice(hotelRoom?.lowRate, hotelRoom?.highRate))}/>
             {/* booking area end */}
          </div>
       </div>
    </div>
 </div>
  )
}
