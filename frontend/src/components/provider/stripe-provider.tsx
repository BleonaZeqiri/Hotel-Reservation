"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// stripePromise
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);

export default function StripeProvider({ children }: { children: React.ReactNode }) {

  return (
    <Elements stripe={stripePromise}>{children}</Elements>
  );
}
