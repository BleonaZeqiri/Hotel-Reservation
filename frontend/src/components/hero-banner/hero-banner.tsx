import Link from "next/link";
import SearchForm from "../search/search-form";
import {NextArrow, PrevArrow, UpArrow } from "../svg";
import HeroBannerSlider from "./slider/banner-slider";

export default function HeroBanner() {
   return (
      <div className="tp-hero-area p-relative">
         {/* banner slider */}
         <HeroBannerSlider/>
         {/* banner slider */}
         <div className="tp-hero-arrow-box d-none d-sm-block">
            <button className="tp-hero-next">
               <NextArrow />
            </button>
            <button className="tp-hero-prev">
               <PrevArrow />
            </button>
         </div>
         <div className="tp-hero-content-area">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-10">
                     <div className="tp-hero-content text-center">
                        <div className="tp-hero-title-box mb-30">
                           <h5 className="tp-hero-subtitle mb-15 wow img-custom-anim-top" data-wow-duration="1s" data-wow-delay="0.1s">Best Choice for Family</h5>
                           <h2 className="tp-hero-title wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.4s">Indulge in a Luxurious<br /> Hotel Experience</h2>
                        </div>
                        <div className="tp-hero-btn-box  wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.4s">
                           <Link className="tp-btn" href="/about">
                              <span className="explore-text">Explore More</span>
                              <span className="tp-arrow-angle">
                                 {" "}<UpArrow />
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="tp-hero-date-form">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xxl-8 col-xl-9 col-lg-10 col-12">
                     {/* search area */}
                     <SearchForm/>
                     {/* search area */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
