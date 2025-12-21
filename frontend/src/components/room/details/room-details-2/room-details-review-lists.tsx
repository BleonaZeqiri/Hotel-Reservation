import { getReviewById } from "@/api/review";
import StarRating from "@/components/common/ratings";
import { formatDate } from "@/utils/date";

type IProps = {
  hotelId: string
};
export default async function RoomDetailsReviewLists({hotelId}: IProps) {
  const reviews = await getReviewById(hotelId);

  return (
    <div className="tp-room-review-list mb-25">
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <ReviewItem
            key={index}
            name={review?.username}
            date={formatDate(review?.createdAt)}
            text={review?.comment}
            rating={Number(review?.avgRating)}
          />
        ))
      ) : (
        <h4>No reviews yet</h4>
      )}
    </div>
  );
}
;

type Props = {name: string;date: string;text: string;rating: number;}

function ReviewItem({name, date, text, rating }:Props) {
  return (
    <div className="tp-room-review-item">
      <div className="tp-room-review-avater">
        <div className="tp-room-review-avater-thumb d-flex align-items-center justify-content-center">
          {name[0]?.toUpperCase()}
        </div>
        <div className="tp-room-review-avater-info">
          <div className="tp-room-review-rating mb-2">
            <StarRating initialRating={rating} readonly={true} />
          </div>
          <div className="tp-room-review-avater-content">
            <h4 className="tp-room-review-avater-title">
              {name} <span>{date}</span>
            </h4>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

