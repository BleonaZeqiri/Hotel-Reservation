import mongoose, { Schema } from "mongoose";
import { IRating } from "./rating.interface";


const RatingSchema = new Schema<IRating>(
  {
    hotelId: { type: Schema.Types.ObjectId, required: true, ref: "hotels" },
    averageRatings: {
      staff: { type: Number, required: true, default: 0 },
      cleanliness: { type: Number, required: true, default: 0 },
      checkIn: { type: Number, required: true, default: 0 },
    },
    totalReviews: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

export const Rating = mongoose.model<IRating>("Rating", RatingSchema);