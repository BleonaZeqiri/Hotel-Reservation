import { Types } from "mongoose";
import { ENUM_HOTEL_CATEGORY } from "../../../enums/hotel-category";


export type IHotel = {
    name: string;
    address: string;
    category: ENUM_HOTEL_CATEGORY;
    city: string;
    countryCode: string;
    highRate: number
    lowRate: number;
    location: {
      latitude: number;
      longitude: number;
    };
    propertyCategory: number;
    shortDescription: string;
    thumbNailUrl: string;
    gallery: string[];
    overview: string;
    amenities: Types.ObjectId[];
    destination:Types.ObjectId;
    sqFt: number;
    beds: number;
    bathrooms: number;
    adults: number;
    children: number;
};


export type IFilters = {
  destinationId?: string;
  checkin?: Date;
  checkout?: Date;
  adults?: number;
  children?: number;
  searchTerm?: string;
}