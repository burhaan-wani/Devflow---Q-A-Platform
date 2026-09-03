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
    .min(1, { message: "User name must be alteast 1 character long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(1, { message: "Password must be atleast 1 character long" })
    .max(100, { message: "Password length cannot exceed 100 characters" }),
});

export const askQuestionSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title must atleast 1 character long" })
    .max(50, { message: "Title cannot exceed 50 characters" }),
  content: z
    .string()
    .min(1, { message: "Description must be atleast 1 character long" }),
  tags: z
    .array(
      z
        .string()
        .min(1, { message: "Tag name must be atleast 1 character long" })
        .max(30, { message: "Tag name cannot exceed 50 characters" }),
    )
    .min(1, { message: "A question must have atleast 1 tag" })
    .max(3, { message: "A question can have max 3 tags" }),
});

export const userSchema = z.object({
  name: z.string().min(1).max(100),
  username: z.string().min(1).max(100),
  email: z.string().min(1).max(100),
  image: z.string(),
  bio: z.string().min(1).max(100).optional(),
  location: z.string().optional(),
  portfolio: z.string().optional(),
  reputation: z.number().optional(),
});

export const accountSchema = z.object({
  userId: z.string(),
  name: z.string().min(1).max(100),
  password: z.string().min(1).max(100).optional(),
  image: z.string().optional(),
  provider: z.string(),
  accountProviderId: z.string(),
});
