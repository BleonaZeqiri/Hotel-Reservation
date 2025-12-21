import Image from "next/image";
import Link from "next/link";
import { IHotelRoom } from "@/types/hotel-d-t";
import { BedsThree, BreakfastTwo, SqFt } from "@/components/svg";

type IProps = {
    item: IHotelRoom;
    style_2?: boolean;
};
export default function HotelCardTwo({ item, style_2 }: IProps) {
    return (
        <div className={`tp-room-wrap ${style_2?'tp-room-wrap-2':''}`}>
            <div className={`tp-room-thumb ${style_2?'':'mb-35'}`}>
                <Image className="w-100" src={item.thumbNailUrl} alt="room" width={511} height={360} />
            </div>
            <div className={`tp-room-content ${style_2?'box-bg':''}`}>
                <span className="tp-room-tag mb-15">{item?.category}</span>
                <h4 className="tp-room-title mb-20">
                    <Link href={`/room-details/${item.id}`}>{item.name}</Link>
                </h4>
                <div className="tp-room-meta mb-30">
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
                {style_2 ? (<div className="tp-room-btn-3">
                    <Link className="tp-btn-square" href={`/room-details/${item.id}`}>Book Now</Link>
                </div>) : (
                    <div className="tp-room-btn-2">
                        <Link className="tp-btn-4" href={`/room-details/${item.id}`}>Book</Link>
                    </div>
                )}
            </div>
        </div>
    )
}
