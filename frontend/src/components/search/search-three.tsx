"use client";

import { useActionState, useState } from "react";
import DatePicker from "../ui/date-picker";
import { Calender, Search } from "../svg";
import GuestSelector from "./guest-selector";
import { getNextDay } from "@/utils/date";
import { handleSearch } from "@/actions/search";

type IProps = {
   defaultCheckin?: string | null;
   defaultCheckout?: string | null;
   defaultAdults?: number | null;
   defaultChildren?: number | null;
};

const initialState = {
   message: '',
 }

export default function SearchThree({defaultCheckin,defaultCheckout,defaultAdults,defaultChildren}:IProps) {
   const [state, formAction] = useActionState(handleSearch, initialState);
   const [checkin, setCheckin] = useState<Date | null>(defaultCheckin ? new Date(defaultCheckin) : null);
   const [checkout, setCheckout] = useState<Date | null>(defaultCheckout ? new Date(defaultCheckout) : null);
   const [adultGuests, setAdultGuests] = useState<number>(defaultAdults || 1);
   const [childGuests, setChildGuests] = useState<number>(defaultChildren || 0);

   console.log(state,'state message');

   return (
      <div id="booking-2" className="tp-booking-area tp-falured-bg pt-50 pb-60">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tp-booking-title-wrap mb-45 text-center p-relative">
                     <h2 className="tp-booking-title">Reservations</h2>
                     <span className="tp-booking-border p-absolute"></span>
                  </div>
               </div>
               <div className="col-12">
                  <form action={formAction}>
                     <div className="row">
                        <div className="col-lg-3 col-md-6">
                           <div className="tp-booking-form-input tp-booking-active pb-20 mr-5">
                              <p>Arrival Date</p>
                              <div className="p-relative">
                                 <DatePicker
                                    date={checkin}
                                    setDate={setCheckin}
                                    defaultValue={checkin ? checkin.toDateString() : ""}
                                 />
                                 <span><Calender /></span>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                           <div className="tp-booking-form-input pb-20 mr-5">
                              <p>Departure Date</p>
                              <div className="p-relative">
                                 <DatePicker date={checkout} setDate={setCheckout} minDate={getNextDay(checkin)} defaultValue={checkout ? checkout.toDateString() : ''} />
                                 <span><Calender /></span>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                           <GuestSelector
                              adultGuests={adultGuests}
                              childGuests={childGuests}
                              setAdultGuests={setAdultGuests}
                              setChildGuests={setChildGuests}
                              style_2={true}
                           />
                        </div>
                        <div className="col-lg-3 col-md-6">
                           <div className="tp-booking-btn-wrap pb-20 pt-25">
                              <button
                                 className="tp-booking-form-btn"
                                 type="submit"
                              >
                                 <Search />
                                 {defaultCheckin && defaultCheckout && defaultAdults ? "Modify Search" : "Find Hotels"}
                              </button>
                           </div>
                        </div>
                     </div>
                     <input type="hidden" name="checkin" value={checkin ? checkin.toISOString() : ""} />
                     <input type="hidden" name="checkout" value={checkout ? checkout.toISOString() : ""} />
                     <input type="hidden" name="adults" value={adultGuests} />
                     <input type="hidden" name="children" value={childGuests} />
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
