/* eslint-disable @typescript-eslint/no-explicit-any */
import { ENUM_HOTEL_CATEGORY } from '../../../enums/hotel-category';
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from '../../../utils/data-util';
import { bookingModel } from '../booking/booking.model';
import { IFilters, IHotel } from './hotel.interface';
import Hotel from './hotel.model';
import { HotelUtils } from './hotel.utils';

const createHotel = async (hotelData: IHotel): Promise<IHotel> => {
  // Classify the hotel
  const category = HotelUtils.classifyHotel(hotelData);
  // Add the classification to the hotel data
  const result = await Hotel.create({ ...hotelData, category });
  return result;
};

// get all hotels
const getAllModernHotels = async (): Promise<IHotel[]> => {
  const result = await Hotel.find()
    .populate({
      path: 'destination',
      select: 'name',
    })
    .select('-amenities -__v -createdAt -updatedAt')
    .limit(6)
    .lean();
  return replaceMongoIdInArray(result);
};

// get city hotels
const getAllCityHotels = async (): Promise<IHotel[]> => {
  const result = await Hotel.find()
    .populate({
      path: 'destination',
      select: 'name',
    })
    .select('-amenities -__v -createdAt -updatedAt')
    .skip(6)
    .limit(6)
    .lean();
  return replaceMongoIdInArray(result);
};

const getOfferLuxuryHotel = async (): Promise<IHotel | null> => {
  const result = await Hotel.findOne({ category: ENUM_HOTEL_CATEGORY.LUXURY })
    .sort({ lowRate: 1 })
    .select('-amenities -__v -createdAt -updatedAt')
    .lean();
  return replaceMongoIdInObject(result);
};

// Service to get one hotel from each category, sorted by low price
const getHotelPackage = async () => {
  // Find one "Classic" hotel with the lowest price
  const classicHotel = await Hotel.findOne({
    category: ENUM_HOTEL_CATEGORY.CLASSIC,
  })
    .sort({ lowRate: 1 }) // Sort by lowRate in ascending order;
    .select('-amenities -__v -createdAt -updatedAt')
    .populate({
      path: 'amenities',
      select: 'name',
    }).lean();

  // Find one "Modern" hotel with the lowest price
  const modernHotel = await Hotel.findOne({
    category: ENUM_HOTEL_CATEGORY.MODERN,
  })
    .sort({ lowRate: 1 })
    .select('-amenities -__v -createdAt -updatedAt')
    .populate({
      path: 'amenities',
      select: 'name',
    }).lean();

  // Find one "Luxury" hotel with the lowest price
  const luxuryHotel = await Hotel.findOne({
    category: ENUM_HOTEL_CATEGORY.LUXURY,
  })
    .sort({ lowRate: 1 })
    .select('-__v -createdAt -updatedAt')
    .populate({
      path: 'amenities',
      select: 'name',
    }).lean();

  // Return an array of the hotels found, filtering out any null results
  const result = [classicHotel, modernHotel, luxuryHotel].filter(
    Boolean
  );
  return replaceMongoIdInArray(result);
};

const getAllHotelRooms = async (filters: IFilters) => {
  const { destinationId, checkin, checkout, adults, children,searchTerm } = filters;
  const query: any = {};
  if (destinationId) {
    query.destination = destinationId;
  }


  // Filter by adults if provided
  if (adults) {
    query.adults = { $gte: Number(adults) };
  }

  // Filter by children if provided
  if (children) {
    query.children = { $gte: Number(children) };
  }

  if(searchTerm && searchTerm !== 'undefined'){
    query.name = {$regex: searchTerm, $options: 'i'}
  }


  const hotels = await Hotel.find(query).select(
    '-amenities -__v -createdAt -updatedAt'
  ).lean();

  let allHotels = hotels;

   // Check booking status if checkin and checkout dates are provided
   if (checkin && checkout) {
    allHotels = await Promise.all(
      allHotels.map(async (hotel) => {
        const found = await findBooking(hotel?._id, checkin, checkout);
        // Explicitly add the isBooked property
        return {
          ...hotel,
          isBooked: !!found,
        };
      })
    );
  }

  return replaceMongoIdInArray(allHotels);
};

async function findBooking(hotelId: any, checkin: Date, checkout: Date) {
  const matches = await bookingModel
    .find({ hotelId: hotelId.toString() })
    .lean();

  const found = matches.find(match => {
    return (
      HotelUtils.isDateInBetween(checkin, match.checkin, match.checkout) ||
      HotelUtils.isDateInBetween(checkout, match.checkin, match.checkout)
    );
  });

  return found;
}

const getHotelById = async (id: string) => {
  const result = await Hotel.findById(id)
    .populate('amenities')
    .select('-__v -createdAt -updatedAt')
    .lean();

  const hotelWithReplacedIds = replaceMongoIdInObject(result);

  if (hotelWithReplacedIds?.amenities) {
    hotelWithReplacedIds.amenities = hotelWithReplacedIds.amenities.map(
      (amenity: any) => {
        // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
        const { _id = null, ...updatedAmenity } = {
          ...amenity,
          id: amenity?._id?.toString() || '',
        };
        return updatedAmenity;
      }
    );
  }

  return hotelWithReplacedIds;
};

export const HotelService = {
  createHotel,
  getAllModernHotels,
  getOfferLuxuryHotel,
  getHotelPackage,
  getAllCityHotels,
  getAllHotelRooms,
  getHotelById,
};
