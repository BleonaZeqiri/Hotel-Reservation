'use client';
import React, { useEffect, useState } from "react";
import HotelCard from "./single/hotel-card";
import { ActivitySvg, AirPlane, BedsTwo, Rentals, UpArrow } from "../svg";
import { IHotelRoom } from "@/types/hotel-d-t";
import Link from "next/link";

const tab_btns = [
   { id: 1, title: 'Hotels', icon: <BedsTwo /> },
   { id: 2, title: 'Tour', icon: <AirPlane /> },
   { id: 3, title: 'Activity', icon: <ActivitySvg /> },
   { id: 4, title: 'Rentals', icon: <Rentals /> }
]

type IProps = {
   cityHotels: IHotelRoom[]
}

export default function CityHotels({ cityHotels }: IProps) {
   const [activeTab, setActiveTab] = useState(1);
   const [filteredHotels, setFilteredHotels] = useState<IHotelRoom[]>(cityHotels);

   useEffect(() => {
      let filtered: IHotelRoom[];

      switch (activeTab) {
         case 1:
            filtered = [...cityHotels]; 
            break;
         case 2:
            filtered = [...cityHotels].slice(0, 3);
            break;
         case 3:
            filtered = [...cityHotels].slice(3, 5);
            break;
         case 4:
            filtered = [...cityHotels].slice(5);
            break;
         default:
            filtered = cityHotels;
      }

      setFilteredHotels(filtered);
   }, [activeTab, cityHotels]);
   return (
      <div className="tp-place-area tp-bg-gray-2 pb-110 pt-115">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="tp-place-title-wrap mb-30 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                     <h5 className="tp-section-title-two-pre m-0">Featured Trips</h5>
                     <h2 className="tp-section-title-two">Recommended places to Stay</h2>
                  </div>
               </div>
            </div>
            <div className="row align-items-center pb-20  wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
               <div className="col-lg-8 pb-30">
                  <div className="nav tp-place-tab-btn-list" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                     {tab_btns.map((item) => (
                        <button key={item.id} onClick={() => setActiveTab(item.id)} className={`tp-place-tab-btn nav-link ${activeTab === item.id ? 'active' : ''}`}>
                           {item.icon}
                           {item.title}
                        </button>
                     ))}
                  </div>
               </div>
               <div className="col-lg-4 pb-30">
                  <div className="tp-place-right-btn text-right">
                     <Link className="tp-btn-sm" href="/room-1">See All
                        <UpArrow />
                     </Link>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="tp-banking-img-wrapper tab-content">
                     <div className="tab-pane fade show active">
                        <div className="row">
                           {filteredHotels.map((item) => (
                              <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 pb-25 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                                 <HotelCard item={item} />
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
