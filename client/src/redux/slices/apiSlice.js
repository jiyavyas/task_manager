import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:8800/api";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8800/api",
  credentials: "include", // ✅ required
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
