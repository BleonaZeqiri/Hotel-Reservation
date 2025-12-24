import { ENUM_HOTEL_CATEGORY } from '../../../enums/hotel-category';
import { IHotel } from './hotel.interface';

function classifyHotel(hotel: IHotel): ENUM_HOTEL_CATEGORY {
  const { highRate, propertyCategory } = hotel;

  const luxuryPriceThreshold = 1500;
  const modernPriceThreshold = 700;

  if (highRate >= luxuryPriceThreshold && propertyCategory >= 5) {
    return ENUM_HOTEL_CATEGORY.LUXURY;
  }

  if (highRate >= modernPriceThreshold && highRate < luxuryPriceThreshold) {
    return ENUM_HOTEL_CATEGORY.MODERN;
  }

  return ENUM_HOTEL_CATEGORY.CLASSIC;
}

const isDateInBetween = (date: Date, from: Date, to: Date) => {
  return (
    new Date(date).getTime() >= new Date(from).getTime() &&
    new Date(date).getTime() <= new Date(to).getTime()
  );
};

export const HotelUtils = {
  classifyHotel,
  isDateInBetween,
};
