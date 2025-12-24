import { IAmenities } from './amenities.interface';
import Amenities from './amenities.model';

// Create a new amenity
const createAmenitiesService = async (amenities: IAmenities): Promise<IAmenities> => {
  const result = Amenities.create(amenities);
  return result;
}

// get all amenities
const getAllAmenitiesService = async () => {
  const result = Amenities.find().lean();
  return result;
}

export const AmenitiesService = {
  createAmenitiesService,
  getAllAmenitiesService,
};
