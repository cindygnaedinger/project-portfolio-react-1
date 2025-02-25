import { z } from "zod";

// Define el esquema de validación con Zod
export const TestimonialValidation = z.object({
  description: z.string().min(1, " Campo obligatorio"),
  name: z.string().min(1, " Campo obligatorio"),
  occupation: z.string().min(1, " Campo obligatorio"),
  companyName: z.string().min(1, " Campo obligatorio"),
  imageUrl: z.array(z.instanceof(File)).min(1, " Campo obligatorio"),
});

// Define el tipo inferido del esquema de validación
export type TestimonialFormValidationType = z.infer<
  typeof TestimonialValidation
>;
