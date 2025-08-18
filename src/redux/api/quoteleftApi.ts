import { baseApi } from "./baseApi";

const quoteLeftApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQuoteLeft: build.query({
      query: () => ({
        url: "quote-form-left",
        method: "GET",
      }),
      providesTags: ["QuoteFormLeft"],
    }),
  }),
  // overrideExisting: false,
});

export const { useGetQuoteLeftQuery } = quoteLeftApi;
