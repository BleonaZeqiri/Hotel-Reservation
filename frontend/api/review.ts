import { IDBResponseDT } from "@/types/db-response";
import { IResReview } from "@/types/review-d-t";

// get all reviews
export async function getReviewById(hotelId: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/${hotelId}`,{
    next:{
        tags: ['reviews']
    }
  });
  const res: IDBResponseDT<IResReview[]> = await response.json();
  if(!res.success) return [];
  return res.data;
}
