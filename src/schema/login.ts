import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  password: z.string().min(6, { message: "Minimum 6 characters" }),
});

export type LoginForm = z.infer<typeof loginSchema>;
