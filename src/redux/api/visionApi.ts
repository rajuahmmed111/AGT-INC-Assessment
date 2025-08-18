import { baseApi } from "./baseApi";

const visionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all visions
    getVisions: build.query({
      query: () => ({
        url: "visions",
        method: "GET",
      }),
      providesTags: ["Visions"],
    }),
  }),
});

export const { useGetVisionsQuery } = visionApi;
