import { Metadata } from "next";
import { getAllHotelRooms } from "@/api/hotel";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import RoomThreeArea from "@/components/room/room-three-area";
import SearchFive from "@/components/search/search-five";

export const metadata: Metadata = {
    title: "Room 3 - Housey",
};

export default async function RoomThreePage() {
    const hotelData = await getAllHotelRooms();
    return (
        <div>

            <BreadcrumbTwo />
          
            <SearchFive />
        
            <RoomThreeArea rooms={hotelData} />
        </div>
    )
}
