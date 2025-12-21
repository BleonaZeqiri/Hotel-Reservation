import { IDBResponseDT } from "@/types/db-response";
import { IHotelRoom } from "@/types/hotel-d-t";

// get all modern hotels
export async function getModernHotels() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hotel/modern`
  );
  const data: IDBResponseDT<IHotelRoom[]> = await response.json();
  return data.data;
}

// get all city hotels
export async function getCityHotels() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hotel/city`);
  const data: IDBResponseDT<IHotelRoom[]> = await response.json();
  return data.data;
}

// get all hotels
export async function getLuxuryHotel() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hotel/luxury`
  );
  const data: IDBResponseDT<IHotelRoom> = await response.json();
  return data.data;
}

// get hotel packages
export async function getHotelPackages() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hotel/package`
  );
  const data: IDBResponseDT<IHotelRoom[]> = await response.json();
  return data.data;
}

// get all hotel
export async function getAllHotelRooms(
  checkin?: string,
  checkout?: string,
  adults?: string,
  children?: string,
  searchTerm?: string
) {
  const params = new URLSearchParams({
    checkin: checkin || "",
    checkout: checkout || "",
    adults: adults || "",
    children: children || "",
    searchTerm: searchTerm || "",
  });
  const url = `${process.env.NEXT_PUBLIC_API_URL}/hotel/all?${params.toString()}`;

  const response = await fetch(url, {
    cache: "no-store",
  });
  const data: IDBResponseDT<IHotelRoom[]> = await response.json();
  return data.data;
}

// get all hotel
export async function getSingleHotel(id: string): Promise<IHotelRoom> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hotel/${id}`
  );
  const data: IDBResponseDT<IHotelRoom> = await response.json();
  return data.data;
}
