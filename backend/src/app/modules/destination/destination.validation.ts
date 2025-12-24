import { z } from 'zod';

const destinationZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const DestinationValidation = {
  destinationZodSchema,
};
