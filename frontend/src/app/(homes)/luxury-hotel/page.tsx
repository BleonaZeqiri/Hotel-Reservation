import { Metadata } from "next";
import AboutAreaThree from "@/components/about/about-area-3";
import BenefitArea from "@/components/benefit/benefit-area";
import FaqArea from "@/components/faq/faq-area";
import HotelGalleryAreaTwo from "@/components/gallery/hotel-gallery-area-2";
import HeroBannerThree from "@/components/hero-banner/hero-banner-3";
import LuxuryHotels from "@/components/hotel/luxury-hotels";
import OfferArea from "@/components/offer/offer-area";
import SearchThree from "@/components/search/search-three";
import ServiceArea from "@/components/service/service-area";
import TextSliderArea from "@/components/text-slider/text-slider-area";
import VideoArea from "@/components/video/video-area";


export const metadata: Metadata = {
  title: "Luxury Hotel - Housey Resort and Hotel Next JS Template",
};

export default function LuxuryHotelPage() {
  return (
    <>

      <HeroBannerThree/>

      <SearchThree/>

      <AboutAreaThree/>

      <BenefitArea/>

      <HotelGalleryAreaTwo/>

      <LuxuryHotels/>

      <VideoArea/>

      <OfferArea/>

      <TextSliderArea/>

      <FaqArea/>

      <ServiceArea/>
    </>
  )
}
