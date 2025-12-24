import mongoose, { Schema } from 'mongoose';
import { IBooking } from './booking.interface';

const bookingSchema = new Schema<IBooking>({
  hotelId: {
    required: true,
    type: Schema.Types.ObjectId,
  },
  userId: {
    required: true,
    type: Schema.Types.ObjectId,
  },
  checkin: {
    required: true,
    type: String,
  },
  checkout: {
    required: true,
    type: String,
  },
  adults: {
    required: true,
    type: Number,
  },
  children: {
    required: true,
    type: Number,
  },
  userDetails: {
    required: true,
    type: Object,
  },
});

export const bookingModel =
  mongoose.models.bookings ?? mongoose.model('bookings', bookingSchema);
