/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { redirect } from "next/navigation";

export async function handleSearch(prevState: any, formData: FormData) {
  const checkin = formData.get("checkin") as string;
  const checkout = formData.get("checkout") as string;
  const adults = formData.get("adults") as string;
  const children = formData.get("children") as string;

  if (!checkin || !checkout) {
    return {
      message: "Please select both check-in and check-out dates.",
    };
  }

  if (new Date(checkin) >= new Date(checkout)) {
    return {
      message: "Check-out date must be after check-in date.",
    };
  }
  redirect(
    `/room-1?checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}`
  );
};


export async function handleCheckBooking(prevState: any, formData: FormData) {
  const hotelId = formData.get("hotelId") as string;
  const checkin = formData.get("checkin") as string;
  const checkout = formData.get("checkout") as string;
  const adults = formData.get("adults") as string;
  const children = formData.get("children") as string;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/check-booking`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      checkout,
      checkin,
      hotelId,
    }),
  })
  const data = await res.json();

  if(!data?.data?.isBooked){
    redirect(`/checkout?hotelId=${hotelId}&checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}`);
  }
  return data;
 
}
