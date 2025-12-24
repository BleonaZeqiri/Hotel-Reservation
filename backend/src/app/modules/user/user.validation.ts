import { z } from "zod";

const createUserZodSchema = z.object({
    body: z.object({
        email: z.string({
            required_error: 'Email is required',
        }),
        username: z.string({
            required_error: 'Username is required',
        }),
        password: z.string({
            required_error: 'Password is required',
        }),
        role: z.enum(['admin', 'user'], {
            required_error: 'Role is required',
        }).default('user'),
        image: z.string().optional(),
        emailVerified: z.boolean().optional().default(false),
    }),
});


const loginUserZodSchema = z.object({
    body: z.object({
        email: z.string({
            required_error: 'Email is required',
        }),
        password: z.string({
            required_error: 'Password is required',
        }),
    }),
});

export const UserValidation = { 
    createUserZodSchema,
    loginUserZodSchema,
}