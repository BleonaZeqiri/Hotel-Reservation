import { Metadata } from "next";
import FaqAreaThree from "@/components/faq/faq-area-three";
import BreadcrumbSix from "@/components/breadcrumb/breadcrumb-six";

export const metadata: Metadata = {
    title: "Faq Page - Housey",
}

export default function FaqPage() {
  return (
    <>

        <BreadcrumbSix title="Have a question in mind?" subtitle="Have Any Questions?" />

        <FaqAreaThree/>

    </>
  )
}
