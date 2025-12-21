import Image from "next/image";
import { IDestination } from "@/types/destination-d-t";
import Link from "next/link";

type IProps = {
    item: IDestination;
    top_cls?: string
};

export default function DestinationBox({ item, top_cls = 'shadows-2' }: IProps) {
    return (
        <div className={`tp-destinations-main ${top_cls}`}>
            <div className="tp-destinations-wrap fix p-relative">
                <div className="tp-destinations-thumb">
                    {item.image && (
                        <Image
                            src={item.image}
                            alt="destinations"
                            width={282}
                            height={200}
                        />
                    )}
                </div>
                {item.avgPropertyCategory && (
                    <div className="tp-destinations-rating">
                        <span>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </span>
                        <span>{item.avgPropertyCategory}</span>
                    </div>
                )}
                <div className="tp-destinations-content p-absolute">
                    <h3 className="tp-destinations-title">
                        <Link href={`/destination-details/${item.id}`}>{item.name}</Link>
                    </h3>
                </div>
            </div>
        </div>
    );
}
