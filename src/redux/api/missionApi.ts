import { baseApi } from "./baseApi";

const missionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all missions
    getMissions: build.query({
      query: () => ({
        url: "missions",
        method: "GET",
      }),
      providesTags: ["Missions"],
    }),
  }),
});

export const { useGetMissionsQuery } = missionApi;
