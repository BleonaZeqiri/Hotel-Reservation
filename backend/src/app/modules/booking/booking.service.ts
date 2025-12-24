import httpStatus from 'http-status';
import Stripe from 'stripe';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { replaceMongoIdInObject } from '../../../utils/data-util';
import { IBooking } from './booking.interface';
import { bookingModel } from './booking.model';
import { isDateInbetween } from './booking.utils';

// check booking
const checkBooking = async (
  hotelId: string,
  checkin: string,
  checkout: string
) : Promise<{ isBooked: boolean }> => {
  const matches = await bookingModel
    .find({ hotelId: hotelId.toString() })
    .lean();

  const found = matches.find(match => {
    return (
      isDateInbetween(checkin, match.checkin, match.checkout) ||
      isDateInbetween(checkout, match.checkin, match.checkout)
    );
  });

  if (found) {
    return { isBooked: true };
  } else {
    return { isBooked: false };
  }
};

const stripe = new Stripe(config.stripe_secret_key as string);

// create  payment intent
async function createPaymentIntent(price: number) {
  const amount = price * 100;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'usd',
      amount: amount,
      payment_method_types: ['card'],
    });
    return paymentIntent.client_secret;
  } catch (error) {
    console.error('Error in createPaymentIntentService:', error);
  }
}

// save booking
async function saveBooking(bookingData: IBooking): Promise<IBooking> {
  // Destructure the necessary fields
  const { hotelId, checkin, checkout } = bookingData;

  // Check if the dates are already booked
  const { isBooked } = await checkBooking(hotelId.toString(), checkin, checkout);

  if (isBooked) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Dates are already booked');
  }

  // Save the booking if dates are available
  const result = await bookingModel.create(bookingData);
  return replaceMongoIdInObject(result.toObject());
}

// get booking by id
async function getBookingById(id: string): Promise<IBooking> {
  const result = await bookingModel.findById(id).lean();
  return replaceMongoIdInObject(result);
}

export const BookingService = {
  saveBooking,
  checkBooking,
  createPaymentIntent,
  getBookingById
};
