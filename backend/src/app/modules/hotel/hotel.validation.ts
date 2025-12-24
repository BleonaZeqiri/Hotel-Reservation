import { z } from 'zod';

const hotelZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    address: z.string({
      required_error: 'Address is required',
    }),
    city: z.string({
      required_error: 'City is required',
    }),
    countryCode: z.string({
      required_error: 'Country code is required',
    }),
    highRate: z.number({
      required_error: 'High rate is required',
    }),
    lowRate: z.number({
      required_error: 'Low rate is required',
    }),
    location: z.object({
      latitude: z.number(),
      longitude: z.number(),
    }),
    propertyCategory: z.number({
      required_error: 'Property category is required',
    }),
    shortDescription: z.string({
      required_error: 'Short description is required',
    }),
    thumbNailUrl: z.string({
      required_error: 'Thumbnail URL is required',
    }),
    gallery: z.array(z.string(), {
      required_error: 'Gallery is required and must contain strings',
    }),
    overview: z.string({
      required_error: 'Overview is required',
    }),
    amenities: z.array(z.string(), {
      required_error: 'Amenities are required and must be valid ObjectIds',
    }),
    destination: z.string({
      required_error: 'Destination is required',
    }),
    sqFt: z.number({
      required_error: 'Square footage is required',
    }),
    beds: z.number({
      required_error: 'Number of beds is required',
    }),
    bathrooms: z.number({
      required_error: 'Number of bathrooms is required',
    }),
    adults: z.number({
      required_error: 'Number of adults is required',
    }),
    children: z.number({
      required_error: 'Number of children is required',
    }),
  }),
});

export const HotelValidation = {
  hotelZodSchema,
};
