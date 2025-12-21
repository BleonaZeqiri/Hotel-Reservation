import { Metadata } from "next";
import { getSingleHotel } from "@/api/hotel";
import RoomDetailsTwoGallery from "@/components/room/details/room-details-2/room-details-2-gallery";
import RoomDetailsTwoArea from "@/components/room/details/room-details-2/room-details-2-area";


export const metadata: Metadata = {
    title: "Room Details  - Housey",
};

type IParams = Promise<{ id: string }>;

export default async function RoomDetailsTwoPage({ params }: { params: IParams}) {
    const { id } = await params;
    const hotel = await getSingleHotel(id);
    return (
        <>

            <RoomDetailsTwoGallery gallery={hotel.gallery} />

            <RoomDetailsTwoArea hotelRoom={hotel} />
        </>
    )
}
