// actions/testimonial.action.ts
import { databases } from "../appwrite.config";

// Define el tipo de los parámetros, si tienes uno
type GetTestimonialsParams = {
  // Puedes definir los parámetros si los necesitas
};

export const getTestimonials = async () => {
  try {
    const response = await databases.listDocuments(
      process.env.DATABASE_ID!,
      process.env.TESTIMONIAL_COLLECTION_ID!
    );
    console.log("Testimonios obtenidos:", response);
    return response.documents; // Asegúrate de que esto coincide con la estructura de tu respuesta
  } catch (error) {
    console.error("Error al obtener testimonios:", error);
    throw error;
  }
};

export const createTestimonial = async (testimonial: CreateTestimonialParams) => {
  try {
    const response = await databases.createDocument(
      process.env.DATABASE_ID!,
      process.env.TESTIMONIAL_COLLECTION_ID!,
      "unique()",
      {
        ...testimonial,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    );
    console.log("Testimonio agregado:", response);
    return response;
  } catch (error) {
    console.error("Error al agregar testimonio:", error);
    throw error;
  }
};

