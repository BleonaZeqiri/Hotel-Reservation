import { Metadata } from "next";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import PricingPackageArea from "@/components/packages/pricing-package-area";
import FaqAreaTwo from "@/components/faq/faq-area-two";


export const metadata: Metadata = {
    title: "Pricing Page - Housey",
}

export default function PricingPage() {
    return (
        <div>

            <BreadcrumbArea subtitle="Unique Pricing Plan" title="Flexible pricing Plan" />
            
            <PricingPackageArea/>
           
            <FaqAreaTwo/>
        </div>
    )
}
