import { IHotelRoom } from "@/types/hotel-d-t";
import { formatPrice } from "@/lib/format-price";
import { getHotelPrice } from "@/utils/get-hotel-price";
import RoomDetailsThreeBookingArea from "./room-details-3-booking-area";
import RoomDetailsAmenities from "../room-details-1/room-details-amenities";
// import RoomDetailsReviewLists from "../room-details-2/room-details-review-lists";
import RoomDetailsWriteReviewArea from "../room-details-2/room-details-write-review-area";

type IProps = {
   hotelInfo: IHotelRoom
};

export default function RoomDetailsThreeInfoArea({hotelInfo}: IProps) {
   return (
      <div className="tp-room-about-more-info pb-70">
         <div className="container">
            <div className="row">
               <div className="col-lg-8 order-1 order-lg-0">
                  <div className="tp-room-details-left-2">
                     <div className="tp-room-about-content tp-room-about-content-2 mb-25">
                        <h2 className="tp-room-details-title-2 mb-20">{hotelInfo?.name}</h2>
                        <p className="mb-30">A good resort description should be clear, concise, and engaging, capturing the attention of potential guests and giving them a sense of what it would be like to stay at the resort. It should also be informative, providing guests with the information they need to make an informed decision
                           about booking their stay suites, and villas.</p>
                        <div className="tp-room-details-toggle-btn tp-room-details-toggle-btn-2">
                           <div id="show-more-content" className="tp-room-details-toggle">
                              <div className="tp-room-about-feature tp-room-about-feature-2 mb-45">
                                 <h2 className="tp-room-details-title-2 mb-20">Check In:</h2>
                                 <ul>
                                    <li><span></span>The minimum age requirement for check-in is 18 years old.</li>
                                    <li><span></span>Check-in time starts from 9:00 AM and is open anytime for guests.</li>
                                    <li><span></span>Early check-in is subject to availability and can be requested by guests.</li>
                                 </ul>
                              </div>
                              <div className="tp-room-about-feature tp-room-about-feature-2 mb-45">
                                 <h2 className="tp-room-details-title-2 mb-20">Check Out:</h2>
                                 <ul>
                                    <li><span></span>Check-out before noon.</li>
                                    <li><span></span>Express check-out.</li>
                                 </ul>
                              </div>
                              <div className="tp-room-about-feature tp-room-about-feature-2 mb-45">
                                 <h2 className="tp-room-details-title-2 mb-20">Children and Extra Beds:</h2>
                                 <ul>
                                    <li><span></span>Children are welcome to stay at the resort.</li>
                                    <li><span></span>Kids stay for free when using existing bedding, but may not receive a complimentary breakfast.</li>
                                    <li><span></span>Rollaway/extra beds are available for $40 per day.</li>
                                 </ul>
                              </div>
                           </div>
                           <button id="show-more" className="tp-btn-4 mb-40">Read More</button>
                        </div>
                     </div>


                     {/* amenities area start */}
                     <RoomDetailsAmenities amenities={hotelInfo?.amenities} top_cls="tp-room-about-amenities-2" />
                     {/* amenities area end */}

                     <div className="tp-room-about-feature tp-room-about-feature-2 mb-35">
                        <h2 className="tp-room-details-title-2 mb-20">House Rules</h2>
                        <ul>
                           <li><span></span> Check-in time is 3:00 PM; check-out time is 11:00 AM.</li>
                           <li><span></span>No smoking allowed inside the room. Designated smoking areas are available outside.</li>
                           <li><span></span>Please conserve water and electricity by turning off lights and appliances when not in use.</li>
                           <li><span></span>Guests are responsible for locking the doors and securing their belongings.</li>
                           <li><span></span>Room keys must be returned at check-out. Lost keys incur a replacement fee.</li>
                        </ul>
                     </div>

                     {/* review list area start */}
                     {/* <RoomDetailsReviewLists /> */}
                     {/* review list area end */}

                     {/* write review area start */}
                     <RoomDetailsWriteReviewArea hotelId={hotelInfo?.id} />
                     {/* write review area end */}

                  </div>
               </div>
               <div className="col-lg-4 order-0 order-lg-1">
                  {/* booking area start */}
                  <RoomDetailsThreeBookingArea price={formatPrice(getHotelPrice(hotelInfo?.lowRate, hotelInfo?.highRate))} />
                  {/* booking area end */}
               </div>
            </div>
         </div>
      </div>
   )
}
