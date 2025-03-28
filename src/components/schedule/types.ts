
import { z } from "zod";

// Form schema validation
export const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
  phone: z.string().optional(),
  date: z.date({
    required_error: "Please select a date",
  }),
  time: z.string({
    required_error: "Please select a time",
  }),
  timezone: z.string({
    required_error: "Please select a timezone",
  }),
  message: z.string().optional(),
});

export type ScheduleFormValues = z.infer<typeof formSchema>;
