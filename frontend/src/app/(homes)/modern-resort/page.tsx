import { getCityHotels } from "@/api/hotel";
import AboutAreaTwo from "@/components/about/about-area-2";
import AdventuresArea from "@/components/adventures/adventures-area";
import BannerArea from "@/components/banner/banner-area";
import BrandArea from "@/components/brand/brand-area";
import ConnectedArea from "@/components/connected/connected-area";
import CtaArea from "@/components/cta/cta-area";
import DestinationAreaTwo from "@/components/destination/destination-area-2";
import HeroBannerFour from "@/components/hero-banner/hero-banner-4";
import CityHotels from "@/components/hotel/city-hotels";
import TestimonialAreaTwo from "@/components/testimonial/testimonial-area-2";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Modern Resort - Housey Resort and Hotel Next JS Template",
};

export default async function ModernResortPage() {
    const hotelData = await getCityHotels();
    return (
        <>
           <HeroBannerFour/>

           <DestinationAreaTwo/>

           <AboutAreaTwo/>

           <CityHotels cityHotels={hotelData}/>

           <AdventuresArea/>

           <BannerArea/>

           <TestimonialAreaTwo/>

           <BrandArea/>

           <ConnectedArea/>

           <CtaArea/>
        </>
    )
}
