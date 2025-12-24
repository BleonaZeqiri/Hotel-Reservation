import { z } from 'zod';

const bookingZodSchema = z.object({
  body: z.object({
    hotelId: z.string({
      required_error: 'Hotel id is required',
    }),
    userId: z.string({
      required_error: 'User Id is required',
    }),
    checkin: z.string({
      required_error: 'Checkin is required',
    }),
    checkout: z.string({
      required_error: 'Checkout is required',
    }),
    adults: z.string({
      required_error: 'adults is required',
    }),
    children: z.string({
      required_error: 'children is required',
    }),
  }),
});


export const BookingValidation = {
  bookingZodSchema,
}