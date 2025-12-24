import { z } from 'zod';

const amenitiesZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    instructions: z.string({
      required_error: 'Instructions is required',
    }),
    hours: z.string({
      required_error: 'Hours is required',
    }),
    image: z.string().optional(),
  }),
});


export const AmenitiesValidation = {
  amenitiesZodSchema,
}