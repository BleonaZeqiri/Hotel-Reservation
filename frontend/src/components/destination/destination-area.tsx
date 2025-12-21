import { getDestination } from "@/api/destination"
import DestinationSlider from "./destination-slider";


export default async function DestinationArea() {
    const destinationData = await getDestination();
    return (
        <div className="tp-destinations-area p-relative z-index-0 pb-60">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-12 col-sm-7">
                        <div className="tp-section-title-wrap mb-40">
                            <h5 className="tp-section-title-two-pre">Top places &</h5>
                            <h2 className="tp-section-title-two">Popular destinations</h2>
                        </div>
                    </div>
                    <div className="col-12 col-sm-5">
                        <div className="tp-destinations-arrow-box mb-30 d-flex justify-content-end">
                            <button className="tp-destinations-prev">
                                <i className="fa-regular fa-arrow-left"></i>
                            </button>
                            <button className="tp-destinations-next">
                                <i className="fa-regular fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <DestinationSlider destinations={destinationData} />
                    </div>
                </div>
            </div>
        </div>
    )
}
