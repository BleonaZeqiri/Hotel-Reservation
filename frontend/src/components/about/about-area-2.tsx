import Image from 'next/image';
import shape_1 from '@/assets/img/about/shape.png';
import shape_2 from '@/assets/img/about/shape-2.png';
import shape_3 from '@/assets/img/about/shape-3.png';
import { Booking, TourGuide } from '../svg';
import BirdAnimation from '../common/bird-animation';

export default function AboutAreaTwo() {
   return (
      <div className="tp-about-area fix tp-about-two-spacing p-relative bg-position pt-95" data-background="/assets/img/about/bg2.jpg" style={{ backgroundImage: 'url(/assets/img/about/bg2.jpg)' }}>
         <div className="tp-about-shape-wrap">
            <Image className="tp-about-shape tpswings" src={shape_1} alt="shape" />
            <Image className="tp-about-shape-2 tpswings" src={shape_2} alt="shape" />
         </div>
         <div className="tp-about-svg-animetion">
            <BirdAnimation/>
         </div>
         <div className="tp-about-content p-relative z-index-11">
            <div className="container">
               <div className="row">
                  <div className="col-lg-7">
                     <div className="tp-about-two-title-area h-100 p-relative">
                        <h5 className="tp-section-two-title-pre wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">Explore the</h5>
                        <h2 className="tp-section-two-title wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">beautiful world.</h2>
                        <Image className="tp-about-shape-3 d-none d-lg-block tpswings" src={shape_3} alt="about" />
                     </div>
                  </div>
                  <div className="col-lg-5">
                     <div className="tp-about-two-content pt-115 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                        <h3 className="tp-about-two-title mb-20">Make it memorable.</h3>
                        <p className="tp-about-two-para mb-60">I’m inspiring adventures, beautiful locations and timeless experiences. My team of travel experts are ready to craft your next unforgettable holiday.</p>
                        <div className="row">
                           <div className="col-sm-6 mb-15">
                              <div className="tp-about-two-item mr-30 d-flex">
                                 <span>
                                    <TourGuide/>
                                 </span>
                                 <p>Best<br /> Tour Guide</p>
                              </div>
                           </div>
                           <div className="col-sm-6 mb-15">
                              <div className="tp-about-two-item ml-25 mr-15 d-flex">
                                 <span>
                                    <Booking/>
                                 </span>
                                 <p>Easy<br /> Booking</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
