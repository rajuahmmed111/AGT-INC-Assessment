import { baseApi } from "./baseApi";

const fraApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all fras
    getFras: build.query({
      query: () => ({
        url: "fras",
        method: "GET",
      }),
      providesTags: ["Fras"],
    }),
  }),
});

export const { useGetFrasQuery } = fraApi;
