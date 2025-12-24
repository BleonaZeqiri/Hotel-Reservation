import mongoose, { Schema } from "mongoose";
import { ENUM_HOTEL_CATEGORY } from "../../../enums/hotel-category";
import { IHotel } from "./hotel.interface";


const HotelSchema = new mongoose.Schema<IHotel>({
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ENUM_HOTEL_CATEGORY,
      default: ENUM_HOTEL_CATEGORY.CLASSIC,
    },
    address: { type: String, required: true },
    city: { type: String, required: true },
    countryCode: { type: String, required: true },
    highRate: { type: Number, required: true },
    lowRate: { type: Number, required: true },
    location: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
    destination: {
      type: Schema.Types.ObjectId,
      ref: 'Destination',
      required: true
    },
    propertyCategory: { type: Number, required: true,max: 5, min: 1 },
    shortDescription: { type: String, required: true },
    thumbNailUrl: { type: String, required: true },
    gallery: [{ type: String, required: true }],
    overview: { type: String, required: true },
    amenities: [{ type: Schema.Types.ObjectId, ref: 'Amenities', required: true }],
    sqFt: { type: Number, required: true },
    beds: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    adults: { type: Number, required: true },
    children: { type: Number, required: true },
});


const Hotel = mongoose.models.Hotel ?? mongoose.model('Hotel', HotelSchema);

export default Hotel;