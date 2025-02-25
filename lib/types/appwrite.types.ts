import { Models } from "node-appwrite";

export interface Testimonial extends Models.Document {
  description: string;
  name: string;
  occupation: string;
  companyName: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  quote: string;
  title: string;
}
