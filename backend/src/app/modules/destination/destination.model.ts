import mongoose, { Schema } from 'mongoose';
import { IDestination } from './destination.interface';

const destinationSchema = new Schema<IDestination>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    hotels: [{ type: Schema.Types.ObjectId, ref: 'Hotel' }],
  },
  { timestamps: true }
);

const Destination =
  mongoose.models.Destination ??
  mongoose.model('Destination', destinationSchema);

export default Destination;
