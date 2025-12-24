export type ISaveReview = {
  userId: string;
  hotelId: string;
  comment: string;
  ratings: {
    staff: number;
    cleanliness: number;
    checkIn: number;
  };
};

export interface IResReview {
  id: string;
  hotelId: string;
  comment: string;
  ratings: {
    staff: number;
    cleanliness: number;
    checkIn: number;
  };
  username: string;
  avgRating: string;
  createdAt: string;
}
