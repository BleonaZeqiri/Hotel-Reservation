'use client';
import Link from "next/link";
import { faqDataTwo } from "@/data/faq-data";
import {
  CalenderTwo,
  HeadphoneSvg,
  HotelSvgTwo,
  PaymentSvg,
  TermsSvg,
  UpArrowTwo,
} from "../svg";
import FaqItem from "./faq-item";
import { useState } from "react";

export default function FaqAreaThree() {
  const [activeCategory, setActiveCategory] = useState("hotel");

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="tp-faq-area pt-120 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="tp-faq-sidebar-wrap mb-50">
              <div className="tp-faq-sidebar-box order-1 order-lg-0">
                <h4 className="tp-faq-sidebar-title mb-30">Categories</h4>
                <div className="tp-faq-sidebar-nav mb-20">
                  <ul className="tp-onepage-menu">
                    {[
                      { id: "hotel", icon: <HotelSvgTwo />, label: "Hotel" },
                      { id: "booking", icon: <CalenderTwo />, label: "Booking" },
                      { id: "payment", icon: <PaymentSvg />, label: "Payment" },
                      { id: "trams", icon: <TermsSvg />, label: "Terms and conditions" },
                    ].map((category) => (
                      <li key={category.id}>
                        <a
                          href={`#${category.id}`}
                          className={activeCategory === category.id ? "active" : ""}
                          onClick={(e) => {
                            e.preventDefault();
                            handleCategoryClick(category.id);
                          }}
                        >
                          <span className="borders"></span>
                          <span className="icon">{category.icon}</span>
                          <span>{category.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="tp-faq-contact-chat order-0 order-lg-1 mb-40">
                <div className="tp-faq-contact-icon">
                  <span>
                    <HeadphoneSvg />
                  </span>
                </div>
                <div className="tp-faq-contact-btn mb-10">
                  <Link href="/contact">
                    Live Chat
                    <span>
                      <UpArrowTwo />
                    </span>
                  </Link>
                </div>
                <p className="tp-faq-contact-text">
                  Still have a question in mind? Start a live chat with our
                  customer services.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tp-faq-tab-content-wrap mb-50">
              {faqDataTwo.map((item, i) => (
                <div
                  key={item.id}
                  id={item.id}
                  className={`tp-faq-wrapper tp-faq-wrapper-2 ${
                    faqDataTwo.length - 1 === i ? "mb-0" : "mb-75"
                  }`}
                >
                  <h4 className="tp-faq-sidebar-title mb-30">{item.title}</h4>
                  <div className="accordion" id={`${item.id}-faq`}>
                    {item.faqs.map((faq) => (
                      <FaqItem key={faq.id} item={faq} style_2={true} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
