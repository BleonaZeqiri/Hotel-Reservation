import Image from "next/image";
import Link from "next/link";
import { IHotelRoom } from "@/types/hotel-d-t";
import { formatPrice } from "@/lib/format-price";
import { BedsThree, BreakfastTwo, SqFt } from "@/components/svg";
import { getHotelPrice } from "@/utils/get-hotel-price";

type IProps = {
    item: IHotelRoom;
};

export default function HotelCardThree({ item }: IProps) {
    return (
        <div className="tp-room-wrap tp-room-wrap-3 p-relative">
            <div className="tp-room-thumb-2">
                <Image className="w-100" src={item.thumbNailUrl} alt="room" width={1200} height={430} style={{ objectFit: "cover" }} />
            </div>
            <div className="tp-room-3-content">
                <h3 className="tp-room-3-title">
                    <Link href={`/room-details/${item.id}`}>{item.name}</Link>
                 </h3>
                <div className="tp-room-3-price">
                    <span>{formatPrice(getHotelPrice(item.highRate, item.lowRate))}</span>
                    <p> per night</p>
                </div>
            </div>
            <div className="tp-room-meta tp-room-meta-2 mb-30">
                <ul>
                    <li>
                        <BedsThree />
                        <span>Adults: {item.adults}</span>
                    </li>
                    <li>
                        <BreakfastTwo />
                        <span>Breakfast</span>
                    </li>
                    <li>
                        <SqFt />
                        <span>Size: {item.sqFt}ft²</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
