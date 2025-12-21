"use client";
import { useRef, useState } from "react";
import GuestCounter from "@/components/search/guest-counter";
import { Calender, UserTwo } from "@/components/svg";
import DatePicker from "@/components/ui/date-picker";
import useClickOutside from "@/hooks/use-click-outside";
import useToggleGuests from "@/hooks/use-toggle-guests";
import { getNextDay } from "@/utils/date";


type IProps = {
   price : string;
}
export default function RoomDetailsThreeBookingArea({price}:IProps) {
   const [checkin, setCheckin] = useState<Date | null>(null);
   const [checkout, setCheckout] = useState<Date | null>(null);
   const { adultGuests, childGuests, incrementGuest, decrementGuest } =
      useToggleGuests(1, 0);
   const [openGuest, setOpenGuest] = useState(false);
   const guestRef = useRef<HTMLDivElement>(null);

   useClickOutside(guestRef as React.RefObject<HTMLElement>, () => setOpenGuest(false));

   return (
      <form action="#">
         <div className="tp-room-booking-sidebar mb-50">
            <div className="tp-room-book-wrap tp-room-book-wrap-2 mb-15">
               <span className="tp-room-book-unit">From</span>
               <h4 className="tp-room-book-price">{price} <span className="night">/night</span></h4>
            </div>
            <div className="tp-room-book-wrap tp-room-book-wrap-space tp-room-book-wrap-2">
               <div className="tp-hero-form-input tp-room-book-date pb-20">
                  <p>Check-In *</p>
                  <div className="p-relative">
                     <DatePicker date={checkin} setDate={setCheckin} cls="input" />
                     <span><Calender /></span>
                  </div>
               </div>
               <div className="tp-hero-form-input tp-room-book-date pb-20">
                  <p>Check-Out *</p>
                  <div className="p-relative">
                     <DatePicker date={checkout} setDate={setCheckout} minDate={getNextDay(checkin)} cls="input"/>
                    <span><Calender /></span>
                  </div>
               </div>

               <div className="tp-hero-form-quantity tp-booking-form-quantity-2 tp-hero-form-quantity mb-20 w-100" ref={guestRef}>
                  <p>Guests *</p>
                  <div className="tp-hero-quantity p-relative">
                     <span onClick={() => setOpenGuest(!openGuest)} className="tp-hero-quantity-click tp-room-guest-toogle tp-hero-quantity-toggle">
                        {adultGuests + childGuests} Guest(s) <UserTwo />
                     </span>
                     {openGuest && (
                        <div className="tp-hero-quantity-border tp-hero-quantity-active tp-usd-list-open">
                           <ul className="tp-hero-quantity-list border-bottom">
                              <GuestCounter
                                 label="Adult"
                                 description="Ages 12 or above"
                                 count={adultGuests}
                                 onIncrement={() => incrementGuest("adult")}
                                 onDecrement={() => decrementGuest("adult")}
                              />
                           </ul>
                           <ul className="tp-hero-quantity-list">
                              <GuestCounter
                                 label="Child"
                                 description="Ages 12 or below"
                                 count={childGuests}
                                 onIncrement={() => incrementGuest("child")}
                                 onDecrement={() => decrementGuest("child")}
                              />
                           </ul>
                           <div className="tp-hero-quantity-btn">
                              <button type="button" onClick={() => setOpenGuest(false)}>
                                 OK
                              </button>
                           </div>
                        </div>
                     )}
                  </div>
               </div>
               <div className="tp-purches-btn">
                  <button type="button" className="tp-btn-large w-100">Reserve</button>
               </div>
            </div>
         </div>
      </form>
   )
}
