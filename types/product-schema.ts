// ...existing code...
import * as z from "zod";

export const ProductSchema = z.object({
  id: z.number().optional(), // <-- add this
  title: z.string().min(1),
  description: z.string().optional(),
  price: z.number().min(0),
});
// ...existing code...
