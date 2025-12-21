import { Metadata } from "next";
import ContactArea from "@/components/contact/contact-area";
import ContactItemArea from "@/components/contact/contact-item-area";


export const metadata: Metadata = {
    title: "Contact Page - Housey",
};


export default function ContactPage() {
    return (
        <>

            <ContactArea/>
       
            <ContactItemArea/>

        </>
    )
}
