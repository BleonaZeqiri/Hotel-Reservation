"use client";
import Image from "next/image";
import Ratings from "../common/ratings";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import testi_img_2 from "@/assets/img/testimonial/02.png";
import tree_img from "@/assets/img/testimonial/tree.png";

// swiper options
const swiper_options: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".tp-tesimonial-next",
    prevEl: ".tp-tesimonial-prev",
  },
};
// testimonial data
const testimonialData = [
  {
    id: 1,
    rating: 5,
    text: "“This was an amazing trip! There were so many highlights... our outstanding, kind, patient, amazing leader Gustavo!! What an absolute saint. He was so organized and insightful!”",
    avatar: "/assets/img/testimonial/01.png",
    name: "Ronald Richards",
    location: "From New York",
  },
  {
    id: 2,
    rating: 4.5,
    text: "“This was an amazing trip! There were so many highlights... our outstanding, kind, patient, amazing leader Gustavo!! What an absolute saint. He was so organized and insightful!”",
    avatar: "/assets/img/testimonial/03.png",
    name: "Ronald Richards",
    location: "From New York",
  },
];

export default function TestimonialAreaTwo() {
  return (
    <div className="tp-testimonial-area fix pt-5 pb-130 p-relative">
      <Image
        className="tp-testimonial-tree tpswings d-none d-xxl-block"
        src={tree_img}
        alt="tree"
        style={{ height: "auto" }}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-testimonial-two-border pt-75">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div
                    className="tp-testimonial-two-title mb-50  wow fadeInUp"
                    data-wow-delay=".4s"
                    data-wow-duration="1s"
                  >
                    <h5 className="tp-section-title-two-pre">Testimonials</h5>
                    <h2 className="tp-section-title-two fs-40">
                      What Our Travelers Are Saying
                    </h2>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-lg-5 col-md-8">
                      <div className="tp-testimonial-two-thumb text-center">
                        <Image
                          src={testi_img_2}
                          alt="testimonial"
                          style={{ height: "auto" }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="tp-testimonial-two-slider-wrap">
                        <Swiper
                          {...swiper_options}
                          modules={[Pagination, Autoplay, Navigation]}
                          className="swiper-container tp-testimonial-active-2"
                        >
                          {testimonialData.map((item) => (
                            <SwiperSlide key={item.id} className="swiper-slide">
                              <div className="tp-testimonial-two-content">
                                <div className="tp-testimonial-two-rating mb-20">
                                  <Ratings initialRating={item.rating} readonly={true} />
                                </div>
                                <p className="tp-testimonial-two-para mb-40">
                                  {item.text}
                                </p>
                                <div className="tp-testimonial-avater-wrap d-flex align-items-center">
                                  <div className="tp-testimonial-avater-thumb mr-10">
                                    <Image
                                      src={item.avatar}
                                      alt="testimonial"
                                      width={50}
                                      height={50}
                                    />
                                  </div>
                                  <div className="tp-tesimonial-avater-info">
                                    <h5 className="tp-testimonial-avater-title">
                                      Ronald Richards
                                    </h5>
                                    <span className="tp-testimonial-avater-location">
                                      From New York
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                          <div className="tp-testimonial-arrow-box d-flex justify-content-end">
                            <button className="tp-tesimonial-prev">
                              <i className="fa-regular fa-arrow-left"></i>
                            </button>
                            <button className="tp-tesimonial-next ml-15">
                              <i className="fa-regular fa-arrow-right"></i>
                            </button>
                          </div>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
