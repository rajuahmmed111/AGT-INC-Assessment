import { baseApi } from "./baseApi";

const processApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all processes
    getProcesses: build.query({
      query: () => ({
        url: "our-process",
        method: "GET",
      }),
      providesTags: ["Processes"],
    }),
  }),
});

export const {useGetProcessesQuery } = processApi;
