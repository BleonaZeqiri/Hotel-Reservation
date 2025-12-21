import { Metadata } from "next";
import { getAllHotelRooms } from "@/api/hotel";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import SearchThree from "@/components/search/search-three";
import RoomOneArea from "@/components/room/room-one-area";


export const metadata: Metadata = {
    title: "Room 1 - Housey",
};

type IParams = Promise<{checkin: string;checkout: string;adults: string;children: string;searchTerm: string }>;

type IProps = {
    searchParams:IParams
};
export default async function RoomOnePage({searchParams}: IProps) {
    const {checkin, checkout, adults,children,searchTerm} = await searchParams || {};
    const hotelData = await getAllHotelRooms(checkin, checkout, adults, children,searchTerm);
    return (
        <>

            <BreadcrumbArea />
           
            <SearchThree defaultCheckin={checkin} defaultCheckout={checkout} defaultAdults={Number(adults)} defaultChildren={Number(children)} />
            
            <RoomOneArea rooms={hotelData} />

        </>
    )
}
