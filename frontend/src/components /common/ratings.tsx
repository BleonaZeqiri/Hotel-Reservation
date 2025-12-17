"use client";
import { Rating } from 'react-simple-star-rating';

interface StarRatingProps {
  initialRating?: number;
  onRate?: (rate: number) => void;
  starSize?: number;
  readonly?: boolean;
  allowHalfStars?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  initialRating = 0,
  onRate,
  starSize = 18,
  readonly = false,
  allowHalfStars = true,
}) => {

  const handleRating = (rate: number) => {
    if (onRate) {
      onRate(rate); // Call the onRate callback if it exists
    }
  };

  return (
    <Rating
      onClick={handleRating}
      initialValue={initialRating}
      size={starSize}
      readonly={readonly}
      allowFraction={allowHalfStars}
      fillColor='#FF9E0D'
    />
  );
};

export default StarRating;



