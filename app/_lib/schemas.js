// src/schemas/bookingSchema.ts
import { z } from "zod";

export const bookingSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
  numNights: z.number().min(1, "Minimal harus 1 malam"), // Harus angka minimal 1
  cabinPrice: z.number().min(0, "Harga kabin tidak boleh negatif"), // Harus angka minimal 0
  cabinId: z.number(),
  guestId: z.number(), // guestId harus berupa UUID
  numGuests: z.number().min(1, "Minimal 1 tamu").max(10, "Maksimal 10 tamu"),
  observations: z.string().optional(), // Bisa kosong atau string
  extrasPrice: z.number().min(0), // Minimal 0
  totalPrice: z.number().min(0), // Minimal 0
  isPaid: z.boolean(), // Boolean
  hasBreakfast: z.boolean(), // Boolean
  status: z.enum(["unconfirmed", "checked-out", "chacked-in"]), // Status yang valid
});
