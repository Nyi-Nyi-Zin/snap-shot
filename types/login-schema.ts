import * as z from "zod";

export const loginSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
  code: z.string().optional(),
});
