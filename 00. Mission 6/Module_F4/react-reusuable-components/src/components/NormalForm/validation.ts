import { z } from "zod";

export const ZodSignUPSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(8, "This password is too short"),
});

export type TNormalForm = z.infer<typeof ZodSignUPSchema>;
