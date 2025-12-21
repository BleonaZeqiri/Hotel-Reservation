'use client';
import { useActionState, useState } from "react";
import { Calender } from "../svg";
import DatePicker from "../ui/date-picker";
import GuestSelector from "./guest-selector";
import { getNextDay } from "@/utils/date";
import { handleSearch } from "@/actions/search";

const initialState = {
    message: '',
  }

export default function SearchFour() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, formAction] = useActionState(handleSearch, initialState);
    const [checkin, setCheckin] = useState<Date | null>(null);
    const [checkout, setCheckout] = useState<Date | null>(null);
    const [adultGuests, setAdultGuests] = useState<number>(1);
    const [childGuests, setChildGuests] = useState<number>(0);


    return (
        <form action={formAction}>
            <div className="tp-hero-quantity-wrap d-flex">
                <div className="tp-hero-form-input pb-20 mr-10">
                    <p>Check-In</p>
                    <div className="p-relative">
                        <DatePicker date={checkin} setDate={setCheckin} cls="four-round-6" />
                        <span><Calender /></span>
                    </div>
                </div>
                <div className="tp-hero-form-input pb-20 mr-10">
                    <p>Check-Out</p>
                    <div className="p-relative">
                        <DatePicker date={checkout} setDate={setCheckout} minDate={getNextDay(checkin)} cls="four-round-6" />
                        <span><Calender /></span>
                    </div>
                </div>

                <div className="mr-5">
                    <GuestSelector adultGuests={adultGuests} childGuests={childGuests} setAdultGuests={setAdultGuests} setChildGuests={setChildGuests} toggleCls="four-round-6" />
                </div>

                <div className="tp-hero-submit-btn-wrap tp-hero-six-submit-btn mb-20">
                    <button disabled={!checkin || !checkout} className="tp-hero-submit-btn four-round-6" type="submit">Search</button>
                </div>
            </div>
            <input type="hidden" name="checkin" value={checkin ? checkin.toISOString() : ""} />
            <input type="hidden" name="checkout" value={checkout ? checkout.toISOString() : ""} />
            <input type="hidden" name="adults" value={adultGuests} />
            <input type="hidden" name="children" value={childGuests} />
        </form>
    )
}
