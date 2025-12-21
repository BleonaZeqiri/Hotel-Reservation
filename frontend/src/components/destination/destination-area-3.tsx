import { getDestination } from "@/api/destination";
import DestinationBox from "./destination-box";


export default async function DestinationAreaThree() {
    const destinationData = await getDestination();
    return (
        <div className="tp-destinations-area fix pb-95">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-12 col-sm-7">
                        <div className="tp-section-title-wrap mb-40">
                            <h5 className="tp-section-title-two-pre wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">Top places &</h5>
                            <h2 className="tp-section-title-two wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">Popular destinations</h2>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {destinationData.map((item, i) => (
                        <div key={item.id} className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tp-destinations-box mb-25 wow fadeInUp" data-wow-delay={`.${i + 1}s"`} data-wow-duration="1s">
                                <DestinationBox item={item} />
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}
