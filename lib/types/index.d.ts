

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare interface CreateTestimonialParams {
  description: string;
  name: string;
  occupation: string;
  companyName: string;
  imageUrl: string;
}

declare interface Testimonial extends CreateTestimonialParams {
  $id: string;
  createdAt: Date;
  updatedAt: Date;
}

declare type UpdateTestimonialParams = {
  testimonialId: string;
  testimonial: Testimonial;
  type: string;
};

