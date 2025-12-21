import { Metadata } from "next";
import { getAllHotelRooms } from "@/api/hotel";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import RoomTwoArea from "@/components/room/room-two-area";


export const metadata: Metadata = {
    title: "Room 2 - Housey",
};


export default async function RoomTwoPage() {
    const hotelData = await getAllHotelRooms();
    return (
        <>

            <BreadcrumbArea />

            <RoomTwoArea rooms={hotelData} />
        </>
    )
}
