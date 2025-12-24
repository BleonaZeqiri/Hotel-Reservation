import { IBooking } from "@/types/booking-d-t";
import { IDBResponseDT } from "@/types/db-response";

// get all hotel
export async function getBookingById(id: string): Promise<IBooking> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/booking/${id}`
    );
    const data: IDBResponseDT<IBooking> = await response.json();
    return data.data;
  }
  