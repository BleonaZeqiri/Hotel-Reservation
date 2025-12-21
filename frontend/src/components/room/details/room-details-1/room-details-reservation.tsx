'use client';
import { useFormStatus } from 'react-dom';
import React, { useActionState, useEffect, useState } from 'react';
import GuestSelector from '@/components/search/guest-selector';
import DatePicker from '@/components/ui/date-picker';
import { getNextDay } from '@/utils/date';
import { handleCheckBooking } from '@/actions/search';

/* export default function RoomDetailsReservation({ hotelId }: { hotelId: string }) {
    const { pending } = useFormStatus()
    const [state, formAction] = useActionState(handleCheckBooking, null);
    const [checkin, setCheckin] = useState<Date | null>(null);
    const [checkout, setCheckout] = useState<Date | null>(null);
    const [adultGuests, setAdultGuests] = useState<number>(1);
    const [childGuests, setChildGuests] = useState<number>(0);

    // Extract isBooked from state
    const isBooked = state?.data?.isBooked;

    // Determine if the button should be disabled
    const isDisabled = !checkin || !checkout || isBooked || pending;

    return (
        <div className="tp-room-details-info-wrap box-bg mb-35">
            <h3 className="tp-room-details-info-title mb-25">Reservation Form</h3>
            <form className='reservation-form' action={formAction}>
                <p className="">
                    <small>
                        Required fields are followed by <abbr title="required">*</abbr>
                    </small>
                </p>

                <p className="">
                    <label>
                        Check-in Date <abbr title="Formatted as dd/mm/yyyy">*</abbr>
                    </label>
                    <br />
                    <DatePicker date={checkin} setDate={setCheckin} />
                </p>

                <p>
                    <label>
                        Check-out Date <abbr title="Formatted as dd/mm/yyyy">*</abbr>
                    </label>
                    <br />
                    <DatePicker date={checkout} setDate={setCheckout} minDate={getNextDay(checkin)} />
                </p>

                <GuestSelector adultGuests={adultGuests} childGuests={childGuests} setAdultGuests={setAdultGuests} setChildGuests={setChildGuests} topCls='details-reservation' />

                <div className="tp-purches-btn mt-20">
                    <button type="submit" disabled={isDisabled} className="tp-btn-falured">
                       {isBooked ? 'Unavailable' : 'Book Now'}
                    </button>
                </div>

                {isBooked && (
                    <p className='text-danger mt-10'>
                        {state?.data?.isBooked && 'Already Booked try another date'}
                    </p>
                )}

                <input type="hidden" name="checkin" value={checkin ? checkin.toISOString() : ""} />
                <input type="hidden" name="checkout" value={checkout ? checkout.toISOString() : ""} />
                <input type="hidden" name="hotelId" value={hotelId} />
                <input type="hidden" name="adults" value={adultGuests} />
                <input type="hidden" name="children" value={childGuests} />
            </form>
        </div>
    );
}
 */



export default function RoomDetailsReservation({ hotelId }: { hotelId: string }) {
    const { pending } = useFormStatus();
    const [state, formAction] = useActionState(handleCheckBooking, null);
    const [checkin, setCheckin] = useState<Date | null>(null);
    const [checkout, setCheckout] = useState<Date | null>(null);
    const [adultGuests, setAdultGuests] = useState<number>(1);
    const [childGuests, setChildGuests] = useState<number>(0);

    // Extract isBooked from state
    const isBooked = state?.data?.isBooked;

    // Reset isBooked when checkin or checkout changes
    useEffect(() => {
        if (state?.data?.isBooked) {
            // Reset the state to remove the error message
            state.data.isBooked = false;
        }
    }, [checkin, checkout, state?.data]);

    // Determine if the button should be disabled
    const isDisabled = !checkin || !checkout || pending || isBooked;

    return (
        <div className="tp-room-details-info-wrap box-bg mb-35">
            <h3 className="tp-room-details-info-title mb-25">Reservation Form</h3>
            <form className="reservation-form" action={formAction}>
                <p className="">
                    <small>
                        Required fields are followed by <abbr title="required">*</abbr>
                    </small>
                </p>

                <p className="">
                    <label>
                        Check-in Date <abbr title="Formatted as dd/mm/yyyy">*</abbr>
                    </label>
                    <br />
                    <DatePicker date={checkin} setDate={setCheckin} />
                </p>

                <p>
                    <label>
                        Check-out Date <abbr title="Formatted as dd/mm/yyyy">*</abbr>
                    </label>
                    <br />
                    <DatePicker date={checkout} setDate={setCheckout} minDate={getNextDay(checkin)} />
                </p>

                <GuestSelector adultGuests={adultGuests} childGuests={childGuests} setAdultGuests={setAdultGuests} setChildGuests={setChildGuests} topCls="details-reservation" />

                <div className="tp-purches-btn mt-20">
                    <button type="submit" disabled={isDisabled} className="tp-btn-falured">
                        {isBooked ? "Unavailable" : "Book Now"}
                    </button>
                </div>

                {isBooked && (
                    <p className="text-danger mt-10">
                        {state?.data?.isBooked && "Already Booked try another date"}
                    </p>
                )}

                <input type="hidden" name="checkin" value={checkin ? checkin.toISOString() : ""} />
                <input type="hidden" name="checkout" value={checkout ? checkout.toISOString() : ""} />
                <input type="hidden" name="hotelId" value={hotelId} />
                <input type="hidden" name="adults" value={adultGuests} />
                <input type="hidden" name="children" value={childGuests} />
            </form>
        </div>
    );
}
