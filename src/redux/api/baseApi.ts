/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
// https://matthew-backend.vercel.app/api/v1/
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://matthew-backend.onrender.com/api/v1",
    // baseUrl: "http://localhost:5000/api/v1/",
    // credentials: "include",
    prepareHeaders: (headers: any) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", token);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [
    "Users",
    "QuoteFormLeft",
    "Faqs",
    "Homes",
    "Fras",
    "Processes",
    "Missions",
    "Visions",
    "Testimonials",
    "Contact",
    "ClientPortal",
  ],
});
