'use client';
import { useActionState, useState } from "react";
import { Calender } from "../svg";
import DatePicker from "../ui/date-picker";
import GuestSelector from "./guest-selector";
import { getNextDay } from "@/utils/date";
import { handleSearch } from "../../../actions/search";

type IProps = {
   style_2?: string;
   defaultCheckin?: string | null;
   defaultCheckout?: string | null;
   defaultGuests?: number | null
};

const initialState = {
   message: '',
 }

export default function SearchForm({ style_2 = '', defaultCheckin, defaultCheckout, defaultGuests }: IProps) {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [state, formAction] = useActionState(handleSearch, initialState);
   const [checkin, setCheckin] = useState<Date | null>(defaultCheckin ? new Date(defaultCheckin) : null);
   const [checkout, setCheckout] = useState<Date | null>(defaultCheckout ? new Date(defaultCheckout) : null);
   const [adultGuests, setAdultGuests] = useState<number>(defaultGuests ? defaultGuests : 1);
   const [childGuests, setChildGuests] = useState<number>(0);


   return (
      <div className="tp-hero-search-form">
         <form action={formAction}>
            <div className="tp-hero-quantity-wrap d-flex">
               <div className="tp-hero-form-input pb-20 mr-10">
                  <p>Check-In</p>
                  <div className="p-relative">
                     <DatePicker date={checkin} setDate={setCheckin} cls={style_2} defaultValue={checkin ? checkin.toISOString()?.split('T')[0] : ''} />
                     <span><Calender /></span>
                  </div>
               </div>
               <div className="tp-hero-form-input pb-20 mr-10">
                  <p>Check-Out</p>
                  <div className="p-relative">
                     <DatePicker date={checkout} setDate={setCheckout} minDate={getNextDay(checkin)} cls={style_2} defaultValue={checkout ? checkout.toISOString()?.split('T')[0] : ''} />
                     <span><Calender /></span>
                  </div>
               </div>
               <GuestSelector adultGuests={adultGuests} childGuests={childGuests} setAdultGuests={setAdultGuests} setChildGuests={setChildGuests} toggleCls={style_2} />
               <div className="tp-hero-submit-btn-wrap mb-20">
                  <button disabled={!checkin || !checkout} className={`tp-hero-submit-btn ${style_2}`} type="submit">Search</button>
               </div>
            </div>
            <input type="hidden" name="checkin" value={checkin ? checkin.toISOString() : ""} />
            <input type="hidden" name="checkout" value={checkout ? checkout.toISOString() : ""} />
            <input type="hidden" name="adults" value={adultGuests} />
            <input type="hidden" name="children" value={childGuests} />
         </form>
      </div>
   );
}
