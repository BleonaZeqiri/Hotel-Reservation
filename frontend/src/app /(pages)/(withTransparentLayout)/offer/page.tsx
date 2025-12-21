import { Metadata } from "next";
import OfferArea from "@/components/offer/offer-area";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";


export const metadata: Metadata = {
    title: "Offer Page - Housey",
};


export default function OfferPage() {
    return (
        <>

            <BreadcrumbArea subtitle="Offers/Promotions" title="Exclusive offers" />

            <OfferArea allOffers={true} />

        </>
    )
}
