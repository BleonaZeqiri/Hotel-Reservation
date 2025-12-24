import { Types } from 'mongoose';

export type IRating = {
  hotelId: Types.ObjectId;
  averageRatings: {
    staff: number;
    cleanliness: number;
    checkIn: number;
  };
  totalReviews: number;
};
