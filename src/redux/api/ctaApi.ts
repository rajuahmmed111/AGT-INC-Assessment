import { baseApi } from "./baseApi";

const ctaApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get single cta
    getCta: build.query({
      query: () => ({
        url: `ctas`,
        method: "GET",
      }),
      providesTags: ["Cta"],
    }),
  }),
  overrideExisting: true,
});

export const { useGetCtaQuery } = ctaApi;
