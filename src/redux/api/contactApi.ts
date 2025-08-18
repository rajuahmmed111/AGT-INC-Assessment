// import { FaqData } from "@/components/faq-manager";
import { baseApi } from "./baseApi";

// baseFaqApi.ts or faqApi.ts
const contactApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getContact: build.query<{ data: unknown[] }, void>({
      query: () => ({
        url: `contact`,
        method: "GET",
      }),
      providesTags: ["Contact"],
    }),
  }),
});

export const { useGetContactQuery } = contactApi;
