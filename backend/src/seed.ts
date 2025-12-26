import Amenities from "./app/modules/amenities/amenities.model";
import { bookingModel } from "./app/modules/booking/booking.model";
import Destination from "./app/modules/destination/destination.model";
import Hotel from "./app/modules/hotel/hotel.model";
import { Rating } from "./app/modules/rating/rating.model";
import { Review } from "./app/modules/review/review.model";
import User from "./app/modules/user/user.model";
import dbConnect from "./db-connect";

// data 
import amenities_data from "./db-data/housey-hotel-booking.amenities.json";
import booking_data from "./db-data/housey-hotel-booking.bookings.json";
import destinations_data from "./db-data/housey-hotel-booking.destinations.json";
import hotel_data from "./db-data/housey-hotel-booking.hotels.json";
import rating_data from "./db-data/housey-hotel-booking.ratings.json";
import review_data from "./db-data/housey-hotel-booking.reviews.json";
import user_data from "./db-data/housey-hotel-booking.users.json";

dbConnect();

const importData = async () => {
  try {

    // insert hotel data
    await Hotel.deleteMany();
    await Hotel.insertMany(hotel_data);

    // insert booking data
    await bookingModel.deleteMany();
    await bookingModel.insertMany(booking_data);

    // insert amenities data
    await Amenities.deleteMany();
    await Amenities.insertMany(amenities_data);

    // insert destinations data
    await Destination.deleteMany();
    await Destination.insertMany(destinations_data);

    // insert rating data
    await Rating.deleteMany();
    await Rating.insertMany(rating_data);

    // insert review data
    await Review.deleteMany();
    await Review.insertMany(review_data);

    // insert user data 
    await User.deleteMany();
    await User.insertMany(user_data);

    console.log('data inserted successfully!');
    process.exit();
  } catch (error) {
    console.log('error', error);
    process.exit(1);
  }
};

importData();
