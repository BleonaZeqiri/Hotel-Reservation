import mongoose, { Schema } from "mongoose";
import { IAmenities } from "./amenities.interface";


const AmenitiesSchema = new Schema<IAmenities>({
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    instructions: {
      type: String,
      required: true,
      trim: true,
    },
    hours: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: false,
    },
  });

  const Amenities = mongoose.models.Amenities ?? mongoose.model('Amenities', AmenitiesSchema);

  export default Amenities