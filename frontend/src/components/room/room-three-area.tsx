'use client';
import usePagination from "@/hooks/use-pagination";
import { IHotelRoom } from "@/types/hotel-d-t"
import HotelCardFour from "../hotel/single/hotel-card-4";
import Pagination from "../ui/pagination";

type IProps = {
    rooms: IHotelRoom[]
}
export default function RoomThreeArea({ rooms }: IProps) {
    const per_page = 6;
    const { currentItems, handlePageClick, pageCount } = usePagination(rooms, per_page);
    return (
        <div className="tp-suites-area pt-100 pb-100">
            <div className="container">
                <div className="row">

                    {currentItems.map((item, i) => (
                        <div key={item.id} className="col-lg-4 col-md-6 mb-25 wow fadeInUp" data-wow-delay={`.${i + 1}s`} data-wow-duration="1s">
                            <HotelCardFour item={item} top_cls="round-6" />
                        </div>
                    ))}

                    <div className="col-12">
                        <div className="tp-pagenation tp-pagenation-2 text-center pt-35">
                            <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
