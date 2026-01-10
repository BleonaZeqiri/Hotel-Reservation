"use client"
import Image from "next/image";
import ab_img from "@/assets/img/about/01.jpg";
import { Beds, Breakfast, Facing, Parking, SmartKey, SwimmingPool, VideoSvg } from "../svg";
import { useVideoModal } from "../provider/video-provider";


export default function AboutArea() {
   const { playVideo } = useVideoModal();
   return (
      <div className="tp-about-us-area tp-about-spacing tp-section-black p-relative">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 pt-115 pb-95">
                  <div className="tp-section-title-wrapper wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                     <h6 className="tp-section-title-pre-yellow tp-section-title-pre mb-5">A Few Words About Us</h6>
                     <h2 className="tp-section-title-white tp-section-title mb-60">Why Guests Love Staying With Us</h2>
                     <p className="tp-section-title-content mb-50">Escape the city and reconnect with nature at Prevalla Hotel.</p>
                  </div>
                  <div className="row">
                     <div className="col-md-6 col-sm-6">
                        <div className="tp-about-list  wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                           <ul>
                              <li>
                                 <span>
                                    <Beds />
                                 </span>
                                 <p>Cozy & comfortable mountain rooms</p>
                              </li>
                              <li>
                                 <span>
                                    <Parking />
                                 </span>
                                 <p>Free private parking</p>
                              </li>
                              <li>
                                 <span>
                                    <Facing />
                                 </span>
                                 <p>Breathtaking natural surroundings</p>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-md-6 col-sm-6">
                        <div className="tp-about-list  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                           <ul>
                              <li>
                                 <span>
                                    <SwimmingPool />
                                 </span>
                                 <p>Swimming Pool & SPA</p>
                              </li>
                              <li>
                                 <span>
                                    <SmartKey />
                                 </span>
                                 <p>Ideal for nature & winter escapes</p>
                              </li>
                              <li>
                                 <span>
                                    <Breakfast />
                                 </span>
                                 <p>Traditional breakfast options</p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 md-relative">
                  <Image className="tp-about-right-img" src={ab_img} alt="about" style={{height: 'auto'}} />
                  <div className="tp-about-video w-100 h-100 p-relative">
                     <button onClick={() => playVideo("go7QYaQR494")} className="tp-video-play tp-pulse-border">
                       <span className="p-relative z-index-11">
                           <VideoSvg />
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
