import { replaceMongoIdInObject } from '../../../utils/data-util';
import { IHotel } from '../hotel/hotel.interface';
import { IDestination } from './destination.interface';
import Destination from './destination.model';

// add hotel
const createDestination = async (destinationData: IDestination): Promise<IDestination> => {
  const result = await Destination.create(destinationData);
  return replaceMongoIdInObject(result.toObject());
};

// get all hotels
const getAllDestination = async (): Promise<IDestination[]> => {
  const result = await Destination.aggregate([
    {
      $lookup: {
        from: 'hotels',
        localField: '_id',
        foreignField: 'destination',
        as: 'hotels',
      },
    },
    {
      $project: {
        hotels: { name: 1, propertyCategory: 1 },
        name: 1,
        description: 1,
        image: 1,
      },
    },
  ]);

  const destinationsWithAvgRating = result.map(destination => {
    const { _id, hotels, ...rest } = destination;

    // Calculate the average propertyCategory
    const totalCategory = hotels.reduce(
      (sum: number, hotel: IHotel) => sum + (hotel.propertyCategory || 0),
      0
    );
    const avgPropertyCategory =
      hotels.length > 0 ? totalCategory / hotels.length : null;

    return {
      id: _id.toString(),
      ...rest,
      avgPropertyCategory,
    };
  });

  return destinationsWithAvgRating;
};

// get single destination
const getDestinationById = async (id: string): Promise<IDestination> => {
  const result = await Destination.findById(id).lean();
  return replaceMongoIdInObject(result);
}



export const DestinationService = {
  createDestination,
  getAllDestination,
  getDestinationById
};
