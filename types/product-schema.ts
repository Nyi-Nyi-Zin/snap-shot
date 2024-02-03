import { desc } from "drizzle-orm";
import * as z from "zod";

export const ProductSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(4, {
    message: "Please enter at least 4 characters.",
  }),
  description: z.string().min(40, {
    message: "Please enter at least 40 characters.",
  }),
  price: z
    .string() // Expect string input from form
    .min(1, { message: "Price is required." })
    .regex(/^\d+(\.\d{1,2})?$/, { message: "Please enter a valid number." })
    .transform((val) => parseFloat(val)) // Convert to number
    .refine((val) => val > 0, { message: "Please enter a positive number." }),
});

