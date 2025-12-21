import { getModernHotels } from "@/api/hotel";
import HotelSlider from "./hotel-slider";



export default async function HotelRooms() {
   const allHotels =  await getModernHotels();
   return (
      <div className="tp-suites-area pt-115 pb-115">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tp-section-title-wrapper mb-60 text-center">
                     <h6 className="tp-section-title-pre-red tp-section-title-pre  wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">Extraordinary Suites</h6>
                     <h2 className="tp-section-title  wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">Discover Tranquility in<br /> Our Relax Rooms</h2>
                  </div>
               </div>
               <div className="col-lg-12">
                  <HotelSlider hotels={allHotels}/>
               </div>
            </div>
         </div>
      </div>
   )
}
