import { z } from "zod";

export const contactSchema = z.object({
  from_name: z.string().min(2, "Name is required"),
  email_id: z.string().email("Invalid email"),
  subject_id: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message too short"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
