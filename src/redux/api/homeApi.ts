import { baseApi } from "./baseApi";

const homeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all home infos
    getHomes: build.query({
      query: () => ({
        url: "homes",
        method: "GET",
      }),
      providesTags: ["Homes"],
    }),
  }),
});

export const { useGetHomesQuery } = homeApi;
