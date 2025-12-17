import { getModernHotels } from "@/api/hotel";
import HotelSliderTwo from "./hotel-slider-2";
import Link from "next/link";


export default async function LuxuryHotels() {
    const hotelRooms = await getModernHotels();
    return (
        <div className="tp-room-area fix pb-140">
            <div className="container">
                <div className="row mb-20">
                    <div className="col-lg-9 col-md-9 mb-15">
                        <div className="tp-room-title-wrap">
                            <h5 className="tp-section-three-title-pre">Luxury Resort </h5>
                            <h2 className="tp-section-three-title mb-15">Rooms & Suites</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 mb-40">
                        <div className="tp-room-btn d-flex justify-content-end align-items-end h-100">
                            <Link className="tp-btn-4" href="/room-1">All Rooms</Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="tp-room-slider-wrap">
                        <HotelSliderTwo hotelData={hotelRooms} />
                    </div>
                </div>
            </div>
        </div>
    )
}
