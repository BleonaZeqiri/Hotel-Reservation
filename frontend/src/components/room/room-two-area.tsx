'use client';
import { useState } from "react";
import { IHotelRoom } from "@/types/hotel-d-t";
import { ENUM_HOTEL_CATEGORY } from "@/types/enums";
import HotelCardThree from "../hotel/single/hotel-card-3";
import usePagination from "@/hooks/use-pagination";
import Pagination from "../ui/pagination";

const tab_btns = ['All Rooms', ...Object.values(ENUM_HOTEL_CATEGORY)];

type IProps = {
    rooms: IHotelRoom[]
};

export default function RoomTwoArea({ rooms }: IProps) {
    const [activeTab, setActiveTab] = useState(tab_btns[0]);
    const per_page = 6;
    const [filterProducts, setFilteredProducts] = useState<IHotelRoom[]>(rooms);
    const { currentItems, handlePageClick, pageCount } = usePagination(filterProducts, per_page);

    function handleActiveTab(tab: string) {
        setActiveTab(tab);
        if (tab === 'All Rooms') {
            setFilteredProducts(rooms);
        } else {
            setFilteredProducts(rooms.filter((room) => room.category === tab));
        }
    }

    return (
        <div className="tp-room-masonary pt-140 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-room-tab-btn-list mb-50 masonary-menu filter-button-group text-center">
                            {tab_btns.map((tab) => (
                                <button
                                    key={tab}
                                    className={`tp-room-tab-btn mb-10 ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => handleActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row tp-gx-25 grid">


                    {currentItems.map((item) => (
                        <div key={item.id} className="col-12 grid-item mb-25">
                            <HotelCardThree item={item} />
                        </div>
                    ))}

                </div>

                {/* pagination area */}
                <div className="row">
                    <div className="col-12">
                        <div className="tp-pagenation text-center pt-35">
                            <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
                        </div>
                    </div>
                </div>
                {/* pagination area */}

            </div>
        </div>
    )
}
