import Image from "next/image";
import { IAmenities } from "@/types/amenities-d-t";

type IProps = {
  amenities: IAmenities[];
  top_cls?: string;
};
export default function RoomDetailsAmenities({ amenities,top_cls=''}: IProps) {
  return (
    <div className={`tp-room-about-amenities mb-65 ${top_cls}`}>
      <h2 className="tp-room-details-title mb-30">Amenities</h2>
      <div className="row tp-gx-23">
        {amenities.map((amenity, i) => (
          <div key={i} className="col-lg-6 col-md-6">
            <div className="tp-room-about-amenities-item mb-25 d-flex align-items-center">
              {amenity?.image && (
                <div className="tp-room-about-amenities-icon">
                  <span>
                    <Image
                      src={amenity.image}
                      alt={amenity.name}
                      width={38}
                      height={38}
                    />
                  </span>
                </div>
              )}
              <h5 className="tp-room-about-amenities-title">{amenity.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
