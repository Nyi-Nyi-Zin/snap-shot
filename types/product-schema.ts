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
  price: z.number({ "error": "Please enter a number." })
    .positive({
      message: "Please enter a positive number.",
    }),
});