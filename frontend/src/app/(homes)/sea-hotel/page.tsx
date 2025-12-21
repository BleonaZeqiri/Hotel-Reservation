import AboutArea from "@/components/about/about-area";
import AmenitiesArea from "@/components/amenities/amenities-area";
import BlogArea from "@/components/blog/blog-area";
import HotelsGalleryArea from "@/components/gallery/hotels-gallery-area";
import HeroBannerFive from "@/components/hero-banner/hero-banner-5";
import HotelOfferRoom from "@/components/hotel/hotel-offer-room";
import HotelRooms from "@/components/hotel/hotel-rooms";
import InstagramArea from "@/components/instagram/instagram-area";
import HotelPackagesArea from "@/components/packages/hotel-packages-area";
import TestimonialArea from "@/components/testimonial/testimonial-area";


export default function SeaHotelPage() {
  return (
    <>

      <HeroBannerFive />

      <AmenitiesArea/>

      <AboutArea/>

      <HotelRooms/>

      <HotelOfferRoom/>

      <HotelsGalleryArea/>

      <HotelPackagesArea/>

      <TestimonialArea/>

      <BlogArea/>

      <InstagramArea/>
    </>
  )
}
