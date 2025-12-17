import Image from "next/image";
import card_img from "@/assets/img/card/01.png";
import { XSvgTwo } from "../svg";

export default function FooterTwo() {
  return (
    <footer>
    <div className="tp-footer-two-area">
       <div className="container">
          <div className="row tp-footer-border-2 mb-40 pt-50">
             <div className="col-lg-5 col-md-7 col-12 mb-30">
                <div className="tp-footer-widget-2">
                   <h3 className="tp-footer-widget-title-2 mb-15">Don’t miss <br/>Our Latest Updated</h3>
                   <div className="tp-footer-form-2 mb-30">
                      <form action="#">
                         <div className="tp-footer-input-2 p-relative">
                            <input type="email" placeholder="Enter your email address"/>
                            <button type="button" className="tp-footer-input-btn tp-footer-input-btn-2 p-absolute">Subscribe</button>
                         </div>
                      </form>
                   </div>
                   <div className="tp-footer-social-2">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-youtube"></i></a>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      <a href="#"> <XSvgTwo/> </a>
                   </div>
                </div>
             </div>
             <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                <div className="tp-footer-widget-content tp-footer-widget-content-2 ml-100">
                   <ul>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Destinations</a></li>
                      <li><a href="#">Tours</a></li>
                      <li><a href="#">Reviews</a></li>
                      <li><a href="#">Contact Us</a></li>
                   </ul>
                </div>
             </div>
             <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                <div className="tp-footer-widget-content tp-footer-widget-content-2">
                   <ul>
                      <li><a href="#">Deals</a></li>
                      <li><a href="#">Holiday Packages</a></li>
                      <li><a href="#">Cars, Tours, Activities</a></li>
                      <li><a href="#">Marriott Vacation Club</a></li>
                      <li><a href="#">Resorts</a></li>
                   </ul>
                </div>
             </div>
          </div>
       </div>
       <div className="tp-footer-bottom-2 tp-bg-gray-3">
          <div className="container">
             <div className="row align-items-center">
                <div className="col-md-6 pb-20">
                   <div className="tp-footer-copyright tp-footer-copyright-2">
                      <p>Copyright © {new Date().getFullYear()} <a href="#">Themepure</a>. All Rights Reserved.</p>
                   </div>
                </div>
                <div className="col-md-6 pb-20">
                   <div className="tp-footer-card text-right">
                      <a href="#"><Image src={card_img} alt="card"/></a>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </footer>
  )
}
