import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "@/components/svg";
import { formatPrice } from "@/lib/format-price";
import { IHotelRoom } from "@/types/hotel-d-t";
import { getHotelPrice } from "@/utils/get-hotel-price";

type IProps = {
  item: IHotelRoom;
  top_cls?: string;
};

export default function HotelCardFour({item,top_cls=''}: IProps) {
  return (
    <div className={`tp-suites-item p-relative ${top_cls}`}>
      <Link href={`/room-details/${item.id}`}>
        <div className="tp-suites-thumb">
          <Image
            className="w-100"
            src={item.thumbNailUrl}
            alt="service"
            width={380}
            height={416}
          />
        </div>
      </Link>
      <div className="tp-suites-price p-absolute">
        <span>
          <b>{formatPrice(getHotelPrice(item.highRate, item.lowRate))}</b> Per
          Night
        </span>
      </div>
      <div className="tp-suites-content p-absolute">
        <h3 className="tp-suites-title">
          <Link href={`/room-details/${item.id}`}>{item.name}</Link>
        </h3>
        <div className="tp-suites-room mb-15">
          <span>{item.adults} Guests</span>
          <span className="space">|</span>
          <span>Size: {item.sqFt}</span>
        </div>
        <div className="tp-suites-hidden">
          <p>{item.shortDescription.slice(0, 80)}...</p>
          <div className="tp-suites-btn">
            <Link className="tp-btn-2" href={`/room-details/${item.id}`}>
              <span>
                <Bookmark />
              </span>
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
