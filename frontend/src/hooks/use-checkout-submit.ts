import { ICheckoutForm } from "@/types/form-d-t";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import axiosInstance from "@/lib/axios";
import useGlobalContext from "./use-global-context";
import { notifyError, notifySuccess } from "@/utils/toast";

export default function useCheckoutSubmit(paymentIntentData: string) {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const checking = searchParams.get("checkin");
  const checkout = searchParams.get("checkout");
  const adults = searchParams.get("adults");
  const children = searchParams.get("children");
  const hotelId = searchParams.get("hotelId");
  const { userInfo } = useGlobalContext();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICheckoutForm>({
    defaultValues: {
      fname: userInfo?.user?.username,
      email: userInfo?.user?.email,
    }
  });
  const stripe = useStripe();
  const elements = useElements();
  const onSubmit: SubmitHandler<ICheckoutForm> = async (
    values: ICheckoutForm
  ) => {
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      return;
    }

    if (!paymentIntentData) {
      //   toast.error("Payment intent client_secret is missing.");
      notifyError("Error creating payment intent");
      return;
    }

    setLoading(true); // Set loading state to true when submission starts
    console.log(paymentIntentData, "paymentIntentData");
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      paymentIntentData,
      {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: values.fname,
            email: values.email,
          },
        },
      }
    );

    if (error) {
      console.log(error, "error");
      notifyError(error?.message || "Error processing payment.");
      setLoading(false); // Reset loading state in case of error
      return;
    }

    if (paymentIntent) {
      try {
        // Directly use the result of the mutation
        const saveOrderResult = await axiosInstance.post("/booking/create", {
          hotelId: hotelId,
          userId: userInfo.user.id,
          checkin: checking,
          checkout: checkout,
          adults: adults,
          children: children,
          userDetails: values,
        });

        // Check the returned result from the saveOrder function
        if (saveOrderResult?.data) {
          console.log(saveOrderResult.data, "saveOrderResult");
          notifySuccess("Order saved successfully!");
          router.push(`/booking/${saveOrderResult.data?.id}`);
        } else {
          notifyError(
            saveOrderResult?.data?.message ||
              "Failed to save order. Please try again."
          );
        }
      } catch (err) {
        console.error("Error saving order:", err);
        const errMsg = err as { message: string };
        notifyError(errMsg?.message || "Error saving order. Please try again.");
      }
    }

    setLoading(false); // Reset loading state after submission completes
    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    checking,
    checkout,
    adults,
    children,
    loading,
  };
}
