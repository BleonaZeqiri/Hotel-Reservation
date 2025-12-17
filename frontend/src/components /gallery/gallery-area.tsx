'use client';
import Image from "next/image";
import { useEffect } from "react";
import { useIsotop } from "@/hooks/use-isotop";

// images
import gallery_1 from "@/assets/img/gellary/gallery/gallery-1.jpg";
import gallery_2 from "@/assets/img/gellary/gallery/gallery-2.jpg";
import gallery_3 from "@/assets/img/gellary/gallery/gallery-3.jpg";
import gallery_4 from "@/assets/img/gellary/gallery/gallery-4.jpg";
import gallery_5 from "@/assets/img/gellary/gallery/gallery-8.jpg";
import gallery_6 from "@/assets/img/gellary/gallery/gallery-6.jpg";
import gallery_7 from "@/assets/img/gellary/gallery/gallery-5.jpg";
import gallery_8 from "@/assets/img/gellary/gallery/gallery-7.jpg";
import gallery_9 from "@/assets/img/gellary/gallery/gallery-9.jpg";

const gallery_images = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
    gallery_8,
    gallery_9
];


export default function GalleryArea() {
    const { initIsotop,isotopContainer } = useIsotop();

    useEffect(() => {
        initIsotop();
    }, [initIsotop]);
    
    return (
        <div className="tp-gallery-area-start pt-120 pb-95">
            <div className="container">
                <div className="row grid gx-25" ref={isotopContainer}>
                    {gallery_images.map((image, i) => (

                        <div key={i} className="col-lg-4 col-md-6 col-sm-6 grid-item mb-25">
                            <div className="tp-gallery-thumb">
                                <Image className="w-100" src={image} alt="gallery-image" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
