'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";
import Ratings from "../common/ratings";


const swiper_options: SwiperOptions = {
   slidesPerView: 1,
   spaceBetween: 30,
   autoplay: {
      delay: 4000,
   },
   pagination: {
      el: ".tp-testimonial-pagination",
      clickable: true,
   },
}


const testimonialData = [
   {
      id: 1,
      rating: 5,
      title: "Flexible Booking Options",
      content: "Opt for flexible booking options in case your travel plans change. Some platforms offer free cancellations or modifications within a specified period. Explore bundled options that include hotel stays, flights, and car rentals.",
      image: "/assets/img/testimonial/01.png",
      name: "Ronald Richards",
      location: "From New York"
   },
   {
      id: 2,
      rating: 5,
      title: "Flexible Booking Options",
      content: "“This was an amazing trip! There were so many highlights... our outstanding, kind, patient, amazing leader Gustavo!! What an absolute saint. He was so organized and insightful!”",
      image: "/assets/img/testimonial/03.png",
      name: "Ronald Richards",
      location: "From New York"
   },
   {
      id: 3,
      rating: 5,
      title: "Flexible Booking Options",
      content: "Opt for flexible booking options in case your travel plans change. Some platforms offer free cancellations or modifications within a specified period. Explore bundled options that include hotel stays, flights, and car rentals.",
      image: "/assets/img/testimonial/01.png",
      name: "Bertha J. Young",
      location: "From Paris"
   },
   {
      id: 4,
      rating: 5,
      title: "Flexible Booking Options",
      content: "“This was an amazing trip! There were so many highlights... our outstanding, kind, patient, amazing leader Gustavo!! What an absolute saint. He was so organized and insightful!”",
      image: "/assets/img/testimonial/03.png",
      name: "Gerardo V. Smith",
      location: "Mantes-La-Joile"
   }
];


export default function TestimonialArea() {
   return (
      <div className="tp-testimonial-area">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tp-bg-gray pt-95 pb-105">
                     <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                           <Swiper {...swiper_options} modules={[Pagination, Autoplay, Navigation]} className="swiper-container tp-testimonial-active">
                              {testimonialData.map((item) => (
                                 <SwiperSlide key={item.id} className="swiper-slide">
                                    <div className="tp-testimonial-wrapper text-center">
                                       <div className="tp-testimonial-title-wrap">
                                          <div className="tp-testimonial-ratings mb-15">
                                             <Ratings initialRating={item.rating} readonly={true} />
                                          </div>
                                          <h2 className="tp-testimonial-title mb-25">{item.title}</h2>
                                       </div>
                                       <div className="tp-testimonial-content mb-30">
                                          <p>{item.content}</p>
                                       </div>
                                       <div className="tp-testimonial-clients">
                                          <Image src={item.image} alt="testionial" width={50} height={50} />
                                          <span className="tp-testimonial-clients-name">
                                             {item.name}
                                          </span>
                                          <span className="tp-testimonial-clients-lucation">
                                             {item.location}
                                          </span>
                                       </div>
                                    </div>
                                 </SwiperSlide>
                              ))}
                              <div className="tp-testimonial-pagination"></div>
                           </Swiper>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
