import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookingController } from './booking.controller';
import { BookingValidation } from './booking.validation';

const router = express.Router();

router.post(
  '/create',
  validateRequest(BookingValidation.bookingZodSchema),
  BookingController.createBooking
);

router.post(
  '/check-booking',
  BookingController.checkBooking
);

router.post('/create-payment-intent',BookingController.createPaymentIntent);

router.get('/:id',BookingController.getBookingById);

export const BookingRoutes = router;
