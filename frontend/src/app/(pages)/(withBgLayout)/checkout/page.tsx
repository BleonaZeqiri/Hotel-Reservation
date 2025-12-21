import { Metadata } from "next";
import { cookies } from "next/headers";
// import BreadcrumbSeven from "@/components/breadcrumb/breadcrumb-seven";
import CheckoutArea from "@/components/checkout/checkout-area";
import { IUser } from "@/types/user-d-t";
import { getSingleHotel } from "@/api/hotel";
import { redirect } from "next/navigation";
import { getHotelPrice } from "@/utils/get-hotel-price";
import { getDayDifference } from "@/utils/date";
import StripeProvider from "@/components/provider/stripe-provider";
import axiosInstance from "@/lib/axios";

export const metadata: Metadata = {
    title: "Checkout Page - Housey",
};

type ISearchParams = Promise<{
    hotelId: string;
    checkin: string;
    checkout: string;
    adults: string;
    children: string;
}>;

export default async function CheckoutPage({
    searchParams,
}: {
    searchParams: ISearchParams;
}) {
    const cookieStore = await cookies();
    const { hotelId, checkin, checkout, adults, children } = await searchParams;
    const json = cookieStore.get("userInfo");
    const userInfo: { accessToken: string; user: IUser } | null = json
        ? JSON.parse(json.value)
        : null;
    if (!userInfo?.user) {
        redirect("/login");
    }
    if (!hotelId || !checkin || !checkout || !adults || !children) {
        redirect("/room-1");
    }

    const hotelInfo = await getSingleHotel(hotelId);

    let cost = getHotelPrice(Number(hotelInfo?.highRate), Number(hotelInfo?.lowRate));
    const days = getDayDifference(checkin, checkout);
    cost = cost * days

    const paymentIntent = await axiosInstance.post(
        `${process.env.NEXT_PUBLIC_API_URL}/booking/create-payment-intent`,
        {
            price: cost
        },
    );

    // console.log((await paymentIntent).data,'paymentIntent');
    const paymentIntentData:string = (await paymentIntent).data;

    return (
        <>
            {/* <BreadcrumbSeven title="Checkout" /> */}
        
            <StripeProvider>
                <CheckoutArea hotelName={hotelInfo?.name} price={cost} days={days} paymentIntent={paymentIntentData} />
            </StripeProvider>
        </>
    );
}
