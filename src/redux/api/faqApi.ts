// import { FaqData } from "@/components/faq-manager";
import { baseApi } from "./baseApi";

interface Faq {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// baseFaqApi.ts or faqApi.ts
const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all faqs
    getFaqs: build.query<{ data: Faq[] }, void>({
      query: () => ({
        url: `faqs`,
        method: "GET",
      }),
      providesTags: ["Faqs"],
    }),
  }),
});

export const { useGetFaqsQuery } = faqApi;
