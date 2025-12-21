import { IHotelRoom } from "@/types/hotel-d-t";
import RoomDetailsAmenities from "./room-details-amenities";
import RoomDetailsGallerySlider from "./room-details-gallery-slider";
import RoomDetailsInfoArea from "./room-details-info-area";
import RoomDetailsReservation from "./room-details-reservation";

type Props = {
  hotelRoom: IHotelRoom;
};
export default function RoomDetailsArea({ hotelRoom }: Props) {
  return (
    <div className="tp-room-details-area pt-100 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tp-room-details-wrapper mb-35">

              {/* room gallery area start */}
              <RoomDetailsGallerySlider
                thumbNailUrl={hotelRoom.thumbNailUrl}
                galleryImages={hotelRoom.gallery}
              />
              {/* room gallery area end */}

              <div className="tp-room-about-content mb-45">
                <h2 className="tp-room-details-title mb-20">About This Room</h2>
                <p>
                  A good resort description should be clear, concise, and
                  engaging, capturing the attention of potential guests and
                  giving them a sense of what it would be like to stay at the
                  resort. It should also be informative, providing guests with
                  the information they need to make an informed decision about
                  booking their stay.
                </p>
              </div>
              <div className="tp-room-about-feature mb-45">
                <h2 className="tp-room-details-title mb-20">Check In:</h2>
                <ul>
                  <li>
                    <span></span>The minimum age requirement for check-in is 18
                    years old.
                  </li>
                  <li>
                    <span></span>Check-in time starts from 9:00 AM and is open
                    anytime for guests.
                  </li>
                  <li>
                    <span></span>Early check-in is subject to availability and
                    can be requested by guests.
                  </li>
                </ul>
              </div>
              <div className="tp-room-about-feature mb-45">
                <h2 className="tp-room-details-title mb-20">Check Out:</h2>
                <ul>
                  <li>
                    <span></span>Check-out before noon.
                  </li>
                  <li>
                    <span></span>Express check-out.
                  </li>
                </ul>
              </div>
              <div className="tp-room-about-feature mb-45">
                <h2 className="tp-room-details-title mb-20">
                  Children and Extra Beds:
                </h2>
                <ul>
                  <li>
                    <span></span>Children are welcome to stay at the resort.
                  </li>
                  <li>
                    <span></span>Kids stay for free when using existing bedding,
                    but may not receive a complimentary breakfast.
                  </li>
                  <li>
                    <span></span>Rollaway/extra beds are available for $40 per
                    day.
                  </li>
                </ul>
              </div>

              {/* amenities area start */}
              <RoomDetailsAmenities amenities={hotelRoom.amenities} />
              {/* amenities area end */}

              <div className="tp-room-about-feature mb-35">
                <h2 className="tp-room-details-title mb-20">House Rules</h2>
                <ul>
                  <li>
                    <span></span>-No smoking, parties or events.
                  </li>
                  <li>
                    <span></span>-Check-in time from 2 PM, check-out by 10 AM.
                  </li>
                </ul>
              </div>
              <div className="tp-room-about-content">
                <h2 className="tp-room-details-title mb-20">Cancellation</h2>
                <p>
                  Phasellus volutpat neque a tellus venenatis, a euismod augue
                  facilisis. Fusce ut metus mattis, consequat metus nec, luctus
                  lectus. Pellentesque orci sed eu dolor.
                </p>
                <span className="tp-room-about-refund">
                  Cancel up to 14 days to get a full refund.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {/* Room Details Info */}
            <RoomDetailsInfoArea hotelInfo={hotelRoom} />
            {/* Room Details Info */}

            {/* reservation form start */}
            <RoomDetailsReservation hotelId={hotelRoom.id} />
            {/* reservation form end */}
          </div>
        </div>
      </div>
    </div>
  );
}
