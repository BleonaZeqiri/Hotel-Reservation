'use client';
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

type Props = {
   gallery: string[]
}
export default function RoomDetailsThreeGalleryArea({ gallery }: Props) {
   const big_image = gallery[0];
   const other_images = gallery.slice(1);
   return (
      <div className="tp-room-details-gellary pb-70">
         <PhotoProvider>
            <div className="container">
               <div className="row tp-gx-25">
                  <div className="col-lg-4">
                     <div className="tp-room-gellary-thumb tp-room-gellary-thumb-2 mb-25 p-relative">
                        <Image className="w-100" src={big_image} alt="thumb" width={384} height={481} style={{objectFit:'cover'}} />
                        <PhotoView src={big_image}>
                           <div className="tp-room-gellary-btn">
                              <a className="tp-btn-white tp-btn-white-2 popup-image pointer">
                                 View Photos
                              </a>
                           </div>
                        </PhotoView>
                     </div>
                  </div>
                  <div className="col-lg-8">
                     <div className="row tp-gx-25">
                        {other_images.map((image, i) => (
                           <div key={i} className="col-lg-6 col-md-6">
                              <div className="tp-room-gellary-thumb tp-room-gellary-thumb-2 mb-25">
                                 <PhotoView src={image}>
                                    <a className="popup-image pointer">
                                       <Image className="w-100" src={image} alt="thumb" width={384} height={229} />
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
