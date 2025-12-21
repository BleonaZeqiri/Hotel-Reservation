"use client";
import { useActionState, useRef, useState } from "react";
import DatePicker from "../ui/date-picker";
import GuestCounter from "./guest-counter";
import useClickOutside from "@/hooks/use-click-outside";
import useToggleGuests from "@/hooks/use-toggle-guests";
import { getNextDay } from "@/utils/date";
import { handleSearch } from "@/actions/search";

const initialState = {
  message: '',
}

export default function SearchFive() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction] = useActionState(handleSearch, initialState);
  const [checkin, setCheckin] = useState<Date | null>(null);
  const [checkout, setCheckout] = useState<Date | null>(null);
  const { adultGuests, childGuests, incrementGuest, decrementGuest } = useToggleGuests(1, 0);
  const [openGuest, setOpenGuest] = useState(false);
  const guestRef = useRef<HTMLDivElement>(null);

  useClickOutside(guestRef as React.RefObject<HTMLElement>, () => setOpenGuest(false));

  return (
    <div className="tp-bocking-date-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12">
            <div className="tp-bocking-search-form round-6">
              <form action={formAction}>
                <div className="tp-hero-quantity-wrap d-flex">
                  <div className="tp-bocking-input-wrap round-6 mr-15 mb-20">
                    <div className="tp-bocking-form-input">
                      <p>Check-In * </p>
                      <div className="p-relative">
                        <DatePicker
                          date={checkin}
                          setDate={setCheckin}
                          defaultValue="Checking in"
                        />
                      </div>
                    </div>
                    <div className="tp-bocking-form-input pl-30">
                      <p>Check-Out *</p>
                      <div className="p-relative">
                        <DatePicker date={checkout} setDate={setCheckout} minDate={getNextDay(checkin)} />
                      </div>
                    </div>
                  </div>

                  <div className="tp-bocking-form-quantity round-6 mr-15 mb-20" ref={guestRef}>
                    <p>Guests</p>
                    <div className="tp-hero-quantity tp-bocking-quantity p-relative">
                      <span
                        onClick={() => setOpenGuest(!openGuest)}
                        className="tp-hero-quantity-click tp-hero-quantity-toggle"
                      >
                        {adultGuests + childGuests} Guests(s)
                      </span>

                      {openGuest && (
                        <div className="tp-hero-quantity-border tp-hero-quantity-active tp-bocking-quantity-active tp-usd-list-open">
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
                  <div className="tp-bocking-submit-btn-wrap mb-20">
                    <button
                      className="tp-hero-submit-btn tp-bocking-submit-btn round-6"
                      type="submit"
                    >
                      Search
                    </button>
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
    </div>
  );
}
