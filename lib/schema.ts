import z from "zod/v3";

export const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(1, { message: "Password must be atleast 1 character long" })
    .max(100, { message: "Password length cannot exceed 100 characters" }),
});

export const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name must be alteast 1 character long" }),
  username: z
    .string()
    .min(1, { message: "Name must be alteast 1 character long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(1, { message: "Password must be atleast 1 character long" })
    .max(100, { message: "Password length cannot exceed 100 characters" }),
});
