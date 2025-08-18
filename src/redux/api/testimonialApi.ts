import { baseApi } from "./baseApi";


interface ITitleDesc {
  title: string;
  description: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: ITitleDesc;
}

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get title and description
    getTitleAndDescription: build.query<ApiResponse, void>({
      query: () => ({
        url: `testimonials/title`,
        method: "GET",
      }),
      providesTags: ["Testimonials"],
    }),

    // get all testimonials
    getTestimonials: build.query({
      query: () => ({
        url: `testimonials`,
        method: "GET",
      }),
      providesTags: ["Testimonials"],
    }),
  }),
});

export const { useGetTitleAndDescriptionQuery, useGetTestimonialsQuery } =
  testimonialApi;
