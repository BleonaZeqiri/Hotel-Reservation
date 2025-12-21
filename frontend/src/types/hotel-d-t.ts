import { IAmenities } from "./amenities-d-t";

export type IHotelRoom = {
  id: string;
  name: string;
  address: string;
  city: string;
  category: string;
  countryCode: string;
  highRate: number;
  lowRate: number;
  location: {
    latitude: number;
    longitude: number;
  };
  destination: {
    _id: string;
    name: string;
  };
  propertyCategory: number;
  shortDescription: string;
  thumbNailUrl: string;
  gallery: string[];
  overview: string;
  amenities: IAmenities[];
  sqFt: number;
  beds: number;
  bathrooms: number;
  adults: number;
  children: number;
};
