import { Types } from "mongoose";

export type IReview = {
  userId: Types.ObjectId;
  hotelId: Types.ObjectId;
  comment: string;
  ratings: {
    staff: number;
    cleanliness: number;
    checkIn: number;
  };
};
