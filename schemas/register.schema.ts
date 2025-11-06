import z from "zod";

export const resgisterSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required",
  }),
  email: z.email({
    message: "Email is required",
  }),
  company: z.string().min(1, {
    message: "Company name is required",
  }),
  jobTitle: z.string().min(1, {
    message: "Job title is required",
  }),
  phoneNumber: z.string().min(1, {
    message: "Phone number is required",
  }),
});

export type ResgisterFormValues = z.infer<typeof resgisterSchema>;
