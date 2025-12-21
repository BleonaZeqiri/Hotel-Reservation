
import { Metadata } from "next";
import Image from "next/image";
import DestinationAreaThree from "@/components/destination/destination-area-3";
import banner_img from '@/assets/img/about/about-4/bg.jpg';
import AdventuresArea from "@/components/adventures/adventures-area";
import BannerArea from "@/components/banner/banner-area";

export const metadata: Metadata = {
    title: "Destination Page - Housey",
}

export default function DestinationPage() {
    return (
        <>

            <div className="tp-breadcrumb-area pt-105 mb-45 p-relative">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="tp-breadcrumb-title-wrap text-center">
                                <h2 className="tp-breadcrumb-title-blog mb-10">Popular destinations</h2>
                                <p className="tp-breadcrumb-para-3">All our hotels are equipped with premium suites and first-class entertainment areas.
                                    The comfort and the needs of our guests come before all else here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
            <DestinationAreaThree />
        
            <div className="tp-about-big-thumb jarallax fix p-relative">
                <Image className="w-100 jarallax-img" src={banner_img} alt="thumb" style={{height:'auto'}} />
            </div>
      
            <AdventuresArea/>
    
            <BannerArea/>

        </>
    )
}
