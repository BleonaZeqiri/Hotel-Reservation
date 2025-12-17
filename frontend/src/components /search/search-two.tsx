import SearchForm from './search-form';
import { CarSvg, FlightSvg, HolidaySvg, HotelSvg } from '../svg';

export default function SearchTwo() {
   return (
      <div className="tp-hero-two-search-form-wrap">
         <div className="row justify-content-center">
            <div className="col-xxl-10 col-xl-11 col-12">
               <div className="tp-hero-two-search-form-inner">
                  <div className="tp-hero-booking-form-tab">
                     <div className="row">
                        <div className="col-lg-8 col-md-8">
                           <div className="tp-hero-booking-tab-btn">
                              <nav>
                                 <div className="nav nav-tab" id="nav-tab" role="tablist">
                                    <button className="nav-links active" id="nav-platform-tab" data-bs-toggle="tab" data-bs-target="#nav-platform" type="button" role="tab" aria-controls="nav-platform" aria-selected="true" tabIndex={0}>
                                       <span className="borders"></span>
                                       <span className="icon">
                                          <FlightSvg/>
                                       </span>
                                       <span>Flights</span>
                                    </button>
                                    <button className="nav-links" id="nav-tracking-tab" data-bs-toggle="tab" data-bs-target="#nav-tracking" type="button" role="tab" aria-controls="nav-tracking" aria-selected="false" tabIndex={-1}>
                                       <span className="borders"></span>
                                       <span className="icon">
                                          <HotelSvg/>
                                       </span>
                                       <span>Hotel</span>
                                    </button>
                                    <button className="nav-links" id="nav-support-tab" data-bs-toggle="tab" data-bs-target="#nav-support" type="button" role="tab" aria-controls="nav-support" aria-selected="false" tabIndex={-1}>
                                       <span className="borders"></span>
                                       <span className="icon">
                                          <HolidaySvg/>
                                       </span>
                                       <span>Holiday</span>
                                    </button>
                                    <button className="nav-links" id="nav-terms-tab" data-bs-toggle="tab" data-bs-target="#nav-terms" type="button" role="tab" aria-controls="nav-terms" aria-selected="false" tabIndex={-1}>
                                       <span className="borders"></span>
                                       <span className="icon">
                                          <CarSvg/>
                                       </span>
                                       <span>Cars</span>
                                    </button>
                                 </div>
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tp-hero-booking-tab-content">
                     <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-platform" role="tabpanel" aria-labelledby="nav-platform-tab" tabIndex={0}>
                           <SearchForm style_2='round-6' />
                        </div>
                        <div className="tab-pane fade" id="nav-tracking" role="tabpanel" aria-labelledby="nav-tracking-tab" tabIndex={0}>
                           <SearchForm style_2='round-6' />
                        </div>
                        <div className="tab-pane fade" id="nav-support" role="tabpanel" aria-labelledby="nav-support-tab" tabIndex={0}>
                           <SearchForm style_2='round-6' />
                        </div>
                        <div className="tab-pane fade" id="nav-terms" role="tabpanel" aria-labelledby="nav-terms-tab" tabIndex={0}>
                           <SearchForm style_2='round-6' />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
