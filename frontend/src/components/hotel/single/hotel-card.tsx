import Link from "next/link";
import Image from "next/image";
import { IHotelRoom } from "@/types/hotel-d-t";
import { formatPrice } from "@/lib/format-price";
import { getHotelPrice } from "@/utils/get-hotel-price";
import { ClockSvg, Location, RatingSvg, UpArrowTwo, Wishlist } from "@/components/svg";


type IProps = {
    item: IHotelRoom;
}

export default function HotelCard({ item }: IProps) {
    return (
        <div className="tp-place-wrap">
            <div className="tp-place-thumb fix p-relative">
                <Image className="w-100" src={item.thumbNailUrl} alt="feature" width={384} height={240} style={{ height: "auto" }} />
                <button type="button" className="tp-place-wishlist">
                    <Wishlist />
                </button>
            </div>
            <div className="tp-place-content p-relative">
                <div className="tp-place-meta-wrap">
                    <h4 className="tp-place-title">
                        <Link href={`/room-details/${item.id}`}>{item.name}</Link>
                    </h4>
                    <div className="tp-place-meta">
                        <ul>
                            <li>
                                <span>
                                    <Location />
                                </span>
                                {" "} {item.destination?.name}
                            </li>
                            <li>
                                <span>
                                    <ClockSvg />
                                </span>
                                {" "} Per Night
                            </li>
                            <li>
                                <span className="ratings">
                                    <RatingSvg />
                                </span>
                                {" "} {item.propertyCategory}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tp-place-price-wrap">
                    <div className="tp-place-left">
                        <span className="tp-place-price-discount">Only</span>
                        <div className="tp-place-price-inner d-flex">
                            <span className="tp-place-price">{formatPrice(getHotelPrice(item.highRate, item.lowRate))}</span>
                        </div>
                    </div>
                    <div className="tp-place-btn">
                        <Link href={`/room-details/${item.id}`}>
                            <UpArrowTwo />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
