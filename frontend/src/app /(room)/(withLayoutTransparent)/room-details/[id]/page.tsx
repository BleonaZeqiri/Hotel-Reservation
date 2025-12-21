import { Metadata } from "next";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import { getSingleHotel } from "@/api/hotel";
import RoomDetailsArea from "@/components/room/details/room-details-1/room-details-area";


export const metadata: Metadata = {
    title: "Room Details  - Housey",
};

type IParams = Promise<{ id: string }>;
export default async function RoomDetailsPage({ params }: {params: IParams}) {
    const { id } = await params;
    const hotel = await getSingleHotel(id);
    return (
        <>

            {/* breadcrumb area start */}
            <BreadcrumbArea />
            {/* breadcrumb area end */}

            {/* room details area start */}
            <RoomDetailsArea hotelRoom={hotel} />
            {/* room details area end */}
        </>
    )
}
