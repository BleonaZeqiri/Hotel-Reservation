'use client';
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

type Props = {
   gallery: string[]
}
export default function RoomDetailsTwoGallery({ gallery }: Props) {
   const big_image = gallery[0];
   const other_images = gallery?.slice(1);
   return (
      <div className="tp-room-details-gellary mt-50 pb-85">
         <PhotoProvider>
            <div className="container container-1700">
               <div className="row tp-gx-15">
                  <div className="col-lg-6">
                     <div className="tp-room-gellary-thumb mb-15 p-relative">
                        <Image className="w-100" src={big_image} alt="thumb" width={828} height={477} />
                        <PhotoView src={big_image}>
                           <div className="tp-room-gellary-btn">
                              <a className="tp-btn-white popup-image pointer">View Photos</a>
                           </div>
                        </PhotoView>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="row tp-gx-15">
                        {other_images?.map((image, i) => (
                           <div key={i} className="col-lg-6 col-md-6">
                              <div className="tp-room-gellary-thumb mb-15">
                                 <PhotoView src={image}>
                                    <a className="popup-image pointer">
                                       <Image className="w-100" src={image} alt="thumb" width={408} height={232} />
                                    </a>
                                 </PhotoView>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </PhotoProvider>
      </div>
   )
}
