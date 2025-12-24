import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { replaceMongoIdInArray } from '../../../utils/data-util';
import { bookingModel } from '../booking/booking.model';
import { Rating } from '../rating/rating.model';
import { IReview } from './review.interface';
import { Review } from './review.model';

const addReview = async (data: IReview): Promise<{ message: string }> => {
  const { userId, hotelId, comment, ratings } = data;


  const booking = await bookingModel.findOne({ userId, hotelId });
  if (!booking) {
    throw new ApiError(httpStatus.FORBIDDEN, 'You must have a booking to leave a review');
  }

  // Check if user already reviewed (optional)
  const existingReview = await Review.findOne({ userId, hotelId });
  if (existingReview) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'You have already reviewed');
  }

  // Create and save the review
  const review = new Review({ userId, hotelId, comment, ratings });
  await review.save();

  // Update or create the aggregated rating
  const ratingData = await Rating.findOne({ hotelId });

  if (ratingData) {
    // Update existing rating
    const newTotalReviews = ratingData.totalReviews + 1;

    ratingData.averageRatings.staff =
      (ratingData.averageRatings.staff * ratingData.totalReviews +
        ratings.staff) /
      newTotalReviews;

    ratingData.averageRatings.cleanliness =
      (ratingData.averageRatings.cleanliness * ratingData.totalReviews +
        ratings.cleanliness) /
      newTotalReviews;

    ratingData.averageRatings.checkIn =
      (ratingData.averageRatings.checkIn * ratingData.totalReviews +
        ratings.checkIn) /
      newTotalReviews;

    ratingData.totalReviews = newTotalReviews;
    await ratingData.save();
  } else {
    // Create new rating
    const newRating = new Rating({
      hotelId,
      averageRatings: ratings,
      totalReviews: 1,
    });
    await newRating.save();
  }
  return { message: 'Review added successfully!' };
};

// get all reviews
const getAllReviews = async () => {
  const reviews = await Review.find()
    .populate({
      path: 'userId',
      select: 'username',
    })
    .select('-__v -updatedAt')
    .lean();

  // Restructure the result to replace "userId" with "username"
  const result = reviews.map((review) => ({
    ...review,
    username: review.userId?.username, // Add "username"
    userId: undefined, // Remove "userId"
    avgRating: (
      (review.ratings.staff + review.ratings.cleanliness + review.ratings.checkIn) /
      3
    ).toFixed(1), // Calculate average rating
  }));

  return replaceMongoIdInArray(result);
};

// get review by hotel id
const getReviewByHotel = async (hotelId:string) => {
  const reviews = await Review.find({hotelId})
    .populate({
      path: 'userId',
      select: 'username',
    })
    .select('-__v -updatedAt')
    .lean();

  // Restructure the result to replace "userId" with "username"
  const result = reviews.map((review) => ({
    ...review,
    username: review.userId?.username, // Add "username"
    userId: undefined, // Remove "userId"
    avgRating: (
      (review.ratings.staff + review.ratings.cleanliness + review.ratings.checkIn) /
      3
    ).toFixed(1), // Calculate average rating
  }));

  return replaceMongoIdInArray(result);
};

export const ReviewService = {
  addReview,
  getAllReviews,
  getReviewByHotel,
};
