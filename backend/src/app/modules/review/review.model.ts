import mongoose, { Schema } from 'mongoose';
import { IReview } from './review.interface';


const ReviewSchema = new Schema<IReview>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    hotelId: { type: Schema.Types.ObjectId, required: true, ref: 'Hotel' },
    comment: { type: String, required: true },
    ratings: {
      staff: { type: Number, required: true, min: 1, max: 5 },
      cleanliness: { type: Number, required: true, min: 1, max: 5 },
      checkIn: { type: Number, required: true, min: 1, max: 5 },
    },
  },
  { timestamps: true }
);


export const Review =
  mongoose.models.Review ?? mongoose.model<IReview>('Review', ReviewSchema);
