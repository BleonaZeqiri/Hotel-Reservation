import { useState, useRef, useEffect } from "react";
import { UserTwo } from "../svg";
import GuestCounter from "./guest-counter";

interface GuestSelectorProps {
   adultGuests: number;
   childGuests: number;
   setAdultGuests: (count: number) => void;
   setChildGuests: (count: number) => void;
   toggleCls?: string;
   topCls?: string;
   style_2?: boolean
}

export default function GuestSelector({
   adultGuests,
   childGuests,
   setAdultGuests,
   setChildGuests,
   toggleCls = "",
   style_2 = false,
   topCls=''
}: GuestSelectorProps) {
   const [openGuest, setOpenGuest] = useState(false);
   const guestRef = useRef<HTMLDivElement>(null);

   // Close dropdown when clicking outside
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (guestRef.current && !guestRef.current.contains(event.target as Node)) {
            setOpenGuest(false);
         }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);

   // Increment and decrement functions
   const incrementGuest = (type: 'adult' | 'child') => {
      if (type === 'adult') setAdultGuests(adultGuests + 1);
      else setChildGuests(childGuests + 1);
   };

   const decrementGuest = (type: 'adult' | 'child') => {
      if (type === 'adult' && adultGuests > 1) setAdultGuests(adultGuests - 1);
      else if (type === 'child' && childGuests > 0) setChildGuests(childGuests - 1);
   };

   return (
      <>
         {!style_2 && (
            <div className={`tp-hero-form-quantity ${toggleCls ? 'mr-15' : ''} ${topCls}`} ref={guestRef}>
               <p>Guests</p>
               <div className="tp-hero-quantity p-relative">
                  <span
                     onClick={() => setOpenGuest(!openGuest)}
                     className={`tp-hero-quantity-click ${toggleCls} tp-hero-quantity-toggle ${openGuest ? 'active' : ''}`}
                  >
                     <UserTwo /> {adultGuests + childGuests} Guest(s)
                  </span>
                  {openGuest && (
                     <div className="tp-hero-quantity-border tp-hero-quantity-active main tp-usd-list-open">
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
                           <button type="button" onClick={() => setOpenGuest(false)}>OK</button>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         )
         }

         {style_2 && (
            <div className="tp-booking-form-quantity tp-hero-form-quantity pb-20 mr-5" ref={guestRef}>
               <p className="tp-booking-form-para">Occupancy</p>
               <div className="tp-hero-quantity p-relative">
                  <span onClick={() => setOpenGuest(!openGuest)} className={`tp-booking-form-click tp-hero-quantity-click tp-hero-quantity-toggle ${openGuest ? 'active' : ''}`}>
                     {adultGuests + childGuests} Guests(s)
                     <UserTwo />
                  </span>
                  {openGuest && (
                     <div className="tp-booking-form-quantity-list tp-hero-quantity-border tp-hero-quantity-active tp-usd-list-open">
                        <ul className="tp-booking-quantity-list tp-hero-quantity-list border-bottom">
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
                           <button onClick={() => setOpenGuest(false)} type="button">OK</button>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         )}
      </>
   );
}
