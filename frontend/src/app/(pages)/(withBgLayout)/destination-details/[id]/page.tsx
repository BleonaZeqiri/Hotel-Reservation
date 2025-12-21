import { Metadata } from "next";
import { getSingleDestination } from "@/api/destination";
import Image from "next/image";


export const metadata: Metadata = {
    title: "Destination Details  - Housey",
};

type IParams = Promise<{ id: string }>;

export default async function DestinationDetailsPage({ params }: { params: IParams}) {
    const { id } = await params;
    const destination = await getSingleDestination(id);
    return (
        <>

            <div className="tp-about-area pt-120 pb-90">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {destination?.image && (
                                <div className="tp-destinations-details-thumb pb-30">
                                    <Image className="w-100" src={destination.image} alt="thumb" width={588} height={480} style={{height:'auto'}} />
                                </div>
                            )}
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-about-hotel-content tp-about-hotel-content-two pb-30">
                                <div className="tp-about-title-box mb-20">
                                    <h2 className="tp-section-hotel-title-two mb-15">{destination?.name}</h2>
                                    <p>{destination?.description}</p>
                                </div>
                                <div className="tp-about-hotel-feature tp-about-hotel-feature-two mb-35">
                                    <ul>
                                        <li>
                                            <b>Country: </b>
                                            <span>United Kingdom</span>
                                        </li>
                                        <li>
                                            <b>Languages Spoken:</b>
                                            <span>English</span>
                                        </li>
                                        <li>
                                            <b>Visa Requirements:</b>
                                            <span> Personal Documents Requied</span>
                                        </li>
                                        <li>
                                            <b>Area (km2)</b>
                                            <span>88.000 km2</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
